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

let men = members.filter(user => user.name)
console.log(men)
let a = members.filter(user => user.gender =='male');
// console.log(a);
let usernames = a.map(user => user.name);
console.log(usernames);


let agegroup = members.filter(user => user.age>30)
let names = agegroup.map(user => user.name)
console.log(names);

                                  chaining methods:-
let gender = members.filter(user => user.gender == 'female').map(user => user.name );
console.log(gender)

const members = [
    { name: "Alice", email: "alice@example.com", age: 28, salary: 50000, gender: "Female" },
    { name: "Bob", email: "bob@example.com", age: 32, salary: 60000, gender: "Male" },
    { name: "Charlie", email: "charlie@example.com", age: 25, salary: 45000, gender: "Male" },
    { name: "David", email: "david@example.com", age: 35, salary: 70000, gender: "Male" },
    { name: "Eva", email: "eva@example.com", age: 30, salary: 55000, gender: "Female" },
    { name: "Frank", email: "frank@example.com", age: 27, salary: 48000, gender: "Male" },
    { name: "Grace", email: "grace@example.com", age: 29, salary: 52000, gender: "Female" },
    { name: "Hannah", email: "hannah@example.com", age: 33, salary: 63000, gender: "Female" },
    { name: "Ian", email: "ian@example.com", age: 31, salary: 59000, gender: "Male" },
    { name: "Jack", email: "jack@example.com", age: 26, salary: 47000, gender: "Male" }
];

let FemaleSalary = members.filter(user => user.gender == "Female").filter(user => user.salary > 50000).map(user => user.name);
console.log(FemaleSalary);


const movies = [
    {
      title: "The Dark Knight",
      genre: "Action",
      year: 2008,
      imdbRating: 9.0,
      actors: ["Christian Bale", "Heath Ledger", "Michael Caine"]
    },
    {
      title: "Inception",
      genre: "Thriller",
      year: 2010,
      imdbRating: 8.8,
      actors: ["Leonardo DiCaprio", "Joseph Gordon-Levitt", "Ellen Page"]
    },
    {
      title: "Shawshank Redemption",
      genre: "Drama",
      year: 1994,
      imdbRating: 9.3,
      actors: ["Tim Robbins", "Morgan Freeman"]
    },
    {
      title: "Pulp Fiction",
      genre: "Crime",
      year: 1994,
      imdbRating: 8.9,
      actors: ["John Travolta", "Uma Thurman", "Samuel L. Jackson"]
    },
    {
      title: "The Godfather",
      genre: "Drama",
      year: 1972,
      imdbRating: 9.2,
      actors: ["Marlon Brando", "Al Pacino"]
    },
    {
      title: "The Matrix",
      genre: "Action",
      year: 1999,
      imdbRating: 8.7,
      actors: ["Keanu Reeves", "Laurence Fishburne", "Carrie-Anne Moss"]
    },
    {
      title: "Forrest Gump",
      genre: "Drama",
      year: 1994,
      imdbRating: 8.8,
      actors: ["Tom Hanks", "Robin Wright", "Gary Sinise"]
    },
    {
      title: "The Silence of the Lambs",
      genre: "Thriller",
      year: 1991,
      imdbRating: 8.6,
      actors: ["Jodie Foster", "Anthony Hopkins"]
    },
    {
      title: "The Shawshank Redemption",
      genre: "Drama",
      year: 1994,
      imdbRating: 9.3,
      actors: ["Tim Robbins", "Morgan Freeman"]
    },
    {
      title: "The Departed",
      genre: "Crime",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
    },
    {
      title: "The Prestige",
      genre: "Mystery",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Christian Bale", "Hugh Jackman", "Scarlett Johansson"]
    },
    {
      title: "The Hangover",
      genre: "Comedy",
      year: 2009,
      imdbRating: 7.7,
      actors: ["Bradley Cooper", "Ed Helms", "Zach Galifianakis"]
    },
    {
      title: "Die Hard",
      genre: "Action",
      year: 1988,
      imdbRating: 8.2,
      actors: ["Bruce Willis", "Alan Rickman"]
    },
    {
      title: "Fight Club",
      genre: "Drama",
      year: 1999,
      imdbRating: 8.8,
      actors: ["Brad Pitt", "Edward Norton", "Helena Bonham Carter"]
    },
    {
      title: "Gladiator",
      genre: "Action",
      year: 2000,
      imdbRating: 8.5,
      actors: ["Russell Crowe", "Joaquin Phoenix"]
    },
    {
      title: "The Social Network",
      genre: "Biography",
      year: 2010,
      imdbRating: 7.7,
      actors: ["Jesse Eisenberg", "Andrew Garfield", "Justin Timberlake"]
    },
    {
      title: "The Shining",
      genre: "Horror",
      year: 1980,
      imdbRating: 8.4,
      actors: ["Jack Nicholson", "Shelley Duvall"]
    },
    {
      title: "The Departed",
      genre: "Crime",
      year: 2006,
      imdbRating: 8.5,
      actors: ["Leonardo DiCaprio", "Matt Damon", "Jack Nicholson"]
    },
    {
      title: "The Revenant",
      genre: "Adventure",
      year: 2015,
      imdbRating: 8.0,
      actors: ["Leonardo DiCaprio", "Tom Hardy"]
    },
    {
      title: "The Usual Suspects",
      genre: "Crime",
      year: 1995,
      imdbRating: 8.5,
      actors: ["Kevin Spacey", "Gabriel Byrne", "Benicio Del Toro"]
    },
    {
      title: "Interstellar",
      genre: "Sci-Fi",
      year: 2014,
      imdbRating: 8.6,
      actors: ["Matthew McConaughey", "Anne Hathaway", "Jessica Chastain"]
    }
  ];


  
let only = movies.map( user => ({
    title: user.title,
    rating: user.imdbRating
}) )
console.log(only);

let action = movies.filter(movie =>movie.year >2000)
console.log(action);

let action = movies.filter( movie => movie.genre === "Drama" && movie.imdbRating >8.5)
console.log(action)

let triller = movies.filter( user => user.genre==="Thriller" && user.actors === " Leonardo DiCaprio.")
console.log(triller)

const actionLeoMovies = movies
  .filter(
    movie => 
      movie.genre === "Action" && 
      movie.actors.includes("Leonardo DiCaprio") // check if Leonardo is in actors array
  )

console.log(actionLeoMovies);

const dramaTimRobbins = movies
  .filter(movie => 
    movie.genre === "Drama" && 
    movie.actors.includes("Tim Robbins")
  )
  .map(movie => ({
    title: movie.title,
    imdbRating: movie.imdbRating
  }));

console.log(dramaTimRobbins);

- Chain operations to find all drama movies featuring Christian Bale.
- Chain operations to find all drama movies featuring Tim Robbins.


let dra = movies
  .filter(user => user.genre === "Drama" && user.actors.includes("Christian Bale"))
  .map(user => user.title);

console.log(dra);
