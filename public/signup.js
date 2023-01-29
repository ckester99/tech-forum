const signup = async (event) => {
    event.preventDefault();
    const username = document.querySelector("#signup-username").value.trim();
    const password = document.querySelector("#signup-password").value.trim();

    if (username && password) {
        const response = await fetch("/api/user/", {
            method: "POST",
            body: JSON.stringify({ username, password }),
            headers: { "Content-Type": "application/json" },
        });

        if (response.ok) {
            await fetch("/api/user/login", {
                method: "POST",
                body: JSON.stringify({ username, password }),
                headers: { "Content-Type": "application/json" },
            }).then(() => document.location.replace("/dashboard"));
        } else {
            alert("Failed to sign up");
        }
    } else alert("No username or password!");
};

document.querySelector(".signup-form").addEventListener("submit", signup);
