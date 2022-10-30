const userName = document.createElement("p");
const uname = document.createElement("p");
const email = document.createElement("p");
const ulocation = document.createElement("p");
const gists = document.createElement("p");
const errMsg = document.getElementById("errMsg");
let searchValue = document.getElementById("searchValue");
const repoArea = document.getElementById("repoArea");
const repo = document.getElementsByClassName("repo");

let searchValidation = () => {
  hideError();
  removeData();
  removeRepos();

  fetch(`https://api.github.com/users/${searchValue.value}`)
    .then((response) => {
      if (response.ok) {
        return response.json();
      } else {
        showError();
        throw new Error("NETWORK RESPONSE ERROR");
      }
    })
    .then((data) => {
      console.log(data);
      displayUser(data);
      displayRepos();
      searchValue.value = "";
    })
    .catch((error) => console.error("FETCH ERROR:", error));
};

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
  image.src = userImage;

  //setting username
  userName.innerHTML = user.login;
  usernameDiv.appendChild(userName);

  //setting name
  uname.innerHTML = user.name;
  nameDiv.appendChild(uname);

  //setting email
  if (user.email == null) {
    email.innerHTML = "null";
  } else {
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

function displayRepos() {
  let repos;

  fetch(`https://api.github.com/users/${searchValue.value}/repos`)
    .then((res) => res.json())
    .then((data) => {
      repos = data;
    })
    .then(() => {
      console.log(repos);
      repos.forEach(repo => {
        const repoName = repo.name;
        const repoDesc = repo.description;
        const newRepo = document.createElement("div");
        newRepo.className = "repo";
        newRepo.innerHTML = `
          <h3>${repoName}</h3>
          <p>${repoDesc}</p>
        `;
        repoList.appendChild(newRepo);
      });
    });
}

function removeData() {
  image.src = "Assets/Images/defualt.png";
  userName.innerHTML = "";
  uname.innerHTML = "";
  email.innerHTML = "";
  ulocation.innerHTML = "";
  gists.innerHTML = "";
}

function removeRepos() {
  repoList.innerHTML = "";
}

function showError() {
  errMsg.style.display = "block";
}

function hideError() {
  errMsg.style.display = "none";
}
