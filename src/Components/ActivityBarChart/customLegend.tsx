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
      {payload?.map((entry, i) => (
        <li key={i}>
          <svg width="20" height="20">
          <circle cx="10" cy="14" r="4" stroke={entry.color} strokeWidth="3" fill={entry.color} />
          </svg>
          <span style={{color:"grey"}}>{entry.value}</span>
        </li>
      ))}
    </ul>
  )
}

export default customLegend