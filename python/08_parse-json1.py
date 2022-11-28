import requests
import urllib.parse

main_api = "http://www.mapquestapi.com/directions/v2/route?"
orig = input("Enter current location: ")
dest = input("Enter destination location: ")
key = "oxfrVevsHw2iePslAFdMTABdsWjPd0bI"

url = main_api + urllib.parse.urlencode({"key": key, "from": orig, "to": dest})

res = requests.get(url).json()

statuscode = res["info"]["statuscode"]

print(res)
