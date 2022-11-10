def solution(S):

    matching_dict = {'}':'{',')':'(',']':'[','>':'<'}
    stack = []
    for i in S:
        if i in ('{','(','[','<'):
            stack.append(i)
        elif i in('}',')',']','>'):
            if not stack or stack[len(stack) - 1] != matching_dict[i]:
                return 0
            stack.pop()
    if stack:
        return 0
    else: 
        return 1
