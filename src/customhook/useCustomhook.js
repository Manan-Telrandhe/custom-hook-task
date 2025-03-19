import React, { useState } from 'react'

const useCustomhook = () => {
    const [count,setcount] = useState(0);

    function inc(){
        return setcount(count+1);
    }
    
    function dec(){
        return setcount(count-1);
    }

    function reset(){
        setcount(0);
    }

    function incbyval(val){
        setcount(count+val);
    }

  return {count,inc,dec,reset,incbyval};

}

export default useCustomhook
