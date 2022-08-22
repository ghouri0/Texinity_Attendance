import { Col, Row } from "antd";
import OngoingProjects from "./OngoingProjects";
import Stats from "./stats";
import "../App.css";

const Dashboard = () => {
  return (
    <>
      <Row style={{ marginTop: 15 }} justify="space-around">
        {/* <Col span={1} /> */}
        <Col span={22}>
          <Stats />
        </Col>
        {/* <Col span={1} /> */}
      </Row>
      <Row style={{ marginTop: 15 }} justify="space-around">
        {/* <Col span={1} /> */}
        <Col span={22}>
          <OngoingProjects />
        </Col>
        {/* <Col span={1} /> */}
      </Row>
    </>
  );
};

export default Dashboard;
