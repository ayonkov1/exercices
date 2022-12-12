def encrypt(str, shift):
    cipher = ''
    for char in str:
        if char == ' ':
            cipher = cipher + char
        elif char.isupper():
            cipher = cipher + chr((ord(char) + shift - 65) % 26 + 65)
        else:
            cipher = cipher + chr((ord(char) + shift - 97) % 26 + 97)
    return cipher


languages = [
    "arabic", "dutch", "chinese", "persian", "english", "french", "italian",
    "spanish", "latin", "urdu"
]


def writeLanguagesToFile():
    fw = open("clearText.txt", "w")
    for language in languages:
        fw.write(language + '\n')
    fw.close()


def encodeFile():
    fr = open("clearText.txt", "r").readlines()
    fw = open("encryptText.txt", "a")
    fw.truncate(0)
    for line in fr:
        fw.write(encrypt(line, 2) + "\n")
    fw.close()


alphabet = [
    'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o',
    'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'
]


def countCharacters():
    fw = open("encryptText.txt", "r").read()
    for letter in alphabet:
        print("Letter " + letter.upper() + " appears " +
              str(fw.count(letter)) + " times in the cypher")


countCharacters(), writeLanguagesToFile(), encodeFile()
