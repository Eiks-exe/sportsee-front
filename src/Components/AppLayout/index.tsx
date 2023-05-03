import React, { ReactNode } from 'react'
import HorizontalNavbar from '../HorizontalNavbar'

interface Props {
    children?: ReactNode
}

const AppLayout: React.FC<Props> = ({ children }) => {
    return (
        <>
            <div className="app_container">
                <HorizontalNavbar />
                {children}
            </div>
        </>
    )
}

export default AppLayout