import React, { useEffect, useState } from 'react';
import "./cpu.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Sidebar from "../../components/Sidebar"
import { publicRequest } from '../../requestMethods';

function Cpu() {

  const [valuesUsage, setValuesUsage] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [times, setTimes] = useState([0, 0, 0, 0, 0, 0, 0, 0, 0, 0]);
  const [seconds, setSeconds] = useState(0);

  const data = [
    { time: times[0], usage: valuesUsage[0] },
    { time: times[1], usage: valuesUsage[1] },
    { time: times[2], usage: valuesUsage[2] },
    { time: times[3], usage: valuesUsage[3] },
    { time: times[4], usage: valuesUsage[4] },
    { time: times[5], usage: valuesUsage[5] },
    { time: times[6], usage: valuesUsage[6] },
    { time: times[7], usage: valuesUsage[7] },
    { time: times[8], usage: valuesUsage[8] },
    { time: times[9], usage: valuesUsage[9] }
  ];

  const putNewValue = (newValue, listData) => {
    let cont = 1
    let newData = [newValue]
    while (cont < listData.length) {
      newData[cont] = listData[cont - 1]
      cont++
    }
    return newData
  };

  const getCPU = async () => {
    try {
      const res = await publicRequest.get("cpu/");
      setValuesUsage(putNewValue(res.data["cpu"], valuesUsage))
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      //LOOP EVERY SECOND
      setTimes(putNewValue(seconds, times))
      //getCPU()
      setValuesUsage(putNewValue(Math.floor(Math.random() * 100) + 1, valuesUsage))
      setSeconds(seconds + 1)
    }, 1000);
    return () => clearInterval(interval);
  }, [times, valuesUsage, seconds]);

  return (
    <div className='pageCPU'>
      <Sidebar />
      <div className='containerCPU'>
        <div className='containerTopCpu'>
          <h1 className='titleCPU'>CPU</h1>
        </div>
        <div className='containerChart'>
          <ResponsiveContainer width="100%" height={500}>
            <LineChart data={data}>
              <Line yAxisId="right" type="category" dataKey="usage" stroke="#ee4f4f" />
              <YAxis yAxisId="right" orientation="right" />
              <CartesianGrid stroke="#eeecec" />
              <XAxis dataKey="time" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  )
}

export default Cpu