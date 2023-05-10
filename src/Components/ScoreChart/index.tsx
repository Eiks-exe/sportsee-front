import React from 'react'
import { ResponsiveContainer, PieChart, Pie } from 'recharts'

type Props = {
    score: number
}

const index: React.FC<Props> = ({ score }) => {
    return (
        <div className="cardChartContainer" style={{
            background: "#FBFBFB",
            display:"flex"
        }}>
            <div id="score-title" style={{
                position:"absolute",
                margin:"19px 24px 0 30px",
                fontWeight:"500",
                color:"black"
            }}>
            score
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
                        cy="50%"
                        innerRadius={ 45}
                        outerRadius={ 55}
                        startAngle={90}
                        endAngle={450}
                        cornerRadius={10}
                        fill="#FF0000"
                    />
                </PieChart>
            </ResponsiveContainer>
                <div id="score" style={{
                    position:"absolute",
                    margin:"5% 0 0 6%",                    
                    width:"5%"
                    
                }}>
                    <p style={{
                        fontWeight:"700",
                        fontSize:"24"
                        
                    }}>
                        {score}
                        % 
                    </p>
                   <sub style={{

                        width:"1%"
                   }}>de votre objectif</sub>
                </div>
        </div>
    )
}

export default index