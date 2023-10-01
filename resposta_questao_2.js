function showDuplicate(list) {
    const newList = [];
    const duplicateItems = [];

    list.forEach(element => {
        if (newList.includes(element)) {
            duplicateItems.push(element)
        } else {
            newList.push(element);
        }
    });

    return duplicateItems;
}

console.log(showDuplicate([4,5,44,98,4,5,6,7]))