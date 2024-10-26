
// handle this end point with XMLHttpRequest

// handle this end point with promises

// handle the case of race condition

/*   FETCHING ONE 


const url = 'https://api.chucknorris.io/jokes/random';

// Select the button and the display div
const displayJoke = document.getElementById('display-joke');
const getJokeBtn = document.getElementById('getJoke');

// Function to fetch and display a joke
const fetchJoke = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayJoke.textContent = data.value; // Display the joke
  } catch (error) {
    displayJoke.textContent = 'Oops! Could not fetch a joke. Try again later.';
    console.error('Error fetching joke:', error);
  }
};

// Add event listener to the button
getJokeBtn.addEventListener('click', fetchJoke);


*/


const url = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

// Select the button and the display div
const displayJoke = document.getElementById('display-joke');
const getJokeBtn = document.getElementById('getJoke');

// Function to fetch and display a joke
const fetchJoke = async () => {
  try {
    const response = await fetch(url);
    const data = await response.json();
    displayJoke.textContent = data.joke; // Display the joke
  } catch (error) {
    displayJoke.textContent = 'Oops! Could not fetch a joke. Try again later.';
    console.error('Error fetching joke:', error);
  }
};

// Add event listener to the button
getJokeBtn.addEventListener('click', fetchJoke);



