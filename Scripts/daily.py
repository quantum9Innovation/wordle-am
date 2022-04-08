import math
import random
import datetime

salt = [str(round(random.random())) for _ in range(256)]
salt = ''.join(salt)

update = datetime.date.today() + datetime.timedelta(days=1)

with open('./App/Data/salt.txt', 'w') as f: f.write(salt)
with open('./App/Data/update.txt', 'w') as f: 
    f.write(update.strftime('%-m/%-d/%Y'))
