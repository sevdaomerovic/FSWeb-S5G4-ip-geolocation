// //axios import buraya gelecek

// import axios from "axios";

// var benimIP;

// // ------------ değiştirmeyin --------------
// // licensed to Ergineer 2022
// require("babel-core/register");
// require("babel-polyfill");
// async function ipAdresimiAl() {
//   await axios({
//     method: "get",
//     url: "https://apis.ergineer.com/ipadresim",
//   })
//     .then(function (response) {
//       return response.data;
//     })
//     .then(function (a) {
//       benimIP = a;
//     });
// }
// // ------------ değiştirmeyin --------------

// /*
// 	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
//     (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
//     https://apis.ergineer.com/ipgeoapi/46.2.209.170

// 	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim
// 	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
// */

// /*
// 	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
// 	iyice anlamanız gerekmektedir.

// */
// /*
// 	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
//     DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
// 	NOT: API'den gelen bayrak url'i çalışmazsa alternatif olarak: https://flagsapi.com/
// 	<div class="card">
// 	<img src={ülke bayrağı url} />
// 	<div class="card-info">
// 		<h3 class="ip">{ip adresi}</h3>
// 		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
// 		<p>Enlem: {enlem} Boylam: {boylam}</p>
// 		<p>Şehir: {şehir}</p>
// 		<p>Saat dilimi: {saat dilimi}</p>
// 		<p>Para birimi: {para birimi}</p>
// 		<p>ISP: {isp}</p>
// 	</div>
//     </div>
// */

// /*
// 	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve
// 	bu kartı DOM olarak .cards elementinin içine ekleyin.
// */
// const bayrakEkle = (bayrak) => {
//   const kart = document.createElement("div");
//   kart.className = "card";

//   const img = document.createElement("img");
//   img.setAttribute("src");
// };
// /*
// 	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün.
// 	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna
// 	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine
// 	bilgisayarınızın IP adresini atayacaktır.
// 	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP;
// */

// //kodlar buraya gelecek
// const data = {
//   sorgu: "46.2.209.170",
//   durum: "OK",
//   kıta: "Asia",
//   ülke: "Turkey",
//   ülkeKodu: "TR",
//   ülkebayrağı: "https://apis.ergineer.com/ulkebayraklari/TR",
//   bölge: "34",
//   bölgeAdı: "Istanbul",
//   şehir: "Istanbul",
//   zip: "34020",
//   enlem: 41.05510000000000303543856716714799404144287109375,
//   boylam: 28.93469999999999942019712761975824832916259765625,
//   saatdilimi: "Europe/Istanbul",
//   parabirimi: "TRY",
//   isp: "VFNET Ataköy xDSL",
//   organizasyon: "Koc.net Haberlesme Teknolojileri ve Iletisim Hizmetleri",
//   as: "AS8386 Vodafone Net Iletisim Hizmetler AS",
// };

// const geoInfo = (data) => {
//   const card = document.createElement("div");
//   card.setAttribute("class", "card");

//   const image = document.createElement("img");
//   image.setAttribute(
//     "src",
//     `https://flagsapi.com/${data.ülkeKodu}/flat/64.png`
//   );
//   card.append(image);

//   const div = document.createElement("div");
//   div.className = "card-info";
//   card.append(div);

//   const ip = document.createElement("h3");
//   ip.classList.add("ip");
//   ip.textContent = data.sorgu;
//   card.append(ip);

//   const p1 = document.createElement("p");
//   p1.setAttribute("class", "ulke");
//   p1.textContent = `${data.ülke} (${data.ülkeKodu})`;

//   const p2 = document.createElement("p");
//   p2.textContent = `Enlem: ${data.enlem} Boylam: ${data.boylam}`;

//   const p3 = document.createElement("p");
//   p3.textContent = `Şehir: ${data.şehir}`;

//   const p4 = document.createElement("p");
//   p4.textContent = `Saat dilimi: ${data.saatdilimi}`;

//   const p5 = document.createElement("p");
//   p5.textContent = `Para birimi: ${data.parabirimi}`;

//   const p6 = document.createElement("p");
//   p6.textContent = `ISP: ${data.isp}`;

//   div.append(p1, p2, p3, p4, p5, p6);

//   return card;
// };

// const getData = async () => {
//   await ipAdresimiAl();

//   axios
//     .get(`https://apis.ergineer.com/ipgeoapi/${benimIP}`)
//     .then((res) => {
//       const card = geoInfo(res.data);
//       document.querySelector(".cards").append(card);
//     })
//     .catch((err) => {
//       console.log(err);
//     });
// };
// getData();

import axios from "axios";

//axios import buraya gelecek

var benimIP;

// ------------ değiştirmeyin --------------
// licensed to Ergineer 2022
require("babel-core/register");
require("babel-polyfill");
async function ipAdresimiAl() {
  await axios({
    method: "get",
    url: "https://apis.ergineer.com/ipadresim",
  })
    .then(function (response) {
      return response.data;
    })
    .then(function (a) {
      benimIP = a;
    });
}
// ------------ değiştirmeyin --------------

/*
	ADIM 1: axios kullanarak, aşağıdaki URL'ye GET sorgusu atacağız
    (tag içindeki yere kendi ipnizi yazarak URL'yi oluşturun):
    https://apis.ergineer.com/ipgeoapi/78.162.86.102
	
	NOT: Bilgisayarın IP adresini öğrenmek için: https://apis.ergineer.com/ipadresim 
	ADIM 5'e gelene kadar fonksiyonunuzu test etmek için ip nizi URL'ye manuel olarak ekleyebilirsiniz.
*/

/*
	ADIM 2: Geri döndürülen verileri inceleyin, bu sizin ip bilgileriniz! Bileşen fonksiyonunuzu geliştirmek içindeki bu veri yapısını
	iyice anlamanız gerekmektedir.
	
*/
/*
	ADIM 3: Argümanı sadece 1 nesne kabül eden bir fonksiyon oluşturun.
    DOM metotlarını ve özelliklerini kullanarak, şunları gerçekleştirin:
	NOT: API'den gelen bayrak url'i çalışmazsa alternatif olarak: https://flagsapi.com/
	<div class="card">
	<img src={ülke bayrağı url} />
	<div class="card-info">
		<h3 class="ip">{ip adresi}</h3>
		<p class="ulke">{ülke bilgisi (ülke kodu)}</p>
		<p>Enlem: {enlem} Boylam: {boylam}</p>
		<p>Şehir: {şehir}</p>
		<p>Saat dilimi: {saat dilimi}</p>
		<p>Para birimi: {para birimi}</p>
		<p>ISP: {isp}</p>
	</div>
    </div>
*/

/*
	ADIM 4: API'den alınan verileri kullanarak ADIM 3'te verilen yapıda bir kart oluşturun ve 
	bu kartı DOM olarak .cards elementinin içine ekleyin. 
*/

/*
	ADIM 5: Manuel olarak eklediğiniz IP adresini dinamiğe dönüştürün. 
	Sayfanın en üstünde ---değiştirmeyin--- etiketleri arasında yer alan asenkron ipAdresimiAl() fonksiyonuna 
	sorgu atarak bilgisayarınız IP adresini dinamik olarak aldıracaksınız. Bu fonksiyon asenkron olarak çağırıldığında `benimIP` değişkenine 
	bilgisayarınızın IP adresini atayacaktır. 
	Örnek dinamik URL kullanımı: var url = "https://apis.ergineer.com/ipgeoapi/"+benimIP; 
*/

//kodlar buraya gelecek

const geoInfo = (data) => {
  const card = document.createElement("div");
  card.setAttribute("class", "card");

  const image = document.createElement("img");
  image.setAttribute(
    "src",
    `https://flagsapi.com/${data.ülkeKodu}/flat/64.png`
  );
  card.append(image);

  const div = document.createElement("div");
  div.className = "card-info";
  card.append(div);

  const ip = document.createElement("h3");
  ip.classList.add("ip");
  ip.textContent = data.sorgu;
  div.append(ip);

  const p1 = document.createElement("p");
  p1.setAttribute("class", "ulke");
  p1.textContent = `${data.ülke} (${data.ülkeKodu})`;

  const p2 = document.createElement("p");
  p2.textContent = `Enlem: ${data.enlem} Boylam: ${data.boylam}`;

  const p3 = document.createElement("p");
  p3.textContent = `Şehir: ${data.şehir}`;

  const p4 = document.createElement("p");
  p4.textContent = `Saat dilimi: ${data.saatdilimi}`;

  const p5 = document.createElement("p");
  p5.textContent = `Para birimi: ${data.parabirimi}`;

  const p6 = document.createElement("p");
  p6.textContent = `ISP: ${data.isp}`;

  div.append(p1, p2, p3, p4, p5, p6);
  return card;
};
const getData = async () => {
  await ipAdresimiAl();

  axios
    .get(`https://apis.ergineer.com/ipgeoapi/${benimIP}`)
    .then((res) => {
      const card = geoInfo(res.data);
      document.querySelector(".cards").append(card);
    })
    .catch((err) => {
      console.log(err);
    });
};

getData();
