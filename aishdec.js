// Node readline for text input
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
// Library for gcd operation. I found it first than @alejogs4, tbh.
const math = require('mathjs');
// Args to personalize a bit this code.
const yargs = require('yargs').argv;
const letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');
// Lenght of strings that'll be loooked for repetitions.
const stringSize = yargs['group-by'] || 3;      

function getRepeatedSubStrings(str, size = 3) {
    let repeated = [];
    let pointer = 0;
    let cont = 0;
    while (true){
        cont = 0;
        let sub = str.substring(pointer, pointer + size);
        if(!sub || sub.length < size) break;
        if(repeated.includes(sub)) {
            pointer++;
            continue;
        };
        // console.log("looking for ...", sub,"with pointer",pointer);
        for (let i = 0; i < str.length - size; i++){
            if(i == pointer) continue;
            if(str.substring(i, i+size) == sub) {
                // console.log("found...",sub,"at", i);
                i += (size - 1);
                cont++;
                repeated.push(sub);
            };
        }
        if(cont > 0){
            pointer+=size;
        } else {
            pointer++;
        }
    }
    return [...new Set(repeated)];
}

function calculateDistances(str, list){
    let distances = [];
    list.forEach(
        el => {
            let firstPos = str.indexOf(el);
            let lastPos = firstPos;
            for (let i = firstPos; i < str.length; i++){
                if (str.substring(i, i + el.length) == el && i != firstPos){
                    distances.push({el, distance: i - lastPos});
                    lastPos = i;
                }
            }
        }
    );
    return distances;
}

/**
 * Given an @L value, this function will return an @L number of substrings derived from the @text param  
 */
function findCs(text, L){
  let counter = 0;
  let Cs = []
  while (counter < L){
    let aux = "";
    for (let i = counter; i <= text.length - L; i+=L){
      aux += text[i];
    }
    Cs.push(aux);
    counter++;
  }
  return Cs;
}

/**
 * Given a text, it'll return the frequencies of every single letter on it.
 */
function getFreqs(text){
  const arr = text.split('');
  let freqs = arr.reduce((a, b) => {
    const newA = {...a};
        newA[b] = newA[b] ? newA[b] + 1 : 1;
    return newA
    },{});
    return freqs;
}

// Calculate the gcd of all the distances found between repeated substrings in the message
const calculateL = (data) => (data.length > 1 ? math.gcd(...data) : data.length);

const getSecret = (freqs, base) => {
    /** Find relative letter to a ['letter', frequency, alphabet#] format @letterData in a @distance on an alphabet @base */
    const findRelativeTo = (letterData, distance, base) => {
        const letter = letterData[0];
        let position = (base.indexOf(letter.toUpperCase()) + distance) % base.length;
        position = (position < 0) ? base.length + position : position;
        const nextLetter =  base[position];
        return nextLetter;
    };

    /**
     * Returns an @array object with the following structure:
     * ['letter',frequency,basePosition]
     */
    const buildFreqs = Object.entries(freqs).map(el => {
        el[2] = base.indexOf(el[0]);
        return el;
    }).sort((a, b) => b[1] - a[1]);
    
    /**
     * Obtains the posible Aes with the frequency table stored in @buildFreqs
     * How? In English language, E is the most common letter
     * E - 4 positions = A, so the relative most frequent letter less 4 more letter should be the A in this string
     * Examples:
     * If E = O, A = K
     * If E = I, A = E
     * If E = U, A = Y
     * Where the As letters of every substring should be the key value for the message
     */
    let possibleAes = buildFreqs.map(el => {
        const relativeA = findRelativeTo(el, -4, base);
        return relativeA;
    }).filter(el => el);
    return possibleAes.map(data => data[0])[0]; 
}

function getValidL(data){
    const L = calculateL(data);
    if (L == 1) throw "LETTERS_GROUPS_ERR: Try changing the size of the groups of letter to find with param --group-by or the key length with param --key-length";
    return L;
}

const decrypt = (text, key, base) => {
    let cont = 0;
    return text.split('').reduce(
        (decText, letter) => {
            const keyPos = cont % key.length;
            let position = base.indexOf(letter.toUpperCase()) -  base.indexOf(key[keyPos]);
            position = (position < 0) ? base.length + position : position;
            cont++;
            return decText + base[position];
        }, ''
    )
}

const fixText = (textWithSpaces, textWithoutSpaces) => {
    let cont = -1;
    return textWithSpaces.split('').map(
        (letter) => {
            if (letter == ' ') 
                return ' ';
            cont++;
            return textWithoutSpaces[cont];
        }
    ).join('');
}

function main(input, data){
    let { groupBy, keyLength, key } = data || "";
    const auxInput = input.replace(/ /g, '');
    if(yargs['key'] || key){
        const decryptedTextWithoutSpaces = decrypt(auxInput, (yargs['key'] || key).toUpperCase().split(''), letters);
        const decryptedText = fixText(input, decryptedTextWithoutSpaces);
        console.log("Decrypted text: \n", decryptedText);
        process.exit();
    }
    const repeatedSubstrings = calculateDistances(
        auxInput,
        getRepeatedSubStrings(input, groupBy || stringSize)
    );
    const possibleKeyLength = yargs['key-length'] || getValidL(repeatedSubstrings.map(el => el.distance));
    const subTexts = findCs(auxInput, possibleKeyLength);
    const possibleKey = subTexts.reduce(
        (arr, C) => {
            arr.push(getSecret(getFreqs(C), letters))
            return arr; 
        },
            []
    ).join('');
    const decryptedTextWithoutSpaces = decrypt(auxInput, possibleKey.split(''), letters);
    const decryptedText = fixText(input, decryptedTextWithoutSpaces);
    const dataJSON = {
        text: input,
        repeatedSubstrings,
        possibleKeyLength,
        subTexts,
        possibleKey,
        decryptedText
    }
    console.log(dataJSON);
    rl.close();
    process.exit();
};

rl.question('Insert text to decrypt: ', input => main(input));

module.exports = main;


