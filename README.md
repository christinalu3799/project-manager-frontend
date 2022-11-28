# Simple Tracker 
#### A Project Manager Application for Independent Contractors and Small Business Owners

---
### Project Description

Outside of GA, I am an independent contractor/freelancer providing editing and proofreading services for clients applying to college and other post graduate programs. Since the fall time is prime college application season, I wanted to create a simple project manager to keep track of each client I’m working with. I typically work with anywhere between 15-20 clients at a given time, each needing their essays reviewed within 3-5 days of sending their drafts to me. So, the aim of this application is to consolidate each project into cards onto a dashboard so I can easily see the status of all my current orders at a glance.  

### Tech Stack

- *Server: Flask and Postgres*
- *Client: React and React Bootstrap*

### Model

[Click here to see my ERDs.](https://lucid.app/lucidchart/f53d431a-2ba4-454d-9b82-e45a13fe7176/edit?viewport_loc=-118%2C-367%2C2398%2C1942%2C0_0&invitationId=inv_11cdbe75-a6ea-4a25-a215-bf848e7df2e2)

### Wireframes

[Click here to see my wireframes.](https://www.figma.com/file/MfqSjFRP6Nr0jnDuoS3Urs/GA-CAPSTONE-PROJECT---Project-Manager?node-id=0%3A1)

### User Stories

**End user: Freelancer/Independent contractor**

- As a user, I want view all my active projects at a glance to easily view all my current orders.
- As a user, I want to be able to create new projects that are then posted onto the home page.
- As a user, I want to be able to click on each project and be directed to a detailed show page so that I can see more details about each project.
- As a user, I want to be able to edit each project directly on the page without having to redirect to a separate edit form so updating details for each project will be more seamless.
- As a user, I want to be able to log “diary” entries/updates for each project.
- As a user, I want be able to mark my project as complete so that it will migrate over to the “completed projects” page where I can see a list of all projects I’ve completed in the past.
- As a user, I want the option to delete projects into a “trash” bin which allows the user to “replace” the project back onto their dashboard.
- As a user, I want to be able to permanently delete projects from my “trash” bin so that they are completely removed from my database.
- As a user, I want be able to register/login to my own account so that all my projects are unique to me and I’m the only user with permission to make changes to my projects.

### MVP Goals

- Implement user authentication so only users who register/create an account can start creating/editing projects on their dashboard.
- Have a home page/dashboard that houses all projects.
- Allow user to edit every detail within each project.
- Allow user to update the status of each project (not started, in progress, complete).
- Allow user to create/update/delect/checkoff subtasks within each project.
- Allow user to log updates of project progress on each project’s show page.
- Create a “trash” bin page that hosts all deleted projects.
- Allow user to permanently delete all projects from the “trash” bin.
- Create a list of subtasks for each project from which the user can add to-do’s and check them off.
- Style with React Bootstrap.

### Stretch Goals

- Implement a side bar when the user is NOT on the home page so they can still see their other projects.
- Allow users to sort projects on the home page by due date, status, etc.
- Allow the user to upload files from Google Drive, DropBox, OneDrive, etc (will be using a file upload API for this).
- Make fully responsive on all devices.
- Allow user to search for projects/tasks/project details by keyword.

--- 
👉🏼 [Click here to view my backend repo](https://github.com/christinalu3799/project-manager-backend)