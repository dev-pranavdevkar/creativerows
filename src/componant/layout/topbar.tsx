import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMapMarkerAlt, faPhone, faEnvelopeOpen } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF, faTwitter, faInstagram, faYoutube, faTelegramPlane } from '@fortawesome/free-brands-svg-icons';


export default function Topbar() {
  return (
    <div className=''>
      <div className='topbar brand-bg px-lg-5'>
        <div className='row  '>
          <div className='col-lg-6'>
            <div className='d-flex justify-content-center'>
              <p>+91-866-922-5572,</p> &nbsp;&nbsp;
              <p>+91-878-841-6701</p>
            </div>
          </div>
          <div className=' col-lg-6 d-none d-lg-block'>
            <div className='d-flex justify-content-end align-items-center px-5 middle-item'>
              <div className="d-flex  social-icon-topbar ">
                <div>
                  <a className="" href="#">

                  <FontAwesomeIcon className="social-icon mx-3" icon={faFacebookF} /></a>
                  </div>
                <div>
                  <a href="#">


                  <FontAwesomeIcon className="social-icon mx-3" icon={faTwitter} />
                </a>
                </div>
                <div><a href="#">
                  <FontAwesomeIcon className="social-icon mx-3" icon={faInstagram} />

                </a></div>
                <div><a href="#">
                  <FontAwesomeIcon className="social-icon mx-3" icon={faYoutube} />

                </a></div>
              </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
