from ncclient import manager
import xml.dom.minidom

m = manager.connect(host="10.10.20.48",
                    port=830,
                    username="developer",
                    password="C1sco12345",
                    hostkey_verify=False)

netconf_data = """
<config>
<native xmlns="http://cisco.com/ns/yang/Cisco-IOS-XE-native">
<interface>
<Loopback>
<name>100</name>
<description>TEST1</description>
<ip>
<address>
<primary>
<address>100.100.100.10</address>
<mask>255.255.255.0</mask>
</primary>
</address>
</ip>
</Loopback>
</interface>
</native>
</config>
"""

netconf_reply = m.edit_config(target="running", config=netconf_data)
formatted = xml.dom.minidom.parseString(netconf_reply.xml).toprettyxml()

print(formatted)
