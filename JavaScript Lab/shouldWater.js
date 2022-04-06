// To-Do List
// Create a file called shouldWater.js
// Get two numbers as command line arguments - the first is a tree's life status ID, and the second is its dryness level.
// If the first argument is 0 AND the second argument is greater than 10, print the text WATER

const lifeStatus = Number(process.argv[2]);
const drynessLevel = Number(process.argv[3]);

if(lifeStatus==0 && drynessLevel>10){
    console.log("WATER")
};