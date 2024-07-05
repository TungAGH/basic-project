import React, { useState } from 'react';
import './App.css';
import { FaUser, FaShoppingCart } from "react-icons/fa";
import Searchbar from './Searchbar';
import { RxDoubleArrowRight } from "react-icons/rx";
import { GrFormPrevious } from "react-icons/gr";
import { GrFormNext } from "react-icons/gr";
import { IoDocumentTextSharp } from "react-icons/io5";
import { FaBookmark } from "react-icons/fa";
import EmailSearchbar from './EmailSearchbar';
import { GrFormPreviousLink } from "react-icons/gr";
import { GrFormNextLink } from "react-icons/gr";
import { IoSearchSharp } from "react-icons/io5";
import { HiMiniComputerDesktop } from "react-icons/hi2";
import { HiDocumentMagnifyingGlass } from "react-icons/hi2";
import { BsCart4 } from "react-icons/bs";
import { MdNavigateNext } from "react-icons/md";
import { FaPaperPlane } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";
import { TbDeviceLandlinePhone } from "react-icons/tb";
import { MdMail } from "react-icons/md";
import { FaTwitter } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaSkype } from "react-icons/fa";


function App() {
  const [count, setCount] = useState(0);

  const handleSearch = (query) => {
    console.log('Searching for:', query);
  };

  const handleEmailSearch = (email) => {
    console.log('Email search:', email);
  };

  return (
    <div className="App">
      <div className="full-screen-background">
        <nav className="nav">
          <img src={"/lms-logo.png"} className="logo" alt="Logo" />
          <div className="container">
            <a href="#" className="home">Home</a>
            <a href="/Courses" className="courses">Courses</a>
            <a href="#" className="pages">Pages</a>
            <a href="#" className="blog">Blog</a>
            <a href="#" className="gallery">Gallery</a>
            <a href="#" className="shop">Shop</a>
            <a href="#" className="contact">Contact</a>

            <div className="log-regis">
              <a href="#" className="icon-log"> <FaUser /></a>
              <a href="#" className="log">Login</a>
              <a> | </a>
              <a href="#" className="regis">Register</a>
              <a href="#"> <FaShoppingCart /></a>
            </div>
          </div>
        </nav>

        <div className="text-section">
          <Searchbar onSearch={handleSearch} />
          <h3 className="subheading">We have the largest collection of courses</h3>
          <div className="hd1-icon1">
            <a href="#" >View All Courses <RxDoubleArrowRight /></a>
          </div>
        </div>

        <div className="text-section1">
          <div className='subheading-section'>
            <h1 className="subheading1">332</h1>
            <hr className="divider" />
            <h3 className="subheading1">Courses</h3>
          </div>

          <div className='subheading-section'>
            <h1 className="subheading2">1403</h1>
            <hr className="divider" />
            <h3 className="subheading2">Members</h3>
          </div>

          <div className='subheading-section'>
            <h1 className="subheading3">60</h1>
            <hr className="divider" />
            <h3 className="subheading3">Authors</h3>
          </div>

          <div className='subheading-section'>
            <h1 className="subheading4">120</h1>
            <hr className="divider" />
            <h3 className="subheading4">Subjects</h3>
          </div>
        </div>
      </div>

      <div className="body2">
        <div className="container2">
          <div className='con1'>
            <img src="/vector22.svg" width="80" alt="Vector Image" />
          </div>
          <div className='con2'>
            <h3 className="subheading1">Best Stimulations</h3>
          </div>
        </div>

        <div className="container3">
          <div className='con3'>
            <img src="/vector19.svg" width="80" alt="Vector Image" />
          </div>
          <div className='con4'>
            <h3 className="subheading2">Group Seminars</h3>
          </div>
        </div>

        <div className="container4">
          <div className='con5'>
            <img src="/vector20.svg" width="80" alt="Vector Image" />
          </div>
          <div className='con6'>
            <h3 className="subheading2">Analysed Syllabus</h3>
          </div>
        </div>

        <div className="container5">
          <div className='con7'>
            <img src="/vector21.svg" width="80" alt="Vector Image" />
          </div>
          <div className='con8'>
            <h3 className="subheading2">Pratical Training</h3>
          </div>
        </div>
      </div>

      <nav className='nav2'>
        <div className='text-section2'>
          <div className='body3'>
            <h1>COURSES</h1>
            <hr className="divider2" />
          </div>
          <div className='icon-prev-back1'>
            <div className='icon-prev1'>
              <GrFormPrevious />
            </div>
            <div className='icon-back1'>
              <GrFormNext />
            </div>
          </div>
        </div>

        <div className='text-section3'>
          <div className='body4'>
            <h2>About Courses</h2>
            <h5>Student Registration and Administration Nemo enim ipsam voluptatem quia voluptas sit atur aut odit aut fugit,
              sed quia consequuntur magni res eos qui ratione voluptatem sequi nesciunt.</h5>
            <h5>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
              by injected humour, or randomised believable.</h5>
            <div className='button_view'>
              <a href="#" className='btn_view' >View All Courses </a>
            </div>
          </div>

          <div className='text-pic0-1'>
            <div className='pic0'>
            <img src={"/Courses-listing-image-1.jpg"} />
            </div>
            <div className='pic1'>
            <img src={"/Courses-listing-image-2.jpg"} />
            </div>
          </div>
        </div>
      </nav>

      <div className='pic2-3-4'>
        <div className='pic2'>
          <img src={"/lms-banner1.jpg"} />
        </div>
        <div className='pic3'>
          <img src={"/lms-banner2.jpg"} />
        </div>
        <div className='pic4'>
          <img src={"/lms-banner3.jpg"} />
        </div>
      </div>

      <div className='text-section4'>
        <div className='body5'>
          <h1 className='blog'>BLOG</h1>
          <hr className="divider3" />
        </div>
      </div>

      <div className='text-pic5-6-7'>
        <div className='text-pic5'>
          <div className='pic5'>
            <img src={"/blog12.jpg"} />
          </div>
          <div className='text-section5'>
            <div className='doc-day'>
              <h4>30 Thu</h4>
              <hr className='divider-horizontal' />
              <a href="#"><IoDocumentTextSharp /></a>
            </div>

            <div className='doc-text'>
              <h3>Contrary to popular</h3>
              <div className='anh1'>
                <a href='#'>dtlmsele</a>
                <a> | </a>
              </div>

              <div className='anh2'>
                <a style={{ color: "gray" }}><FaBookmark /></a>
                <a href='#'>blog, </a>
                <a href='#'>chat</a>
              </div>
            </div>
          </div>
        </div>

        <div className='text-pic6'>
          <div className='pic6'>
            <img src={"/blog7.jpg"} />
          </div>
          <div className='text-section6'>
            <div className='doc-day'>
              <h4>30 Thu</h4>
              <hr className='divider-horizontal' />
              <a href="#"><IoDocumentTextSharp /></a>
            </div>
            <div className='doc-text'>
              <h3>Omnis voluptas assumenda</h3>
              <div className='anh1'>
                <a href='#'>dtlmsele</a>
                <a> | </a>
              </div>

              <div className='anh2'>
                <a style={{ color: "gray" }}><FaBookmark /></a>
                <a href='#'>blog, </a>
                <a href='#'>chat</a>
              </div>
            </div>
          </div>
        </div>

        <div className='text-pic7'>
          <div className='pic7'>
            <img src={"/blog11.jpg"} />
          </div>
          <div className='text-section7'>
            <div className='doc-day'>
              <h4>30 Thu</h4>
              <hr className='divider-horizontal' />
              <a href="#"><IoDocumentTextSharp /></a>
            </div>
            <div className='doc-text'>
              <h3>Piece of classical</h3>
              <div className='anh1'>
                <a href='#'>dtlmsele</a>
                <a> | </a>
              </div>

              <div className='anh2'>
                <a style={{ color: "gray" }}><FaBookmark /></a>
                <a href='#'>blog, </a>
                <a href='#'>chat</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='full-screen-background2'>
        <div className='body6'>
          <div className='container6'>
            <div className='con9'>
              <img src="/vector3.svg" width="50" height="50" alt="Vector Image" />
            </div>
            <div className='con10'>
              <h3 className="subheading1">HTML</h3>
            </div>
          </div>

          <div className='container7'>
            <div className='con11'>
              <img src="/vector2.svg" width="50" alt="Vector Image" />
            </div>
            <div className='con12'>
              <h3 className="subheading1">CSS</h3>
            </div>
          </div>

          <div className='container8'>
            <div className='con13'>
              <img src="/vector.svg" width="50" alt="Vector Image" />
            </div>
            <div className='con14'>
              <h3 className="subheading1">Android</h3>
            </div>
          </div>

          <div className='container9'>
            <div className='con15'>
              <img src="/vector4.svg" width="50" alt="Vector Image" />
            </div>
            <div className='con16'>
              <h3 className="subheading1">Photoshop</h3>
            </div>
          </div>

          <div className='container10'>
            <div className='con17'>
              <img src="/vector4.svg" width="50" alt="Vector Image" />
            </div>
            <div className='con18'>
              <h3 className="subheading1">jQuery</h3>
            </div>
          </div>

          <div className='container11'>
            <div className='con19'>
              <img src="/vector4.svg" width="50" alt="Vector Image" />
            </div>
            <div className='con20'>
              <h3 className="subheading1">Ruby</h3>
            </div>
          </div>
        </div>
      </div>

      <nav className='nav3'>
        <div className='text-section2'>
          <div className='body3'>
            <h1>UPCOMING EVENTS</h1>
            <hr className="divider2" />
          </div>

          <div className='icon-prev-back'>
            <div className='icon-prev'>
              <GrFormPreviousLink />
            </div>
            <div className='icon-back'>
              <GrFormNextLink />
            </div>
          </div>
        </div>

        <div className='text-pic8'>
          <div className='pic8'>
            <img src={"/event.jpg"} />
          </div>
          <div className='text-section8'>
            <h2>Welcoming 25th Batch</h2>
            <h4>December 12,2024 @8:00 am - December 13,2025 @5:00 pm</h4>
            <h4>Peppard Hill, United States</h4>
          </div>
        </div>
      </nav>

      <div className='full-screen-background3'>
        <div className='body7'>
          <h1>GET IN TOUCH WITH US</h1>
          <h3>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form,
            by injected humour, or randomised words which Ipsum slightly believable </h3>
          <div className='email-search-container'>
            <EmailSearchbar onSearch={handleEmailSearch} />
          </div>
        </div>
      </div>

      <nav className='nav4'>
        <div className='text-section9'>
          <div className='body9'>
            <h1>OUR PROCESS</h1>
            <hr className="divider4" />
          </div>
        </div>

        <div className='text-section10'>
          <div className='body10'>
            <h1>Step 01</h1>
            <h3>Search for your course</h3>
            <hr className='divider5' />
            <h5>Nemo enim ipsam voluptatem quia voluptas sit atur aut odit aut fugit,
              sed quia consequuntur magni res.</h5>
          </div>
          <div className='body11'>
            <h5 style={{ color: "#da853d", fontSize: "30px" }}><IoSearchSharp /></h5>
          </div>
          <span className='span1'></span>
        </div>

        <div className='text-section11'>
          <span className='span1'></span>
          <div className='body13'>
            <h5 style={{ color: "#da853d", fontSize: "30px" }}><HiMiniComputerDesktop /></h5>
          </div>
          <div className='body12'>
            <h1>Step 02</h1>
            <h3>Take a Sample Lesson</h3>
            <hr className='divider5' />
            <h5>Nemo enim ipsam voluptatem quia voluptas sit atur aut odit aut fugit,
              sed quia consequuntur magni res.</h5>
          </div>
        </div>

        <div className='text-section12'>
          <div className='body14'>
            <h1>Step 03</h1>
            <h3>Preview the Syllabus</h3>
            <hr className='divider5' />
            <h5>Nemo enim ipsam voluptatem quia voluptas sit atur aut odit aut fugit,
              sed quia consequuntur magni res.</h5>
          </div>
          <div className='body15'>
            <h5 style={{ color: "#da853d", fontSize: "30px" }}><HiDocumentMagnifyingGlass /></h5>
          </div>
          <span className='span1'></span>
        </div>

        <div className='text-section13'>
          <span className='span1'></span>
          <div className='body17'>
            <h5 style={{ color: "#da853d", fontSize: "30px" }}><BsCart4 /></h5>
          </div>
          <div className='body16'>
            <h1>Step 04</h1>
            <h3>Purchase the Course</h3>
            <hr className='divider5' />
            <h5>Nemo enim ipsam voluptatem quia voluptas sit atur aut odit aut fugit,
              sed quia consequuntur magni res.</h5>
          </div>
        </div>
      </nav>

      <div className='footer'>
        <div className='container12'>
          <img src={"/lms-logo.png"} className="logo1" alt="Logo" />
        </div>

        <div className='full-screen-background4'>
          <div className='four-columns'>
            <div className='column-1'>
              <h3>About Us</h3>
              <h5>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut et lobortis diam.</h5>
              <h5>Duis tellus enim, vestibulum eget varius id, vulputate et mi. Nullam feugiat, diam quis interdum varius</h5>
              <a href="#" className='btn_view' >START LEARNING NOW </a>
            </div>

            <div className='column-2'>
              <h3>Popular Courses</h3>
              <a href='#'>Power Electronics</a>
              <h5>Free</h5>
              <hr className="divider6" />
              <a href='#'>Introduction to Calculus</a>
              <h5>Free</h5>
              <hr className="divider6" />
              <a href='#'>Basic Laws and Policies</a>
              <h5>Free</h5>
            </div>

            <div className='column-3'>
              <h3>Quick Links</h3>
              <a href='#'><MdNavigateNext />
                All Courses</a>
              <hr className="divider6" />

              <a href='#'><MdNavigateNext />
                Summer Sessions</a>
              <hr className="divider6" />

              <a href='#'><MdNavigateNext />
                Professional Courses</a>
              <hr className="divider6" />

              <a href='#'><MdNavigateNext />
                Privacy Policy</a>
              <hr className="divider6" />

              <a href='#'><MdNavigateNext />
                Terms of Use</a>
            </div>

            <div className='column-4'>
              <h3>Contact Us</h3>
              <h5> <a style={{ color: "#838c48" }}><FaPaperPlane /></a> The Design Themes Inc. Mary Jane St, Sydney 2233 Australia.</h5>
              <hr className="divider6" />

              <a style={{ color: "#838c48" }}><FaPhoneAlt /></a> <a href='#'>+11 (2) 7564 2233</a>
              <hr className="divider6" />

              <a style={{ color: "#838c48" }}><TbDeviceLandlinePhone /></a> <a href='#'>+11 (5) 7564 2244</a>
              <hr className="divider6" />

              <a style={{ color: "#838c48" }}><MdMail /></a> <a href='#'>lms@gmail.com</a>
              <hr className="divider6" />
            </div>
          </div>
        </div>

        <div className='full-screen-background5'>
          <div className='column-5'>
            <h5>Copyright © 2020 LMS Theme All Rights Reserved | <a href='#'>Design Themes</a> </h5>
          </div>
          <div className='column-6'>
            <div className='twt'>
              <FaTwitter />
            </div>

            <div className='ytb'>
              <FaYoutube />
            </div>

            <div className='fb'>
              <FaFacebookF />
            </div>

            <div className='skype'>
              <FaSkype />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
