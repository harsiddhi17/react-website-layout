import React from "react";
import {  MDBFooter,MDBContainer,MDBIcon,MDBBtn } from "mdb-react-ui-kit";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTwitter } from '@fortawesome/free-solid-svg-icons';
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faGoogle } from "@fortawesome/free-brands-svg-icons";

const Footer = () => {
  return (
    <>
    {/* <FontAwesomeIcon icon={faEnvelope} /> */}

      {/* <div className="jumbotron text-center fixed-bottom bg-dark text-light fs-3">
      <p>Footer</p>
    </div>  */}

      {/* <MDBFooter
        bgColor="light"
        className="text-center text-lg-left fixed-bottom"
      >
        <div className="text-center p-3 bg-dark text-light">
          &copy; {new Date().getFullYear()} Copyright:{" "}
          <a
            className="text-light"
            href="https://legacy.reactjs.org/"
            target="_blank"
          >
            react.com
          </a>
        </div>
      </MDBFooter> */}

      <MDBFooter className='bg-dark text-center text-white fixed-bottom'>
      <MDBContainer className='p-4 pb-0'>
        <section className='mb-4'>
          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#3b5998' }}
            href='#!'
            role='button'
          >
            {/* <MDBIcon fab icon='facebook-f' /> */}
            <FontAwesomeIcon icon={faFacebookF} />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#55acee' }}
            href='#!'
            role='button'
          >
            {/* <MDBIcon fab icon='twitter' /> */}
            <FontAwesomeIcon icon={faTwitter} />
          </MDBBtn>

          <MDBBtn
            floating
            className='m-1'
            style={{ backgroundColor: '#dd4b39' }}
            href='#!'
            role='button'
          >
            {/* <MDBIcon fab icon='google' /> */}
            <FontAwesomeIcon icon={faGoogle} />
          </MDBBtn>
          
        </section>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'rgba(0, 0, 0, 0.2)' }}>
        © 2020 Copyright:
        <a className='text-white' href='https://legacy.reactjs.org/docs/getting-started.html'>
          React.com
        </a>
      </div>
    </MDBFooter>
    </>
  );
};

export default Footer;
