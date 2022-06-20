

import random
for jk in range(1000):
    a1 = []
    a2 = []
    for  i in range(1000):
        val = random.randint(1,100)
        a1.append(val)
        val = random.randint(1,100)
        a2.append(val)
    a1.sort()
    a2.sort()
    i = 0
    j = 0
    l = []

    while i < len(a1) and j<len(a2):
        if(a1[i] < a2[j]):
            l.append(a1[i])
            i= i + 1
        else:
            l.append(a2[j])
            j = j + 1
    while i < len(a1):
        l.append(a1[i])
        i = i + 1
    while j < len(a2):
        l.append(a2[j])
        j = j + 1
    def issorted(l):
        for i in range(len(l)-1):
            if(l[i]<=l[i+1]):
                pass
            else:
                print("false")
                # quit()
        print("true",end="->")
    issorted(l)
