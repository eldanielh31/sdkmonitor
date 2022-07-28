import os
from pexpect import pxssh

switch_ip = '192.168.18.192'

# reachable = True if os.system(f'ping -c 1 {switch_ip}') == 0 else False

s = pxssh.pxssh(options={
    "StrictHostKeyChecking": "no",
    "UserKnownHostsFile": "/dev/null"})
s.PROMPT = '6300.*($|#)'
try:
    s.login(switch_ip, "admin", "", auto_prompt_reset=False)

    # Send a simple command
    s.sendline("show version")
    s.prompt()
    print(s.before)

except:
    print("Error")