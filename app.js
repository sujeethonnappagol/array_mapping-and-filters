// Array Mapping & Filters

// let arr=[1,2,3,4,5,6,7,8,9,10];
// for(let i=0;i<arr.length;i++){
//     console.log(arr[i]*2);
// }
// arr.forEach((n)=>{
//     console.log(n*2);
// })

// a=arr.map(function(n){
//     return(n*2);
// })
// console.log(a);

// a=arr.map(n => n*n);
// console.log(a);

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

