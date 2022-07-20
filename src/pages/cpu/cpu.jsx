import "./cpu.css";
import Sidebar from "../../components/Sidebar"
import Chart from "../../components/Chart/chart";
import { subDays } from "date-fns";

function Cpu() {

  const data = [];
  for (let num = 120; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      value: 1 + Math.random(),
    });
  }

  return (
    <div className='pageCPU'>
      <Sidebar />
      <div className='containerCPU'>
        <div className='containerTopCpu'>
          <h1 className='titleCPU'>CPU</h1>
        </div>

        <Chart data={data} type='cpu' />  
        
      </div>
    </div>
  )
}

export default Cpu