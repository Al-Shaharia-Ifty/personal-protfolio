import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.png";
import projImg4 from "../assets/img/genius-car.png";
import reaImg1 from "../assets/img/react-pro1.png";
import reaImg2 from "../assets/img/react-pro2.png";
import reaImg3 from "../assets/img/react-pro3.png";
import reaImg4 from "../assets/img/react-pro4.png";
import reaImg5 from "../assets/img/react-pro5.png";
import htmlImg1 from "../assets/img/html-pro1.png";
import htmlImg2 from "../assets/img/html-pro2.png";
import htmlImg3 from "../assets/img/html-pro3.png";
import colorSharp2 from "../assets/img/color-sharp2.png";
import "animate.css";
import TrackVisibility from "react-on-screen";

export const Projects = () => {
  const fullProjects = [
    {
      title: "Dentist Doctor",
      description1: "Front-end: React.js, tailwind CSS, Firebase ",
      description2: "Back-end: MongoDB, Node.js ",
      imgUrl: projImg1,
      link: "/first-project",
    },
    {
      title: "Online Business",
      description1: "Front-end: React.js, tailwind CSS, Firebase ",
      description2: "Back-end: MongoDB, Node.js ",
      imgUrl: projImg3,
      // link: "https://puredigimate.web.app/",
      link: "/seconde-project",
    },
    {
      title: "Brick Business",
      description1: "Front-end: React.js, tailwind CSS, Firebase ",
      description2: "Back-end: MongoDB, Node.js ",
      imgUrl: projImg2,
      // link: "https://gadget-land.web.app/",
      link: "/third-project",
    },
    {
      title: "Genius Car Service",
      description1: "Front-end: React.js, Bootstrap, Firebase ",
      description2: "Back-end: MongoDB, Node.js ",
      imgUrl: projImg4,
      // link: "https://genius-car-services-67edf.web.app/",
      link: "/fourth-project",
    },
    {
      title: "Online Shop",
      description1: "Front-end: React.js, Bootstrap, Firebase ",
      description2: "Back-end: MongoDB, Node.js ",
      imgUrl: reaImg4,
      // link: "https://magical-crisp-65a671.netlify.app/",
      link: "/fifth-project",
    },
    {
      title: "Event Management",
      description1: "Front-end: React.js, Tailwind CSS, Firebase ",
      description2: "Back-end: MongoDB, Node.js ",
      imgUrl: reaImg5,
      // link: "https://sprightly-fox-8e5c98.netlify.app/",
      link: "/sixth-project",
    },
  ];
  const reactProjects = [
    {
      title: "Health Service",
      description1: "Front-end: React.js, Bootstrap ",
      description2: "",
      imgUrl: reaImg1,
      link: "https://resplendent-sherbet-c6de6d.netlify.app/",
    },
    {
      title: "Speaker Website",
      description1: "Front-end: React.js, Bootstrap",
      description2: "",
      imgUrl: reaImg2,
      link: "https://lucent-beijinho-fbbd7b.netlify.app/",
    },
    {
      title: "Brick Business",
      description1: "Front-end: React.js, Bootstrap, Firebase ",
      description2: "",
      imgUrl: reaImg3,
      link: "https://magical-crisp-65a671.netlify.app/",
    },
  ];
  const htmlProject = [
    {
      title: "Skill Share",
      description1: "HTML, CSS, Bootstrap",
      description2: "",
      imgUrl: htmlImg1,
      link: "https://papaya-bunny-7c2b34.netlify.app/",
    },
    {
      title: "Wedding Website",
      description1: "HTML, CSS, Bootstrap",
      description2: "",
      imgUrl: htmlImg2,
      link: "https://papaya-bunny-7c2b34.netlify.app/",
    },
    {
      title: "Donation Website",
      description1: "HTML, CSS",
      description2: "",
      imgUrl: htmlImg3,
      link: "https://al-shaharia-ifty.github.io/dontate-today-assientment-repo/",
    },
  ];

  return (
    <section className="project" id="project">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div
                  className={
                    isVisible ? "animate__animated animate__fadeIn" : ""
                  }
                >
                  <h2>Projects</h2>
                  <p>
                    I already worked on may projects. Some websites are not
                    interesting and some websites are very beautiful. Some of
                    them are given below.
                  </p>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav
                      variant="pills"
                      className="nav-pills mb-5 justify-content-center align-items-center"
                      id="pills-tab"
                    >
                      <Nav.Item>
                        <Nav.Link eventKey="first">Full Stack Website</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">React Website</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="third">
                          Html, Css, JavaScript
                        </Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content
                      id="slideInUp"
                      className={
                        isVisible ? "animate__animated animate__slideInUp" : ""
                      }
                    >
                      <Tab.Pane eventKey="first">
                        <Row>
                          {fullProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {reactProjects.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row>
                          {htmlProject.map((project, index) => {
                            return <ProjectCard key={index} {...project} />;
                          })}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt=""></img>
    </section>
  );
};
