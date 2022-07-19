import "./memory.css";
import Sidebar from "../../components/Sidebar"
import { format, parseISO, subDays } from "date-fns";
import {
  ResponsiveContainer,
  AreaChart,
  XAxis,
  YAxis,
  Area,
  Tooltip,
  CartesianGrid,
} from "recharts";
import { useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { TextField } from "@mui/material";
import { AdapterDateFns } from '@mui/x-date-pickers/AdapterDateFns';
import { publicRequest } from "../../requestMethods";

function CustomTooltip({ active, payload, label }) {
  if (active) {
    return (
      <div className="tooltip">
        <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
        <p>%{payload[0].value.toFixed(2)}</p>
      </div>
    );
  }
  return null;
}


function Memory() {

  const currentDate = new Date();
  const nextDate = new Date();
  nextDate.setDate(currentDate.getDate() - 1);

  const [initialValue, setInitialValue] = useState(currentDate);
  const [finalValue, setFinalValue] = useState(nextDate);

  const handleChangeInitial = (newValue) => {
    setInitialValue(newValue);
  };
  const handleChangeFinal = (newValue) => {
    setFinalValue(newValue);
  };

  const data = [];
  for (let num = 120; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      value: 1 + Math.random(),
    });
  }

  const getData = async () => {

    try {
      let date = `${initialValue.getUTCFullYear()}-${("0" + (initialValue.getMonth() + 1)).slice(-2)}-${initialValue.getUTCDate() - 1}`;
      let date2 = `${finalValue.getUTCFullYear()}-${("0" + (finalValue.getMonth() + 1)).slice(-2)}-${finalValue.getUTCDate() - 1}`;
      let finaldate = `${date}T${initialValue.getHours()}:${initialValue.getMinutes()}`;
      let finaldate2 = `${date2}T${finalValue.getHours()}:${finalValue.getMinutes()}`
      let fulldate = `${finaldate}|${finaldate2}`
      const res = await publicRequest.get(`/cpu/${fulldate}/`)

    } catch (error) {
      console.log(error)
    }

  };

  return (
    <div className='pageMEMORY'>
      <Sidebar />
      <div className='containerMEMORY'>
        <div>
          <h1 className='titleMEMORY'>MEMORY</h1>
        </div>
        <div className='containerChart'>
          <ResponsiveContainer width="100%" height={700}>
            <AreaChart data={data}>
              <defs>
                <linearGradient id="color" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#e25a24" stopOpacity={0.4} />
                  <stop offset="75%" stopColor="#e25a24" stopOpacity={0.05} />
                </linearGradient>
              </defs>

              <Area dataKey="value" stroke="#e25a24" fill="url(#color)" />

              <XAxis
                dataKey="date"
                axisLine={false}
                tickLine={false}
                tickFormatter={(str) => {
                  const date = parseISO(str);
                  if (date.getDate() % 2 === 0) {
                    return format(date, "MMM, d");
                  }
                  return "";
                }}
              />

              <YAxis
                datakey="value"
                axisLine={false}
                tickLine={false}
                tickCount={8}
                tickFormatter={(number) => `%${number.toFixed(2)}`}
              />

              <Tooltip content={<CustomTooltip />} />

              <CartesianGrid opacity={0.1} vertical={false} />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="containerDates">
          <div className="containerDate">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                label="Initial Date&Time"
                value={initialValue}
                onChange={handleChangeInitial}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
          <div className="containerDate">
            <LocalizationProvider dateAdapter={AdapterDateFns}>
              <DateTimePicker
                label="Final Date&Time"
                value={finalValue}
                onChange={handleChangeFinal}
                renderInput={(params) => <TextField {...params} />}
              />
            </LocalizationProvider>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Memory