/*

How can you tell an extrovert from an introvert at NSA?
Va gur ryringbef, gur rkgebireg ybbxf ng gur BGURE thl'f fubrf.

I found this joke on USENET, but the punchline is scrambled. Maybe you can decipher it?
According to Wikipedia, ROT13 is frequently used to obfuscate jokes on USENET.

For this task you're only supposed to substitute characters. Not spaces, punctuation, numbers, etc.

Test examples:

"EBG13 rknzcyr." -> "ROT13 example."

"This is my first ROT13 excercise!" -> "Guvf vf zl svefg EBG13 rkprepvfr!"

*/

function rot13(str) {
  const ALPHABET = "abcdefghijklmnopqrstuvwxyz";
  const ROT = "nopqrstuvwxyzabcdefghijklm";
  
  return [...str].map(char => {
    const decodeedLetter = [...ALPHABET][[...ROT].indexOf(char.toLowerCase())];
    if (char.match(/[a-z]/gi)) {
      if (char === char.toUpperCase()){
        return decodeedLetter.toUpperCase()
      }
      return decodeedLetter;
    };
    return char;
  }).join("")
}

function rot13(str) {
  return str.replace(/[a-z]/ig, (x) => String.fromCharCode(x.charCodeAt(0) + (x.toLowerCase() <= 'm' ? 13: -13)))
}
