import React, { useState, useEffect } from "react";
import { getTradeFile } from '@trade/service';

const Mock = () => {
  const [list, setList] = useState([]);
  useEffect(() => {
    getTradeFile().then((res) => {
      console.log(res);
      setList(res.data.fileList)
    })
  }, [])

  return <div>
    {list.map(item => (<div key={item.uid}>
      {item.uid}/
      {item.name}/
      {item.url}
    </div>)
    )}
  </div>
}

export default Mock