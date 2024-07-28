import {
    vigenereCipher,
    alphabet
} from "../Vigenere cipher/vigenere_cipher.mjs";

const input = 'Default input';
const key = 'Default key';
const encryptOrDecipher = true;

const output = vigenereCipher(input, encryptOrDecipher, key, alphabet);
console.log(output);

console.log(alphabet);