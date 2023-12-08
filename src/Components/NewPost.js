import React from 'react'
import {Link} from 'react-router-dom'

export default function NewPost({newPost,setNewPost,newPostDesc,setnewPostDesc,submitPostHandler}){

	return (
		<main>	
			<form onSubmit={submitPostHandler}>
			  <div className="form-group">
			    <label htmlFor="exampleFormControlInput1">Post Title</label>
			    <input type="text" className="form-control"  placeholder="Post Title"  required  value={newPost} onChange={(e)=>{setNewPost(e.target.value)}} />
			  </div>
			  <div className="form-group">
			    <label htmlFor="exampleFormControlTextarea1">Descrition</label>
			    <textarea className="form-control" placeholder="Post Your Description" rows="3" required value={newPostDesc} onChange={(e)=>{setnewPostDesc(e.target.value)}}></textarea>
			  </div>
			  <div className="form-group">
			  	<input type="submit" className="btn btn-primary" value="Submit Post" />
			  </div>
			</form>
		</main>);


}