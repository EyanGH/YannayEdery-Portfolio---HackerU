
let users = [];


function displayUsers() {
    const userTableBody = document.querySelector("#user-list tbody");
    userTableBody.innerHTML = ""; 
    
    // ניקוי שורות קיימות

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

// הוספת משתמש חדש
function addUser(event) {
    event.preventDefault(); 

    const username = document.querySelector("#username").value;
    const email = document.querySelector("#email").value;
    const role = document.querySelector("#role").value;

    users.push({ username, email, role });
    displayUsers();

    document.querySelector("#addUserForm").reset(); 
    // איפוס הדף
}

// עריכת משתמשים
function editUser(index) {
    const user = users[index];
    document.querySelector("#edit-username").value = user.username;
    document.querySelector("#edit-email").value = user.email;
    document.querySelector("#edit-role").value = user.role;

    document.querySelector("#editUserForm").onsubmit = function(event) {
        event.preventDefault();

        users[index].username = document.querySelector("#edit-username").value;
        users[index].email = document.querySelector("#edit-email").value;
        users[index].role = document.querySelector("#edit-role").value;

        displayUsers();
        document.querySelector("#editUserForm").reset();
    };
}

// מחיקת משתמשים
function deleteUser(index) {
    users.splice(index, 1);
    displayUsers();
}


document.querySelector("#addUserForm").addEventListener("submit", addUser);

// תצוגה של משתמשים
displayUsers();
