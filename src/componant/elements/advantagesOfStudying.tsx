import React from 'react'

export default function AdvantagesOfStudying() {
  const advantages = [
    { content: "140+ Recruiters, Highest Package of 27 LPA." },
    { content: "Industry driven curriculum - interaction with 450 industries" },
    { content: "Integrated inplant training (Internship to all students)" },
    { content: "90+ Scholarships, Scholarships to 643 students worth Rs. 2.44 Cr, under various governments Scheme." },
    { content: " Employment Enhancement Program (EEP) and Company Specific Training for Placements" },
    { content: "Collaborations with international universities and with industries." },
    { content: "Five storied library with more than 74,218 books, 20,228 Book titles, 54686 ejournals," },
    { content: "Bharatiyam – Techno-Cultural Fest." },
    { content: "Excellent sports facility and life at campus." },
   
  ];
  return (
    <div className=' '>
    <div className='container px-lg-5'>
      <div className=' py-5 '>
        <div className='section-head text-center'>
        <h3 className='section-title py-2 '>Advantages of Studying BVDUCOEP</h3>
        <div className="d-flex justify-content-center">
              <div className="blue-border-div ">
              </div>
            </div>
        </div>

        <div>
        <ul className='mt-3'>
                    {advantages.map((item, index) => (
                      <li key={index}>{item.content}</li>
                    ))}
                  </ul>
        </div>
      </div>
    </div>
    </div>
  )
}
