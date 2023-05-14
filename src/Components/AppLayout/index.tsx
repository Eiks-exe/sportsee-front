import React, { ReactNode } from 'react'
import HorizontalNavbar from '../HorizontalNavbar'
import VerticalNavbar from '../VerticalNavbar'

interface Props {
    children?: ReactNode
}

const AppLayout: React.FC<Props> = ({ children }) => {
    return (

        <div className="app_container" style={{
            height:"100vh"
        }}>
            <HorizontalNavbar />
            <div style={{
                display: "flex",
                flexDirection: "row",
                height:"100%"
            }}>
                <VerticalNavbar />
                {children}
            </div>
        </div>

    )
}

export default AppLayout