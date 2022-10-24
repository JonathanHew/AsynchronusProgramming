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
    //displayUser(data)
  })
  .catch((error) => console.error("FETCH ERROR:", error));

  function displayUser(data) {
    const user = data;
    const app = document.getElementById("app");

    const userName = user.login;
    const heading = document.createElement("h1");
    heading.innerHTML = userName;
    app.appendChild(heading);
    
  }   