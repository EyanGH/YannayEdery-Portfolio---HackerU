document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault(); 

    const email = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    // קוד כניסה לדוגמא למערכת האדמין
    const adminEmail = 'admin@admin.com';
    const adminPassword = 'admin';

    // ולידציה
    if (email === '' || password === '') {
        alert('Please fill in all fields');
        return;
    }

    // בדיקת אימייל וסיסמא לאדמין
    if (email === adminEmail && password === adminPassword) {
        // העברה לדף האדמין
        window.location.href = 'admin.html';
    } else {
        // הודעה במידה והשם משתמש \ סיסמא לא נכונים
        alert('Invalid credentials');
    }

    // ניקוי הלוג-אין
    document.getElementById('loginForm').reset();
});
