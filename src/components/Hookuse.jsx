import React, { useState } from 'react'
import style from '../styles/style.module.scss'
import useCustomhook from '../customhook/useCustomhook'


const Hookuse = () => {
    const{count,inc,dec,reset,incbyval}= useCustomhook();

    const[inp,setinp] = useState(0);

    const handleincbyval = () => {
      incbyval(Number(inp));
      setinp(0);
    }

  return (
    <div className={style.container}>
      <h2>Counter with custom hook</h2>
      <div className={style.count}>
        Count :- {count}
      </div>
      
      <div className={style.buttons}>
        <button className={style.inc} onClick={inc}>
            INC
        </button>
        <button className={style.dec} onClick={dec}>
            DEC
        </button>
        <button className={style.reset} onClick={reset}>
            Reset
        </button>
        
        <div className={style.incbyval}>
          <input className={style.inp} type="number" value={inp} onChange={(e)=>setinp(e.target.value)} />

          <button className={style.btn} onClick={handleincbyval}>
            increment by value
          </button>
        </div>
      </div>
    </div>
  )
}

export default Hookuse
