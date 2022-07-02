import React from 'react';
import "./cpu.css";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, ResponsiveContainer } from 'recharts';
import Sidebar from "../../components/Sidebar"

function Cpu() {

  const data = [
    { name: 1, uv: 400 },
    { name: 2, uv: 400 },
    { name: 3, uv: 500 },
    { name: 4, uv: 200 },
    { name: 5, uv: 900 }
  ];

  return (
    <div className='pagueCPU'>
      <Sidebar/>
      <div className='containerCPU'>
        <div className='containerTopCpu'>
          <h1 className='titleCPU'>CPU</h1>
        </div>

        <ResponsiveContainer width="100%" height={500}>
          <LineChart data={data}>
            <Line type="monotone" dataKey="uv" stroke="#d88484" />
            <CartesianGrid stroke="#ccc" />
            <XAxis dataKey="name" />
            <YAxis />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  )
}

export default Cpu