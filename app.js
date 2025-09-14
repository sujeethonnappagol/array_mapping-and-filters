Array Mapping & Filters

let arr=[1,2,3,4,5,6,7,8,9,10];
for(let i=0;i<arr.length;i++){
    console.log(arr[i]*2);
}
arr.forEach((n)=>{
    console.log(n*2);
})

a=arr.map(function(n){
    return(n*2);
})
console.log(a);

a=arr.map(n => n*n);
console.log(a);

const members = [
    { name: "Alice Johnson", email: "alice.johnson@example.com", age: 28, salary: 55000 },
    { name: "Bob Smith", email: "bob.smith@example.com", age: 34, salary: 62000 },
    { name: "Charlie Brown", email: "charlie.brown@example.com", age: 25, salary: 48000 },
    { name: "Diana Prince", email: "diana.prince@example.com", age: 30, salary: 70000 },
    { name: "Ethan Hunt", email: "ethan.hunt@example.com", age: 38, salary: 75000 },
    { name: "Fiona Gallagher", email: "fiona.gallagher@example.com", age: 27, salary: 53000 }
];
a=members.map(name => name.salary+ " " + name.name)
console.log(a);


filters:-

let arr=[1,2,3,4,5,6,7,8,9,10];
let nums=arr.filter(n => n%2!==0);  // filter odd numbers
let num=arr.filter(n => n%2==0);  // filter even numbers
console.log(nums);
console.log(num);


const members = [
    { name: "Alice Johnson", email: "alice.johnson@example.com", age: 28, salary: 55000, gender :'male' },
    { name: "Bob Smith", email: "bob.smith@example.com", age: 34, salary: 62000,gender:'female'  },
    { name: "Charlie Brown", email: "charlie.brown@example.com", age: 25, salary: 48000, gender:'male' },
    { name: "Diana Prince", email: "diana.prince@example.com", age: 30, salary: 70000, gender:'female' },
    { name: "Ethan Hunt", email: "ethan.hunt@example.com", age: 38, salary: 75000, gender:'female'},
    { name: "Fiona Gallagher", email: "fiona.gallagher@example.com", age: 27, salary: 53000, gender:'male' }
];
let a=members.filter(n => n.gender=='male');
console.log(a);
let random = Math.floor(Math.random()*10);
console.log(members[random].name)
