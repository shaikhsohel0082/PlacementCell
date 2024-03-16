
# Placement Cell

A brief description of what this project does and who it's for

# Team Career Camp Database Management System

Team Career Camp Database Management System is a web application designed to help Career Camp manage their student interviews and job placement process efficiently. This system allows employees to maintain a database of student interviews and track their progress.

## Features

- **Sign Up and Sign In**: Only employees can sign up and sign in to access the system.
- **Student Management**: Add new students and view a list of all students.
- **Interview Management**: Schedule interviews with companies and allocate students to interviews.
- **Result Management**: Mark interview results for each student.
- **Bonus Feature: External Jobs List**: Fetch real available jobs in India for React/Node.js from open APIs like GitHub Jobs API.
- **CSV Data Export**: Download a complete CSV of all the data with specific columns.

## Technologies Used

- **Backend**: Node.js 
- **Database**: MongoDB
- **Frontend**: HTML | CSS | JS
- **Other Tools**: Passport (User Validation), CSV package (for generating CSV data)

## Installation

1. Clone the repository:
```
https://github.com/shaikhsohel0082/PlacementCell.git
```
2. Install Dependencies:
```
npm Install
```

3. Set up environment variables:

Create a `.env` file in the `backend` directory and add the following variables:
``` 
PORT=3000 || Port-number
MONGODB_URI=<your-mongodb-uri>
JWT_SECRET=<your-jwt-secret>
```

4. Start Command:
```
npm start 
```

5. Access the application in your web browser at
 ```
http://localhost:3000

```
## Usage

1. Sign up or sign in with employee credentials.
2. Add new students and view the list of all students.
3. Schedule interviews with companies and allocate students to interviews.
4. Mark interview results for each student.
5. Download a CSV of all the data for reporting purposes.
## Contributors

- [Sohel Shaikh](https://github.com/shaikhsohel0082)

## License

This project is licensed under the [MIT License](LICENSE).

## Acknowledgements
- Special thanks to Coding Ninjas for the inspiration and requirements for this project.
