import "./memory.css";
import Sidebar from "../../components/Sidebar"
import Chart from "../../components/Chart/chart";
import { subDays } from "date-fns";


function Memory() {

  const data = [];
  for (let num = 120; num >= 0; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().substr(0, 10),
      value: 1 + Math.random(),
    });
  }

  return (
    <div className='pageMEMORY'>
      <Sidebar />
      <div className='containerMEMORY'>
        <div>
          <h1 className='titleMEMORY'>MEMORY</h1>
        </div>

        <Chart data={data} type='memory'/>

      </div>
    </div>
  )
}

export default Memory