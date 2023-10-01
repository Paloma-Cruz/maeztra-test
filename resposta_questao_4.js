function getYearForMoreLabor(listLabor) {
    const counter = {}

    listLabor.forEach((element) => {
        for (let index = element[0]; index <= element[1]; index++) {
            if (counter[index]) {
                counter[index].push(element)
            } else {
                counter[index] = [element]
            }   
        }
    });

    const years = Object.keys(counter);
    let max = 0;
    let result = [];

    years.forEach((year) => {
        if (counter[year].length > max) {
            max = counter[year].length
            result = [year]
        } else if (counter[year].length === max) {
            result.push(year);
        }
    });

    return result
}

console.log(getYearForMoreLabor([[2000,2005],[2002,2005],[2005,2010]]))