import { FaNutritionix } from "react-icons/fa";
import { Col, Row, Button, Slider } from "antd";

import MySlider from "./MySlider";

export default function Header() {
  return (
    <header className="header">
      <MySlider />

      <Row className="parent" justify="space-evenly" align="middle">
        <Col sm={6} className="child" justify="center">
          <div className="logo">
            {/* <FontAwesomeIcon icon='faCoffee'/> */}
            <FaNutritionix style={{ color: "white", fontSize: "4em" }} />
            <a>جزمین مووی</a>
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
            <Button type="primary">ورود</Button>
          </div>
        </Col>
      </Row>
    </header>
  );
}
