const createList = value => {
    return {
        data: value,
        next: null
    }
}
const list = createList(10);
console.log(list);