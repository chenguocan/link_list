const createList = value => {
    return {
        data: value,
        next: null
    }
}
const appendList = (list, value) => {
    const node = {
        data: value,
        next: null
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