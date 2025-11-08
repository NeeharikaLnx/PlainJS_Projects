const fruits =[{name:"apple" ,color:"red" ,calories:95},
    {name:"orange" ,color:"orange" ,calories:45}
];


fruits.push({name:"grapes" ,color:"purple" ,calories:43});

console.log(fruits[2].color);

//forEach()

fruits.forEach(fruit => console.log(fruit.calories));

fruits.forEach(fruit => console.log(fruit.name) );

const fruitcal = fruits.map(fruit => fruit.calories);
console.log(fruitcal);


//filter()


const orangeFruits =fruits.filter(fruit => fruit.color === "orange");
const lowcalfruit = fruits.filter(fruit => fruit.calories <100);

console.log(orangeFruits);

console.log(lowcalfruit);




