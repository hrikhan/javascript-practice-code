

const user = { name: "hridoy", age: 20 };
const { name, age } = user;

console.log(name);


//spread
const oldUser = {name : "A"};
const newUser = {...oldUser, age : 225}
console.log(oldUser),
console.log (newUser)


//spread
const old1 =[{name : "b"},
    {name : "c"}

] ;
const old2 = [{name : "y"},
    {name : "j"}

];
const new1 = [...old1, ...old2]
console.log(old1),
console.log (new1)

