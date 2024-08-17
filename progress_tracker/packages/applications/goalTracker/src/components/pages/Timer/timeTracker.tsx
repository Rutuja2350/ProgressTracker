import { Button } from "antd";
import SideNavbar from "../../navbar/SideNav";
import { PlusCircleOutlined } from '@ant-design/icons';

export default function TimeTracker() {
  return (
    <div className="time_tracker flex">
      <SideNavbar/>
      <div className="p-3 w-full">
        <div className="text-4xl">
          <h1>Time Tracker</h1>
        </div> 
        <div className="start_task flex pt-20 place-content-center">
          <h2 className="text-xl pr-4 ">Start Task</h2>
          <Button type='text'><PlusCircleOutlined/></Button>
        </div>
      </div>
    </div>
  );
}
