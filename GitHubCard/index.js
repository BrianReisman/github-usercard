import axios from "axios";

const followersArray = [
  "tetondan",
  "dustinmyers",
  "justsml",
  "luishrd",
  "bigknell",
  "brianreisman",
];
followersArray.forEach((user) => {
  axios
    // .get(`https://api.github.com/users/brianreisman`)
    .get(`https://api.github.com/users/${user}`)
    .then((res) => {
      // console.log(res);
      Func(res.data);
    })
    .catch((error) => {
      console.log(error);
    });
});

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/

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

// const followersArray = [];

function Func(dataObj) {
  const divCard = document.createElement("div");
  divCard.classList.add("card");

  const image = document.createElement("img");
  image.setAttribute("src", dataObj.avatar_url);

  const divCardInfo = document.createElement("div");
  divCardInfo.classList.add("card-info");

  const h3 = document.createElement("h3");
  h3.classList.add("name");
  h3.textContent = dataObj.name;

  const pUsername = document.createElement("p");
  pUsername.classList.add("username");
  pUsername.textContent = dataObj.login;

  const pLocation = document.createElement("p");
  pLocation.textContent = dataObj.location;

  const pProfile = document.createElement("p");
  pProfile.textContent = "Profile:";

  const link = document.createElement("a");
  link.setAttribute("href", dataObj.html_url);
  link.textContent = dataObj.html_url;

  const pFollowers = document.createElement("p");
  pFollowers.textContect = dataObj.followers;

  const pFollowing = document.createElement("p");
  pFollowing.textContect = dataObj.following;

  const pBio = document.createElement("p");
  pBio.textContect = dataObj.bio;

  divCard.appendChild(image);
  divCard.appendChild(divCardInfo);
  divCardInfo.appendChild(h3);
  divCardInfo.appendChild(pUsername);
  divCardInfo.appendChild(pLocation);
  divCardInfo.appendChild(pProfile);
  divCardInfo.appendChild(pFollowers);
  divCardInfo.appendChild(pFollowing);
  divCardInfo.appendChild(pBio);
  pProfile.appendChild(link);
  // console.log(divCard);

  document.querySelector(".cards").appendChild(divCard);
}

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
