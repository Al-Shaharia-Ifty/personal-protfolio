import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-page-man.png";
import "animate.css";
import TrackVisibility from "react-on-screen";
import emailjs from "emailjs-com";

export const Contact = () => {
  const [buttonText, setButtonText] = useState("Send");
  const [status, setStatus] = useState({});

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    emailjs
      .sendForm(
        "service_idxlueb",
        "template_nnxp9yg",
        e.target,
        "fomT5APcqkNDOSNAK"
      )
      .then(
        (result) => {
          setStatus({ succes: true, message: "Message sent successfully" });
        },
        (error) => {
          console.log(error);
          setStatus({
            succes: false,
            message: "Something went wrong, please try again later.",
          });
        }
      );
    setButtonText("Send");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <img
                  className={
                    isVisible ? "animate__animated animate__zoomIn" : ""
                  }
                  src={contactImg}
                  alt="Contact Us"
                />
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={6}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Get In Touch</h2>
                  <form onSubmit={handleSubmit}>
                    <Row>
                      <Col size={12} sm={12} className="px-1">
                        <input type="text" placeholder="Name" name="name" />
                      </Col>

                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="email"
                          placeholder="Email Address"
                          name="email"
                        />
                      </Col>
                      <Col size={12} sm={12} className="px-1">
                        <input
                          type="text"
                          placeholder="Subject"
                          name="subject"
                        />
                      </Col>
                      <Col size={12} className="px-1">
                        <textarea
                          rows="6"
                          placeholder="Message"
                          name="message"
                        ></textarea>
                        <button type="submit">
                          <span>{buttonText}</span>
                        </button>
                      </Col>
                    </Row>
                    {status.message && (
                      <Col>
                        <p
                          className={
                            status.success === false ? "danger" : "success"
                          }
                        >
                          {status.message}
                        </p>
                      </Col>
                    )}
                  </form>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
