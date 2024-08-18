import SideNavbar from "../../navbar/SideNav";
import StopWatch from "../../common_functions/stopwatch";
import { Col, Row } from "antd";
import SelectMenu from "./selectMenu";

export default function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <div className="home flex">
      <SideNavbar />
      <div className="items-center pt-10 w-full place-content-center">
        <div className="pb-24 w-full">
          <h1 className="text-6xl">What are you working on today ?</h1>
        </div>
        <div className="pb-14">
          <Row>
            <Col span={12}>
              <SelectMenu />
            </Col>
            <Col span={12}>
              <StopWatch />
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
}
