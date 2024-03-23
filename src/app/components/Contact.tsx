export default function Contact() {
  return (
    <section className="contact py-[100px] " id="contact">
      <div className="container w-4/5 m-auto">
        <div className="contact-content">
          <h1
            id="contact-title"
            className="text-[1.3rem] font-extrabold uppercase"
          >
            Contact
          </h1>
          <p
            id="contact-hook-sentence"
            className="leading-normal text-[1.6rem] font-extrabold text-[#2d2e32] mt-20 mb-8 mx-0"
          >
            Une opportunité d'alternance ? Contactez-moi ! 👇
          </p>
          <div className="contact-wrapper flex justify-evenly max-lg:flex-col max-lg:gap-4">
            <div className="contact-container flex items-center gap-4">
              <span className="shadow-[0_0_10px_rgba(0,0,0,0.1)] p-4 rounded-[50%] hover:scale-110 transition duration-200">
                <i className="bx bxs-map text-2xl"></i>{" "}
              </span>
              <div className="contact-box">
                <h3 className="font-semibold text-[1.2rem]">Lieu</h3>
                <p>Nantes, France</p>
              </div>
            </div>
            <div className="contact-container  flex items-center gap-4">
              <span className="shadow-[0_0_10px_rgba(0,0,0,0.1)] p-4 rounded-[50%] hover:scale-110 transition duration-200">
                <i className="bx bxs-envelope text-2xl"></i>{" "}
              </span>
              <div className="contact-box flex flex-col gap-2">
                <h3 className="font-semibold text-[1.2rem]">Mail</h3>
                <a
                  href="mailto:yonideserbaix@gmail.com"
                  rel="noreferrer"
                  target="_blank"
                  className="social-button"
                >
                  yonideserbaix@gmail.com
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
