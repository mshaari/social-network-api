# Social Network API
  
![License Badge](https://img.shields.io/badge/license-no%20license-blue)

## Table of Contents
* [Description](#description)
* [Installation](#installation)
* [Usage](#usage)
* [Contributing](#contributing)
* [License](#license)
* [Questions](#questions)

## Description
The E-Commerce Back End is the back-end for an internet retail site, demonstrating the fundamental architecture of e-commerce sites. It utilizes Express.js API and uses Sequelize to interact with a MySQL database. There are products, tags, and categories. CRUD (create, read, update, and delete) operations can be performed on all different data entities (products/tags/categories). Products can be assigned to one single category and can be assigned to multiple tags. One category can have many products. One tag can have many products. 

## Installation
To install the E-Commerce Back End, download [the repository](https://github.com/mshaari/e-commerce-back-end) from GitHub by running
```
git clone git@github.com:mshaari/e-commerce-back-end.git
```
in your command line and open in Visual Studio Code. Run 
 
```
npm install
``` 
 
to install all dependencies. You must also create a ".env" file with the following text:

```
DB_NAME=library_db
DB_PASSWORD=
DB_USER=root
```

## Usage
To invoke the Employee Tracker, open 'server.js' in an integrated terminal and run the following two commands:
```
npm run seed

npm start
``` 

Click [here](https://drive.google.com/file/d/1Zu0hF7Ghakm8JL27GmrGXOo7KD_WJ1pA/view?usp=sharing) to watch a video demonstration of how to use the E-Commerce Back End.

## Contributing
Please do not contribute to this application.

## License
This application has [no license](https://choosealicense.com/no-permission).

## Questions
Please visit my GitHub profile by clicking on my username: [mshaari](https://github.com/mshaari). If you have additional questions, please email me at michael.shaari@gmail.com.