# Members Only Clubhouse

## Table of Contents
- [Introduction](#introduction)
- [Assignment](#assignment)
- [Getting Started](#getting-started)
- [Deployment](#deployment)
- [Support Us](#support-us)
- [Footer](#footer)

## Introduction

Welcome to the Members Only Clubhouse project! In this endeavor, you will be crafting an exclusive online space where members can share anonymous posts. The twist is that within the clubhouse, members can identify the author of a post, but outsiders can only appreciate the story without knowing the writer's identity.

This project will not only leverage your authentication skills but also provide ample practice for database management. So, let's dive in!

## Assignment

### Database Setup
1. Devise the database models required for this project, including users with full names, usernames (using email), passwords, and membership status. Messages should have a title, timestamp, and text, with the database tracking the creator of each message.
2. Set up your MongoDB database and generate/create your project skeleton, incorporating the models designed in the previous step.

### User Authentication and Membership
3. Implement a signup form where users can register. Ensure to sanitize and validate form fields and secure passwords using bcrypt. Add a `confirmPassword` field and validate it with a custom validator.
4. Introduce a page for members to "join the club" by entering a secret passcode, updating their membership status upon correct entry.
5. Develop a login form using passport.js, as done in the previous assignment.

### Messaging System
6. When a user is logged in, provide a link to "Create a new message" visible only to logged-in users. Create the new message form.
7. Display all member messages on the home page, revealing the author and date only to other club members.

### Admin Functionality
8. Add an optional field called `Admin` to the user model. Enable users with `admin == true` to delete messages. Create a way to mark a user as an admin, either through a secret passcode page or an "is admin" checkbox on the signup form.

### Final Touches
9. Visitors to the site should see a list of all messages with the author's name hidden. Only members can view the author and date of each message. Admin users have the authority to delete messages.

10. Once satisfied, deploy your project on your preferred PaaS service.

## Getting Started

To run this project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Set up your MongoDB database and update the connection string in the project.
4. Run the application: `npm start`
5. Access it in your browser at `http://localhost:3000`

