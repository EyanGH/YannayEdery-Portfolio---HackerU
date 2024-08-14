document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // admin credentials
    const adminEmail = 'admin@admin.com';
    const adminPassword = 'admin';

    // validation
    if (email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // check if the login is for admin
    if (email === adminEmail && password === adminPassword) {
        // redirect to admin page
        window.location.href = 'admin.html';
    } else {
        // check if user exists in local storage
        const users = JSON.parse(localStorage.getItem('users')) || [];
        const user = users.find(user => user.email === email && user.password === password);

        if (user) {
            alert('Login successful!');
            // redirect to user dashboard or homepage
            window.location.href = 'dashboard.html';
        } else {
            // invalid credentials
            alert('Invalid credentials');
        }
    }

    // clear login form
    document.getElementById('loginForm').reset();
});
