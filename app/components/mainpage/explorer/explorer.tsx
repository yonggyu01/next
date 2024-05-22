import React from 'react'
import ex from './explorer.module.scss'
const Explorer : React.FC = () =>{
    return (
        <div className={ex.full}>
            <h2 className={ex.top}>EXPLORER</h2>
            <details>
                <summary>김용규 VSC Project</summary>

            </details>
        </div>
    )
}
export default Explorer