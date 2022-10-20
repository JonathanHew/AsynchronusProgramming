let form = document.getElementById("form");
let contactName = document.getElementById("contactName");
let contactNumber = document.getElementById("contactNumber");
let contactEmail = document.getElementById("contactEmail");
let searchNumber = document.getElementById("searchNumber");
let msg = document.getElementById("msg");
let contactTable = document.getElementById("contactTable");
let input = document.getElementById("searchNumber");
let noResult = document.getElementById("noResult");

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
  else if(/^[a-zA-Z\s]+$/.test(contactName.value) == false)
  {
    msg.innerHTML += `<p>Name can only contain characters!</p>`;
    valid = false;
  }
  else if(contactName.value.length > 20)
  {
    msg.innerHTML += `<p>Name cannot be more than 20 characters!</p>`;
    valid = false;
  }


  if (contactNumber.value === "") {
    msg.innerHTML += `<p>Number cannot be blank!</p>`;
    valid = false;
  }
  else if(/^[0-9]*$/.test(contactNumber.value) == false)
  {
    msg.innerHTML += `<p>Number can only contain numbers!</p>`;
    valid = false;
  }
  else if(contactNumber.value.length != 10)
  {
    msg.innerHTML += `<p>Number cmust be 10 digits long!</p>`;
    valid = false;
  }

  if (contactEmail.value === "") {
    msg.innerHTML += `<p>Email cannot be blank!</p>`;
    valid = false;
  }
  else if(/^\S+@\S+\.\S+$/.test(contactEmail.value) == false)
  {
    msg.innerHTML += `<p>Email is not in the correct format!</p>`;
    valid = false;
  }
  else if(contactEmail.value.length > 40)
  {
    msg.innerHTML += `<p>Email should be less than 40 characters!</p>`;
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
  const row = contactTable.insertRow(-1);

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

let sortTable = (n) => {
  let rows = 0;
  let switching = 0;
  let i = 0;
  let x =0;
  let y = 0;
  let shouldSwitch = 0;
  let dir = 0;
  let switchCount =0;

  switching = true; 
  dir = "asc";

  //loop until no switching is done
  while(switching)
  {
    //start with no switching done
    switching = false; 
    rows = contactTable.rows;

    console.log(rows);

    for(i=1;i<(rows.length -1);i++)
    {
      shouldSwitch = false;
      //compare current element and next eleemnt
      x = rows[i].getElementsByTagName("TD")[n];
      y = rows[i + 1].getElementsByTagName("TD")[n];

      //check if the 2 rows should swap place
      if(dir == "asc"){
        if(x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase())
        {
          shouldSwitch = true;
          break;
        }
      }
      else{
        if(x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase())
        {
          shouldSwitch = true;
          break;
        }
      }
    }
    if(shouldSwitch)
    {
      rows[i].parentNode.insertBefore(rows[i+1], rows[i]);
      switching = true;
      switchCount++;
    }
    else
    {
      if(switchCount == 0 && dir == "asc")
      {
        dir = "desc";
        switching = true;
      }
    }
  }
}

let filterSearch = () => {
  let tr = contactTable.getElementsByTagName("tr");
  let td = 0;
  let i =0;
  let text = 0;
  let filter = 0;
  let hits = 0;

  filter = input.value.toUpperCase();

  for(i=0;i<tr.length;i++)
  {
    td = tr[i].getElementsByTagName("td")[1];
    if(td)
    {
      text = td.textContent || td.innerText;

      if(text.toUpperCase().indexOf(filter) >- 1)
      {
        tr[i].style.display ="";
        hits++;
      }
      else
      {
        tr[i].style.display = "none";
      }
    }
  }

  if(hits == 0)
  {
    noResult.style.display = "block";
  }
  else
  {
    noResult.style.display = "none";
  }
}