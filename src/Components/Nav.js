import React from 'react'
import {Link} from 'react-router-dom'

export default function Nav({searchText,setSearchText,submitHandler}){
	console.log(searchText);
	return (<>

		<nav className="navbar navbar-expand-lg navbar-light">
			<form className="form-inline my-2 my-lg-0" onSubmit = {submitHandler}>
		      <input className="form-control mr-sm-2" type="search" placeholder="Search Post" value={searchText} onChange = {(e)=>{setSearchText(e.target.value)}} />
		      
		    </form>
		  <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
		    <ul className="navbar-nav mr-auto mt-2 mt-lg-0 ">
		      <li className="nav-item active">
		        <Link className="nav-link" to='/'>Home</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to='/Post'>Post</Link>
		      </li>
		      <li className="nav-item">
		        <Link className="nav-link" to='/About'>About</Link>
		      </li>
		    </ul>
		  </div>
		</nav>
		
		</> );



}