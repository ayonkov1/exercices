# message = input("Message to be encrypted: ")
# offset = input("Encryption offset: ")


def encrypt(msg):
    result = ""
    for i in range(len(msg)):
        char = msg[i]  # strings of A S D
        result += char  # result = A + S + D as string
    return result


print(encrypt("ASD"))
