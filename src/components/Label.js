import React from 'react'

const mainDivStyles = {width:"30%", 
                       height:"33%", 
                       display:"flex", 
                       justifyContent:"space-between", 
                       alignItems:"center"};
export default function Label(props) {
    return (
        <div style={mainDivStyles}>
            <div style={{width:"20%", height:"80%", backgroundColor:props.color}}></div>
            <div style={{width:"70%"}}>
                 <p style={{margin:"0", color:props.color}}>Plan {props.plan}</p>
            </div>        
        </div>
    )
}
