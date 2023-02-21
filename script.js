// * Decelerations and element gathering
let currentCoffeeCount = document.getElementById('currentCoffeeCount');
let ttlCoffeeSec = document.getElementById('ttlCoffeeSec');
let cupImg = document.getElementById('cup');
let adderOne = document.getElementById('adderOne');
let adderTwo = document.getElementById('adderTwo');
let adderThree = document.getElementById('adderThree');
let chemexQuantity = document.querySelector('#quantityOne');
let chemexCoffeePerSecond = document.querySelector('#coffeePerSecOne');
let frenchPressQuantity = document.querySelector('#quantityTwo');
let frenchPressCoffeePerSecond = document.querySelector('#coffeePerSecTwo');
let mrCoffeeQuantity = document.querySelector('#quantityThree');
let mrCoffeeCoffeePerSecond = document.querySelector('#coffeePerSecThree');
let btnOne = document.getElementById('btnOne');
let btnTwo = document.getElementById('btnTwo');
let btnThree = document.getElementById('btnThree');


// * Initialize Array
let producers = [
  {
    name: "Chemex",
    quantity: 0,
    coffeePerSecond: 1,
    ttlCoffeePerSecond: function () {
      return this.quantity * this.coffeePerSecond;
    },
    cost: 10
  },
  {
    name: "French Press",
    quantity: 0,
    coffeePerSecond: 2,
    ttlCoffeePerSecond: function () {
      return this.quantity * this.coffeePerSecond;
    },
    cost: 50
  },
  {
    name: "Mr. Coffee",
    quantity: 0,
    coffeePerSecond: 3,
    ttlCoffeePerSecond: function () {
      return this.quantity * this.coffeePerSecond;
    },
    cost: 100
  }
];


// * Set initial default counters on HTML
chemexQuantity.innerHTML = producers[0].quantity;
chemexCoffeePerSecond.innerHTML = producers[0].coffeePerSecond;

frenchPressQuantity.innerHTML = producers[1].quantity;
frenchPressCoffeePerSecond.innerHTML = producers[1].coffeePerSecond;

mrCoffeeQuantity.innerHTML = producers[2].quantity;
mrCoffeeCoffeePerSecond.innerHTML = producers[2].coffeePerSecond;


// * Show producers as enough coffee is clicked
let coffeeCount = 0;
cupImg.addEventListener('click', (event) => {
  coffeeCount += 1;
  showProducers();
});
function showProducers () {
  currentCoffeeCount.innerHTML = coffeeCount;
    if (coffeeCount >= 5) {
      adderOne.style.visibility = "visible";
    };
    if (coffeeCount >= 25) {
      adderTwo.style.visibility = "visible";
    };
    if (coffeeCount >= 50) {
      adderThree.style.visibility = "visible";
    }; 
    return coffeeCount;
};


// * Producer Button Click Events
btnOne.addEventListener('click', chooseProducerOne);
btnTwo.addEventListener('click', chooseProducerTwo);
btnThree.addEventListener('click', chooseProducerThree);


/// * Button Click Event Handler Functions
function chooseProducerOne () {
  if (coffeeCount >= producers[0].cost) {
    producers[0].quantity += 1;
    updateCoffeePerSec();
     chemexQuantity.innerHTML = producers[0].quantity;
      if (coffeeCount > 0) {
        coffeeCount = coffeeCount - producers[0].cost;
      };
  } else {
    alert('NOT ENOUGH COFFEE!');
  };
  currentCoffeeCount.innerHTML = coffeeCount;
};
function chooseProducerTwo () {
  if (coffeeCount >= producers[1].cost) {
    producers[1].quantity += 1;
    updateCoffeePerSec();
    frenchPressQuantity.innerHTML = producers[1].quantity;
      if (coffeeCount > 0) {
        coffeeCount = coffeeCount - producers[1].cost;  
      };
  } else {
    alert('NOT ENOUGH COFFEE!');
  };
  currentCoffeeCount.innerHTML = coffeeCount;
};
function chooseProducerThree () {
  if (coffeeCount >= producers[2].cost) {
    producers[2].quantity += 1;
    updateCoffeePerSec();
    mrCoffeeQuantity.innerHTML = producers[2].quantity;
      if (coffeeCount > 0) {
        coffeeCount = coffeeCount - producers[2].cost;
      };
  } else {
    alert('NOT ENOUGH COFFEE!');
  };
  currentCoffeeCount.innerHTML = coffeeCount;
};


// * Loop though to get total current Coffee per Second   
function updateCoffeePerSec () {
  let newCoffeeSecSum = 0;
    for (let i = 0; i < producers.length; i++) {
      newCoffeeSecSum += producers[i].ttlCoffeePerSecond();
    };
  setInterval(function () {
    coffeeCount += newCoffeeSecSum;
    currentCoffeeCount.innerHTML = coffeeCount;
    showProducers();
  }, 1000);   
  ttlCoffeeSec.innerHTML = newCoffeeSecSum;
  return newCoffeeSecSum;
};
