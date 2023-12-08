import React,{useContext} from 'react'
import { RiComputerFill } from 'react-icons/ri'
import { LuSmartphone,LuLaptop } from "react-icons/lu";
import {CustomContext} from '../Contexts/MyContext'
export default function Header({title}){
	const  {width,height} = useContext(CustomContext);
	return (
		<>
			<header style={{background:'silver',textAlign:'center',height:'10vh'}}><h1 style={{display: 'inline'}}>{title}</h1 ><span style={{float: 'right',marginRight: '10px',marginTop: '15px'}} className="float-right ml-auto">{ width >=750 ? <RiComputerFill/>:width <=300 ? <LuSmartphone/> : <LuLaptop/>}</span></header>
		</>
		);
}