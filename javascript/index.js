// Buttons
let addUserBtn = document.querySelector(".add-user");
let saveBtn = document.querySelector(".save");
let updateBtn = document.querySelector(".update-btn");
let cancelBtn = document.querySelector(".c-cancel");
// Inputs
let userNformationInputs = document.querySelectorAll(".user-information input");
let iNmae = document.querySelector(".name");
let iEmail = document.querySelector(".email");
let iphone = document.querySelector(".phone");
let ipassword = document.querySelector(".password");
//
let table = document.querySelector("tbody");
let body = document.querySelector("body");
let container = document.querySelector(".container");
// masseges
let massege = document.querySelector(".massege");
let confrimDelete = document.querySelector(".confrim-delete");
//
let formData = {};
let recentlyCell = null;
let allIempty = false;
let confrimDelOp = false;
let rowEle;
// function get data from inputs
const getDataFromInputs = () => {
  formData["name"] = iNmae.value;
  formData["email"] = iEmail.value;
  formData["phone"] = iphone.value;
  formData["password"] = ipassword.value;
  return formData;
};
// Function to insert data into the table
const inserData = (data) => {
  let newRow = table.insertRow(table.lenght);
  let userId = newRow.insertCell(0);
  userId.textContent = Date.now();
  let userName = newRow.insertCell(1);
  userName.textContent = data.name;
  let userEmail = newRow.insertCell(2);
  userEmail.textContent = data.email;
  let userPhone = newRow.insertCell(3);
  userPhone.textContent = data.phone;
  let userPassword = newRow.insertCell(4);
  userPassword.textContent = data.password;
  // operations buttons
  let operations = newRow.insertCell(5);
  operations.classList.add("operations");
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-btn");
  deleteButton.classList.add("btn");
  deleteButton.textContent = "Delete";
  // Append the button element to the table cell
  operations.appendChild(deleteButton);

  const editeButton = document.createElement("button");
  editeButton.classList.add("edit-btn");
  editeButton.classList.add("btn");
  editeButton.textContent = "edit";
  // Append the button element to the table cell
  operations.appendChild(editeButton);
  // Add Unique ID
  newRow.setAttribute("id", Date.now());
};
// Function to reset input fields
const resetInputs = () => {
  iNmae.value = "";
  iEmail.value = "";
  iphone.value = "";
  ipassword.value = "";
};
// Function to populate input fields with data from the selected table row for editing
const populateEditFields = (td) => {
  recentlyCell = td.parentElement.parentElement;
  iNmae.value = recentlyCell.cells[1].textContent;
  iEmail.value = recentlyCell.cells[2].textContent;
  iphone.value = recentlyCell.cells[3].textContent;
  ipassword.value = recentlyCell.cells[4].textContent;
};
// Function to update the table row with the edited data
const upDate = () => {
  recentlyCell.cells[1].textContent = formData.name;
  recentlyCell.cells[2].textContent = formData.email;
  recentlyCell.cells[3].textContent = formData.phone;
  recentlyCell.cells[4].textContent = formData.password;
};
// Function to delete data from the table
const deleleData = (td) => {
  let row = td.parentElement.parentElement;
  table.deleteRow(row.rowIndex);
  resetInputs();
};
// Event listener for the "Save" button
saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  if (
    (iNmae.value.trim() !== "",
    iEmail.value.trim() !== "",
    iphone.value.trim() !== "",
    ipassword.value.trim() !== "")
  ) {
    allIempty = true;
    massege.classList.remove("active");
  } else {
    allIempty = false;
    massege.classList.add("active");
  }
  if (allIempty) {
    getDataFromInputs();
    if (recentlyCell == null) {
      inserData(formData);
    } else {
      upDate(formData);
      resetInputs();
      recentlyCell = null;
    }
    resetInputs();
  }
});
// Event listener for buttons inside the container
container.addEventListener("click", (event) => {
  if (event.target.classList.contains("c-btn")) {
    confrimDelOp = true;
  }
  if (event.target.classList.contains("edit-btn")) {
    populateEditFields(event.target);
  }
  if (event.target.classList.contains("delete-btn")) {
    body.classList.add("active");
    confrimDelete.classList.add("active");
    const row = event.target.closest("tr");
    // Get the ID attribute value of the row
    const rowId = row.getAttribute("id");
    // Get a reference to the row element using its ID
    rowEle = document.getElementById(rowId);
  }
  if (
    event.target.classList.contains("c-cancel") ||
    event.target.classList.contains("c-btn")
  ) {
    body.classList.remove("active");
    confrimDelete.classList.remove("active");
  }
  if (event.target.classList.contains("c-btn")) {
    // Remove (delete) the row element from the DOM
    rowEle.remove();
  }
});
