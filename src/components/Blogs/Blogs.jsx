import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';
import Bookmark from '../Bookmark/Bookmark';



const Blogs = () => {
    const [blogs, setBlogs] = useState([]);
   
    

    useEffect(() => {
        fetch('public.json')
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                setBlogs(data);
            })
    }, [])


    const [bookmark,setBookmark]=useState([]);

    useEffect(() => {
    
        const bookmarked = [];
        setBookmark(bookmarked);
    }, [blogs])
    
    const handleBookmark = (blog) => {
        const newBookmark = [...bookmark, blog]
        setBookmark(newBookmark)

    }

    const [readingTime,setReadingTime] = useState([])

    useEffect(() => {
        const readingTime = [];
        setReadingTime(readingTime);
    }, [blogs])

    const handleReadingTime = (blog) => {
        const newReadingTime = [...readingTime, blog];
        setReadingTime(newReadingTime);
    }



    return (
        <div>
            <div className='container mx-auto p-4 flex flex-col lg:flex-row'>

                <div className=" w-full lg:w-8/12 p-8">
                    {
                        blogs.map(blog => (

                            <Blog
                                key={blog.id}
                                blog={blog}
                                handleBookmark={handleBookmark}
                                handleReadingTime={handleReadingTime}
                            ></Blog>
                        ))
                    }
                </div>
                <div className=" w-full  lg:w-4/12 p-8">
                    <Bookmark
                        bookmark={bookmark}
                        readingTime={readingTime}
                    ></Bookmark>
                </div>

            </div>
        </div>
    );
};

export default Blogs;