function Contact() {
    return (
      <>
        <section id="contact" className="contact">
          <div className="container">
            <div className="contact__content">
              <div className="contact__title">
                <p>contact</p>
                <h3>Don't be shy! Hit me up! 👇</h3>
              </div>
              <div className="contact__icons">
                <div className="contact__icon-box">
                  <span>
                    <i className="fa-solid fa-map-location-dot"></i>
                  </span>
                  <div className="contact__info">
                    <h3>Location</h3>
                    {/* <p>Bashaboo, Dhaka-1214, Bangladesh.</p> */}
                    <a href="https://maps.app.goo.gl/guFkWv3h24FQ5C6v9" target="_blank">
                    Shanarpar, Narayanganj 1361, Bangladesh.
                    </a>
                  </div>
                </div>
  
                <div className="contact__icon-box">
                  <span>
                    <i className="fa-solid fa-envelope-open-text"></i>
                  </span>
                  <div className="contact__info">
                    <h3>Mail</h3>
                    <a href="mailto:arifursajid3456@gmail.com">
                      arifursajid3456@gmail.com
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </>
    );
  }
  
  export default Contact;
  