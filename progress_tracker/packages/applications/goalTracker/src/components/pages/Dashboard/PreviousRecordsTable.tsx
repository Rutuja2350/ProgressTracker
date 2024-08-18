import React from "react";
import { Table } from "antd";
import type { TableProps } from "antd";

enum Day {
  Sunday = "Sunday",
  Monday = "Monday",
  Tuesday = "Tuesday",
  Wednesday = "Wednesday",
  Thursday = "Thursday",
  Friday = "Friday",
  Saturday = "Saturday",
}

interface Time {
  hours: number;
  minutes: number;
}

interface DataType {
  key: number;
  taskName: string;
  description: string;
  startTime: Date;
  stopTime: Date;
  totalTime: Time;
  date: Date;
  day: Day;
  // tags: string[];
}

const columns: TableProps<DataType>["columns"] = [
  {
    title: "Task Name",
    dataIndex: "taskName",
    key: "name",
    // render: (text) => <a>{text}</a>,
  },
  {
    title: "Description",
    dataIndex: "description",
    key: "description",
  },
  {
    title: "Start Time",
    dataIndex: "startTime",
    key: "startTime",
    render: (date: Date) => date ? date.toLocaleTimeString() : 'N/A'
  },
  {
    title: "Stop Time",
    dataIndex: "stopTime",
    key: "stopTime",
    render: (date: Date) => date ? date.toLocaleTimeString() : 'N/A'
  },
  {
    title: "Total Time",
    dataIndex: "totalTime",
    key: "totalTime",
    render: (totalTime: Time) => `${totalTime.hours}h ${totalTime.minutes}m` // Format Time object
  },
  {
    title: "Date",
    dataIndex: "date",
    key: "date",
    render: (date: Date) => date ? date.toLocaleDateString() : 'N/A'
  },
  {
    title: "Day",
    dataIndex: "day",
    key: "day"
  },
];

const data: DataType[] = [
  {
    key: 1,
    taskName: "Coding", // 'taskName' should match with 'dataIndex' in 'TableProps<DataType>'
    description: "10 qs from hackerrank", // filed name from DataType Interface
    startTime: new Date(2024, 7, 15, 9, 30),
    stopTime: new Date(2024, 7, 15, 9, 30),
    totalTime: { hours: 2, minutes: 25 },
    date: new Date(2024, 7, 15, 9, 30),
    day: Day.Sunday,
  },
  {
    key: 2,
    taskName: "React Project",
    description: "aaded functionality",
    startTime: new Date(2024, 7, 15, 9, 30),
    stopTime: new Date(2024, 7, 15, 9, 30),
    totalTime: { hours: 2, minutes: 25 },
    date: new Date(2024, 7, 15, 9, 30),
    day: Day.Friday,
  },
  {
    key: 3,
    taskName: "Extar Office Work",
    description: "extra work",
    startTime: new Date(2024, 7, 15, 9, 30),
    stopTime: new Date(2024, 7, 15, 9, 30),
    totalTime: { hours: 2, minutes: 25 },
    date: new Date(2024, 7, 15, 9, 30),
    day: Day.Tuesday,
  },
];

const PreviousRecords: React.FC = () => (
  <>
  <Table columns={columns} dataSource={data} />
  </>
);

export default PreviousRecords;
