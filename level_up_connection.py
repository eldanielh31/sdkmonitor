# Verify that the host is reachable
import os
switch_ip = "10.100.21.190"
current_pc_ip = "10.0.12.171"
#boolean if connect to ip
reachable = True if os.system(f'ping -c 1 {switch_ip}') == 0 else False

# Create a SSH bash connection to the host
from pexpect import pxssh
s = pxssh.pxssh(options={
                    "StrictHostKeyChecking": "no",
                    "UserKnownHostsFile": "/dev/null"})
s.PROMPT = '6300.*($|#)'
s.login(switch_ip, "admin", "admin", auto_prompt_reset=False)

# Send a simple command
s.sendline("show version")
s.prompt()
print(s.before)

# Go to bash.
s.sendline("start-shell")
s.prompt()
print(s.before)
s.sendline("sudo su")
s.prompt()
print(s.before)

# Copy the python files from the server to the switch
s.sendline(f"scp rojmarco@{current_pc_ip}:/ws/rojmarco/sdk_monitor_switch_server.bin .")

# At this point, now the application can be started
s.sendline("sdk_monitor_switch_server.bin --port 1999")
s.prompt()
print(s.before)

# Notice that the above command is failing, because the
# binary doesn't exist
"""
Commands to create a new interface to talk to the SDK
library

# Create a pair of veth interfaces
ip link add sdkm2 type veth peer name sdkm1

# Add sdkm1 to ntb and assign ip address
ip link set sdkm1 netns ntb
ip -n ntb addr add 10.0.1.0/24 dev sdkm1
ip -n ntb link set sdkm1 up

# Configure sdkm2 interface and assign ip address
ip addr add 10.0.2.0/24 dev sdkm2
ip link set sdkm2 up

# Assign the routing information
ip -n ntb route add 10.0.2.0/24 dev sdkm1
ip route add 10.0.1.0/24 dev sdkm2

# Start the SDK RPC server
ovs-appctl -t switchd_agent0 sdk_init/enable_debug_port

# At this point, the connection can be establish
"""
