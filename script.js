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

let producers = [
  {
    name: "Chemex",
    quantity: 1,
    coffeePerSecond: 1,
    cost: 10
  },
  {
    name: "French Press",
    quantity: 1,
    coffeePerSecond: 2,
    cost: 50
  },
  {
    name: "Mr. Coffee",
    quantity: 1,
    coffeePerSecond: 5,
    cost: 100
  }
];

chemexQuantity.innerHTML = producers[0].quantity;
chemexCoffeePerSecond.innerHTML = producers[0].coffeePerSecond;

frenchPressQuantity.innerHTML = producers[1].quantity;
frenchPressCoffeePerSecond.innerHTML = producers[1].coffeePerSecond;

mrCoffeeQuantity.innerHTML = producers[2].quantity;
mrCoffeeCoffeePerSecond.innerHTML = producers[2].coffeePerSecond;

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


btnOne.addEventListener('click', chooseProducerOne);
btnTwo.addEventListener('click', chooseProducerTwo);
btnThree.addEventListener('click', chooseProducerThree);

function chooseProducerOne () {
  if (coffeeCount >= producers[0].cost) {
    producers[0].quantity += 1;
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
    mrCoffeeQuantity.innerHTML = producers[2].quantity;
      if (coffeeCount > 0) {
        coffeeCount = coffeeCount - producers[2].cost;
      };
  } else {
    alert('NOT ENOUGH COFFEE!');
  };
  currentCoffeeCount.innerHTML = coffeeCount;
};
