import React from 'react'
import Label from './Label';
import UpperVisPresPieChart from './UpperVisPresPresPieChart';
export default function UpperVisualPresentation() {

    const labelStyles = {height:"20%", display:"flex",flexWrap:"wrap",
                        justifyContent:"space-evenly", alignItems:"center"};

    const rootDivStyles = {width:"100%", height:"49%", 
                           backgroundColor:"#0E0F2E", borderRadius:'10px'}

    const titleStyles = {margin:0, marginTop:"2px", 
                        color:"white", textAlign:"center"};
    return (
        <div style={rootDivStyles}>
             <p style={titleStyles}>Subscription Plan Statistics</p>
             
             <UpperVisPresPieChart />

              <div style={labelStyles}>
                    <Label color="#3366CC" plan="1"/>
                    <Label color="#DC3912" plan="2"/>
                    <Label color="#FF9900" plan="3"/>
                    <Label color="#109618" plan="6"/>
                    <Label color="#990099" plan="12"/>
                    <Label color="#0099C6" plan="UL"/>     
              </div>

        </div>
    )
}
