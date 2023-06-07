import { useState, useEffect } from "react";

const useFetcher = (url) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    async function getData() {
      const dataResponse = await fetch(url);
      console.log(dataResponse,"dataresponse")
      const dataArr = await dataResponse.json();
      setData(dataArr);
      console.log(dataArr,"dataarr")
    }
    getData();
  }, [url]);
  console.log(data,"data")

  return [data];
};
export default useFetcher;
