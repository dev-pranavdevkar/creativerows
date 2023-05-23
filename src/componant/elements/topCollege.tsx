import React from 'react';




const mbaclg = [
  { content: "SIBM Pune: Symbiosis institute of Business Management Exam: SNAP" },
  { content: "PUMBA: Department of Management Science University of Pune Exam: CAT, CMAT, MAH CET" },
  { content: "Sri Balaji University Pune Exam: CAT, XAT, MAT, CMAT, MAH CET, Own Entrance Exams" },
  { content: "SINDIRA PUNE (MBA/PGDM): Indira Institute of Management. Exam: CAT, CMAT, MAH CET, XAT, MAT, CMAT, ATMA, GMAT" },
  { content: "ISBM Pune (PGDM): International School Of Business and Media. Exam: CAT, XAT, MAT, CMAT, ATMA, GMAT" },
  { content: "MIT - WPU Exam: CAT, CMAT, MAH CET, XAT, MAT, ATMA." }
];

const pgdmclg = [
  { content: "S.P JAIN INSTITUTE OF MANAGEMENT AND RESEARCH EXAM - CAT, GMAT" },
  { content: "NMIMS (NARSEE MONJEE INSTITUTE OF MANAGEMENT STUDIES) Exam - NMAT" },
  { content: "JBIMS MUMBAI: JAMNALAL BAJAJ INSTITUTE OF MANAGEMENT STUDIES Exam - CAT, CMAT, MAH CET" },
  { content: "K J SOMAIYA INSTITUTE OF MANAGEMENT MUMBAI Exam - CAT, XAT, CMAT, NMAT, GMAT" },
  { content: "WELINGKAR INSTITUTE OF MANAGEMENT DEVELOPMENT AND RESEARCH (PGDM) Exam - CAT, XAT, CMAT, ATMA, GMAT" },
  { content: "ITM: ITM GROUP OF INSTITUTIONS(PGDM) Exam - CAT, XAT, MAT, CMAT, MAH CET, TANCET, GMAT" }
];

export default function TopCollege() {
  return (
    <div>
      <div className='container p-lg-5'>
        <div className='row'>
          <div className='col-lg-6'>
          <h3 className='section-title py-3'>Top MBA &amp; PGDM Colleges of PUNE</h3>
            <div className='h-100'>
              <div className=" topclg-card">
                <div className="card-body">
                <div className="blink-few-seats blinking-background">Few Seats are Left</div>
                  <ul className='mt-3'>
                    {mbaclg.map((college, index) => (
                      <li key={index}>{college.content}</li>
                    ))}
                  </ul>
                 
                </div>
              </div>
            </div>
          </div>
          <div className='col-lg-6'>
          <h3 className='section-title py-3'>Top MBA &amp; PGDM Colleges of Mumbai</h3>
            <div className='h-100'>
              <div className="topclg-card ">
                <div className="card-body">
                <div className="blink-few-seats blinking-background">Few Seats are Left</div>
                  <ul className='mt-3'>
                    {pgdmclg.map((college, index) => (
                       <li key={index}><i className="fa fa-square" aria-hidden="true"></i>{college.content}</li>
                    ))}
                  </ul>
                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
