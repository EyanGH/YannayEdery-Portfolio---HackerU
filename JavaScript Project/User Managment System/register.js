document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // validation
    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // to check if the user already exists
    const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
    const userExists = existingUsers.some(user => user.username === username || user.email === email);

    if (userExists) {
        alert('Username or email already exists');
        return;
    }

    // to save the new user
    const newUser = { username, email, password };
    existingUsers.push(newUser);
    localStorage.setItem('users', JSON.stringify(existingUsers));

    alert('Registration successful!');

    // reset the form
    document.getElementById('registerForm').reset();
});

// Example of a login function
function login(username, password) {
    const users = JSON.parse(localStorage.getItem('users')) || [];
    const user = users.find(user => user.username === username && user.password === password);

    if (user) {
        alert('Login successful!');
        // Perform login actions (redirect to a dashboard)
    } else {
        alert('Invalid username or password');
    }
}
