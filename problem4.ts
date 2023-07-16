function lottery(num: number) {
  return new Promise((resolve, reject)  => {
    console.log('Undian Lotre dimulai......');
    console.log('Sedang mengundi nomor anda........');
    
    let jackpot: number = Math.floor(Math.random() * 1000)
    console.log('Nomor jackpot : ' + jackpot);

    setTimeout(() => {
      if (num === jackpot){
        resolve('Selamat anda mendapatkan hadiah utama berupa mobil !!!!!');
      } else {
        reject('Maaf anda kurang beruntung !!');
      }
    }, 10000);
  })
}

async function playDraw() {
  await lottery(5)
    .then((response) => {
      console.log(response)
    })
    .catch((error) => {
      console.log(error)
    })
    .finally(() => {
      console.log('---- UNDIAN LOTRE TELAH BERAKHIR ----')
    })
}

playDraw()


