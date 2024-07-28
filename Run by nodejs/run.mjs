import {
    vigenereCipher,
    alphabet
} from "../Vigenere cipher/vigenere_cipher.mjs";

const input = 'Default input';
const key = 'Default key';
const encryptOrDecipher = true;

vigenereCipher(input, encryptOrDecipher, key, alphabet);