fetch("https://api.github.com/users/jonathanhew")
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


function displayUser(data) {
  const user = data;
  const image = document.getElementById("image");
  const usernameDiv = document.getElementById("usernameDiv");
  const nameDiv = document.getElementById("nameDiv");
  const emailDiv = document.getElementById("emailDiv");
  const locationDiv = document.getElementById("locationDiv");
  const gistsDiv = document.getElementById("gistsDiv");

  const userImage = user.avatar_url;
  image.src = userImage

  const userName = document.createElement("p");
  userName.innerHTML = user.login;
  usernameDiv.appendChild(userName);

  const name = document.createElement("p");
  name.innerHTML = user.name;
  nameDiv.appendChild(name);

  const email = document.createElement("p");
  email.innerHTML = user.email;
  emailDiv.appendChild(email);

  const location = document.createElement("p");
  location.innerHTML = user.location;
  locationDiv.appendChild(location);

  const gists = document.createElement("p");
  gists.innerHTML = user.public_gists;
  gistsDiv.appendChild(gists);


  //const heading = document.createElement("h1");
  //heading.innerHTML = userName;
  //app.appendChild(heading);
  
}   