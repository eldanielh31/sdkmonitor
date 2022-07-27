import "./cpu.css";
import Sidebar from "../../components/Sidebar"
import Chart from "../../components/Chart/chart";

function Cpu() {

  return (
    <div className='pageCPU'>
      <Sidebar />
      <div className='containerCPU'>
        <div className='containerTopCpu'>
          <h1 className='titleCPU'>CPU</h1>
        </div>

        <Chart type='cpu' />  
        
      </div>
    </div>
  )
}

export default Cpu