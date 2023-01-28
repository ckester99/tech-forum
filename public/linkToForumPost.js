const posts = document.querySelectorAll(".forum-post");
posts.forEach((post) => {
    post.addEventListener("click", () => {
        document.location.replace(`/forum-post/${post.getAttribute("post")}`);
    });
});
