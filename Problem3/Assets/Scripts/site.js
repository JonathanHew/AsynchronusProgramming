const userName = document.createElement("p");
const uname = document.createElement("p");
const email = document.createElement("p");
const ulocation = document.createElement("p");
const gists = document.createElement("p");

let searchValidation = () => {
  removeData();
  const searchValue = document.getElementById("searchValue");

  fetch(`https://api.github.com/users/${searchValue.value}`)
  .then((response) => {
    if (response.ok) {
      return response.json();
    } else {
      throw new Error("NETWORK RESPONSE ERROR");
    }
  })
  .then(data => {
    console.log(data);
    displayUser(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));
}


function displayUser(data) {
  const user = data;
  const image = document.getElementById("image");
  const usernameDiv = document.getElementById("usernameDiv");
  const nameDiv = document.getElementById("nameDiv");
  const emailDiv = document.getElementById("emailDiv");
  const locationDiv = document.getElementById("locationDiv");
  const gistsDiv = document.getElementById("gistsDiv");

  //setting user image
  const userImage = user.avatar_url;
  image.src = userImage

  //setting username
  userName.innerHTML = user.login;
  usernameDiv.appendChild(userName);

  //setting name
  uname.innerHTML = user.name;
  nameDiv.appendChild(uname);

  //setting email
  if(user.email == null)
  {
    email.innerHTML = "null";
  }
  else
  {
    email.innerHTML = user.email;
  }
  emailDiv.appendChild(email);

  //setting location
  ulocation.innerHTML = user.location;
  locationDiv.appendChild(ulocation);

  //setting gists
  gists.innerHTML = user.public_gists;
  gistsDiv.appendChild(gists);
  
}

function removeData() {
  image.src = "Assets/Images/defualt.png";
  userName.innerHTML = "";
  uname.innerHTML = "";
  email.innerHTML = "";
  ulocation.innerHTML = "";
  gists.innerHTML = "";
}