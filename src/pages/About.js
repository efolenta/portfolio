import React from "react";
import { Container, Row } from "../components/Grid";
import Header from "../components/Header";
import Hero from "../components/Hero";
import ShapeDivider from "../components/ShapeDivider";
import Footer from "../components/Footer";
// import Copyright from "../components/Copyright";

function AboutPage() {
  
  // This function changes the page title.
  function componentDidMount() {
    document.title = 'About Me | Eric Folenta | Web Developer';
  }
  // Run the function to change the page title.
  componentDidMount();

  return(
    <>
      <Header />
      <Hero title="About Me" subtext="Get to know me, where I'm from, and what I like to do away from the screen." />
      <ShapeDivider />

      <Container>
        <Row>
            <div>
                <h1>Who am I?</h1>
                <p>I'm sure you've figured out my name by now but just in case you missed it up top, my name is Eric! I'm a full-stack web developer who graduated from the UC Irvine Coding Bootcamp.</p>
                <p>When I'm on screen, I enjoy building websites, throwing my ideas for design onto a page, and always trying to learn new techniques and adapt to the ever-changing world that we web developers deal with.</p>
                <p>For over 10 years my work has varied from video production to website development through many different stages in my career. In video production, I would handle directing and producing in a closed set environment. This gave me the opportunity to strengthen my communication with clients which is important across the board. In web development, I would tackle a lot more responsibility.</p>
                <p>My web development background stems from just over 5 years of experience in front-end development. HTML &amp; CSS to be more specific. But it didn't stop at just front-end development. Soon I was helping companies with their email marketing, sales ideas, and more.</p>
                <p>When I'm off-screen, I enjoy spending time with my wife and getting outdoors. From hiking in the woods to taking a drive to discover a new place.</p>
                <h5 style={{fontStyle: 'italic'}}>Fun Fact: I'm actually from California! Born and raised in Orange County. In January of 2021, my wife and I embarked on a new adventure by moving across the country to Rochester, New York. Talk about a crazy life change!</h5>
            </div>
        </Row>
      </Container>
      
      <Container fluid id="footer">
        <Footer />
      </Container>
    </>
  );
}

export default AboutPage;