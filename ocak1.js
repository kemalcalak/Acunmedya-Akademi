function sayiKontrol(sayi) {
  if (sayi > 0) {
    console.log(`${sayi} pozitif bir sayıdır.`);
  } else if (sayi < 0) {
    console.log(`${sayi} negatif bir sayıdır.`);
  } else {
    console.log("Bu sayı sıfırdır.");
  }
}

sayiKontrol(5);
sayiKontrol(-3);
sayiKontrol(0);

function forDongusu() {
  console.log("For Döngüsü ile 1'den 10'a kadar sayılar:");
  for (let i = 1; i <= 10; i++) {
    console.log(i);
  }
}

function whileDongusu() {
  console.log("While Döngüsü ile 1'den 10'a kadar sayılar:");
  let i = 1;
  while (i <= 10) {
    console.log(i);
    i++;
  }
}

function doWhileDongusu() {
  console.log("Do-While Döngüsü ile 1'den 10'a kadar sayılar:");
  let i = 1;
  do {
    console.log(i);
    i++;
  } while (i <= 10);
}

forDongusu();
whileDongusu();
doWhileDongusu();

function asalMi(sayi) {
  if (sayi <= 1) {
    return false;
  }

  if (sayi === 2) {
    return true;
  }

  if (sayi % 2 === 0) {
    return false;
  }

  const limit = Math.sqrt(sayi);

  for (let i = 3; i <= limit; i += 2) {
    if (sayi % i === 0) {
      return false;
    }
  }

  return true;
}

const kullaniciSayisi = 17;
if (asalMi(kullaniciSayisi)) {
  console.log(`${kullaniciSayisi} bir asal sayıdır.`);
} else {
  console.log(`${kullaniciSayisi} bir asal sayı değildir.`);
}

console.log("1 asal mı?", asalMi(1) ? "Evet" : "Hayır");
console.log("2 asal mı?", asalMi(2) ? "Evet" : "Hayır");
console.log("4 asal mı?", asalMi(4) ? "Evet" : "Hayır");
console.log("7 asal mı?", asalMi(7) ? "Evet" : "Hayır");
console.log("15 asal mı?", asalMi(15) ? "Evet" : "Hayır");
console.log("23 asal mı?", asalMi(23) ? "Evet" : "Hayır");
