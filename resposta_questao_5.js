function possibilities(quantityPeople) {
    if (quantityPeople > 0) {
        let response = 1;

        for (let index = 1; index <= quantityPeople; index++) {
            response = response * index
        }

        return response;
    }

    return 0;
}

console.log(possibilities(3))