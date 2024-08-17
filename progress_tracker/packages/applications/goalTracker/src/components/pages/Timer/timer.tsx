import SideNavbar from "../../navbar/SideNav";
import StopWatch from "../../common_functions/stopwatch";
import { Col, Row } from "antd";

export default function Timer() {
  const time = new Date();
  time.setSeconds(time.getSeconds() + 600); // 10 minutes timer

  return (
    <div className="home flex">
      <SideNavbar />
      <div className="items-center w-full">
        <div className="p-3 w-full">
          <p>Timer</p>
        </div>
        <div>
            <Row>
                <Col span={12}></Col>
                <Col span={12}><StopWatch/></Col>
            </Row>
        </div>
      </div>
    </div>
  );
}
