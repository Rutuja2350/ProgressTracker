import { Col, Row } from "antd";
import SideNavbar from "../../navbar/SideNav";
import LineGraph from "./lineGraph";
import PieGraph from "./pieChart";
import PreviousRecords from "./PreviousRecordsTable";

export default function Dashboard() {
  return (
    <div className="dashboard flex">
      <SideNavbar />
      <div className="w-full p-3">
        <div className="pb-10 w-full">
          <h1 className="text-6xl">Dashboard</h1>
        </div>
        <div>
          <Row>
            <Col span={12}>
              <LineGraph />
            </Col>
            <Col span={12}>
              <PieGraph />
            </Col>
          </Row>
          <Row>
            <div className="w-full">
              <PreviousRecords />
            </div>
          </Row>
        </div>
      </div>
    </div>
  );
}
