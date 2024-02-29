import React from "react";
import Aboutimg from "./../assets/about.svg";
import SectionTitle from "./Section";

const About = () => {
  return (
    <section className="bg-white py-20" id="about">
      <div className="align-element grid md:grid-cols-2 items-center gap-16">
        <img src={Aboutimg} className="w-full h-64" />
        <article>
            <SectionTitle text='code and coffee'/>
            <p className="text-slate-600 mt-8 leading-loose">I'm a passionate frontend developer dedicated to crafting user-centric applications that seamlessly blend functionality with intuitive design. With a keen eye for detail and a deep understanding of user experience principles, I thrive on translating complex ideas into elegant, user-friendly interfaces. My goal is to create immersive digital experiences that not only meet but exceed user expectations, ultimately driving engagement and satisfaction. Constantly honing my skills and staying abreast of the latest trends and technologies, I am committed to delivering innovative solutions that resonate with users and make a meaningful impact.</p>
        </article>
      </div>
    </section>
  );
};

export default About;
