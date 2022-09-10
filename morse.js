MORSE_CODE_DICT = { 'A':'.-', 'B':'-...',
'C':'-.-.', 'D':'-..', 'E':'.',
'F':'..-.', 'G':'--.', 'H':'....',
'I':'..', 'J':'.---', 'K':'-.-',
'L':'.-..', 'M':'--', 'N':'-.',
'O':'---', 'P':'.--.', 'Q':'--.-',
'R':'.-.', 'S':'...', 'T':'-',
'U':'..-', 'V':'...-', 'W':'.--',
'X':'-..-', 'Y':'-.--', 'Z':'--..',
'1':'.----', '2':'..---', '3':'...--',
'4':'....-', '5':'.....', '6':'-....',
'7':'--...', '8':'---..', '9':'----.',
'0':'-----', ', ':'--..--', '.':'.-.-.-',
'?':'..--..', '/':'-..-.', '-':'-....-',
'(':'-.--.', ')':'-.--.-'}

function encode(e) {
    const letters = document.getElementById("input").value;
    let encodedString = ''
    
    e.preventDefault();
    for (let i = 0; i < letters.length; i++) {
        
        encodedString += MORSE_CODE_DICT[letters[i].toUpperCase()] + ' ';
        
    }
    document.getElementById("output").innerHTML = `The encoded string is : ${encodedString}`;
}

function decode(e) {
    const letters = document.getElementById("input").value;
    let decodedString = ''
    e.preventDefault();
    for (let i = 0; i < letters.length; i++) {
        decodedString += MORSE_CODE_DICT[letters[i].toUpperCase()] + ' ';
    }
    document.getElementById("output2").innerHTML = `The decoded string is : ${decodedString}`;
}