import React from 'react'
import { ResponsiveContainer, LineChart, Line, XAxis, Tooltip, TooltipProps, ReferenceArea, YAxis } from 'recharts'
import { IUserAvgSession } from '../../interfaces/IUser';

import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import './DurationLineChart.scss';


interface Props extends Omit<Partial<IUserAvgSession>, 'userId'> {
    isLoading?: boolean;
}

const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];

const customTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>): JSX.Element | undefined => {
    if (active && payload && payload.length) {
        return <div style={{ background: "#FFFFFF", fontSize: "14px", border: "none" }}>{`${payload?.[0].payload.lng} min`}</div>;
    }
};


const DurationLineChart: React.FC<Props> = ({ sessions }) => {
    return (
        <div className='cardChartContainer'>
            <div className="duration-title">Durée moyenne des sessions</div>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart
                    width={500}
                    height={0}
                    data={sessions?.map((session) => {
                        return { day: days[session.day - 1], lng: session.sessionLength };
                    })}
                >
                    <defs>
                        <linearGradient id="gradient" x1="98.81%" y1="0%" x2="18.73%" y2="0%" >
                            <stop offset="1.19%" stopColor="#FFFFFF " />
                            <stop offset="81.27%" stopColor="rgba(255, 255, 255, 0.403191)" />
                        </linearGradient>
                    </defs>
                    <ReferenceArea x1={0} x2={0} y1={0} y2={0} stroke="blue" strokeOpacity={1} />
                    <XAxis
                        dataKey="day"
                        axisLine={false}
                        tickLine={false}
                        tick={{ fill: '#FFF', style: { opacity: '0.5' } }}
                        padding={{left:15, right: 15}}
                    />
                    <YAxis
                        axisLine={false}
                        tickLine={false}
                        padding={{ bottom: 34, top:50 }}
                        hide
                    />
                    <Tooltip content={customTooltip} />
                    <Line type="natural" dataKey="lng" stroke="url(#gradient)" strokeWidth={2} dot={false} activeDot={{fill:"white", stroke:"#aaac", strokeWidth:"2px"}}/>
                </LineChart>
            </ResponsiveContainer>
        </div>
    )
}

export default DurationLineChart