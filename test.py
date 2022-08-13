from pexpect import pxssh


class SecureShell:
    def __init__(self):
        self.shell = pxssh.pxssh(options={
            "StrictHostKeyChecking": "no",
            "UserKnownHostsFile": "/dev/null"})
        self.shell.PROMPT = '6300.*($|#)'
    
    def login(self, hostname, username, password):
        try:
            self.shell.login(hostname, username, password,
                             auto_prompt_reset=False)
            self.hostname = hostname
            self.username = username
            self.password = password
            return True
        except:
            return False
    
    def sendline(self, line):
        self.shell.login(self.hostname, self.username,
                         self.password, auto_prompt_reset=False)
        self.shell.sendline(line)
        self.shell.prompt()
        print(self.shell.before)
    
    def wait(self):
        self.shell.wait()

shell = SecureShell()
print(shell.login("192.168.18.192", 'admin', ''))
shell.sendline('show version')
