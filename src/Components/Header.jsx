import video from "../assets/Videos/3.mp4";
import picLogo from "../assets/Pictures/logo.png";
import { Col, Row } from "antd";

export default function Header() {
  return (
    <header className="header">
      <video autoPlay loop muted className="headerVideo">
        <source src={video} type="video/mp4" />
      </video>

      <Row className="parent">
        <Col sm={8} className="child">
          <div className="logo">
            <img src={picLogo} />
          </div>
        </Col>

        <Col sm={8} className="child">
          <nav>
            <ul className="Hedear-Nav">
              <li href="#">HomeOne</li>
              <li href="#">Movie</li>
              <li href="#">TVShow</li>
              <li href="#">Pricing</li>
              <li href="#">Blog</li>
              <li href="#">Contact</li>
            </ul>
          </nav>
        </Col>

        <Col sm={8} className="child">
          <div className="header-right">
            <h1>888</h1>
          </div>
        </Col>
      </Row>
    </header>
  );
}
