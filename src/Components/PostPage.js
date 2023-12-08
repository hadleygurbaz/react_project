import React from 'react'
import {useParams,Link} from 'react-router-dom'

export default function PostPage({posts}){
		console.log(posts);
	return (<main>

				<Link to={`Post/${posts.id}`}><h2>{posts.title}</h2><span><p>{posts.date}</p></span><br/>
				<p>
				{posts.description.length < 25 ? posts.description : `${posts.description.substring(0,25)}....`}
				</p></Link> 
				<hr/>

		</main>);


}