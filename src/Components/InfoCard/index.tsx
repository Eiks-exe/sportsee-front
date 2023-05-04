// Import the React library
import React from 'react'

// Import the styles for the component
import './InfoCard.scss'

// Define the Props interface for the component
interface Props {
    iconSrc?: string
    value?: number
    unit?: string
    title?: string
}

// Define the InfoCard functional component
const InfoCard: React.FC<Props> = ({ iconSrc, value, unit, title }) => {
    // Render the component
    return (
        <div className='card-container'>
            {/* Render the icon image with the provided source */}
            <img src={iconSrc} alt="title" />

            <div className="info">
                {/* Render the value and unit */}
                <div className="value">{value}{unit}</div>
                {/* Render the title */}
                <span>{title}</span>
            </div>
        </div>
    )
}

// Export the InfoCard component
export default InfoCard
