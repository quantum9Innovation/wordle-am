import sys
import math
import random
import datetime

args = sys.argv[1:]
salt, m, d, y = args

if len(list(salt)) != 256: sys.exit(1)
update = datetime.datetime(int(y), int(m), int(d))

with open('./App/Data/salt.txt', 'w') as f: f.write(salt)


# does not exist
# ===

# with open('./App/Data/update.txt', 'w') as f: 
#     f.write(update.strftime('%-m/%-d/%Y'))
