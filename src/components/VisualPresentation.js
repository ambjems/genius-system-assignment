import React from 'react'
import LowerVisualPresentation from './LowerVisualPresentation';
import UpperVisualPresentation from './UpperVisualPresentation';
export default function VisualPresentation() {
    return (
        <div style={{height:'90vh', width:'27%', 
                    display:'flex',
                    flexDirection: "column", 
                    justifyContent:"space-between"}}>
            
            <UpperVisualPresentation />
            <LowerVisualPresentation />
            
        </div>
    )
}
