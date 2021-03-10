# Lead-force


## Table of Contents
1. [Description](#description)
2. [Deployed Link](#deployed-link)
3. [How to Start](#how-to-start)
4. [Code Snippet](#code-snippet)
5. [Built with](#built-with)
6. [Licenses](#licenses)
7. [Author](#author)
8. [Acknowledgements](#acknowledgements)

-----------------------
## Screenshot
![alt text](https://lh5.googleusercontent.com/2iHUYhY7g0VJ67SdpEUg2LD8gTth0Zzhhgsv9PPWPSluYSF0yiDA0eIOG5AaM-RJ8_sa0VxJHEkkpIscb4ALOI95ICJXGxI_hrjw5aIk)


## Description
Leads Force is a new company that provides a platform for customer relationship managment (also known as a CRM). It is an application that tracks the interaction between business/organizations and customers. At our current stage in development, Lead force is built specifically to manage leads. We are a start up company that focuses on helping business's grow.

-----------------------
## Deployed Link
[Link to Deployed Site](https://git.heroku.com/leads-force.git)

-----------------------
## How to Start
1. Copy the repo from GitLab using your ssh key
2. Run Git bash
3. Type in "code ." to open Visual Studios Code
4. Open MySQL Workbench
5. Type npm start into terminal
-----------------------
## Code Snippets
```
 userSignup(e) {
    e.preventDefault()

    var userObjectSignup = {
      username: this.state.username,
      password: this.state.passwordSignup,
      email: this.state.emailSignup
    };

    API.signUp(userObjectSignup).then(res => {
      console.log(res.data)
    })
      .catch(err => console.log(err));

    this.setState({ username: "", passwordSignup: "", emailSignup: "" })

  };
```
This code shows the backend side of creating a user into our database. Starting with user signup we are creating initial state for username, password, and email. 

```
addLead(e) {
    e.preventDefault()

    var userObjectLead = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      phone: this.state.phone,
      email: this.state.email
    };

    API.addLead(userObjectLead).then(res => {
      console.log(res.data)
    })
      .catch(err => console.log(err));
  };


```
 
-----------------------
## Built With
- Bootstrap
- Javascript
- HTML/CSS
- jQuery
- Font Awesome
- React


-----------------------
## Licenses
MIT

-----------------------
## Authors
- Austin Woo
- Vincent Nguyen

-----------------------
## Acknowledgments
- Jerome Chenette (Instructor)
- Manuel Nunes (TA)
- Mahisha Manikandan (TA)
- UC Berkeley Coding Bootcamp