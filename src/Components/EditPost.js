import React,{useEffect} from 'react';
import {useParams} from 'react-router-dom';

export default function EditPost({postList,editedPost,setEditedPost,editPostDesc,setEditPostDesc,submitEditHandler}){
			let {id} = useParams();
		let posts = postList.find((value)=>{
					return value.id.toString() === id;
		})

		console.log(posts);
		useEffect(()=>{
			setEditedPost(posts.title);
			setEditPostDesc(posts.description);
		},[]);

		return (
			<main>	
				<form onSubmit={(e)=>(e.preventDefault())}>
				  <div className="form-group">
				    <label htmlFor="Post Title">Post Title</label>
				    <input type="text" className="form-control"  placeholder="Post Title"  required  value={editedPost} onChange={(e)=>{setEditedPost(e.target.value)}} />
				  </div>
				  <div className="form-group">
				    <label htmlFor="exampleFormControlTextarea1">Descrition</label>
				    <textarea className="form-control" placeholder="Post Your Description" rows="3" required value={editPostDesc} onChange={(e)=>{setEditPostDesc(e.target.value)}}></textarea>
				  </div>
				  <div className="form-group">
				  	<input type="submit" className="btn btn-primary" value="Submit Post" onClick={()=>(submitEditHandler(id))} />
				  </div>
				</form>
			</main>
		);


}