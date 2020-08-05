const createList = value => {
    return {
        createNode(value);
    }
}
const appendList = (list, value) => {
    const node = {
        createNode(value);
    }
    list.next = node;
    return node;
}
const createNode = (value) => {
    return {
        data: value,
        next: null
    }
}
const list = createList(10);
console.log(list);
const node = appendList(list, 20);
console.log(node);