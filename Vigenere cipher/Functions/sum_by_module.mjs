const sumByModule = function (input, key, encryptOrDecrypt, alphabet, module = alphabet.length) {
    //First translate input to num
    const inputNum = [];

    input.split('').forEach(el => {
        inputNum.push(alphabet.indexOf(el));
    });

    //Then make key arr wich is going to have a length same to input length
    const keyNum = [];

    let v = 0; //v variable is only used in keyNum arr creation
    inputNum.forEach(el => {
        const y = alphabet.indexOf(key[v]);
        
        v++;
        if (v === key.length) {
            v = 0;
        }

        keyNum.push(y);
    })

    //Sum and return
    //-creating output readable
    const output = [];

    for (let v = 0; v < input.length; v++) {
        output.push(-1);
    }

    output.length = input.length;

    let sum; //for this version I am going to put it let, not const

    output.forEach((el, indx) => {
        if (encryptOrDecrypt) {
            sum = inputNum[indx] + keyNum[indx];
        } else {
            sum = inputNum[indx] - keyNum[indx];
        }

        if (sum < module) {
            if (sum < 0) {
                output[indx] = (sum + module);
            } else {
                output[indx] = (sum);
            }
        }

        if (sum >= module) {
            output[indx] = (sum - module);
        }
    })

    return output;
}

export default sumByModule;