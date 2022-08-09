// Aus unserer Datenbank erhalten wir das folgende Array mit Produkten.
// Wir sollen diese nun nach Kategorien sortiert ausgeben.
// Achtung: Manche Produkte sind nicht vorrätig, andere haben einen Rabatt,
// den wir mit dem Preis bereits verrechnen sollen.
// So soll die Ausgabe aussehen:
// Kategorie: Automotive
// ---------------------
// 1. Trippledex - Preis: 693.15 - nicht vorrätig
//
// Kategorie: Home
// ---------------------
// 2. Cookley - Preis: 807.53 - auf Lager: 165
// 11. Subin - Preis: 711.25 - auf Lager: 27
// ...
// Die Daten aus der Datenbank:
const products = [
    {
        id: 1,
        name: "Trippledex",
        category: "Automotive",
        price: 693.15,
        inStock: 0,
    }, {
        id: 2,
        name: "Cookley",
        category: "Home",
        price: 832.50,
        discount: 0.03, // 3%
        inStock: 165,
    }, {
        id: 3,
        name: "Flexidy",
        category: "Beauty",
        price: 972.93,
        inStock: 0,
    }, {
        id: 4,
        name: "Tin",
        category: "Movies",
        price: 55.81,
        inStock: 0,
    }, {
        id: 5,
        name: "Duobam",
        category: "Music",
        price: 804.19,
        inStock: 159,
    }, {
        id: 6,
        name: "Latlux",
        category: "Clothing",
        price: 444.18,
        inStock: 0,
    }, {
        id: 7,
        name: "Veribet",
        category: "Garden",
        price: 136.10,
        discount: 0.05,
        inStock: 66,
    }, {
        id: 8,
        name: "Kanlam",
        category: "Books",
        price: 217.35,
        inStock: 135,
    }, {
        id: 9,
        name: "Wrapsafe",
        category: "Tools",
        price: 566.50,
        inStock: 0,
    }, {
        id: 10,
        name: "Temp",
        category: "Grocery",
        price: 682.37,
        discount: 0.06,
        inStock: 0,
    }, {
        id: 11,
        name: "Subin",
        category: "Home",
        price: 911.86,
        discount: 0.22,
        inStock: 27,
    }, {
        id: 12,
        name: "Tempsoft",
        category: "Games",
        price: 128.45,
        discount: 0.73, // 73%
        inStock: 56,
    }, {
        id: 13,
        name: "Fix San",
        category: "Music",
        price: 723.17,
        discount: 0.71,
        inStock: 121,
    }, {
        id: 14,
        name: "Sonair",
        category: "Outdoors",
        price: 740.12,
        inStock: 182,
    }, {
        id: 15,
        name: "Ronstring",
        category: "Home",
        price: 592.93,
        inStock: 0,
    }, {
        id: 16,
        name: "Flexidy",
        category: "Games",
        price: 147.23,
        discount: 0.32,
        inStock: 13,
    }, {
        id: 17,
        name: "Job",
        category: "Grocery",
        price: 732.43,
        inStock: 95,
    }, {
        id: 18,
        name: "Sonsing",
        category: "Computers",
        price: 825.65,
        inStock: 68,
    }, {
        id: 19,
        name: "Veribet",
        category: "Grocery",
        price: 705.04,
        inStock: 106,
    }, {
        id: 20,
        name: "Job",
        category: "Computers",
        price: 62.27,
        discount: 0.07,
        inStock: 90,
    }, {
        id: 21,
        name: "Sonair",
        category: "Computers",
        price: 66.65,
        discount: 0.71,
        inStock: 3,
    }, {
        id: 22,
        name: "Vagram",
        category: "Home",
        price: 439.69,
        inStock: 6,
    }, {
        id: 23,
        name: "Alphazap",
        category: "Sports",
        price: 737.49,
        inStock: 0,
    }, {
        id: 24,
        name: "Transcof",
        category: "Toys",
        price: 367.63,
        inStock: 0,
    }, {
        id: 25,
        name: "Sub-Ex",
        category: "Toys",
        price: 741.33,
        inStock: 168,
    }, {
        id: 26,
        name: "Sonair",
        category: "Shoes",
        price: 422.70,
        inStock: 156,
    }, {
        id: 27,
        name: "Sonair",
        category: "Health",
        price: 447.40,
        inStock: 154,
    }, {
        id: 28,
        name: "Konklab",
        category: "Tools",
        price: 257.75,
        inStock: 0,
    }, {
        id: 29,
        name: "Zaam-Dox",
        category: "Clothing",
        price: 812.97,
        discount: 0.01,
        inStock: 171,
    }, {
        id: 30,
        name: "Zoolab",
        category: "Sports",
        price: 860.65,
        inStock: 148,
    },
];


function printProduct(productCategory) {
    for (let i = 0; i < products.length; i++){
        if(products[i].category === productCategory){
            const productPrice = products[i].price - (products[i].price * products[i].discount)   
            if(products[i].inStock === 0){
                if(products[i].discount) {
                    console.log(`${products[i].id}. ${products[i].name} - Preis: ${productPrice} - nicht vorrätig`)
                } else {
                    console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - nicht vorrätig`)
                }
            } else {
                if(products[i].discount) {
                    console.log(`${products[i].id}. ${products[i].name} - Preis: ${productPrice} - auf Lager: ${products[i].inStock}`)
                } else {
                    console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - auf Lager: ${products[i].inStock}`)
                }
            }
        }
    }
};



console.log("-------------------------------------------------");

console.log("Kategorie: Automative");
console.log("---------------------");
printProduct("Automotive");
console.log("-------------------------------------------------");

console.log("Kategorie: Home");
console.log("---------------");
printProduct("Home");
console.log("-------------------------------------------------");

console.log("Kategorie: Beauty");
console.log("---------------");
printProduct("Beauty");
console.log("-------------------------------------------------");

console.log("Kategorie: Movies");
console.log("---------------");
printProduct("Movies");
console.log("-------------------------------------------------");

console.log("Kategorie: Music");
console.log("---------------");
printProduct("Music");
console.log("-------------------------------------------------");

console.log("Kategorie: Clothing");
console.log("---------------");
printProduct("Clothing");
console.log("-------------------------------------------------");

console.log("Kategorie: Garden");
console.log("---------------");
printProduct("Garden");
console.log("-------------------------------------------------");

console.log("Kategorie: Books");
console.log("---------------");
printProduct("Books");
console.log("-------------------------------------------------");

console.log("Kategorie: Tools");
console.log("---------------");
printProduct("Tools");
console.log("-------------------------------------------------");

console.log("Kategorie: Grocery");
console.log("---------------");
printProduct("Grocery");
console.log("-------------------------------------------------");

console.log("Kategorie: Games");
console.log("---------------");
printProduct("Games");
console.log("-------------------------------------------------");

console.log("Kategorie: Outdoors");
console.log("---------------");
printProduct("Outdoors");
console.log("-------------------------------------------------");

console.log("Kategorie: Computers");
console.log("---------------");
printProduct("Computers");
console.log("-------------------------------------------------");

console.log("Kategorie: Sports");
console.log("---------------");
printProduct("Sports");
console.log("-------------------------------------------------");

console.log("Kategorie: Toys");
console.log("---------------");
printProduct("Toys");
console.log("-------------------------------------------------");

console.log("Kategorie: Shoes");
console.log("---------------");
printProduct("Shoes");
console.log("-------------------------------------------------");

console.log("Kategorie: Health");
console.log("---------------");
printProduct("Health");



// function productCategorys(){
//     console.log("-------------------------------------------------");

//     console.log("Kategorie: Automative");
//     console.log("---------------------");
//     for (let i = 0; i < products.length; i++){
//         if(products[i].category === "Automotive"){
//             if(products[i].inStock === 0){
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - nicht vorrätig`)
//             } else {
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - auf Lager: ${products[i].inStock}`)
//             }
//         }
//     }
//     console.log("-------------------------------------------------");

//     console.log("Kategorie: Home");
//     console.log("---------------");
//     for (let i = 0; i < products.length; i++){
//         if(products[i].category === "Home"){
//             if(products[i].inStock === 0){
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - nicht vorrätig`)
//             } else {
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - auf Lager: ${products[i].inStock}`)
//             }
//         }
//     }
//     console.log("-------------------------------------------------");

//     console.log("Kategorie: Beauty");
//     console.log("---------------");
//     for (let i = 0; i < products.length; i++){
//         if(products[i].category === "Beauty"){
//             if(products[i].inStock === 0){
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - nicht vorrätig`)
//             } else {
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - auf Lager: ${products[i].inStock}`)
//             }
//         }
//     }
//     console.log("-------------------------------------------------");

//     console.log("Kategorie: Movies");
//     console.log("---------------");
//     for (let i = 0; i < products.length; i++){
//         if(products[i].category === "Movies"){
//             if(products[i].inStock === 0){
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - nicht vorrätig`)
//             } else {
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - auf Lager: ${products[i].inStock}`)
//             }
//         }
//     }
//     console.log("-------------------------------------------------");

//     console.log("Kategorie: Music");
//     console.log("---------------");
//     for (let i = 0; i < products.length; i++){
//         if(products[i].category === "Music"){
//             if(products[i].inStock === 0){
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - nicht vorrätig`)
//             } else {
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - auf Lager: ${products[i].inStock}`)
//             }
//         }
//     }
//     console.log("-------------------------------------------------");

//     console.log("Kategorie: Clothing");
//     console.log("---------------");
//     for (let i = 0; i < products.length; i++){
//         if(products[i].category === "Clothing"){
//             if(products[i].inStock === 0){
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - nicht vorrätig`)
//             } else {
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - auf Lager: ${products[i].inStock}`)
//             }
//         }
//     }
//     console.log("-------------------------------------------------");

//     console.log("Kategorie: Garden");
//     console.log("---------------");
//     for (let i = 0; i < products.length; i++){
//         if(products[i].category === "Garden"){
//             if(products[i].inStock === 0){
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - nicht vorrätig`)
//             } else {
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - auf Lager: ${products[i].inStock}`)
//             }
//         }
//     }
//     console.log("-------------------------------------------------");

//     console.log("Kategorie: Books");
//     console.log("---------------");
//     for (let i = 0; i < products.length; i++){
//         if(products[i].category === "Books"){
//             if(products[i].inStock === 0){
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - nicht vorrätig`)
//             } else {
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - auf Lager: ${products[i].inStock}`)
//             }
//         }
//     }
//     console.log("-------------------------------------------------");

//     console.log("Kategorie: Tools");
//     console.log("---------------");
//     for (let i = 0; i < products.length; i++){
//         if(products[i].category === "Tools"){
//             if(products[i].inStock === 0){
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - nicht vorrätig`)
//             } else {
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - auf Lager: ${products[i].inStock}`)
//             }
//         }
//     }
//     console.log("-------------------------------------------------");

//     console.log("Kategorie: Grocery");
//     console.log("---------------");
//     for (let i = 0; i < products.length; i++){
//         if(products[i].category === "Grocery"){
//             if(products[i].inStock === 0){
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - nicht vorrätig`)
//             } else {
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - auf Lager: ${products[i].inStock}`)
//             }
//         }
//     }
//     console.log("-------------------------------------------------");

//     console.log("Kategorie: Games");
//     console.log("---------------");
//     for (let i = 0; i < products.length; i++){
//         if(products[i].category === "Games"){
//             if(products[i].inStock === 0){
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - nicht vorrätig`)
//             } else {
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - auf Lager: ${products[i].inStock}`)
//             }
//         }
//     }
//     console.log("-------------------------------------------------");

//     console.log("Kategorie: Outdoors");
//     console.log("---------------");
//     for (let i = 0; i < products.length; i++){
//         if(products[i].category === "Outdoors"){
//             if(products[i].inStock === 0){
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - nicht vorrätig`)
//             } else {
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - auf Lager: ${products[i].inStock}`)
//             }
//         }
//     }
//     console.log("-------------------------------------------------");

//     console.log("Kategorie: Computers");
//     console.log("---------------");
//     for (let i = 0; i < products.length; i++){
//         if(products[i].category === "Computers"){
//             if(products[i].inStock === 0){
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - nicht vorrätig`)
//             } else {
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - auf Lager: ${products[i].inStock}`)
//             }
//         }
//     }
//     console.log("-------------------------------------------------");

//     console.log("Kategorie: Sports");
//     console.log("---------------");
//     for (let i = 0; i < products.length; i++){
//         if(products[i].category === "Sports"){
//             if(products[i].inStock === 0){
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - nicht vorrätig`)
//             } else {
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - auf Lager: ${products[i].inStock}`)
//             }
//         }
//     }
//     console.log("-------------------------------------------------");

//     console.log("Kategorie: Toys");
//     console.log("---------------");
//     for (let i = 0; i < products.length; i++){
//         if(products[i].category === "Toys"){
//             if(products[i].inStock === 0){
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - nicht vorrätig`)
//             } else {
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - auf Lager: ${products[i].inStock}`)
//             }
//         }
//     }
//     console.log("-------------------------------------------------");

//     console.log("Kategorie: Shoes");
//     console.log("---------------");
//     for (let i = 0; i < products.length; i++){
//         if(products[i].category === "Shoes"){
//             if(products[i].inStock === 0){
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - nicht vorrätig`)
//             } else {
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - auf Lager: ${products[i].inStock}`)
//             }
//         }
//     }
//     console.log("-------------------------------------------------");

//     console.log("Kategorie: Health");
//     console.log("---------------");
//     for (let i = 0; i < products.length; i++){
//         if(products[i].category === "Health"){
//             if(products[i].inStock === 0){
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - nicht vorrätig`)
//             } else {
//                 console.log(`${products[i].id}. ${products[i].name} - Preis: ${products[i].price} - auf Lager: ${products[i].inStock}`)
//             }
//         }
//     }
// }

// productCategorys()





