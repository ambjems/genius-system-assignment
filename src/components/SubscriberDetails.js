import React from 'react'
import Users2 from "../users.json"
import Subscription from "../subscriptions.json"
import './UserDetailsTable.css'
import info from '../info.svg'
import TableHeading from './TableHeading';
import { useDispatch, useSelector } from "react-redux";
import { setSubsDetails } from '../redux/actions/infoActions';
import axios from "axios";
export default function SubscriberDetails() {
    const index = useSelector((state) => state.info.sortBy);
    const filterBy = useSelector((state) => state.info.filterBy);
    const filterByVal = useSelector((state) => state.info.filterByVal);

    // const loadData = async () => {
    //     try{
    //         const url = "/users.json";
    //         const res = await fetch(url);
    //         console.log(res.ok)
    //         if(res.ok === true){ 
    //           //Users2 = await res.text();
    //           console.log(res);
    //         } else {
    //           console.log(res.status+'here');
    //         }
    //     } catch(err) {
    //       console.log(err+'here')
    //     }
    //   };

    //   useEffect(() => {
    //     axios.get('../users.json').then((response) => {
    //         console.log(response);
    //       });
    //   });
      
    //There are some issue in the data provided. 
    //async await and axios didn't work. So, I directly imported.

    var Users = Users2;
    const dispatch = useDispatch();
    
    if(filterBy === 'ff_id'){
        Users = Users2;
    }
    if(filterBy === 'f_id'){
        Users = Users2.filter(user => user.id.toString().includes(filterByVal))
    }
    if(filterBy === 'f_f_name'){
        Users = Users2.filter(user => user.first_name.includes(filterByVal))
    }
    if(filterBy === 'f_m_name'){
        Users = Users2.filter(user => user.middle_name.includes(filterByVal))
    }
    if(filterBy === 'f_l_name'){
        Users = Users2.filter(user => user.last_name.includes(filterByVal))
    }
    if(filterBy === 'f_u_name'){
        Users = Users2.filter(user => user.username.includes(filterByVal))
    }
    if(filterBy === 'f_country'){
        Users = Users2.filter(user => user.country.includes(filterByVal))
    }
    
    if(index === 'id'){
        Users.sort(function(a, b){
            var nameA = a.id, nameB = b.id
            if (nameA < nameB)
                return -1 
            if (nameA > nameB)
                return 1
            return 0
        })
    }

    if(index === 'f_name'){
        Users.sort(function(a, b){
            var nameA = a.first_name.toLowerCase(), nameB = b.first_name.toLowerCase()
            if (nameA < nameB)
                return -1 
            if (nameA > nameB)
                return 1
            return 0
        })
    }

    if(index === 'm_name'){
        Users.sort(function(a, b){
            var nameA = a.middle_name.toLowerCase(), nameB = b.middle_name.toLowerCase()
            if (nameA < nameB)
                return -1 
            if (nameA > nameB)
                return 1
            return 0
        })
    }

    if(index === 'l_name'){
        Users.sort(function(a, b){
            var nameA = a.last_name.toLowerCase(), nameB = b.last_name.toLowerCase()
            if (nameA < nameB)
                return -1 
            if (nameA > nameB)
                return 1
            return 0
        })
    }

    if(index === 'u_name'){
        Users.sort(function(a, b){
            var nameA = a.username.toLowerCase(), nameB = b.username.toLowerCase()
            if (nameA < nameB)
                return -1 
            if (nameA > nameB)
                return 1
            return 0
        })
    }

    if(index === 'country'){
        Users.sort(function(a, b){
            var nameA = a.country.toLowerCase(), nameB = b.country.toLowerCase()
            if (nameA < nameB)
                return -1 
            if (nameA > nameB)
                return 1
            return 0
        })
    }

    
    const showDetails = (id) =>{
        const subsDetails = Subscription.filter(subs => subs.user_id === id.toString())
        const userDetails = Users.filter(user => user.id === id);
        dispatch(setSubsDetails(subsDetails.concat(userDetails)))
    }

    const rootDivStyles = {paddingLeft:'1%', boxSizing:"border-box", 
                           height: "90vh", width:"72%", 
                           backgroundColor:"#0E0F2E", 
                           borderRadius:"10px"};
    
    const tableStyles = {width:"100%", borderCollapse:"collapse", 
                        fontFamily:"arial, sans-serif"};
    
    const tableHeadStyles = {backgroundColor:"#0E0F2E", fontSize:"16px",
                            position:"sticky", top:'0', color:"#5DAAE0"};

    const tableRowStyles = {borderBottom:"0.25px solid #5DAAE0", color:"white"};
    const tableHeaderTextAlign = {textAlign:"left"};

    return (

        <div style={rootDivStyles}>

            <TableHeading />
            <div className="userDetailsTable">
                <table style={tableStyles}>
                    <thead style={tableHeadStyles}>
                    <tr>
                        <th style={{...tableHeaderTextAlign, padding:'5px', width:"10%"}}>ID</th>
                        <th style={{...tableHeaderTextAlign, width:"25%"}}>Full Name</th>
                        <th style={{...tableHeaderTextAlign, width:"15%"}}>Username</th>
                        <th style={{...tableHeaderTextAlign, width:"10%"}}>Active</th>
                        <th style={{...tableHeaderTextAlign, width:"30%"}}>Country</th>
                        <th style={{...tableHeaderTextAlign, width:"5%"}}>Info</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                       (Users.length > 0)? (
                        Users.map( user =>{
                            return(
                                <tr key={user.id} style={tableRowStyles}>
                                    <td style={{padding:"5px"}}>{user.id}</td>
                                    <td>{user.first_name+" "+user.middle_name+" "+user.last_name}</td>
                                    <td>{user.username}</td> 
                                    <td>{
                                        (user.active==='1')?"Yes":"No"
                                    }</td>
                                    <td>{user.country}</td>

                                    <td style={{cursor:"pointer"}} 
                                        onClick={()=>{showDetails(user.id)}}>

                                        <img src={info} alt="i"/></td> 
                                </tr>
                            );
                        })
                       ): 
                       <p style={{color:"red"}}>No data found for the applied filter.</p>
                    }
                    </tbody>
                </table>
            </div>
        </div>

        
    )
}
