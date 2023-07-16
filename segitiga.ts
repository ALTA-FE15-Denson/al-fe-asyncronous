function playWithAsterik(n: number): string{
    let result = '';
    for (let i = 1; i <= n; i++) {
      // Menambahkan spasi sebelum asterisk
      for (let j = 1; j <= n - i; j++) {
        result += ' ';
      }
      
      // Menambahkan asterisk
      for (let k = 1; k <= i; k++) {
        result += '*';
        
        // Menambahkan spasi setelah asterisk kecuali pada baris terakhir
        if (k < i) {
          result += ' ';
        }
      }

          
      // Menambahkan baris baru setelah setiap baris selesai
      if (i < n) {
        result += '\n';
      }
    }
    return result;
  }
  
  console.log(playWithAsterik(5));
  