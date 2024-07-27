const sumByModule = function (input, key, alphabet, module = alphabet.length) {
    //First translate input to num
    const inputNum = [];

    input.split('').forEach(el => {
        inputNum.push(alphabet.indexOf(el));
    });

    //Then make key arr wich is going to have a length same to input length
    const keyNum = [];

    let v = 0; //Only used in keyNum arr creation
    inputNum.forEach(el => {
        const y = alphabet.indexOf(key[v]);
        
        v++;
        if (v === key.length) {
            v = 0;
        }

        keyNum.push(y);
    })

    //Sum and return
    const output = [];
    output.length = input.length;

    output.forEach((el, indx) => {
        const sum = inputNum[indx] + keyNum[indx];
        if (sum < module) {
            el.push(sum);
        }

        if (sum >= module) {
            el.push(sum - module);
        }
    })

    return output.join('');
}

export default sumByModuLle