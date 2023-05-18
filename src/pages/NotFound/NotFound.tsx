import React from 'react'
import "./NotFound.scss"
type Props = {}

const NotFound:React.FC<Props> = (props) => {
    return (
        <div className='notFound_vstack'>
            <img src="/ressources/404.svg" alt="404" />
            <p className="notFound_text">{"Oups! La page que vous demandez n'existe pas."}</p>
        </div>
    )
}

export default NotFound