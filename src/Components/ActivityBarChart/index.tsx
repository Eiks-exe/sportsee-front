import React from 'react'
import './ActivityBarChart.scss'
import { ResponsiveContainer, BarChart, XAxis, YAxis, Tooltip, Legend, Bar, TooltipProps } from 'recharts'
import { IUserActivity } from '../../interfaces/IUser'
import { ValueType, NameType } from 'recharts/types/component/DefaultTooltipContent';
import customLegend from './customLegend';

interface Props extends Omit<Partial<IUserActivity>, 'userId'> {
    isLoading?: boolean;
}


const customTooltip = ({ active, payload }: TooltipProps<ValueType, NameType>): JSX.Element | undefined => {
    if (active && payload && payload.length) {
        return (
            <div className='tooltip-container'>
                <div className='col'>
                    <div>{`${payload?.[0].payload.kg}kg`}</div>
                    <div>{`${payload?.[0].payload.cal}Kcal`}</div>
                </div>
            </div>
        );
    }
};



const ActivityBarchart: React.FC<Props> = ({ sessions }) => {
    return (
        <div id='BarchartCardContrainer'>
            <div className="info">
                <div className="title">Activité quotidienne </div>
                <div className="legends">
                    <BarChart
                        width={500}
                    >
                    <Legend verticalAlign="top" align="right" iconType="circle" iconSize={8} wrapperStyle={{position:"absolute", bottom:"99%", color:"#74798C"}}/>
                    </BarChart>
                </div>
            </div>
            <ResponsiveContainer width="100%" height="100%">
                <BarChart
                    width={500}
                    height={300}
                    data={sessions?.map((session) => {
                        return {
                            kg: session.kilogram,
                            cal: session.calories,
                            name: new Date(session.day).getUTCDate(),
                        };
                    })}
                    margin={{
                        top: 5,
                        right: 30,
                        left: 20,
                        bottom: 5,
                    }}
                >
                    <Legend verticalAlign="top" align="right"  content={customLegend} wrapperStyle={{
                        position:"absolute",
                        left:"52%",
                        top:"-10%"
                    }}
                    />
                    <XAxis dataKey="name" tickLine={false} />
                    <YAxis dataKey="cal" orientation="right" type="number" axisLine={false} tickLine={false} />
                    <Tooltip content={customTooltip}/>
                    <Bar name="Poids (kg)" dataKey="kg" fill="#282D30" barSize={7} radius={[3, 3, 0, 0]} />
                    <Bar
                        name="Calories brûlées (kCal)"
                        dataKey="cal"
                        fill="#E60000"
                        barSize={7}
                        radius={[3, 3, 0, 0]}
                    />
                </BarChart>
            </ResponsiveContainer>
        </div>
    )
}

export default ActivityBarchart