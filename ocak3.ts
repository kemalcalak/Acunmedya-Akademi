const sayi: number = 42;
const metin: string = "Merhaba Dünya";
const yanlisMi: boolean = false;
const isimDizisi: Array<string> = ["Ali", "Veli", "Ayşe"];
const kisiTuple: [string, number, boolean] = ["Ahmet", 30, true];
enum Renkler {
    Kirmizi,
    Mavi,
    Yesil,
    Sari = 5,
    Mor
}
const secilenRenk: Renkler = Renkler.Mavi;
console.log(`Seçilen renk kodu: ${secilenRenk}`);

let herhangiVeri: any = "Bu bir string";
herhangiVeri = 100;
herhangiVeri = true;
herhangiVeri = [1, 2, 3];
herhangiVeri = { anahtar: "değer" };

function selamla(): void {
    console.log("Merhaba!");
}
let bos: null = null;
let tanimsiz: undefined = undefined;

interface Kullanici {
    id: number;
    ad: string;
    soyad: string;
    yas: number;
    aktifMi: boolean;
    hobiler?: string[];
}

const kullanici1: Kullanici = {
    id: 1,
    ad: "Ali Kemal",
    soyad: "Çalak",
    yas: 20,
    aktifMi: true,
    hobiler: ["Yüzme", "Kitap okuma"]
};

console.log(`Kullanıcı: ${kullanici1.ad} ${kullanici1.soyad}, Yaş: ${kullanici1.yas}`);

function kullaniciGuncelle(kullanici: Kullanici, yeniYas: number): Kullanici {
    return {
        ...kullanici,
        yas: yeniYas
    };
}

const guncelKullanici = kullaniciGuncelle(kullanici1, 29);
console.log(`Güncellenen kullanıcı yaşı: ${guncelKullanici.yas}`);
