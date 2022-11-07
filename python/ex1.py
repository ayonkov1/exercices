name = int(input('enter something: '))


def grade(input):
    if input >= 6:
        # print('excellent')
        for i in range(5):
            print(input + i)
    elif input < 6:
        print('not excellent')
    return type(input)


def loop(limit):
    for i in range(5):
        if i == limit:
            for j in range(5):
                print(str(i) + ' * ' + str(j) + " = " + str(i*j))


grade(name)
# loop(3)
# print(int(name), type(name))
