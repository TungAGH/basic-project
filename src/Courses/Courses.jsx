import React, { useState } from 'react';
import './Courses.css';
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { FaCalendarAlt } from "react-icons/fa";
import { BsFillGrid3X3GapFill } from "react-icons/bs";
import { FaThList } from "react-icons/fa";
import { FaCaretDown } from "react-icons/fa";
import { FaRegClock } from "react-icons/fa";


function Courses() {
  const [count, setCount] = useState(0);

  return (
    <div className="Courses">
      <div className='div1'>
        <nav className="div1-nav">
          <img src={"/lms-logo.png"} className="logo" alt="Logo" />
          <div className="container">
            <a href="Home" className="home">Home</a>
            <a href="#" className="courses">Courses</a>
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
      </div>

      <div className='div2'>
        <div className='text-div1'>
          <h1>Course-Template</h1>
          <h3>Home / Courses-Template</h3>
        </div>
      </div>

      <div className='div3'>
        <div className='text-div2'>
          <div className='div2-bg'>
            <div className='div2-search'>
              <input type="text" placeholder="Search Course" className="search-input2" />
              <button className="search-button2"><IoIosSearch /></button>
            </div>
          </div>

          <div className='div2-bg2'>
            <div className='div-course'>
              <div className='text2-div2'>
                <h3>Course Categories</h3>
                <hr className="divider-course" />
              </div>
              <div className="checkbox-group">
                <label>
                  <input type="checkbox" name="category" value="programming" />
                  Education
                </label>
                <label>
                  <input type="checkbox" name="category" value="design" />
                  Engineering
                </label>
                <label>
                  <input type="checkbox" name="category" value="marketing" />
                  Health
                </label>
                <label>
                  <input type="checkbox" name="category" value="business" />
                  Law
                </label>
                <label>
                  <input type="checkbox" name="category" value="business" />
                  Mathematics
                </label>
              </div>
            </div>
          </div>

          <div className='div2-bg3'>
            <div className='div-cost'>
              <div className='text3-div2'>
                <h3>Cost</h3>
                <hr className="divider-cost" />
              </div>
              <div className="radio-group">
                <label>
                  <input type="radio" name="cost" value="free" />
                  All
                </label>
                <label>
                  <input type="radio" name="cost" value="paid" />
                  Free
                </label>
                <label>
                  <input type="radio" name="cost" value="subscription" />
                  Paid
                </label>
              </div>
            </div>
          </div>

          <div className='div2-bg4'>
            <div className='div-state-date'>
              <div className='text4-div2'>
              <h3>Start Date: </h3>
              <hr className="divider-date" />
              <input type="text" placeholder="Search Date" className="search-input3" />
              <button className="search-button3"><FaCalendarAlt /></button>
              </div>
            </div>
          </div>
        </div>

        <div className='text-div3'>
          <div className='div3-first'>
            <div className='div3-first1'>
              <a href="#" className='btn_view' > <BsFillGrid3X3GapFill /> GRID </a>
              <a href="#" className='btn_view' > <FaThList /> LIST </a>
            </div>

            <div className='div3-first2'>
              <h3>Order by: </h3>
              <div className='btn_oder'>
              <input type="text" placeholder="Select Order" className="search-input3" />
              <button className="search-button3"><FaCaretDown /></button>
              </div>
            </div>
          </div>

          <div className='div3-second'>
            <div className='div3-pic123'>
              <div className='div3-pic1'>
              <img src="Courses-listing-image-1-1.jpg" />
              <h3>Free</h3>
              <h2>Power Electronics</h2>
              <h5>Education | 7 Curriculum</h5>
              <hr className="divider-pic123" />
              <div className='icon-text'>
              <FaRegClock /> <span>1d 1h 50m</span>
              </div>
              </div>

              <div className='div3-pic2'>
              <img src="Courses-listing-image-2-2.jpg" />
              <h3>Free</h3>
              <h2>Introduction to Calculus</h2>
              <h5>Mathematics | 5 Curriculum</h5>
              <hr className="divider-pic123" />
              <div className='icon-text'>
              <FaRegClock /> <span>1m 21d 22h</span>
              </div>
              </div>

              <div className='div3-pic3'>
              <img src="Courses-listing-image-3-3.jpg" />
              <h3>Free</h3>
              <h2>Basic Laws and Policies</h2>
              <h5>Law | 5 Curriculum</h5>
              <hr className="divider-pic123" />
              <div className='icon-text'>
              <FaRegClock /> <span>20d 18h 30m</span>
              </div>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Courses;
