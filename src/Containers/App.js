import React from "react";
import "../Styles/App.scss";

import iphoneImg from "../Assets/Images/iphone.png";
import personImg from "../Assets/Images/person.png";
import downloadImg from "../Assets/Images/download.png";

const App = () => {
  return (
    <div className="main-box">
      <div className="container">
        {/* navbar*/}
        <nav>
          <div classname="left-side">
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">About</a>
              </li>
              <li>
                <a href="#">Testimonials</a>
              </li>
              <li>
                <a href="#">Contact</a>
              </li>
            </ul>
          </div>
          <div className="brand-name">
            <h3 href="#">Smart Home</h3>
          </div>
          <div className="right-side">
            <ul>
              <li className="btn btn-primary">Login</li>
              <li className="btn btn-secondary">Sign up</li>
            </ul>
          </div>
        </nav>
        {/* content */}
        <div className="content">
          <h1 className="h1">Smart Home Application</h1>
          <h4 className="h4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
          </h4>
          <img src={iphoneImg} alt="Iphone image" className="main-img" />
        </div>
      </div>
      {/* about section  */}
      <div className="download-section">
        <img src={downloadImg} alt="Iphone image" className="download-img" />
      </div>
      {/* about section */}
      <div className="about-section">
        <h1>About us</h1>
        <div className="row-container">
          <div>
            <img src={iphoneImg} alt="Iphone image" className="card-img" />
          </div>
          <div>
            <h3>Lorem ipsum </h3>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not
            </p>
            <p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not
            </p>
            <button className="btn btn-primary ">Learn more</button>
          </div>
        </div>
      </div>
      {/* testimonials */}
      <div className="testimonial-section">
        <h1>Testimonials</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting</p>
        <div className="test-card">
          <div>
            <p>
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting"
            </p>
          </div>
          <div className="person-card">
            <div>
              <img src={personImg} alt="Person image" className="person-img" />
            </div>
            <div className="info-con">
              <h5>John Doe</h5>
              <h6>Software Engineer</h6>
            </div>
          </div>
        </div>
        <div className="test-card">
          <div>
            <p>
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting"
            </p>
          </div>
          <div className="person-card">
            <div>
              <img src={personImg} alt="Person image" className="person-img" />
            </div>
            <div className="info-con">
              <h5>John Doe</h5>
              <h6>Software Engineer</h6>
            </div>
          </div>
        </div>
        <div className="test-card">
          <div>
            <p>
              "Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting
              Lorem Ipsum is simply dummy text of the printing and typesetting"
            </p>
          </div>
          <div className="person-card">
            <div>
              <img src={personImg} alt="Person image" className="person-img" />
            </div>
            <div className="info-con">
              <h5>John Doe</h5>
              <h6>Software Engineer</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
