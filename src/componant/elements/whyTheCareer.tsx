import React from 'react'

export default function WhyTheCareer() {
  const why = [
    { content: "Reliable, trustworthy & Experienced Consulting company in Pune successfull trackrecord for more then 20 years." },
    { content: "Our core objective is to secure admissions for you in best of the colleges for quality education." },
    { content: "Pre-Interview Preparation." },
    { content: "Exclusive and Authorised rights for admission with the all major Management colleges under Pune Universities (Savitribai Phule Pune University)." },
    { content: "Best Consultants for MBA & PGDM Admission in PUNE" },
    { content: "Secure Admissions in Top colleges with High quality International teaching Standards." },
    { content: "Education loan Assistance to deserving candidates." }
  ];
  return (
    <div className=' bg-light'>
      <div className='container px-lg-5'>
        <div className=' py-5 bg-light'>
          <div className='section-head text-center  justify-content-center d-block'>
            <h3 className='section-title  '>Why The Career360.com?</h3>

            <div className="d-flex justify-content-center">
              <div className="blue-border-div ">
              </div>
            </div>
          </div>

          <div>
            <ul className='mt-3'>
              {why.map((whyus, index) => (
                <li key={index}>{whyus.content}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}
