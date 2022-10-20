let form = document.getElementById("form");
let contactName = document.getElementById("contactName");
let contactNumber = document.getElementById("contactNumber");
let contactEmail = document.getElementById("contactEmail");
let searchNumber = document.getElementById("searchNumber");
let msg = document.getElementById("msg");
let contactTable = document.getElementById("contactTable");

form.addEventListener("button", (e) => {
  e.preventDefault();
  formValidation();
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
  data["contactNumber"] = contactNumber.value;
  data["contactEmail"] = contactEmail.value;

  console.log(data);
  createContact();
};

let createContact = () => {
  // Create an empty <tr> element and add it to the 1st position of the table:
  const row = contactTable.insertRow(1);

  // Insert new cells (<td> elements) at the 1st and 2nd position of the "new" <tr> element:
  const cell1 = row.insertCell(0);
  const cell2 = row.insertCell(1);
  const cell3 = row.insertCell(2);

  // Add some text to the new cells:
  cell1.innerHTML = `${data.contactName}`;
  cell2.innerHTML = `${data.contactNumber}`;
  cell3.innerHTML = `${data.contactEmail}`;

  resetForm();
};

let resetForm = () => {
  contactName.value = "";
  contactNumber.value = "";
  contactEmail.value = "";
};
