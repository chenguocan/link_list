const createList = value => {
    return createNode(value)
}
const appendList = (list, value) => {
    const node = createNode(value)
    let x = list;
    while (x.next) {
        x = x.next;
    }
    x.next = node;
    return node;
}
const removeFromList = (list, node) => {
    let x = list;
    let p = null;
    while (x !== node) {
        p = x;
        x = x.next;
    }
    p.next = x.next;
    // console.log(x === node || x === null)
    // if (list === node) {
    //     list = node.next;
    // } else {
    //     if (list.next === node) {
    //         list.next = node.next
    //     } else {
    //         if (list.next.next === node) {
    //             list.next.next = node.next
    //         }
    //     }
    // }
}
const createNode = (value) => {
    return {
        data: value,
        next: null
    }
}
const travelList = (list, fun) => {
    let x = list;
    while (x === null) {
        fun(x);
        x = x.next;
    }
}
const list = createList(10);
console.log(list);
const node2 = appendList(list, 20);
const node3 = appendList(list, 30);
const node4 = appendList(list, 40);
// console.log(node);
removeFromList(list, node3);
travelList(list, node => {
    console.log(node.data);
})