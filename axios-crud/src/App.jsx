import React, { useEffect, useState } from 'react'
import axios from 'axios'
const App = () => {

  const [posts, setPosts] = useState([]);

  // Get Request from fetching data
  useEffect(()=>{

      const fetchPost = async()=>{
          try
          {
            const res = await axios.get("http://localhost:5174/posts");
            setPosts(res.data);
          }
          catch(err)
          {
            console.log(err.message);
          }
      }

    fetchPost();

  },[])

  // Create new post request
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");

  const handleSubmit = async(e)=>
  {
    e.preventDefault();

    const newPost = {
      id: posts.length+1 ,
      title,
      body
    }

    try
    {
      const res = await axios.post("http://localhost:5174/posts", newPost);
      if(res.status===201)
      {
        setPosts([...posts, newPost]);
        setTitle("");
        setBody("");
      }
    }
    catch(err){
      console.log(err.message);
    }
    
    


  }

  // Delete post
  const handleDelete = async (id)=>
  {
    try
    {
        const res = await axios.delete(`http://localhost:5174/posts/${id}`);
        if(res.status === 200)
        {
          const newPosts = posts.filter( (post) => post.id != id );
          setPosts(newPosts);
        }
    }
    catch(err)
    {
      console.log(err.message);
    }
  }

  // Update post
  const [update, setUpdate] = useState(0);

  const handleUpdate = (id)=>{
    const post = posts.filter((post)=> post.id===id);
    if(post.length)
    {
      setTitle(post[0].title);
      setBody(post[0].body);
      setUpdate(id);
    }
  }

  const updatePost = async (e)=>
  {
    e.preventDefault();

    const updatedPost = {
      update,
      title,
      body
    }

    try
    {
      const res = await axios.put(`http://localhost:5174/posts/${update}`, updatedPost);
      if(res.status === 200)
      {
        const newPosts = posts.map( (post) => post.id===update ? res.data : post);
        setPosts(newPosts);
        setBody("");
        setTitle("");
        setUpdate(0);
      }
    }
    catch(err)
    {
      console.log(err.message);
    }
  }

  return (
    <div className='col-md-8 col-lg-8 container'>
      
      {
        update ?
         <div className='border shadow p-2 my-2'>
          <h1 className='my-2'>Update Your Post</h1>
          <form onSubmit={updatePost}>
            <input onChange={(e)=> setTitle(e.target.value)} type="text" className='form-control my-2' placeholder='Enter Post Title' value={title}/>
            <input onChange={(e)=> setBody(e.target.value)} type="text" className='form-control my-2' placeholder='Enter Post Body' value={body}/>
            <button type='submit' className='btn btn-primary my-2'>Update Post</button>
          </form>
        </div> 
        :
        <div className='border shadow p-2 my-2'>
          <h1 className='my-2'>Create New Post</h1>
          <form onSubmit={handleSubmit}>
            <input onChange={(e)=> setTitle(e.target.value)} type="text" className='form-control my-2' placeholder='Enter Post Title' value={title}/>
            <input onChange={(e)=> setBody(e.target.value)} type="text" className='form-control my-2' placeholder='Enter Post Body' value={body}/>
            <button type='submit' className='btn btn-primary my-2'>Add Post</button>
          </form>
        </div>
      }

      <table className='table table-sm table-border table-hover'>
          <thead className='table-dark'>
            <tr>
              <th>ID</th>
              <th>TITLE</th>
              <th>BODY</th>
              <th>ACTION</th>
            </tr>
          </thead>
          <tbody>
           {posts.map((post)=> 
            <tr key={post.id}>
              <td>{post.id}</td>
              <td>{post.title}</td>
              <td>{post.body}</td>
              <td>
                <button className='btn btn-danger' onClick={()=>handleDelete(post.id)}>Delete</button>
                <button className='btn btn-warning ms-2' onClick={()=> handleUpdate(post.id)}>Update</button>
              </td>
            </tr>
          )}
            
          </tbody>
      </table>
    </div>
  )
}

export default App