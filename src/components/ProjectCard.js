import { Col } from "react-bootstrap";

export const ProjectCard = ({
  title,
  description1,
  description2,
  imgUrl,
  link,
}) => {
  return (
    <Col size={12} sm={6} md={4}>
      <a target="_blank" rel="noreferrer" href={link}>
        <div className="proj-imgbx">
          <img src={imgUrl} alt="" />
          <div className="proj-txtx">
            <h4>{title}</h4>
            <span>{description1}</span>
            <br />
            <span>{description2}</span>
          </div>
        </div>
      </a>
    </Col>
  );
};
