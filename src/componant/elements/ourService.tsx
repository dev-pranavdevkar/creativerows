import React from 'react';

const services = [
  { service: "Assistance for CET Preparation" },
  { service: "Counselling" },
  { service: "Student Aptitude Preparation" },
  { service: "Colleges & City Orientation" },
  { service: "Documentation Assistance" },
  { service: "Accommodation Assistance" }
];

export default function OurService() {
  return (
    <div className="ourService">
      <div className="container py-4">
        <div className="section-head text-center ">
          <h3 className="section-title text-white">OUR SERVICES</h3>
          <div className="d-flex justify-content-center">
              <div className="white-border-div ">
              </div>
            </div>
        </div>
        
        <div className="row pt-5">
          {services.map((service, index) => (
            <div className="col-lg-2 col-md-6 col-sm-6 service" key={index}>
               <div className='d-flex justify-content-center h-100'> 
               <div className="h-100">
                <div className="card service-card h-100">
                  <div className="card-body d-flex justify-content-center align-items-center text-center">
                    {service.service}
                  </div>
                </div>
              </div>
              </div>
             
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
