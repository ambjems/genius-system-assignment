import React, {useState, useEffect} from 'react'
import { useDispatch } from "react-redux";
import { setSortBy, setFilterByVal, setFilterBy } from '../redux/actions/infoActions';

export default function TableHeading() {

    const dispatch = useDispatch();

    const [sortValue, setSortValue] = useState('id');
    const [filterValue, setFilterValue] = useState('id');
    const [filter, setFilter] = useState('');

    useEffect(()=>{
        dispatch(setSortBy(sortValue))
    },[sortValue])

    useEffect(()=>{
        dispatch(setFilterBy(filterValue))
        dispatch(setFilterByVal(filter))
    },[filterValue, filter])

    const handleSortOnChange = (e) => {
        setSortValue(e.target.value); 
    }

    const handleFilterOnChange = (e) => {
        setFilterValue(e.target.value); 
    }

    const sortAndFilterStyles = {border:"1px solid #5090C2", 
                                borderRadius:'5px', padding:"3px", 
                                backgroundColor:"#191D43", 
                                color:"whitesmoke"};

    const inputStyles = {width:'180px', border:"1px solid #5090C2", 
                        borderRadius:'5px', padding:"3px", 
                        backgroundColor:"#191D43", color:"whitesmoke"}

    const rootDivStyles = {width:"100%", height:"10%", 
                           display:"flex", justifyContent:"space-between", 
                           alignItems:"center"} 

    const mainDivStyles = {width:"60%", display:"flex", 
                            justifyContent:"space-around", alignItems:"center"}

    return (
        <div style={rootDivStyles}>

            <h2 style={{margin:0, color:"whitesmoke"}}>User Details</h2>
            
            <div style={mainDivStyles}>
            
                <p style={{color:"#3366CC"}}>Sort by</p>
                <select value={sortValue} onChange={handleSortOnChange} 
                    style={sortAndFilterStyles}>

                    <option value="id">ID (default)</option>
                    <option value="f_name">First Name</option>
                    <option value="m_name">Middle Name</option>
                    <option value="l_name">Last Name</option>
                    <option value="u_name">Username</option>
                    <option value="country">Country</option>
                </select>

                <p style={{color:"#3366CC"}}>Filter by</p>
                <select value={filterValue} onChange={handleFilterOnChange} 
                    style={sortAndFilterStyles}>

                    <option value="ff_id">Filter by</option>
                    <option value="f_id">ID</option>
                    <option value="f_f_name">First Name</option>
                    <option value="f_m_name">Middle Name</option>
                    <option value="f_l_name">Last Name</option>
                    <option value="f_u_name">Username</option>
                    <option value="f_country">Country</option>
                </select>

                <input style={inputStyles}

                    type="text" 
                    placeholder="Type your filter keyword..." 
                    value={filter} 
                    onChange={(e)=>{setFilter(e.target.value)}} />

            </div>

        </div>
    )
}
