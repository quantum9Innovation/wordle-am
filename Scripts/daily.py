import math
import random
import datetime

salt = [str(round(random.random())) for _ in range(256)]
salt = ''.join(salt)

update = datetime.date.today() + datetime.timedelta(days=1)
fillers = update.strftime('%Y/%-m/%-d').split('/')
fillers = [int(k) for k in fillers]

update_latest = datetime.datetime(*fillers, hour=21, minute=25, second=0)
deltaTime = update_latest - datetime.datetime.now()
deltaTime = deltaTime.seconds / 60

if deltaTime < 0 or deltaTime > 26:
    print('[ERROR] Update time is out of range.')
    exit(1)

with open('./App/Data/salt.txt', 'w') as f: f.write(salt)


# does not exist
# ===

# with open('./App/Data/update.txt', 'w') as f: 
#     f.write(update.strftime('%-m/%-d/%Y'))
