import React from 'react'
import { readServices } from '../api/strapi'

export default async function page() {
  const data = await readServices();
  console.log(data);
  return (
    <div>page</div>
  )
}
