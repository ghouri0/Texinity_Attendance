import { Col, Row, Statistic } from 'antd';
import React from 'react';
import '../App.css'

const Stats = () => (
  <Row  className="statsRow">
    <Col xs={24} sm={24} md={12} lg={6} xl={6} className="statsCol" >
      <Statistic title="Total Employees" value={10} />
    </Col>
    <Col xs={24} sm={24} md={12} lg={6} xl={6} className="statsCol" >
      <Statistic title="Total Internees" value={20} />
    </Col>
    <Col xs={24} sm={24} md={12} lg={6} xl={6} className="statsCol" >
      <Statistic title="Interns Present" value={"90%"} />
    </Col>
    <Col xs={24} sm={24} md={12} lg={6} xl={6} className="statsCol" >
      <Statistic title="Employees Present" value={"80%"} />
    </Col>
  </Row>
);

export default Stats;
