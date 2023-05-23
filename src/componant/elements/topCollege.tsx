import React from 'react';




const academicPrograms = [
  { course: "Computer Engineering", seats: '120' },
  { course: "Computer Science and Engineering", seats: '120' },
  { course: "Computer Science and Business Systems", seats: '60' },
  { course: "Electronics & Telecommunication", seats: '120' },
  { course: "Mechanical Engineering", seats: '60' },
  { course: "Electronics and Communication Engineering", seats: '150' },
  { course: "Information Technology", seats: '60' },
  { course: "Civil Engineering", seats: '60' },
  { course: "Electrical and Computer Engineering", seats: '60' },
  { course: "Chemical Engineering", seats: '30' },
  { course: "Robotics and Automation", seats: '60' },

];

const cet = [
  { course: "B.Tech BV- BTECH 2023 (Online Examination)", lastApply: '01st June 2023', examDate: '11th June 2023' },
  { course: "B.Tech (Direct Second Year) (Online Proctored Home Base Examination)", lastApply: '08th June 2023', examDate: '18th June 2023' },
  { course: "M.Tech BV- MTECH 2023 (Online Proctored Home Base Examination)", lastApply: '15th June 2023', examDate: '25th June 2023' },
];

export default function TopCollege() {
  return (
    <div>
      <div className='container p-lg-5'>
        <div className='row'>
          <div className='col-lg-6'>
            <h3 className='section-title py-3'>Academic Programmes</h3>
            <div className='h-100'>
              <div className=" topclg-card ">
                <div className="card-body">
                  <div className="blink-few-seats blinking-background">Few Seats are Left</div>
                  <div className='mt-3'>
                  
                    <table className="table table-bordered">
                      <thead>

                        <tr >
                          <th scope="col">Name of the Programme</th>
                          <th scope="col">B.Tech Intake (1st Year)</th>

                        </tr>
                      </thead>
                      <tbody>
                        {academicPrograms.map((intake, index) => (
                          <tr key={index}>

                            <td>{intake.course}</td>
                            <td>{intake.seats}</td>
                          </tr>
                        ))}


                      </tbody>
                    </table>
                  </div>

                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
            <h3 className='section-title py-3'>B.Tech/M.Tech CET Schedule 2023-24</h3>
            <div className='h-100'>
              <div className="topclg-card ">
                <div className="card-body">
                  <div className="blink-few-seats blinking-background">Few Day&apos;s are Left</div>
                  <div className='mt-3'>
                  
                  <table className="table table-bordered">
                    <thead>

                      <tr >
                        <th scope="col">Name of the Programme</th>
                        <th scope="col">Last Date to Apply</th>
                        <th scope="col">Date of Online Examination</th>

                      </tr>
                    </thead>
                    <tbody>
                      {cet.map((cet, index) => (
                        <tr key={index}>

                          <td>{cet.course}</td>
                          <td>{cet.lastApply}</td>
                          <td>{cet.examDate}</td>
                        </tr>
                      ))}


                    </tbody>
                  </table>
                </div>

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
