import React from 'react'
import { Payload } from 'recharts/types/component/DefaultLegendContent';


interface customLegendProps {
    payload?: Payload[];
}

const customLegend = ({payload} : customLegendProps) => {
  return (
    <ul style={{
        display:"flex",
        listStyle:"none",
        gap:"2.5rem",
    }}>
      {payload?.map((entry) => (
        <li key={entry.id}>
          <svg width="20" height="20">
          <circle cx="10" cy="14" r="4" stroke={entry.color} stroke-width="1" fill={entry.color} />
          </svg>
          <span style={{color:"grey"}}>{entry.value}</span>
        </li>
      ))}
    </ul>
  )
}

export default customLegend