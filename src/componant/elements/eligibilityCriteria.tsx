import React from 'react'

export default function EligibilityCriteria() {
  const Eligibility = [
    { content: "Indians Citizens as well as International students are eligible to pursue MBA course in India." },
    { content: "Students who wish to join MBA/PGDM course must note that a Bachelors degree in any stream from recongnized University is mandatory to be eligible for the admission process." },
    { content: "The minium percentage required in Bachelors degree to take up MBA/PGDM course varies from 45% - 60%" },
    { content: "A valid score in any of the management entrance exams such as CAT/XAT/CMAT/GMAT/MAT/ATMA/NMAT etc." },
  ];
  return (
    <div className=' bg-light'>
      <div className='container px-lg-5'>
        <div className=' py-5 bg-light'>
          <div className='section-head text-center py-3 '>
            <h3 className='section-title '>MBA/PGDM Eligibility Criteria</h3>
            <div className="d-flex justify-content-center">
              <div className="blue-border-div ">
              </div>
            </div>
          </div>

          <div>
            <p>The basic qualification required to Join the Course in India is as follows:-</p>
            <ul className='mt-3'>
              {Eligibility.map((criteria, index) => (
                <li key={index}>{criteria.content}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
