# Tech Forum

![image](https://user-images.githubusercontent.com/43022124/215624330-ae1d5346-374a-4a99-9fe4-3a0d9141d25f.png)

## [Link to Deployed Application](https://tech-forum.herokuapp.com/home)

## Purpose

I built this project to practice building full stack CMS style applications with user auth and a relational database.

I used a MVC architecture with using the following technologies:
- mySQL for the database
- sequelize for object relational mapping
- express-sessions for user authentication
- bcrypt to encrypt user passwords
- handlebars as the templating engine
- express for the backend API
- tailwindCSS

## Functional Description

Tech-forum is an online message board for discussing coding technologies. Users are able to view the forum while logged out, but will be redirected to the login/signup page while trying to add new posts or comments.

The home page shows all of the forum posts sorted by age. The user can view a post and all of the posts comments by clicking on the post title.

Once signed in, the user has access to a dashboard where they can view all of their posts and comments, and click on the titles to view the original posts or click on the trashcan icon to delete their post or comment.

## Future Development Plans:
I plan on adding the following features:
- Ability to update posts and comments (API supports this, but frontend doesn't)
- Adding an upvote and downvote system to posts and comments
