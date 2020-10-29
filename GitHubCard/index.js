/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from 'axios'
axios
  .get('https://api.github.com/users/brianreisman')

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = [];

function cardMaker(){
//creating elements
const divCard = document.createElement('div')
const image = document.createElement('img')
const cardInfo = document.createElement('div')
const h3Name = document.createElement('h3')
const pUsername = document.createElement('p')
const pLocation = document.createElement('p')
const pProfile = document.createElement('p')
const ahref = document.createElement('a')
const pFollowers = document.createElement('p')
const pFollowing = document.createElement('p')
const pBio = document.createElement('p')
//heirarchy
divCard.appendChild(image)
divCard.appendChild(cardInfo)
cardInfo.appendChild(h3Name)
cardInfo.appendChild(pUsername)
cardInfo.appendChild(pLocation)
cardInfo.appendChild(pProfile)
pProfile.appendChild(ahref)
cardInfo.appendChild(pFollowers)
cardInfo.appendChild(pFollowing)
cardInfo.appendChild(pBio)
//add class and attributes
divCard.classList('card')
cardInfo.classList('card-info')
h3Name.classList('name')
pUsername.classList('username')

return divCard
}

console.log('hi')

/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/




/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
