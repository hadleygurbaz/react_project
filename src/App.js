import Header from './Components/Header'
import Nav from './Components/Nav'
import Home from './Components/Home'
import NewPost from './Components/NewPost'
import PostPage from './Components/PostPage'
import About from './Components/About'
import Missing from './Components/Missing'
import Footer from './Components/Footer'
import PageLayout from './Components/PageLayout'
import {Routes,Route,Link,useNavigate} from 'react-router-dom'
import {useState,useEffect} from 'react'
import EditPost from './Components/EditPost'

import useGetHook from './Hooks/UseGetHook'
import {MyContext,CustomContext} from './Contexts/MyContext'

import './Components/mystyle.css' 
import {  format } from 'date-fns'
import axiosApi from './Components/api'



function App() {
const homePage = useNavigate();
const [searchText,setSearchText]  = useState('');
const [filterPost,setFilterPost] = useState([]);
const [editedPost,setEditedPost] = useState('');
const [editPostDesc,setEditPostDesc] = useState('');
const [posts,setPosts] = useState([]);
const {getData,progress,errord} = useGetHook('http://localhost:3500/posts');
console.log(getData);
console.log(progress);
console.log(errord);
let [newPost,setNewPost] = useState('');
let [newPostDesc,setnewPostDesc] = useState('');



useEffect(()=>{

  setPosts(getData);


 /*let viewPost = async ()=>{
      try{
        let response =  await axiosApi.get('/posts');
        setPosts(response.data);
      }catch(error){
          console.log(error.message)
      }
     
 }
 viewPost();*/
},[getData])

useEffect(()=>{
      let searchPost = posts.filter((value)=>{
            return (value.title.toLowerCase().includes(searchText.toLowerCase()) ||  value.description.toLowerCase().includes(searchText.toLowerCase())) && searchText!=='';
      })

      setFilterPost(searchPost);

      
},[searchText])
  
  
let submitHandler = (e)=>{
  e.preventDefault();
}


// console.log(posts[posts.length-1].id);
let submitPostHandler = async (e)=>{
   
    try{
      console.log(axiosApi);
      e.preventDefault();
      let dates = format(new Date(), 'yyyy-MM-dd H:m:s');
      let id = posts.length?posts[posts.length-1].id+1:1;
      newPost && newPostDesc && setPosts([...posts,{id:id,title:newPost,date:dates,description:newPostDesc}]);
     let response = await axiosApi.post('/posts',{id:id,title:newPost,date:dates,description:newPostDesc});

    }catch(error){
      console.log(error.message);
      console.log(error.stack);
    }

      
    setNewPost('');
    setnewPostDesc('');
    homePage('/');
} 

let deletePost = async (ids)=>{
    try{
      let deletePosts = posts.filter((value)=>{

        return  value.id.toString() !== ids; 
    })  

      await axiosApi.delete(`/posts/${ids}`);

    setPosts(deletePosts);
    homePage('/');
    }catch(error){
      console.log(error.message);
    }
    


}
console.log(editedPost);

let submitEditHandler = async (id)=>{
  let date = format(new Date(), 'yyyy-MM-dd H:m:s');
    try{
        console.log('dsdsdsdsdsdsd');
        setPosts(editedPost.length ? posts.map((value)=>{
        return  (value.id.toString()===id? {...value,title:editedPost,description:editPostDesc}:value);
      }):posts);

        await axiosApi.put(`/posts/${id}`,{date,title:editedPost,description:editPostDesc});

    }catch(error){
      console.log(error.message);
    }

// console.log(posts);
homePage('/');


}
console.log(axiosApi);

  return (
    <MyContext>
    <div className="App container">
    <Header title = 'Mini Test Project' />
    <Nav searchText={searchText} setSearchText={setSearchText} submitHandler={submitHandler} />

        {/*<Header title = 'Mini Test Project' />
        <Nav searchText={searchText} setSearchText={setSearchText} submitHandler={submitHandler} />
        <Home posts={searchText.length ? filterPost : posts}/>
        <NewPost submitPostHandler = {submitPostHandler} newPost={newPost} setNewPost={setNewPost} setnewPostDesc={setnewPostDesc} newPostDesc = {newPostDesc}/>
        <About/>
        <Missing/>
        <Footer/>*/}

        
        <Routes>
           
            <Route path='/' element = {
              <Home 
              posts={searchText.length ? filterPost : posts}
              getData={getData}
              progress={progress}
              errord = {errord}
              />} > 
            </Route>
            
            <Route path='/post' >

              <Route  index element={<NewPost submitPostHandler = {submitPostHandler} newPost={newPost} setNewPost={setNewPost} setnewPostDesc={setnewPostDesc} newPostDesc = {newPostDesc}/>} />
              <Route path=":id" element = {<PageLayout posts={posts} deletePost={deletePost}/>} />
              <Route path="EditPost/:id" element={<EditPost postList={posts} editedPost={editedPost} setEditedPost={setEditedPost} editPostDesc = {editPostDesc} setEditPostDesc={setEditPostDesc} submitEditHandler={submitEditHandler} />} />
            </Route>

            <Route path='/about' element={<About/>}></Route>
            <Route path='*' element={<Missing/>}></Route>
        </Routes>

        <br/><Footer/>
    </div>
    </MyContext>
  );
}

export default App;
