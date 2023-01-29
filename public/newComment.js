const handleSubmit = async () => {
    try {
        const post_id = document.querySelector("#new-comment-form").getAttribute("post-id");
        const content = document.querySelector("#new-comment").value.trim();
        await fetch("/api/comment", {
            method: "POST",
            body: JSON.stringify({ content, post_id }),
            headers: { "Content-Type": "application/json" },
        });
    } catch (err) {
        alert("There was a problem submitting!");
    }
};

document.querySelector("#new-comment-form").addEventListener("submit", handleSubmit);
