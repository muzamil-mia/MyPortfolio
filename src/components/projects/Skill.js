import React from "react";
import { useInView } from "react-intersection-observer";

const Skill = ({skill, index}) => {
  const { ref, inView } = useInView({
    triggerOnce: true, // Triggers animation only once
    threshold: 0.1,    // Trigger when 10% of the element is visible
  });

  return (
    <>
      <div className="title1">
        <h3 className={`title2 animate__animated ${inView ? 'animate__backInLeft custom-animation' : ''}`} ref={ref}>{skill[index].type}</h3>
      </div>
      <div className="iconscard">
        {skill[index].list.map((item, index) => {
          console.log(item)
          return (
            <div className={`iconcard animate__animated ${inView ? 'animate__backInRight custom-animation' : ''}`} ref={ref}>
            <div className="icon">{item.icon}</div>
            <label className="iconname">{item.name}</label>
            </div>
          )
        })}
      </div>
      </>
  )
}

export default Skill;