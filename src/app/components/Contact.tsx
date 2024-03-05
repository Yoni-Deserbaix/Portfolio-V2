export default function Contact() {
  return (
    <section className="contact bg-[$mainColor] px-0 py-[100px]" id="contact">
      <div className="container">
        <div className="contact-content">
          <h1 id="contact-title" data-aos="fade-up" data-aos-duration="300">
            Contact
          </h1>
          <p
            id="contact-hook-sentence"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-duration="300"
          >
            Une opportunité d'alternance ? Contactez-moi ! 👇
          </p>
          <div
            className="contact-wrapper"
            data-aos="fade-up"
            data-aos-delay="500"
            data-aos-duration="300"
          >
            <div className="contact-container">
              <span>
                <i className="bx bxs-map"></i>{" "}
              </span>
              <div className="contact-box">
                <h3>Lieu</h3>
                <p>Nantes, France</p>
              </div>
            </div>
            <div className="contact-container">
              <span>
                <i className="bx bxs-envelope"></i>{" "}
              </span>
              <div className="contact-box">
                <h3>Mail</h3>
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
