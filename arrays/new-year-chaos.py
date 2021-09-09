#!/bin/python3

import math
import os
import random
import re
import sys

#
# Complete the 'minimumBribes' function below.
#
# The function accepts INTEGER_ARRAY q as parameter.
#

def minimumBribes(q):
    # Write your code here
    m = 0 

    q = [P-1 for P in q]
    
    for count,value in enumerate(q):
        if value - count > 2:
            print("Too chaotic")
            return

        for j in range(max(value-1,0),count):
            if q[j] > value:
                m += 1
    print(m)
        
            

if __name__ == '__main__':
    t = int(input().strip())

    for t_itr in range(t):
        n = int(input().strip())

        q = list(map(int, input().rstrip().split()))

        minimumBribes(q)
