import React from 'react'
import {Link,Outlet,useParams} from 'react-router-dom'


export default function PageLayout({posts,deletePost}){
		console.log(posts);

		let {id} = useParams();

		
		console.log(id);
		let editPost = posts.find((value)=>{
				return value.id.toString() === id;
		})
		console.log(editPost);

	return (

			
				<main >
					<center>
					{ editPost &&
					<div>
					<tr>
						<td>
							<b><label>Post Title : </label></b>
						</td>
						<td>
							<p>{editPost.title}</p>
						</td>
					</tr>
					<tr>
						<td>
							<b><label>Published On : </label> </b>
						</td>
						<td>
							<p><span>{editPost.date}</span></p>
						</td>
					</tr>
					<tr>
						<td>
							<b><label>Post Content :</label></b>
						</td>
						<td>
							<p>{editPost.description}</p>
						</td>
						</tr>
						<span className="funcbuttons" >
						<button className="btn btn-danger" onClick={()=>(deletePost(id))}>Delete Post</button>
						<Link to={`/post/EditPost/${id}`}><button className="btn btn-info" >Edit Post</button></Link></span>
						</div> }

						{!editPost && <div>
								<p>Sorry The Post You are Trying To Access Is Not Found</p>
						</div>}
					</center>
					
				</main>
			
		);


}