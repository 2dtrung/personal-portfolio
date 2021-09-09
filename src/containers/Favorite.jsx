import React from "react";
import football from "../assets/lottie/football.json";
import read from "../assets/lottie/read.json";
import dog from "../assets/lottie/dog.json";

import { SkillBars } from "../portfolio";
import { Container, Row, Progress, Col } from "reactstrap";

import { Fade } from "react-reveal";

import GreetingLottie from "../components/DisplayLottie";

const Favorite = () => {
  return (
    <section className="section pb-0 bg-gradient-success my-5">
      <Container className="section section-lg">
        <Fade bottom duration={1000} distance="40px">
          <div className="d-flex p-4">
            <div>
              <div className="icon icon-lg icon-shape bg-gradient-white shadow rounded-circle text-success">
                <i className="fa fa-thumbs-up text-success" />
              </div>
            </div>
            <div className="pl-4">
              <h4 className="display-3 text-success" id='nav-title1'>Favorites</h4>
            </div>
          </div>
          <Row>
            <Col lg="4">
              <GreetingLottie animationData={football} />
            </Col>
            <Col lg="4">
              <GreetingLottie animationData={read} />
            </Col>
            <Col lg="4">
              <GreetingLottie animationData={dog} />
            </Col>
          </Row>
        </Fade>
      </Container>
      <div className="separator separator-bottom separator-skew zindex-100">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
          version="1.1"
          viewBox="0 0 2560 100"
          x="0"
          y="0"
        >
          <polygon className="fill-white" points="2560 0 2560 100 0 100" />
        </svg>
      </div>
    </section>
  );
};

export default Favorite;
