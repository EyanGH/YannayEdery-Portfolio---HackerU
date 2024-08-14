document.getElementById('registerForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // ולידציה
    if (username === '' || email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // אישור כניסה במידה ונכון
    alert('Registration successful!');
    


    // ניקוי הדף
    document.getElementById('registerForm').reset();
});
