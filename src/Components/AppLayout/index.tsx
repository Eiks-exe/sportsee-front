import React, { ReactNode } from 'react'
import HorizontalNavbar from '../HorizontalNavbar'
import VerticalNavbar from '../VerticalNavbar'
import './index.scss'

interface Props {
    children?: ReactNode
}

const AppLayout: React.FC<Props> = ({ children }) => {
    return (

        <div className="app_container">
            <HorizontalNavbar />
            <div className='main_app_layout'>
                <VerticalNavbar />
                {children}
            </div>
        </div>

    )
}

export default AppLayout