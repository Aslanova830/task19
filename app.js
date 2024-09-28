//task1
console.log("Hello world")


//task2
for (let i = 1, count = 0; count < 10; i++) {
    if (i % 2 === 0) {
        console.log(i);
        count++;
    }
}


//task3
function Numbers(a, b) {
    return a + b;
}


let sum = Numbers(4, 6);  
console.log("toplama",sum);

const number = (a, b) => a * b;


let vurma = number(4, 6);  
console.log("vurma",vurma);

//task4

const numbers = [6, 4, 8, 12, 15, 2, 1, 10];

const vurulanededler = numbers.map(num => num * 2);
console.log("2-ye vurulduqda", vurulanededler);

const filteredNumbers = vurulanededler.filter(num => num > 10);
console.log("10-dan böyük", filteredNumbers);

//task5
let user = {
    name: "Lale",
    age: 13
  };
  //task6

const changeColorButton = document.getElementById('changeColorButton');
const myParagraph = document.getElementById('myParagraph');

changeColorButton.addEventListener('click', function() {
   
    myParagraph.style.color = getRandomColor();
});


function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

//task7

function fetchUserData() {
   
    fetch('https://randomuser.me/api/')
      .then(response => response.json())  
      .then(data => {
        const user = data.results[0];
       
        const userInfoHTML = `
          <h2>${user.name.first} ${user.name.last}</h2>
          <p>Email: ${user.email}</p>
          <img src="${user.picture.large}" alt="Profile Picture" />
        `;
  
        
        document.getElementById('user-info').innerHTML = userInfoHTML;
      })
      .catch(error => {
        console.error('Error fetching user data:', error);
        document.getElementById('user-info').innerHTML = `<p>Error fetching data.</p>`;
      });
  }
  
  //task8
  const person = {
    name: 'John Doe',
    age: 30,
    email: 'johndoe@example.com'
  };
  
 
  const { name, age, email } = person;
  
  console.log(name);  
  console.log(age);   
  console.log(email); 

  //task9
  class Person {
    constructor(name, age) {
      this.name = john;
      this.age = 24;
    }
  
    displayDetails() {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    }
  }
