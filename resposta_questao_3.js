function checkSequence(sequence) {
    const listSequence = sequence.split("");
    const stack = []
    
    if (listSequence.length % 2 === 0) {
        listSequence.forEach((element) => {
            if ((element === "{") || (element === "[") || (element === "(")) {
                stack.push(element)
            } else {
                if (stack.length > 0) {
                    if ((element === "}" && stack[stack.length - 1] === "{") || 
                        (element === ")" && stack[stack.length - 1] === "(") ||
                        (element === "]" && stack[stack.length - 1] === "[")) {
                        stack.pop();
                    }
                } else {
                    return "Não é uma sequência válida";
                }
            }
        });

        if (stack.length === 0) {
            return "É uma sequência válida";
        } else {
            return "Não é uma sequência válida";
        }
    } else {
        return "Não é uma sequência válida"
    }
}

console.log(checkSequence("{[()(){}[]]{}}"))
console.log(checkSequence("{}[]()"))