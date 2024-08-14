function getUsers() {
    return JSON.parse(localStorage.getItem('users')) || [];
}

function saveUsers(users) {
    localStorage.setItem('users', JSON.stringify(users));
}

function displayUsers() {
    const userTableBody = document.querySelector("#user-list tbody");
    userTableBody.innerHTML = ""; 
    
    // Clear existing rows
    const users = getUsers();
    users.forEach((user, index) => {
        const row = document.createElement("tr");

        const usernameCell = document.createElement("td");
        usernameCell.textContent = user.username;
        row.appendChild(usernameCell);

        const emailCell = document.createElement("td");
        emailCell.textContent = user.email;
        row.appendChild(emailCell);

        const roleCell = document.createElement("td");
        roleCell.textContent = user.role;
        row.appendChild(roleCell);

        const actionsCell = document.createElement("td");
        const editButton = document.createElement("button");
        editButton.textContent = "Edit";
        editButton.addEventListener("click", () => editUser(index));
        actionsCell.appendChild(editButton);

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.addEventListener("click", () => deleteUser(index));
        actionsCell.appendChild(deleteButton);

        row.appendChild(actionsCell);
        userTableBody.appendChild(row);
    });
}

// Add new user
function addUser(event) {
    event.preventDefault(); 

    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const role = document.querySelector("#role").value;

    const users = getUsers();
    users.push({ username, email, role });
    saveUsers(users);

    displayUsers();
    document.querySelector("#addUserForm").reset(); 
}

// Edit user
function editUser(index) {
    const users = getUsers();
    const user = users[index];
    document.querySelector("#edit-username").value = user.username;
    document.querySelector("#edit-email").value = user.email;
    document.querySelector("#edit-role").value = user.role;

    document.querySelector("#editUserForm").onsubmit = function(event) {
        event.preventDefault();

        users[index].username = document.querySelector("#edit-username").value;
        users[index].email = document.querySelector("#edit-email").value;
        users[index].role = document.querySelector("#edit-role").value;

        saveUsers(users);
        displayUsers();
        document.querySelector("#editUserForm").reset();
    };
}

// Delete user
function deleteUser(index) {
    const users = getUsers();
    users.splice(index, 1);
    saveUsers(users);
    displayUsers();
}

// Event listeners
document.querySelector("#addUserForm").addEventListener("submit", addUser);

// Display users on page load
displayUsers();
