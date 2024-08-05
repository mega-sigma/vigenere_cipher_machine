const currentTxtAlphabet = `a b c d e f g h i j k l m n o p q r s t u v w x y z 0 1 2 3 4 5 6 7 8 9 ! ? . , _ - [ ] { } ( ) @ # $ % ^ & * ~ / + < > : ; " ' |` + ' `'; //copied from the alphabet.txt
const exportJsAlphabet = currentTxtAlphabet.split(' ');

exportJsAlphabet.push(' '); //and add space simbol

export { exportJsAlphabet, currentTxtAlphabet };
//to use exportJsAlphabet write:
//import {exportJsAlphabet} from ".txt_to_js_transformation"