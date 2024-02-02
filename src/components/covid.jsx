import { useEffect, useState } from "react";
import axios from "axios";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        console.log("get data");
        let res = await axios.get("http://localhost:3002/posts/testApi");
        let data = res && res.data ? res.data : [];
        console.log(res.data);
        setDataCovid(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);
  // useEffect(() => {
  //   console.log("dataCovid", dataCovid);
  // }, [dataCovid]);
  return (
    <table>
      {console.log("dataCovid", dataCovid)}
      <thead>
        <tr>
          <th>ID3</th>
          <th>Date</th>
          <th>Active</th>
          <th>Deaths</th>
        </tr>
      </thead>
      <tbody>
        {dataCovid &&
          dataCovid.length > 0 &&
          dataCovid.map((item) => {
            return (
              <tr key={item.ID}>
                <td>{item.ID}</td>
                <td>{item.date}</td>
                <td>{item.active}</td>
                <td>{item.deaths}</td>
              </tr>
            );
          })}
      </tbody>
    </table>
  );
};

export default Covid;
