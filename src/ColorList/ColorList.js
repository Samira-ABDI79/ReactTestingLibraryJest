import { Paper } from "@mui/material";

export default function ColorList() {
    return (
        <div className='flex justify-center items-center p-16' >
<Paper className='w-[60%]' >
      <ul className="text-xl p-8" > 
        <li className="text-red-600" >Red</li> 
        <li className="text-blue-600" >Blue</li>
        <li className="text-green-600" >Green</li>
      </ul>
      </Paper>
      </div>
    );
  }