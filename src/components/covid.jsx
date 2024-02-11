import { useEffect, useState } from "react";
import axios from "axios";

const Covid = () => {
  const [dataCovid, setDataCovid] = useState([]);
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const fetchData = async () => {
      setTimeout(async () => {
        try {
          console.log("get data");
          let res = await axios.get("http://localhost:3002/posts/testApi");
          let data = res && res.data ? res.data : [];
          console.log(res.data);
          setDataCovid(data);
          setLoading(false);
        } catch (error) {
          console.log(error);
        }
      }, 3000);
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
          <th>ID </th>
          <th>Date</th>
          <th>Active</th>
          <th>Deaths</th>
        </tr>
      </thead>
      <tbody>
        {dataCovid &&
          loading === false &&
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
        {loading === true && (
          <tr style={{ 'textAlign': 'center' }}>
            <td colSpan="5">Loading...</td>
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default Covid;
