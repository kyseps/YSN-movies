import video from "../assets/Videos/3.mp4";
import picLogo from "../assets/Pictures/logo.png";
import { Col, Row, Button } from "antd";

export default function Header() {
  return (
    <header className="header">
      <video autoPlay loop muted className="headerVideo">
        <source src={video} type="video/mp4" />
      </video>

      <Row className="parent" justify="space-evenly" align="middle">
        <Col sm={6} className="child" justify="center">
          <div className="logo">
            <img src={picLogo} />
            <span>جزمین مووی</span>
          </div>
        </Col>

        <Col sm={12} className="child">
          <nav>
            <ul className="Hedear-Nav">
              <li>
                <a href="#">خانه</a>
              </li>
              <li>
                <a href="#">فیلم</a>
              </li>
              <li>
                <a href="#">تی وی </a>
              </li>
              <li>
                <a href="#">قیمت</a>
              </li>
              <li>
                <a href="#">بلاگ</a>
              </li>
              <li>
                <a href="#">تماس با ما</a>
              </li>
            </ul>
          </nav>
        </Col>

        <Col sm={6} className="child">
          <div className="header-right">
            <Button type="primary">Primary Button</Button>
          </div>
        </Col>
      </Row>
    </header>
  );
}
