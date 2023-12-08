import React from 'react'
import PostPage from './PostPage'

export default function Feed({posts}){

					 posts = [...posts].reverse();
					 // console.log(posts);

				return (
						<>
						{posts.map((value)=>{
								return <PostPage key={value.id} posts={value}/>
						})}

						</>

					)


}