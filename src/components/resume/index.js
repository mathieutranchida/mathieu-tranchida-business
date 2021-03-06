import React, { useRef, useEffect } from "react";
import styled from "styled-components";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useSelector, useDispatch } from "react-redux";
import { updateLoadState } from "../../redux/actions";

import TopHeader from "./header/topHeader/TopHeader";
import ScrollHeader from "./header/scrollHeader/ScrollHeader";
import IntroBackground from "./introBackground/index";
import Bio from "./bio/Bio";
import Education from "./education/Education";
import Skills from "./skills/Skills";
import Projects from "./portfolio/Projects";
import WorkExperience from "./workExperience/WorkExperience";
import Contact from "./contact/Contact";

gsap.registerPlugin(ScrollTrigger);

const Index = () => {
  const loadState = useSelector((state) => state.firstLoadReducer.firstLoad);
  const dispatch = useDispatch();

  let webPage = useRef(null);
  let revealRefs = useRef([]);
  revealRefs.current = [];

  const addToRefs = (el) => {
    if (el && !revealRefs.current.includes(el)) {
      revealRefs.current.push(el);
    }
  };

  useEffect(() => {
    if (loadState) {
      gsap.set(webPage, {
        opacity: 0,
      });
      gsap.to(webPage, {
        duration: 2,
        opacity: 1,
        ease: "power3.inOut",
      });
      dispatch(updateLoadState(false));
    }
  });

  useEffect(() => {
    revealRefs.current.forEach((el, index) => {
      gsap.fromTo(
        el,
        { opacity: 0 },
        {
          duration: 1.5,
          opacity: 1,
          ease: "power6.out",
          scrollTrigger: {
            id: `section-${index + 1}`,
            trigger: el,
            start: "top bottom-=150",
            toggleActions: "play none none none",
          },
        }
      );
    });
  }, []);

  return (
    <>
      <Wrapper
        ref={(e) => {
          webPage = e;
        }}
      >
        <TopHeader />
        <ScrollHeader />
        <IntroBackground />
        <Main>
          <section id="section1" ref={addToRefs}>
            <Bio />
          </section>
          <section id="section2" ref={addToRefs}>
            <Education />
          </section>
          <section id="section3" ref={addToRefs}>
            <Skills />
          </section>
          <section id="section4" ref={addToRefs}>
            <Projects />
          </section>
          <section id="section5" ref={addToRefs}>
            <WorkExperience />
          </section>
          <section id="section6" ref={addToRefs}>
            <Contact />
          </section>
        </Main>
      </Wrapper>
    </>
  );
};

const Wrapper = styled.div``;

const Main = styled.div`
  margin: 0px 50px;
  @media (max-width: 600px) {
    margin: 0px 7.5vw;
  }
`;

export default Index;
