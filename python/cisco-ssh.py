text = "asd"  # string
number = 1  # int / float
boolean = True / False
numbersArray = ["Ford", "green"]
numbersObject = {"brand": "Ford", "color": "green"}

for element in numbersArray:
    print(element)


from netmiko import ConnectHandler

config_commands = ["int loopback 1", "ip address 2.2.2.2 255.255.255.0", "description WHATEVER"]

sshCli = ConnectHandler(
    device_type="cisco_ios",
    host="10.10.20.48",
    port=22,
    username="developer",
    password="C1sco12345",
)

output = sshCli.send_config_set(config_commands)
print(output)
