function ciftSayilarinToplami(): number {
  let toplam: number = 0;
  for (let i: number = 2; i <= 50; i += 2) {
    toplam += i;
  }
  return toplam;
}
const sonuc: number = ciftSayilarinToplami();
console.log("1 ile 50 arasındaki çift sayıların toplamı:", sonuc);

function carpma(): void {
  console.log("7 Sayısının Çarpım Tablosu:");

  for (let i: number = 1; i <= 10; i++) {
    const carpim: number = 7 * i;
    console.log(`7 x ${i} = ${carpim}`);
  }
}
carpma();
