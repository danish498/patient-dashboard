import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import { arrowDownIcon } from "../../assets/icons/Main";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
  Title,
  Tooltip,
  Legend
);

const getFirstThreeLatter = (text) => {
  if (!text) {
    return "";
  }

  if (text.length >= 5) return text.substring(0, 3);
};

const BloodPressureChart = ({ selectedUserData }) => {
  const [filterChart, setFilterChart] = useState(6);

  const months = selectedUserData.diagnosis_history
    .slice(0, filterChart)
    .reverse()
    .map((record) => `${getFirstThreeLatter(record.month)} ${record.year}`);

  const systolicValues = selectedUserData.diagnosis_history
    .slice(0, filterChart)
    .reverse()
    .map((record) => record.blood_pressure.systolic.value);

  const diastolicValues = selectedUserData.diagnosis_history
    .slice(0, filterChart)
    .reverse()
    .map((record) => record.blood_pressure.diastolic.value);

  const data = {
    labels: months,
    datasets: [
      {
        label: "Systolic Blood Pressure",
        data: systolicValues,
        borderWidth: 2,
        borderColor: "#E66FD2",
        backgroundColor: "#E66FD2",
        pointRadius: 6,
        pointBorderWidth: 1,
        pointBorderColor: "#FFFFFF",
      },
      {
        label: "Diastolic Blood Pressure",
        data: diastolicValues,
        borderWidth: 2,
        borderColor: "#8C6FE6",
        backgroundColor: "#8C6FE6",
        pointRadius: 6,
        pointBorderWidth: 1,
        pointBorderColor: "#FFFFFF",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top",
        labels: {
          font: {
            family: "'Manrope', sans-serif",
          },
        },
        tooltip: {
          bodyFont: {
            family: '"Manrope", sans-serif',
          },
          titleFont: {
            family: '"Manrope", sans-serif',
          },
        },
      },
    },
  };

  return (
    <>
      <div className="mt-8 bg-[#F4F0FE] rounded-xl p-4 grid grid-cols-3 gap-5">
        <div className="col-span-2">
          <div className="flex justify-between items-center gap-1">
            <h4 className="text-lg font-bold">Blood Pressure</h4>
            <select
              name=""
              id=""
              className="bg-transparent text-sm"
              value={filterChart}
              onChange={(e) => setFilterChart(e.target.value)}
            >
              <option value="6">Last 6 months</option>
              <option value="3">Last 3 months</option>
              <option value="2">Last 2 months</option>
              <option value="1">Last 1 months</option>
            </select>
          </div>
          <Line data={data} options={options} />
        </div>

        <div className="divide-y">
          <div className="mb-4 space-y-1">
            <h6 className="text-sm font-bold flex items-center gap-1">
              {" "}
              <span className="size-[14px] rounded-full inline-block bg-[#E66FD2]"></span>{" "}
              Systolic
            </h6>
            <h4 className="text-[22px] font-bold">
              {systolicValues[systolicValues.length - 1]}{" "}
            </h4>
            <p className="text-sm flex items-center gap-2">
              <span className="rotate-180">{arrowDownIcon}</span>{" "}
              <span>Higher than Average</span>
            </p>
          </div>
          <div className="pt-4 space-y-1">
            <h6 className="text-sm font-bold flex items-center gap-1">
              {" "}
              <span className="size-[14px] rounded-full inline-block bg-[#8C6FE6]"></span>{" "}
              Diastolic
            </h6>
            <h4 className="text-[22px] font-bold">
              {diastolicValues[diastolicValues.length - 1]}
            </h4>
            <p className="text-sm flex items-center gap-2">
              <span>{arrowDownIcon}</span> <span>Lower than Average</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default BloodPressureChart;
