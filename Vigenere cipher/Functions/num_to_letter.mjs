const numToLetter = function (input, alphabet) {
    const output = [];
    for (let v = 0; v < input.length; v++) {
        output.push(-1);
    }

    output.forEach((el, indx) => {
        output[indx] = alphabet[input[indx]];
    })

    return output.join('');
}

export default numToLetter;