const createList = value => {
    return createNode(value)
}
const appendList = (list, value) => {
    const node =
        createNode(value)

    list.next = node;
    return node;
}
const removeFromList = (list, node) => {
    let x = list;
    while (x !== node) {
        x = x.next;
    }
    console.log(x === node || x === null)
    if (list === node) {
        list = node.next;
    } else {
        if (list.next === node) {
            list.next = node.next
        } else {
            if (list.next.next === node) {
                list.next.next = node.next
            }
        }
    }
}
const createNode = (value) => {
    return {
        data: value,
        next: null
    }
}
const list = createList(10);
console.log(list);
const node2 = appendList(list, 20);
const node3 = appendList(list, 30);
console.log(node);