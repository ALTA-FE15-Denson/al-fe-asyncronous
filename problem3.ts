function jajanBoba(uang: number, callback: any): void {
  let priceBoba: number = 5000

  console.log('Kamu jajan boba dengan harga : Rp.' + priceBoba)

  let sisa: number = uang - priceBoba
  console.log('Sisa Uang kamu : Rp.' + sisa)

  callback(sisa)
}

function jajanSeblak(uang: number): void {
  let priceSeblak: number = 8000

  console.log('Kamu jajan seblak dengan harga : Rp. ' + priceSeblak)
  setTimeout(() => {
    if (priceSeblak <= uang) {
      let sisa = uang - priceSeblak
      console.log('Sisa uang kamu sebesar : Rp. ' + sisa)
    } else {
      console.log('Maaf uang kamu belum cukup untuk membeli Seblak')
      console.log('Sisa uang kamu sebesar : Rp. ' + uang)
    }
  }, 3000)
}

// jajanBoba(20000, jajanSeblak)
jajanBoba(10000, jajanSeblak)
