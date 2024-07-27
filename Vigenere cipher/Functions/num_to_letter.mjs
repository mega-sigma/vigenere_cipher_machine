const numToLetter = function (input, alphabet) {
    const output = [];
    output.length = input.length;

    output.forEach((el, indx) => {
        output[indx] = alphabet[input[indx]];
    })

    return output.join('');
}

export default numToLetter;