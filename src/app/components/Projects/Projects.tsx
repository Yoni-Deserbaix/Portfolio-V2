import React from "react";
import Works from "./Works";
import Image from "next/image";

export default function () {
  return (
    <section
      className="work-section  w-3/5 m-auto px-8 py-[100px] max-md:w-full max-md:m-auto max-md:py-24"
      id="projects"
    >
      <h3
        className="section-title text-[1.3rem] font-extrabold uppercase pb-8"
        data-aos="fade-up"
        data-aos-duration="300"
      >
        Projets
      </h3>
      <div
        className="subtitle"
        data-aos="fade-up"
        data-aos-delay="500"
        data-aos-duration="300"
      >
        <div className="section-subtitle  text-[#767676]">
          Parce-que <b>quelques images</b> valent mieux que{" "}
          <b>10 000 lignes de code</b>, je vous laisse découvrir ci-dessous
          quelques <b>projets</b> que j'ai pu réaliser !
        </div>
      </div>

      <Works />
    </section>
  );
}