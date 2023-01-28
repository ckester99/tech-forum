const loginFormHandler = async (event) => {
    event.preventDefault();
    console.log("here");
    const username = document.querySelector("#login-username").value.trim();
    const password = document.querySelector("#login-password").value.trim();

    if (username && password) {
        const response = await fetch("/api/user/login", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            document.location.replace("/");
        } else {
            alert("Failed to log in");
        }
    }
};

document.querySelector(".login-form").addEventListener("submit", loginFormHandler);
