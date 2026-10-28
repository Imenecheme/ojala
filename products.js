// EDIT THIS FILE TO CHANGE THE PRODUCTS ON THE SHOP.
// Each product sits between { } and ends with a comma.
//   name:     product name
//   category: must be exactly one of: Suits and jackets, Formal shirts, Casual wear,
//             Trousers and jeans, African prints, Shoes, Ties and belts, Kids’ wear
//   price:    number only, no commas (7500)
//   oldPrice: optional. Add it to show a discount and list the item under Flash sales
//   img:      optional. File name of a photo you uploaded to the images folder, e.g. "suit1.jpg"
//   soldOut:  optional. Add soldOut: true to show "Sold out"
//   sw:       colour pattern shown when there is no photo (p1 to p6)
// New products go at the top of the list so they show first.
window.PRODUCTS = [
  { name: "Navy two-piece suit", category: "Suits and jackets", price: 7500, oldPrice: 10000, sw: "p1" },
  { name: "Kitenge shirt", category: "African prints", price: 1600, oldPrice: 2000, sw: "p4" },
  { name: "Checked formal shirt", category: "Formal shirts", price: 1700, oldPrice: 2000, sw: "p3" },
  { name: "Slim fit jeans", category: "Trousers and jeans", price: 2100, oldPrice: 3000, sw: "p6" },
  { name: "Charcoal blazer", category: "Suits and jackets", price: 4800, sw: "p5" },
  { name: "White formal shirt", category: "Formal shirts", price: 1500, sw: "p3" },
  { name: "Khaki trousers", category: "Trousers and jeans", price: 2200, sw: "p2" },
  { name: "African print outfit", category: "African prints", price: 3500, sw: "p4" },
  { name: "Denim jacket", category: "Casual wear", price: 3200, sw: "p6" },
  { name: "Leather belt", category: "Ties and belts", price: 800, sw: "p1" }
];
