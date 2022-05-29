// ----- /api/analytics.js -----

// Load dependencies
const parse = require('parse-request')

// Load database resources
const faunadb = require('faunadb')
let q = faunadb.query


// Instantiate client
let client = new faunadb.Client({
    secret: process.env.FAUNADB_SECRET,
    domain: 'db.fauna.com',
    port: 443,
    scheme: 'https',
})


// Helper funcs
const toUTC = date => {

    let now = new Date()
    return new Date(
        date.getTime() + now.getTimezoneOffset() * 60 * 1000
    )

}

const toEAT = date => {
    // local -> EAT
    
    let utc = toUTC(date)
    return new Date(
        utc.getTime() + 3 * 60 * 60 * 1000
    )

}


// Log data
const log = async obj => {

    let create = client.query(
        q.Create(q.Collection('analytics'), obj)
    ).catch(e => { 

        console.log(e)
        return false
    
    })
    
    return create

}


// Serverless function
// The main, exported, function of the endpoint,
// dealing with the request and subsequent response
module.exports = async (req, res) => {

    // Parse the request
    console.log(req.headers)
    console.log(Object.keys(req))
    console.log(parse(req))
    let { request } = parse(req)
    let method = request.method
    let data = JSON.parse(request.body)

    if (method != 'POST') res.status(405).send('Method not allowed: ' + method)

    try {

        // Get request headers
        const referer = req.headers['referer']
        const ip = req.headers['x-forwarded-for']
        const ua = req.headers['user-agent']
        const ul = req.headers['accept-language']
        const dnt = req.headers['dnt']

        let now = new Date()
        now = toEAT(now)
        now = now.toDateString()

        info = { ip, ua, ul, dnt, referer, data, dt: now } // as a json5 object

        // Log data
        let output = await log(info)

        // Respond
        if (output === false) res.status(500).send('Database connection error')
        else res.status(200).send('OK')

    } catch (e) {

        console.log(error)
        res.status(500).send('Internal server error')

    }

}
