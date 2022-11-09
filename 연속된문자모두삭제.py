def solution(s):
    li = list(s)

    dup = [x for i, x in enumerate(li) if i != li.index(x)]

    remove_set = dup

    li = [i for i in li if i not in remove_set]
    return "".join(li)
