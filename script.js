document.addEventListener('DOMContentLoaded', function () {
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const responseDiv = document.getElementById('response');
    
    const apiUrl = 'https://logindatabase--krakenvajraa.repl.co'; // Your flask app's URL

    // Function to display messages in the responseDiv
    function displayMessage(message) {
        responseDiv.textContent = message;
    }

    loginForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const loginEmail = document.getElementById('loginEmail').value;
        const loginPassword = document.getElementById('loginPassword').value;

        fetch(`${apiUrl}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: loginEmail, password: loginPassword }),
        })
        .then((response) => response.json())
        .then((data) => {
            displayMessage(data.message);
        })
        .catch((error) => {
            displayMessage('Error: ' + error.message);
        });
    });

    signupForm.addEventListener('submit', function (e) {
        e.preventDefault();

        const signupEmail = document.getElementById('signupEmail').value;
        const signupPassword = document.getElementById('signupPassword').value;

        fetch(`${apiUrl}/signup`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email: signupEmail, password: signupPassword }),
        })
        .then((response) => response.json())
        .then((data) => {
            displayMessage(data.message);
        })
        .catch((error) => {
            displayMessage('Error: ' + error.message);
        });
    });
});
