import React from "react";
import Image from "next/image";
import memojiHome from '../assets/memoji-home.png';

import 'boxicons/css/boxicons.min.css';

export default function Hero() {
  return (
    <div>
      {/* Home section  */}
      <section className="bg-[#fff] pt-[200px]" id="home">
        {/* Container  */}
        <div className="m-auto w-[70%] px-8 py-0">
          {/* Content  */}
          <div className="flex justify-center items-center justify-between">
            {/* Hero text  */}
            <div className="flex flex-col max-w-[50rem]">
              <h1
                className="text-5xl font-bold leading-[1.2] mb-[15px]"
                data-aos="fade-up"
                data-aos-duration="300"
              >
                Salut, <br /> je suis Yoni Deserbaix
                <span className="mt-[25px]">👋</span>
              </h1>
              <p
                className="leading-[1.6] text-[#767676] mr-[25px]"
                data-aos="fade-up"
                data-aos-delay="300"
                data-aos-duration="300"
              >
                Développeur Fullstack orienté Frontend et étudiant en
                informatique basé à Nantes. 📍
              </p>
              <span
                className="link pt-6"
                data-aos="fade-up"
                data-aos-delay="500"
                data-aos-duration="300"
              >
                {/* Link  */}
                <a
                  className="inline-block text-[whitesmoke] text-base transition-all duration-[0.2s] bg-[#767676] mr-[7px] mb-2.5 px-[0.6rem] py-[0.4rem] rounded-[15px] hover:opacity-[80%]"
                  href="http://linkedin.com/in/yoni-deserbaix"
                  target="_blank"
                  rel="noreferrer"
                >
                  {/* Social button  */}
                  <i className="bg-transparent text-base text-[whitesmoke] translate-y-px pr-[5px] bx bxl-linkedin-square"></i>
                  LinkedIn
                </a>

                {/* Link  */}
                <a
                  href="https://github.com/Yoni-Deserbaix"
                  rel="noreferrer"
                  target="_blank"
                  className="inline-block text-[whitesmoke] text-base transition-all duration-[0.2s] bg-[#767676] mr-[7px] mb-2.5 px-[0.6rem] py-[0.4rem] rounded-[15px] hover:opacity-[80%]"
                >
                  {/* Social button */}
                  <i className="bg-transparent text-base text-[whitesmoke] translate-y-px pr-[5px] bx bxl-github"></i>
                  Github
                </a>

                {/* Link  */}
                <a
                  href="mailto:yonideserbaix@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                  className="inline-block text-[whitesmoke] text-base transition-all duration-[0.2s] bg-[#767676] mr-[7px] mb-2.5 px-[0.6rem] py-[0.4rem] rounded-[15px] hover:opacity-[80%]"
                >
                  {/* Social button */}
                  <i className="bg-transparent text-base text-[whitesmoke] translate-y-px pr-[5px] bx bxl-linkedin-square bx bxs-envelope"></i>{" "}
                  yonideserbaix@gmail.com
                </a>
                <br />
              </span>
            </div>
            {/* Hero image  */}
            <div className="relative animate-[animimg_4s_ease-in-out_infinite] rounded-[50%]">
              <Image
                src={memojiHome.src} width={2000} height={2000}
                className="flex w-80 h-80 animate-[animimg_4s_ease-in-out_infinite] rounded-[50%]"
                alt="hero"
                data-aos="fade-up"
                data-aos-duration="300"
              />
            </div>
          </div>
          {/* Hero mouse anchor  */}
          <a className="flex justify-center mt-[350px] mb-[25px]" href="#about">
            {/* Mouse icon  */}
            <div className="w-[25px] h-[45px] relative text-center rounded-[15px] border-2 border-solid border-[#767676]">
              <span className="w-[3px] h-2 block animate-[1.2s_ease_infinite_wheel-up-down] mt-0.5 mb-0 mx-auto rounded-[5px] background: $textColor -webkit-animation: 1.2s ease infinite wheel-up-down"></span>
            </div>
          </a>{" "}
        </div>
      </section>
    </div>
  );
}
