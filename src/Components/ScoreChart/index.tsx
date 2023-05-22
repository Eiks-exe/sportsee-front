import React from 'react'
import { ResponsiveContainer, PieChart, Pie } from 'recharts'
import './index.scss'

type Props = {
    score: number
}

const index: React.FC<Props> = ({ score }) => {
    return (
        <div className="cardChartContainer" style={{
            background: "#FBFBFB",
            display:"flex",
            alignItems:"center",
            position:"relative"
        }}>
            <div id="score-title" style={{
                position:"absolute",
                margin:"19px 24px 0 30px",
                top:"0",
                fontWeight:"500",
                color:"black"
            }}>
            Score
            </div>
             <ResponsiveContainer width="100%" height="100%">
                <PieChart width={500} height={500}>
                    <Pie
                        data={[
                            {
                                name: 'score',
                                score: score,
                                fill: '#FF0000',
                            },
                            {
                                name: 'noscore',
                                score: 1 - score,
                                fill: '#FBFBFB',
                            },
                        ]}
                        dataKey="score"
                        nameKey="name"
                        cx="50%"
                        cy="48%"
                        innerRadius={75}
                        outerRadius={85}
                        startAngle={90}
                        endAngle={450}
                        cornerRadius={10}
                        fill="#FF0000"
                    />
                </PieChart>
            </ResponsiveContainer>
                <div id="score">
                    <p style={{
                        fontWeight:"700",
                        fontSize:"24", 
                        justifyContent:"center",
                        margin: "auto",
                        display:"flex",
                    }}>
                        {score}
                        % 
                    </p>
                   <sub style={{
                        width:"100%",
                        display:"flex",
                        justifyContent:"center",
                        textAlign:"center",
                   }}>de votre objectif</sub>
                </div>
        </div>
    )
}

export default index