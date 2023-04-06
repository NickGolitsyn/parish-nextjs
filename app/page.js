'use client'
import { useEffect, useState } from 'react'
import { remark } from 'remark';
import html from 'remark-html';
import { markdownToHtml } from '../utils';

export default function Home() {
  const [about, setAbout] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch('http://localhost:1337/api/about-our-parish');
        const json = await res.json();
        const result = await remark().use(html).process(json.data.attributes.Text);
        setAbout(result);
      } catch (err) {
        console.error('Failed to fetch data', err);
      }
    };
    fetchData();
  }, []);

  return (
    <div>
      {about.value && (
        // <div>{about.attributes.Text}</div>
        // <div dangerouslySetInnerHTML={{__html: about.attributes.Text}} />
        <div dangerouslySetInnerHTML={{__html: about.value}} />
      )}
    </div>
  )
}
