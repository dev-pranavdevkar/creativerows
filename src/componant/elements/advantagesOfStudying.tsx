import React from 'react'

export default function AdvantagesOfStudying() {
  const advantages = [
    { content: "Quality Education and Experienced Faculties." },
    { content: "Corporate Exposure!" },
    { content: "Easy Admission Process." },
    { content: "PUNE MBA & PGDM degrees are recognized by all the corporate ,multinational companies etc. in India as well as abroad." },
    { content: "Wide range of career opportunities and broad exposure to career growth." },
    { content: "The living expenses for students in Pune is comparatively less then many of other metro cities." },
    { content: "Flexible Fee Payment options offered by many colleges in Pune." },
    { content: "MBA & PGDM Education system in PUNE has its own remarkable distinction on the global stage. The standard of MBA & PGDM Education in PUNE is considered to give one of the most advanced, superior & sophisticated in the world." },
    { content: "Fees can be remitted on instalments per year in some colleges" },
    { content: "The student: Teacher ratio is approximately 25:1 in majority of colleges." },
    { content: "Educational loans available from Top financial institutes." },
  ];
  return (
    <div className=' '>
    <div className='container px-lg-5'>
      <div className=' py-5 '>
        <div className='section-head text-center'>
        <h3 className='section-title py-2 '>Advantages of Studying MBA & PGDM in PUNE</h3>
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
