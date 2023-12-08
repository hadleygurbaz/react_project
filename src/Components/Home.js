import React from 'react'
import Feed  from './Feed'

export default function Home({posts,getData,progress,errord}){
	console.log(posts.length);
	return (

		<main>
			{progress  &&<div>The Data is loading </div>}
			{!progress && errord && <div>{errord}</div>}
			{!progress && posts.length ? <Feed posts = {posts}/> : !progress && !errord && posts.length==0 ? <div>Sorry No Posts Available Now </div> : '' }
			
		</main>


		);


}