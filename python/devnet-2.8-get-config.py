from ncclient import manager
import xml.dom.minidom

m = manager.connect(host="10.10.20.48", port=830, username="developer", password="C1sco12345", hostkey_verify=False)

netconf_filter = """
<filter>
    <native xmlns="http://cisco.com/ns/yang/Cisco-IOS-XE-native" />
</filter>
"""

netconf_reply = m.get_config(source="running", filter=netconf_filter)
formatted = xml.dom.minidom.parseString(netconf_reply.xml).toprettyxml()

print(formatted)
