import React from 'react'

export default function AdmissionProcdure() {
  const process = [

    { title: 'Counselling', number: '1' },
    { title: 'Application Form (apply online)', number: '2' },
    { title: 'Video Screening', number: '3' },
    { title: 'GD-PI Rounds', number: '4' },
    { title: 'Receive Confirmation Letter', number: '5' },
    { title: 'Book Seat', number: '6' },
  ]
  return (
    <div className=''>
      <div className='container px-lg-5'>
        <div className='py-5 '>
          <div className='section-head text-center py-3'>
            <h3 className='section-title '>ADMISSION PROCEDURE</h3>
            <div className="d-flex justify-content-center">
              <div className="blue-border-div ">
              </div>
            </div>
          </div>

          <div className='py-lg-5'>
            <div className='row'>
              {process.map((step, index) => (
                <div className='col-lg-2 py-3 py-lg-0' key={index}>
                  <div className=' d-flex justify-content-center '>
                    <div className='card admission-card'>

                      <div className='card-body h-100'>
                        <div className='d-flex align-items-center justify-content-center h-100'>
                          <p className='text-center'>{step.title}</p>
                        </div>
                        <div className='number text-center'>
                          <p className=''>{step.number}</p>
                        </div>
                      </div>

                    </div>

                  </div>

                </div>))}

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
