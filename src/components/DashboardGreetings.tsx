import React from 'react';
import { FaPlus } from "react-icons/fa6";
import DialogBox from './DialogBox';


const DashboardGreetings = () => {
  return (
    <section className="flex1 justify-between">
    <h2 className="text-4xl font-semibold">Welcome Ola,</h2>
    <div className="flex1 text-xs gap-4">
              {/* <button className="login"><FaPlus />New Project</button> */}
              <DialogBox />
              <DialogBox btnTitle={"New Task"}/>
        {/* <button className="login"><FaPlus />New Task</button> */}
    </div>
</section>
  )
}

export default DashboardGreetings