import "./memory.css";
import Sidebar from "../../components/Sidebar"
import Chart from "../../components/Chart/chart";

function Memory() {

  return (
    <div className='pageMEMORY'>
      <Sidebar />
      <div className='containerMEMORY'>
        <div>
          <h1 className='titleMEMORY'>MEMORY</h1>
        </div>

        <Chart type='memory'/>

      </div>
    </div>
  )
}

export default Memory