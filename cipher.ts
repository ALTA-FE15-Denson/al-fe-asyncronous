function caesarCipher(offset: number, input: string): string {
    let result = "";
  
    for (let i = 0; i < input.length; i++) {
      const char = input[i];
      let shiftedChar;
  
      if (char === " ") {
        // Handle spaces
        shiftedChar = " ";
      } else {
        const charCode = char.charCodeAt(0) - 97; // Get the character code relative to 'a'
        const shiftedCharCode = (charCode + offset) % 26; // Shift the character code
        shiftedChar = String.fromCharCode(shiftedCharCode + 97); // Convert back to character
      }
  
      result += shiftedChar;
    }
  
    return result;
  }
  
  console.log(caesarCipher(3, "abc")); // def
  console.log(caesarCipher(2, "alta")); // cnvc
  console.log(caesarCipher(10, "alterraacademy")); // kvdobbkkmknowi
  console.log(caesarCipher(1, "abcdefghijklmnopqrstuvwxyz")); // bcdefghijklmnopqrstuvwxyza
  console.log(caesarCipher(1000, "abcdefghijklmnopqrstuvwxyz")); // mnopqrstuvwxyzabcdefghijkl
  