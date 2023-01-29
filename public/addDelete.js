fetch("/api/user/id", {
    method: "GET",
    headers: { "Content-Type": "application/json" },
}).then((res) => {
    res.json().then((master_UID) => {
        const forumPosts = document.querySelectorAll(".forum-post");
        forumPosts.forEach((post) => {
            const posterId = post.getAttribute("user-id");
            if (master_UID == posterId) {
                const contentDiv = post.querySelector(".content-display");

                const trashIcon = document.createElement("i");
                trashIcon.classList.add(
                    "fa-regular",
                    "fa-trash-can",
                    "text-xl",
                    "absolute",
                    "bottom-0",
                    "right-0",
                    "mr-3.5",
                    "mb-3.5",
                    "hover:text-green-300",
                    "hover:cursor-pointer",
                    "delete-post"
                );
                trashIcon.addEventListener("click", () => {
                    fetch("/forum-post/" + post.getAttribute("post"), { method: "DELETE" });
                    location.reload();
                });
                contentDiv.appendChild(trashIcon);
            }
        });

        const comments = document.querySelectorAll(".comment");
        comments.forEach((comment) => {
            const posterId = comment.getAttribute("user-id");
            if (master_UID == posterId) {
                const contentDiv = comment.querySelector(".content-display");

                const trashIcon = document.createElement("i");
                trashIcon.classList.add(
                    "fa-regular",
                    "fa-trash-can",
                    "text-xl",
                    "absolute",
                    "bottom-0",
                    "right-0",
                    "mr-3.5",
                    "mb-3.5",
                    "hover:text-green-300",
                    "hover:cursor-pointer",
                    "delete-comment"
                );
                trashIcon.addEventListener("click", () => {
                    fetch("/api/comment/" + comment.getAttribute("comment-id"), { method: "DELETE" });
                    location.reload();
                });
                contentDiv.appendChild(trashIcon);
            }
        });
    });
});

//'<i class="fa-regular fa-trash-can text-xl absolute bottom-0 right-0 mr-3.5 mb-3.5 hover:text-green-300 hover:cursor-pointer delete-comment"></i>'
