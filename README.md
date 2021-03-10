# Lead-force


## Table of Contents
1. [Description](#description)
2. [Deployed Link](#deployed-link)
3. [How to Start](#how-to-start)
4. [Code Snippet](#code-snippet)
5. [Built with](#built-with)
6. [Author](#author)
7. [Acknowledgements](#acknowledgements)
8. [License](#license)

-----------------------
## Screenshot
![Image](https://lh5.googleusercontent.com/2iHUYhY7g0VJ67SdpEUg2LD8gTth0Zzhhgsv9PPWPSluYSF0yiDA0eIOG5AaM-RJ8_sa0VxJHEkkpIscb4ALOI95ICJXGxI_hrjw5aIk)


## Description
Leads Force is a new company that provides a platform for customer relationship managment (also known as a CRM). It is an application that tracks the interaction between business/organizations and customers. At our current stage in development, Lead force is built specifically to manage leads. We are a start up company that focuses on helping business's grow.

-----------------------
## Deployed Link
[Link to Deployed Site](https://leads-force.herokuapp.com/)

-----------------------
## How to Start
1. Copy the repo from GitLab using your ssh key
2. Run Git bash
3. Type in "code ." to open Visual Studios Code
4. Open MySQL Workbench
5. Type npm start into terminal
-----------------------
## Code Snippets
Below is the code snippet we created for user signup. This code interacts with the routes setup in the backend via axios call. A variable called userObjectSignup is created and filled with stateful values generated from the input of the user when they create their account. The API call is made with the userObjectSignup as an argument then utilizing sequelize model, the database will store this account through the prepared routing. Lastly, the input fields are cleared of any text.
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
This code snippet demonstrates part of how we sent information to our database per lead added. The user will type into the add lead modal all the information they desire about their leads. Next the userObjectLead is created with these stateful values. An API call is made to addLead with userObjectLead as an argument which goes through sequelize to create the new lead in the database. 
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
When the page is refreshed, the new lead is shown on the table below. 
```
  {this.state.leads.map(item =>
              <TableData
                id={item.id}
                firstName={item.firstName}
                lastName={item.lastName}
                email={item.email}
                phone={item.phone}
              />)}
```
 
-----------------------
## Built With
- Axios
- Bcrypt
- Bootstrap
- Express
- Font Awesome
- HTML/CSS
- Javascript
- jQuery
- MySQL
- Passport
- React
- React Router
- Sequelize

-----------------------
## Authors
Austin Woo <br />
LinkedIn: [https://www.linkedin.com/in/awoo95/](https://www.linkedin.com/in/awoo95/) <br />
GitHub: [https://github.com/austinwoo123](https://github.com/austinwoo123) <br />
Portfolio: [https://enigmatic-castle-29617.herokuapp.com/](https://enigmatic-castle-29617.herokuapp.com/) <br />

Vincent Nguyen <br />
LinkedIn: [https://www.linkedin.com/in/vincent-nguyen-74226a107/](https://www.linkedin.com/in/vincent-nguyen-74226a107/) <br />
GitHub: [https://github.com/vincent-nguyen8931](https://github.com/vincent-nguyen8931) <br />
Portfolio: [https://vincent-nguyen8931.github.io/react-portfolio/](https://vincent-nguyen8931.github.io/react-portfolio/)


------------------------
## Acknowledgments
- Jerome Chenette (Instructor)
- Manuel Nunes (TA)
- Mahisha Manikandan (TA)
- UC Berkeley Coding Bootcamp

------------------------
## License
MIT License

Copyright (c) [2021] [Vincent Nguyen] [Austin Woo]

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.