"use client"
import React from "react";
// import DownloadCV from "../assets/Yoni Deserbaix CV 2024.pdf";
import aboutPhoto from "../assets/about.jpg";

export default function About() {
  return (
    <div className="about bg-whitesmoke py-100">
      {/* About section */}
      <section className="container mx-auto">
        {/* About content */}
        <div className="flex justify-center items-center">
          {/* About image */}
          <div
            className="about-img w-250 h-350 transition-transform duration-400 mr-100 rounded-25 hover:scale-102"
            data-aos="fade-up"
            data-aos-duration="500"
          >
            <img src={aboutPhoto.src} />
          </div>
          {/* About text */}
          <div>
            <h3
              className="about-text text-lg font-bold uppercase"
              data-aos="fade-up"
              data-aos-duration="300"
            >
              A propos de moi
            </h3>

            <p
              className="text-2d2e32 leading-normal mt-15"
              data-aos="fade-up"
              data-aos-delay="300"
              data-aos-duration="300"
            >
              Hello 👋! je m'appelle <b>Yoni</b>, je suis un jeune
              <b> développeur de 20 ans</b> au parcours atypique, ayant évolué
              dans l'électricité et des environnements connectés à l'univers de
              la <b>programmation</b>, explorant ainsi les frontières créatives
              de l'<b>informatique</b>. Mon expertise en <b>programmation</b>{" "}
              et en <b>administration de réseaux</b> s'est forgée au fil de mes
              expériences. En tant qu'<b>autodidacte déterminé</b>, mon
              exploration du <b>JavaScript</b> associé à <b>React</b> a donné
              vie à des projets web <b>créatifs</b> et <b>innovants</b>. Ma
              passion pour le <b>développement Frontend</b> et ma soif
              d'apprentissage me préparent à <b>contribuer activement</b> à des
              projets captivants. <br />
              <br />
              Explorez mon portfolio pour découvrir comment je peux apporter
              une perspective unique et des compétences solides à <b>vos
              projets</b> 😊!
            </p>

            <a
              // href={DownloadCV}
              className="DownloadCV inline-block text-whitesmoke text-base transition-all duration-200 bg-2d2e32 mr-7 mt-5 mb-2.5 px-2 py-1 rounded-15"
              data-aos="fade-up"
              data-aos-delay="500"
              data-aos-duration="300"
            >
              Download CV{" "}
              <i className="bg-transparent text-whitesmoke text-base transform translate-y-0.5 pr-1 bx bxs-download"></i>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
