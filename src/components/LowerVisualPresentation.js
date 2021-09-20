import React from 'react'
import Users from "../users.json"
import info from '../info.svg'
import { useSelector } from "react-redux";
export default function LowerVisualPresentation() {
    const subsDetails = useSelector((state) => state.info.subsDetails);

    const active = Users.filter(user => user.active === "1");
    const notActive = Users.filter(user => user.active === "0");

    const rootDiv = {width:"100%", height:"49%", 
                     backgroundColor:"#0E0F2E", 
                     borderRadius:'10px'};

    const userData = {margin:0, textAlign:"center", color:"white"};
    const userDataValue = {margin:0, color:"#5DAAE0"};
    const headerStyles = {margin:0, textAlign:"center", color:"#109618"};
    const detailsText = {margin:0, display:"flex", justifyContent:"flex-start"};

    const noSubDetailsDivStyles = {paddingLeft:"20px", color:"white", 
                                  display:"flex", flexDirection:"column", 
                                  justifyContent:"center"};
    
    const unClickedSubDetailsDiv = {color:"#FF9900", display:"flex", 
                                    flexDirection:"column", alignItems:"center"};

    const subDetailsTextStyles = {margin:0, textAlign:"center",
                                  color:"#109618", borderTop:"1px solid #5DAAE0"};
    return (
        <div style={rootDiv}>
               
               <div style={{height:"30%", color:"white"}}>
                   <p style={headerStyles}><b>Subscription Status Data</b></p>
                   <div style={{display:"flex", justifyContent:"space-around"}}>
                   <p style={userData}>Active users 
                      <p style={userDataValue}>{active.length}</p></p>
                   <p style={userData}>Inactive users
                      <p style={userDataValue}>{notActive.length}</p></p>
                   </div>
               </div>

                <div style={{height:"50%"}}>
                   <h3 style={subDetailsTextStyles}>Subscription Details of User</h3>
                  {
                      (subsDetails.length > 1)?
                      (
                        <div style={{color:"white", padding:'20px'}}>
                        <p style={detailsText}>User ID: 
                            <p style={userDataValue}>{' '+ subsDetails[0].user_id}</p></p>

                        <p style={detailsText}>Package: 
                            <p style={userDataValue}>{subsDetails[0].package}</p></p>

                        <p style={detailsText}>Expires On: 
                            <p style={userDataValue}>{subsDetails[0].expires_on}</p></p>

                        <div style={{width:"100%", overflow:"hidden"}}>
                            <p style={detailsText}>Email:
                                <p style={userDataValue}>{subsDetails[subsDetails.length-1].email}</p></p></div>

                        <p style={detailsText}>Address: 
                            <p style={userDataValue}>{subsDetails[subsDetails.length-1].address}</p></p>
                        </div>
                      ):

                      (subsDetails.length > 0) ?

                      <div style={noSubDetailsDivStyles}>
                        <p style={{color:"red"}}>Sorry! Subscription data not found.</p>

                        <p style={detailsText}>User ID: 
                            <p style={userDataValue}>{subsDetails[0].id}</p></p>

                        <div style={{width:"95%",  overflow:"hidden"}}>
                            <p style={detailsText}>Email: 
                                <p style={userDataValue}>{subsDetails[0].email}</p></p></div>

                        <p style={detailsText}>Address: 
                            <p style={userDataValue}>{subsDetails[0].address}</p></p>
                      </div>
                      
                      : 
                      
                      <div style={unClickedSubDetailsDiv}>
                                <p>Click on </p>
                                <img src={info} alt="i" height="50px"/> 
                                <p>to get subscription details.</p></div>

                  }
               </div>

        </div>
    )
}
