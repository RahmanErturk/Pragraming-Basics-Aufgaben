// Du bist für die Implementierung eines Warenkorb-Systems zuständig. Ziel ist es dem Nutzer des Onlineshops das teuerste Produkt, das günstigste Produkt und die Gesamtkosten für alle Produkte anzuzeigen.

const cost = [2.39, 13.99, 4.19, 59.99, 1.99];
const productNames = ["Zahncreme","Tofu", "Müsli", "Toaster", "Kaugummi"];

let teuersteProdukt = cost[0];
let billigsteProdukt = cost[0];
let zusammenKosten = 0;
for (let i = 0; i < cost.length; i++){
  
  if (cost[i] > teuersteProdukt){
    teuersteProdukt = cost[i]
  }
  if (billigsteProdukt > cost[i]){
    billigsteProdukt = cost[i]
  }
  zusammenKosten += cost[i];
}  
console.log(`Das teuerste Produkt ist ${productNames[cost.indexOf(teuersteProdukt)]}`);
console.log(`Das billigste Produkt ist ${productNames[cost.indexOf(billigsteProdukt)]}`);
console.log(`Alle 5 Produkte zusammen kosten: ${zusammenKosten}`);