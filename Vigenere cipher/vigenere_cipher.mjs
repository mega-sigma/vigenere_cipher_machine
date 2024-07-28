import {
    currentTxtAlphabet as strAlphabet, 
    exportJsAlphabet as alphabet
} from '../universal_alphabet/txt_to_js_transformation.mjs';

import sumByModule from './Functions/sum_by_module.mjs';
import numToLetter from './Functions/num_to_letter.mjs';

const vigenereCipher = function (input, encryptOrDecrypt, key, alphabet) {
    //Make arr with sum by module alphabet.length
    const sumedByModuleArr = sumByModule(input, key, encryptOrDecrypt, alphabet);

    //Translate arr to letter code
    const numToLetterArr = numToLetter(sumedByModuleArr, alphabet);

    return numToLetterArr;
}

const output = vigenereCipher('Hello World', true, 'key', alphabet);
console.log(output);