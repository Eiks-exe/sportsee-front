import React from 'react'
import { ResponsiveContainer, RadarChart, PolarAngleAxis, PolarGrid, Radar, Label } from 'recharts';
import { IUserPerformance } from '../../interfaces/IUser';

interface Props {
    data?: IUserPerformance;
}

const capitalizeFirstLetter = (text: string): string => {
    return text.charAt(0).toUpperCase() + text.slice(1);
};

const PerfRadarChart: React.FC<Props> = ({ data }) => {
    return (
        <div className="cardChartContainer" style={{
            background:"#282D30",
            color:"white !important"
        }}>
            <ResponsiveContainer width="100%" height="100%">
                <RadarChart
                    outerRadius={'50%'}
                    data={data?.data.map((item) => {
                        return { name: capitalizeFirstLetter(data.kind[item.kind]), value: item.value };
                    })}
                >
                    <PolarAngleAxis dataKey="name" fontSize={14} />
                    <PolarGrid radialLines={false} />
                    <Radar dataKey="value" fill="#FF0101" fillOpacity={0.7} />
                </RadarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default PerfRadarChart