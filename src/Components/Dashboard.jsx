import React from 'react';
import { Link } from 'react-router-dom';
const studentInfo={
  name:"Daania qureshi",
  grade:"Engg",
  school:"VIT ",
  scholarshipEligible:"false"
}

const Dashboard = () => {
  // // Dummy data for the student, replace with actual data retrieval logic
  // const studentInfo = {
  //   name: 'John Doe',
  //   grade: 'A',
  //   school: 'Central High School',
  //   scholarshipEligible: 'Yes',
  //   photo: 'path_to_student_photo.jpg' // Replace with actual photo path
  // };

  return (
    <div className="flex flex-col h-screen justify-between">
      {/* Navbar */}
      <nav className="bg-blue-500 text-white p-4">
        <ul className="flex justify-evenly">
          <li><Link to="/dashboard">Home</Link></li>
          <li><Link to="/edit">Edit</Link></li>
          <li><a href="https://mahadbt.maharashtra.gov.in/login/login">FreeShip</a></li>
          <li><Link to="/mahadbt">MahaDBT</Link></li>
        </ul>
      </nav>

      {/* Main Section */}
      <main className="flex-grow container mx-auto p-4">
        <div className="text-center">
          <img src={studentInfo.photo} alt="Student" className="mx-auto" />
          <h1 className="text-xl font-bold">{studentInfo.name}</h1>
          <p>Grade: {studentInfo.grade}</p>
          <p>School/College: {studentInfo.school}</p>
          <p>Scholarship Eligibility: {studentInfo.scholarshipEligible}</p>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-gray-200 text-center p-4">
        <p>&copy; {new Date().getFullYear()} MyWebsite. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default Dashboard;