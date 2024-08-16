import React from 'react';
import { Link } from 'react-router-dom';
const studentInfo1={
  name:"Daania qureshi",
  grade:"Engg",
  school:"VIT ",
  scholarshipEligible:"false",
  documents:[{name:"pancard" , link: "https://adarshc.com/data/user/index/ent/document/pan/banner.jpg"}]
}

const studentInfo2 = {
  name:"Iqra Sheikh Bilal Abbas",
  grade:"Medical",
  school:'IIIT',
  scholarshipEligible:"false",
  documents:[{name:"aadhar" , link:"https://staticimg.amarujala.com/assets/images/2022/12/08/kanapara_1670520411.jpeg?w=674&dpr=1.0"}]

}
const studentInfo3 = {
  name:"أنيرودا جوشي",
  grade:"طبي",
  school:'المعهد السعودي للطب',
  scholarshipEligible:"true",
  documents:[{name:'aadhar' , link:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlgvDZG_FnS9_8wWIUv5vPZgMPsE2_QSRUhg&s"}]
}
const studentInfo4 = {
  name:"Shanna Ahmed",
  grade:"Architecture",
  school:'المعهد السعودي للهندسة',
  scholarshipEligible:"false",
  documents:[{name:'pancard' , link:"https://yourspj.wordpress.com/wp-content/uploads/2011/06/fake-pan-card_yourspj.jpg"}]
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
          <h1 className='my-5 font-bold'>Uploaded Documents</h1>
        <div className='h-[400px] w-full pt-10 flex'>
            <div className='h-full w-[30%]'>

              <p className='text-2xl font-bold'>{studentInfo.documents[0].name}</p>
            </div>
            <div className="h-[full] w-[70%]">
              <img src={studentInfo.documents[0].link} alt=""  style={{height:"100%" , width:"100%", objectFit:"contain"}}/>
            </div>
        </div>
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