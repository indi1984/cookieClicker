let currentCoffeeCount = document.getElementById('currentCoffeeCount');
let ttlCoffeeSec = document.getElementById('ttlCoffeeSec');
let cupImg = document.getElementById('cup');
let adderOne = document.getElementById('adderOne');
let adderTwo = document.getElementById('adderTwo');
let adderThree = document.getElementById('adderThree');

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
});
