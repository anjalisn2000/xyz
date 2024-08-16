import React from 'react';
import { Link } from 'react-router-dom';
const studentInfo1={
  name:"Daania qureshi",
  grade:"Engg",
  school:"VIT ",
  scholarshipEligible:"false"
}

const studentInfo2 = {
  name:"Iqra Sheikh Bilal Abbas",
  grade:"Medical",
  school:'IIIT',
  scholarshipEligible:"false"

}
const studentInfo3 = {
  name:"أنيرودا جوشي",
  grade:"طبي",
  school:'المعهد السعودي للطب',
  scholarshipEligible:"true"
}
const studentInfo4 = {
  name:"Shanna Ahmed",
  grade:"Architecture",
  school:'المعهد السعودي للهندسة',
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

  const assignStudentInfo = () => {
    const students = [studentInfo1, studentInfo2, studentInfo3 , studentInfo4];
    const randomIndex = Math.floor(Math.random() * students.length);
    return students[randomIndex];
  };
  const studentInfo = assignStudentInfo();

  return (
    <div className="flex flex-col h-screen justify-between">
      {/* Navbar */}
      <nav className="bg-blue-500 text-white p-4">
        <ul className="flex justify-evenly">
          <li><Link to="/dashboard">Home</Link></li>
          <li><Link to="/edit">Edit</Link></li>
          <li><a href="https://mahadbt.maharashtra.gov.in/login/login">FreeShip</a></li>
          <li><Link to="/mahadbt">MahaDBT</Link></li>
          <li><Link to="/">Logout</Link></li>
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