import platform
import subprocess
from pexpect import pxssh

# Create your models here.
class Login:

    def myping(host):
        parameter = '-n' if platform.system().lower() == 'windows' else '-c'

        command = ['ping', parameter, '1', host]
        response = subprocess.call(command)

        return True if response == 0 else False
    
    def login(switch_ip, username, password):

        try:

            s = pxssh.pxssh(options={
                "StrictHostKeyChecking": "no",
                "UserKnownHostsFile": "/dev/null"})
            s.PROMPT = '6300.*($|#)'

            print(switch_ip, username, password)

            s.login(switch_ip, username, password, auto_prompt_reset=False)
            
            s.sendline("start-shell")
            s.prompt()
            print(s.before)

            s.sendline("sudo ip link add sdkm2 type veth peer name sdkm1")
            s.prompt()
            s.sendline("sudo ip link set sdkm1 netns ntb")
            s.prompt()
            s.sendline("sudo ip -n ntb addr add 10.0.1.0/24 dev sdkm1")
            s.prompt()
            s.sendline("sudo ip -n ntb link set sdkm1 up")
            s.prompt()
            s.sendline("sudo ip addr add 10.0.2.0/24 dev sdkm2")
            s.prompt()
            s.sendline("sudo ip link set sdkm2 up")
            s.prompt()
            s.sendline("sudo ip -n ntb route add 10.0.2.0/24 dev sdkm1")
            s.prompt()
            s.sendline("sudo ip route add 10.0.1.0/24 dev sdkm2")
            s.prompt()
            s.sendline(
                "sudo ovs-appctl -t switchd_agent0 sdk_init/enable_debug_port")
            s.prompt()

                # Copy the python files from the server to the switch
            hostname = "daniel"
            IPAddr = "192.168.18.230"
            hostpassword = '1234'

            #-o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no
            s.sendline(
                f"scp -o StrictHostKeyChecking=no -o UserKnownHostsFile=/dev/null -r {hostname}@{IPAddr}:/home/daniel/Desktop/switchAPI/sdkmonitor .")
            s.prompt()
            #scp -r daniel@192.168.18.230:/home/daniel/Desktop/switchAPI/sdkmonitor .
            print(s.before)

            s.sendline(hostpassword)
            s.prompt()
            print(s.before)

                # At this point, now the application can be started
            s.sendline("cd sdkmonitor")
            s.prompt()

            s.sendline('sudo easy_install-3.7 pip')
            s.prompt()
            print(s.before)

            s.sendline('pip3 install django')
            s.prompt()
            print(s.before)

            s.sendline(
                f'sudo systemd-run --description=sdkmonitor python3 /home/{username}/sdkmonitor/manage.py runserver 0.0.0.0:8000')
            s.prompt()
            print(s.before)

            #systemd-run --description=sdkmonitor python3 /home/admin/sdkmonitor/manage.py runserver 0.0.0.0:8000

            return True

        except Exception as e:
            print(e)
            return False
