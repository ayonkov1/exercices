# message = input("Message to be encrypted: ")
# offset = input("Encryption offset: ")

# def encrypt(msg, n):
#     print("before", msg)
#     result = []
#     encrypted = ""
#     for i in range(len(msg)):
#         char = ord(msg[i]) - n + 65
#         result.append(char)
#     for e in result:
#         encrypted += chr(e % 26 + 65)
#     return encrypted


def encrypt(msg, n):
    print("before", msg)
    result = []
    encrypted = ""
    words = msg.split()
    for word in words:
        for letter in word:
            char = ord(letter)
            offsetChar = char - n + 65
            result.append(offsetChar)
    for number in result:
        encrypted += chr(number % 26 + 65)
    return encrypted


print("after", encrypt("ABC DEF GHI JKL MNO PQR STU VWX YZ", 3))
