function isOrder(int) {
    const typeOrder = {
        ASC: 1,
        DESC: 2
    }

    if (int) {
        const arrayOfInt = int.toString().split("");

        if (arrayOfInt.length === 1) {
            return "Está ordenado";
        }

        let order;
        let response;
        for (let index = 1; index < arrayOfInt.length; index++) {
            if (index === 1) {
                if (arrayOfInt[index] >= arrayOfInt[index - 1]) {
                    order = typeOrder.ASC;
                } else {
                    order = typeOrder.DESC;
                }
            } else {
                if (order === typeOrder.ASC) {
                    if (arrayOfInt[index - 1] <= arrayOfInt[index]) {
                        response = "Está ordenado";
                    } else {
                        return "Não está ordenado";
                    }
                } else {
                    if (arrayOfInt[index - 1] >= arrayOfInt[index]) {
                        response = "Está ordenado"
                    } else {
                        return "Não está ordenado"
                    }
                }                
            }
        }

        return response;
    }

    return "Insira um parâmetro";
}

console.log(isOrder(12345678))