import { useState, useEffect } from 'react';
import HomeTitle from '../styledComponents/homeStyles';
import axios from 'axios';
const Blogs = () => {
  // state = { blogs: [] }
  const [blogs, setBlogs] = useState([])
  useEffect( () => {
    axios.get("/api/blogs")
      .then( res => {
        setBlogs(res.data)
      })
      .catch( err => console.log(err) )
  }, [])
  const addBlog = (blog) => {
    axios.post("/api/blogs", { blog })
      .then( res => {
        // let newBlogs = [...blogs, res.data]
        // setBlogs(newBlogs)
        setBlogs([...blogs, res.data])
      })
      .catch( err => console.log(err) )
  }
  // componentDidMount() {
  //   axios.get("/api/blogs")
  //     .then( res => {
  //       this.setState({ blogs: res.data, });
  //     })
  //     .catch( err => {
  //       console.log(err);
  //     })
  // }
  return (
    <>
      <HomeTitle>Blogs Page</HomeTitle>
      <p>
        { blogs.map( b => 
          <>
            <h1>{b.title}</h1>
          </>  
        )}
      </p>
    </>
  )
}
export default Blogs;