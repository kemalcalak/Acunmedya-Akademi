// ===== 1. let, const, var farkları =====
var x = 10;
var x = 20; 
console.log("var örneği:", x);

function varOrnegi() {
  var y = 5;
  if (true) {
    var y = 10; 
  }
  console.log("var scope örneği:", y); 
}
varOrnegi();

let a = 10;
a = 20; 
console.log("let örneği:", a);

function letOrnegi() {
  let b = 5;
  if (true) {
    let b = 10; 
  }
  console.log("let scope örneği:", b); 
}
letOrnegi();

const PI = 3.14;
console.log("const örneği:", PI);

const kisi = {ad: "Ali"};
kisi.ad = "Veli"; 
console.log("const nesne örneği:", kisi);


// ===== 2. Veri Tipleri ve typeof =====

let isim = "Ahmet";
console.log("String:", isim, "- tip:", typeof isim);

let yas = 25;
console.log("Number:", yas, "- tip:", typeof yas);

let aktifMi = true;
console.log("Boolean:", aktifMi, "- tip:", typeof aktifMi);

let tanimsiz;
console.log("Undefined:", tanimsiz, "- tip:", typeof tanimsiz);

let bos = null;
console.log("Null:", bos, "- tip:", typeof bos);

let insan = {ad: "Mehmet", yas: 30};
console.log("Object:", insan, "- tip:", typeof insan);

let renkler = ["kırmızı", "mavi", "yeşil"];
console.log("Array:", renkler, "- tip:", typeof renkler);
console.log("Array kontrolü:", Array.isArray(renkler));

let selamla = function() {
  console.log("Merhaba");
};
console.log("Function:", selamla, "- tip:", typeof selamla);


// ===== 3. Kullanıcıdan Veri Alma ve İşleme =====

function sayilariTopla() {
  let sayi1 = Number(prompt("Birinci sayıyı giriniz:"));
  let sayi2 = Number(prompt("İkinci sayıyı giriniz:"));
  
  let toplam = sayi1 + sayi2;
  alert("Toplam: " + toplam);
}


sayilariTopla();