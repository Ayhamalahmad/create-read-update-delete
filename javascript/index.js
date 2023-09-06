// Buttons
let addUserBtn = document.querySelector(".add-user");
let saveBtn = document.querySelector(".save");
let deleteBtn = document.querySelector(".delete-btn");
let updateBtn = document.querySelector(".update-btn");
// Inputs
let userNformationInputs = document.querySelectorAll(".user-information input");
// add User Btn
addUserBtn.addEventListener("click", (e) => {
  e.preventDefault();
});
// save Btn
saveBtn.addEventListener("click", (e) => {
  e.preventDefault();
  // Get a reference to the table body where you want to append the data
  const tableBody = document.querySelector(".table tbody");
  // Create a new table row
  const newRow = document.createElement("tr");
  // Add Unique ID
  newRow.setAttribute("id", Date.now());
  // Create a new table header cell for the ID
  const idCell = document.createElement("th");
  idCell.textContent = Date.now(); // generate a unique ID
  // Append the ID cell to the new row
  newRow.appendChild(idCell);
  // Iterate through the userNformationInputs and create table data cells
  userNformationInputs.forEach((input) => {
    const newCell = document.createElement("td");
    newCell.textContent = input.value;
    newRow.appendChild(newCell);
  });
  // Create Operations th
  const OperationsCell = document.createElement("th");
  // Create Operations Conatiner
  const OperationsContainer = document.createElement("div");
  // Add class TO OperationsContainer
  OperationsContainer.classList.add("operations");
  // Create Update Button
  const updateBtn = document.createElement("button");
  // Add Text To The Button
  updateBtn.textContent = "update";
  // Add Class Nmae To updateBtn
  updateBtn.classList.add("update-btn");
  updateBtn.classList.add("btn");
  // Add updateBtn To   OperationsContainer
  OperationsContainer.append(updateBtn);
  // Create Delete Button
  const deleteBtn = document.createElement("button");
  // Add Text To The Button
  deleteBtn.textContent = "Delete";
  // Add Class Nmae To deleteBtn
  deleteBtn.classList.add("delete-btn");
  deleteBtn.classList.add("btn");
  // Add deleteBtn To   OperationsContainer
  OperationsContainer.append(deleteBtn);
  // Add OperationsCell To newRow
  OperationsCell.appendChild(OperationsContainer);
  // Add OperationsCell To newRow
  newRow.appendChild(OperationsCell);

  tableBody.appendChild(newRow);
});
// Add a click event listener to the <tbody> element of the table
document.querySelector(".table tbody").addEventListener("click", (ele) => {
  // Check if the clicked element has the "delete-btn" class
  if (ele.target.classList.contains("delete-btn")) {
    // Find the closest <tr> element (table row) that contains the clicked element
    const row = ele.target.closest("tr");
    // Get the ID attribute value of the row
    const rowId = row.getAttribute("id");
    // Log the ID of the row to the console
    console.log("Row ID:", rowId);
    // Get a reference to the row element using its ID
    const rowEle = document.getElementById(rowId);
    // Log the row element to the console
    console.log(rowEle);
    // Remove (delete) the row element from the DOM
    rowEle.remove();
  }

  // Update
  if(ele.target.classList.contains("update")){
       // Find the closest <tr> element (table row) that contains the clicked element
       const row = ele.target.closest("tr");
  }
});
