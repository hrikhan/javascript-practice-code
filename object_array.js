let users = [
    { id: 1, name: "hridoy", age: 20 },
    { id: 2, name: "khan ", age: 20 },
    { id: 2, name: "khan ", age: 27 }
];
//find user 
const user = users.find((u) => u.id === 1);
//filter user

const adult = users.filter((u) => u.age >= 22);
// user added
users.push({ id: 3, name: "c", age: 23 });

console.log(user);
console.log(adult);
console.log(users);

