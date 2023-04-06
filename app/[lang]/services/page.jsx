'use client'
import { useEffect, useState } from 'react'

export default function page({ params }) {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(`http://localhost:1337/api/services?locale=${params.lang}`);
        const json = await res.json();
        setData(json.data);
      } catch (err) {
        console.error('Failed to fetch data', err);
      }
    };
    fetchData();
  }, []);
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Dates</th>
            <th>Description</th>
          </tr>
        </thead>
        <tbody>
        {data.map((e, i) => (
          <tr key={i}>
            <td>{e.attributes.date}</td>
            <td>{e.attributes.description}</td>
          </tr>
        ))} 
        </tbody>
      </table>
    </div>
  )
}
