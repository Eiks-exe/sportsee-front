import React from 'react'

type Props = {}

const VerticalNavbar = (props: Props) => {
  return (
    <div
        style={{
            display:"flex",
            flexDirection:"column",
            alignItems:"center",
            minHeight:"100%",
            background:"black",
            minWidth: "117px",

        }}
    >
        <div style={{
            display:"flex",
            flexDirection:"column",
            gap:"2rem",
            marginTop:"170%",

        }}>
            <img src="/ressources/meditation-icon.svg" alt="#" width={64}/>
            <img src="/ressources/swim-icon.svg" alt="#" width={64}/>
            <img src="/ressources/bicycle-icon.svg" alt="#" width={64}/>
            <img src="/ressources/dumbel-icon.svg" alt="#" width={64}/>
        </div>
    </div>
  )
}

export default VerticalNavbar