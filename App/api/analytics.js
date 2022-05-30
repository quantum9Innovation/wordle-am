// ----- /api/analytics.js -----

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


// Log data
const log = async obj => {

    let create = client.query(
        q.Create(q.Collection('analytics'), { data: obj })
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
    let method = req.method
    let body = JSON.parse(req.body)

    if (method != 'POST') res.status(405).send('Method not allowed: ' + method)

    try {

        // Get request headers
        const referer = req.headers['referer']
        const ip = req.headers['x-forwarded-for']
        const ua = req.headers['user-agent']
        const ul = req.headers['accept-language']
        const dnt = req.headers['dnt']
        const meta = { ip, ua, ul, referer }

        // Respect 'Do Not Track'
        if (dnt == '1') return res.status(200).send('DNT respected')

        // Region info
        const country = req.headers['x-vercel-ip-country']
        const region = req.headers['x-vercel-ip-country-region']
        const city = req.headers['x-vercel-ip-city']
        const loc = { city, region, country }

        // Compile database entry
        info = { body, meta, loc }

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
