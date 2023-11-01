// create function logReceipt that accepts menu items (1 or many) as objects
// with these properties: {descr, price}
// i.e. {descr: 'Coke', price: 1.99}
// function should log each item to the console and log a total price

function logReceipt(...receiptItems){ //...allows you to directly pass individual objects, s/o google
  let subTotal = 0;
  let taxRate = 0.1; //10% tax
  let totalPrice = 0;

  receiptItems.forEach (item => {
    console.log (`${item.descr}: $${item.price.toFixed(2)}`); //to reformat the price as a string with the correct decimal placement
    subTotal += item.price; //calculates the total $ of the items on the reciept
  });

  const theTax = subTotal * taxRate; //calculates the tax amount on the items
  const taxPercentage = (taxRate *100).toFixed(2); //calculates the tax %
  totalPrice = subTotal + theTax; //adds the item price and tax amount together

  console.log(`Subtotal: $${subTotal.toFixed(2)}`);
  console.log(`Taxes (${taxPercentage}%): $${theTax.toFixed(2)}`);
  console.log(`Total Price: $${totalPrice.toFixed(2)}`);
}

// Check
logReceipt(
  { descr: 'Burrito', price: 5.99 },
  { descr: 'Chips & Salsa', price: 2.99 },
  { descr: 'Sprite', price: 1.99 }
);
// should log something like:
// Burrito - $5.99
// Chips & Salsa - $2.99
// Sprite - $1.99
// Total - $10.97
