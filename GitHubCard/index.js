/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
import axios from "axios";

const entryPoint = document.querySelector(".cards"); //this may not work due to hoisting
console.log(entryPoint);

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "brianreisman",
]; //followersArray.forEach()

followersArray.forEach((person) => {
  axios
    .get(`https://api.github.com/users/${person}`)
    .then((futureData) => {
      //best case
      const allData = futureData.data;
      const myCard = cardMaker(allData);
      entryPoint.appendChild(myCard);
    })
    .catch((drama) => {
      console.log("uh oh!", drama);
      debugger;
    });
});

/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3.
*/

/*
  STEP 4: Pass the data received from the Github API into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

function cardMaker(singleObj) {
  //creating elements
  const divCard = document.createElement("div");
  const image = document.createElement("img");
  const cardInfo = document.createElement("div");
  const h3Name = document.createElement("h3");
  const pUsername = document.createElement("p");
  const pLocation = document.createElement("p");
  const pProfile = document.createElement("p");
  const link = document.createElement("a"); ///
  const pFollowers = document.createElement("p");
  const pFollowing = document.createElement("p");
  const pBio = document.createElement("p");

  //wired them up
  divCard.appendChild(image);
  divCard.appendChild(cardInfo);
  cardInfo.appendChild(h3Name);
  cardInfo.appendChild(pUsername);
  cardInfo.appendChild(pLocation);
  cardInfo.appendChild(pProfile);
  pProfile.appendChild(link); ///
  cardInfo.appendChild(pFollowers);
  cardInfo.appendChild(pFollowing);
  cardInfo.appendChild(pBio);
  //add class and attributes
  divCard.classList.add("card");
  cardInfo.classList.add("card-info");
  h3Name.classList.add("name");
  pUsername.classList.add("username");
  image.setAttribute("src", singleObj.avatar_url);
  link.setAttribute("href", "https://github.com/BrianReisman"); ///

  // //textContent
  h3Name.textContent = singleObj.name;
  pUsername.textContent = singleObj.login;
  pLocation.textContent = `Location: ${singleObj.location}`;
  link.textContent = `Profile: ${singleObj.html_url}`;
  link.setAttribute("href", singleObj.html_url); ///
  pFollowers.textContent = `Followers: ${singleObj.followers}`;
  pFollowing.textContent = `Following: ${singleObj.following}`;
  pBio.textContent = `Bio: ${singleObj.bio}`;
  // //textContent
  // h3Name.textContent = 'singleObj.name'
  // pUsername.textContent = 'singleObj.login'
  // pLocation.textContent = `'Location: {singleObj.location}'`
  // link.textContent = '`Profile: ${singleObj.html_url}`'
  // link.setAttribute('href', singleObj.html_url)     ///
  // pFollowers.textContent = '`Followers: ${singleObj.followers}`'
  // pFollowing.textContent = '`Following: ${singleObj.following}`'
  // pBio.textContent = '`Bio: ${singleObj.bio}`'

  //return what you've made!
  console.log(divCard);
  return divCard;
}
console.log(cardMaker());

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
