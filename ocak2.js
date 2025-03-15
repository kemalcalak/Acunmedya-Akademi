function topla(sayi1, sayi2) {
  return sayi1 + sayi2;
}

const toplaArrow = (sayi1, sayi2) => sayi1 + sayi2;

function enBuyukElemanBul(dizi) {
  if (dizi.length === 0) {
    return null; 
  }

  let enBuyuk = dizi[0];
  for (let i = 1; i < dizi.length; i++) {
    if (dizi[i] > enBuyuk) {
      enBuyuk = dizi[i];
    }
  }
  return enBuyuk;
}
function elemanVarMi(dizi, arananEleman) {
  for (let i = 0; i < dizi.length; i++) {
    if (dizi[i] === arananEleman) {
      return true;
    }
  }
  return false;
}
console.log("Normal toplama fonksiyonu: " + topla(5, 3));
console.log("Arrow toplama fonksiyonu: " + toplaArrow(5, 3));

const sayilar = [12, 5, 28, 47, 3, 18];
console.log("En büyük eleman: " + enBuyukElemanBul(sayilar));
console.log("28 sayısı dizide var mı? " + elemanVarMi(sayilar, 28));
console.log("100 sayısı dizide var mı? " + elemanVarMi(sayilar, 100));
