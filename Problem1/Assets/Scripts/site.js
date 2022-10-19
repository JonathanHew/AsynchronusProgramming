let form = document.getElementById("form");
let contactName = document.getElementById("contactName");
let contactNumber = document.getElementById("contactNumber");
let contactEmail = document.getElementById("contactEmail");
let searchNumber = document.getElementById("searchNumber");
let msg = document.getElementById("msg");

form.addEventListener("submit", (e) => {
  formValidation();
  return false;
});

let formValidation = () => {
  msg.innerHTML = "";
  let valid = true;

  if (contactName.value === "") {
    msg.innerHTML += `<p>Name cannot be blank!</p>`;
    valid = false;
  }

  if (contactNumber.value === "") {
    msg.innerHTML += `<p>Number cannot be blank!</p>`;
    valid = false;
  }

  if (contactEmail.value === "") {
    msg.innerHTML += `<p>Email cannot be blank!</p>`;
    valid = false;
  }

  if (valid === true) {
    console.log("Success!!");
    msg.innerHTML = "";
    acceptData();
  } else {
    return false;
  }
};

let data = {};

let acceptData = () => {
  data["contactName"] = contactName.value;
  data["contactNumber"] = contactName.value;
  data["contactEmail"] = contactName.value;

  console.log(data);
};
