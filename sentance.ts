function ubahHuruf(sentence: string): string {
    const alphabetBob = "KLMNOPQRSTUVWXYZABCDEFGHIJ";
    const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let result = "";
  
    for (let i = 0; i < sentence.length; i++) {
      const char = sentence[i];
      const charIndex = alphabet.indexOf(char);
  
      if (charIndex !== -1) {
        const newChar = alphabetBob[charIndex];
        result += newChar;
      } else {
        result += char;
      }
    }
  
    return result;
  }
  
  console.log(ubahHuruf("SEPULSA OKE"));     // COZEVCK YUO
  console.log(ubahHuruf("ALTERRA ACADEMY")); // KVDOBBK KMKNOWI
  console.log(ubahHuruf("INDONESIA"));       // SXNYXOCSK
  console.log(ubahHuruf("GOLANG"));          // QYVKXQ
  console.log(ubahHuruf("PROGRAMMER"));      // ZBYQBKWWOB
  