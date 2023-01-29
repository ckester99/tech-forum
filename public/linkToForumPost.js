const posts = document.querySelectorAll(".forum-post");
posts.forEach((post) => {
    post.addEventListener("click", () => {
        document.location.replace(`/forum-post/${post.getAttribute("post")}`);
    });
});

const comments = document.querySelectorAll(".comment");
comments.forEach((comment) => {
    comment.addEventListener("click", () => {
        document.location.replace(`/forum-post/${comment.getAttribute("post-id")}`);
    });
});
