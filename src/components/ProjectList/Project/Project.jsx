/* eslint-disable import/no-dynamic-require */
import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { gsap, Power2 } from 'gsap';
import { Flip } from 'gsap/Flip';
import SplitType from 'split-type';
import './Project.scss';

gsap.registerPlugin(Flip);

function Project({ project }) {
  const projectRef = useRef();
  // const testRef = useRef();
  const [titleRef, titleInView, entry] = useInView({ triggerOnce: true });
  const [subRef, subView, subEntry] = useInView({ triggerOnce: true });
  const [descRef, descView, descEntry] = useInView({ triggerOnce: true });

  // const titleRef = useRef();
  const tl = useRef();
  useEffect(() => {
    if (titleInView) {
      // eslint-disable-next-line prettier/prettier
      tl.current = gsap.timeline()
      .from(entry.target, {
        yPercent: 130,
        delay: 0.2,
        ease: Power2.easeOut,
        duration: 0.8,
        skewY: 12,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [titleInView, entry]);
  useEffect(() => {
    if (subView) {
      // eslint-disable-next-line prettier/prettier
      tl.current = gsap.timeline()
      .from(subEntry.target, {
        yPercent: 130,
        delay: 0.2,
        ease: Power2.easeOut,
        duration: 0.8,
        skewY: 12,
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [subView, subEntry]);
  useEffect(() => {
    if (descView) {
      const descText = new SplitType(descEntry.target, { types: 'line' });
      tl.current = gsap.timeline().from(descText.lines, {
        yPercent: 200,
        delay: 0.3,
        ease: Power2.easeOut,
        duration: 1,
        stagger: { amount: 0.1 },
      });
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [descView, descEntry]);
  return (
    <div className="project-contents" ref={projectRef}>
      <div className="project-text" data-scroll data-scroll-speed="-1.1">
        <h2 className="title">
          <div className="title-wrapper">
            <span className="title-inner" ref={titleRef}>
              {project.title}
            </span>
          </div>
          <div className="subtitle-wrapper">
            <span className="subtitle-inner subtitle" ref={subRef}>
              {project.subtitle}
            </span>
          </div>
        </h2>
        <p className="project-desc">
          <p className="project-desc-inner" ref={descRef}>
            {project.description}
          </p>
        </p>
      </div>

      <div className="image-wrapper" data-scroll>
        <img
          src={require(`../../../assets/images/${project.image}`)}
          alt="Holo website"
          data-scroll
          data-scroll-speed="-1.1"
        />
      </div>
    </div>
  );
}

export default Project;
