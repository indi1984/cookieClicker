let currentCoffeeCount = document.getElementById('currentCoffeeCount');
let ttlCoffeeSec = document.getElementById('ttlCoffeeSec');
let cupImg = document.getElementById('cup');
let adderOne = document.getElementById('adderOne');
let adderTwo = document.getElementById('adderTwo');
let adderThree = document.getElementById('adderThree');
let chemexQuantity = document.querySelector('#quantityOne');
let chemexCoffeePerSecond = document.querySelector('#coffeePerSecOne');

let producers = [
  {
    name: "Chemex",
    quantity: 1,
    coffeePerSecond: 1,
    cost: "10 Coffee"
  },
  {
    name: "French Press",
    quantity: 1,
    coffeePerSecond: 2,
    cost: "50 Coffee"
  },
  {
    name: "Mr. Coffee",
    quantity: 1,
    coffeePerSecond: 5,
    cost: "100 Coffee"
  }
];

chemexQuantity.innerHTML = producers[0].quantity;
chemexCoffeePerSecond.innerHTML = producers[0].coffeePerSecond;

let coffeeCount = 0;
cupImg.addEventListener('click', (event) => {
  coffeeCount += 1;
  currentCoffeeCount.innerHTML = coffeeCount;
    if (coffeeCount > 5) {
      adderOne.style.visibility = "visible";
    };
    if (coffeeCount > 25) {
      adderTwo.style.visibility = "visible";
    };
    if (coffeeCount > 50) {
      adderThree.style.visibility = "visible";
    }; 
    return coffeeCount;
});
