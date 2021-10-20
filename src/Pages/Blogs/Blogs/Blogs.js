import React, { useEffect, useState } from 'react';
import Blog from '../Blog/Blog';

const Blogs = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('./blogs.json')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div id='services'>

            <h1 className='fw-bold text-center m-3 '><span className='text-primary'>Our</span> Blogs </h1>

            <div className='row row-cols-1 row-cols-md-1 row-cols-lg-2 g-4 m-5'>



                {
                    blogs.map((blog => <Blog
                        key={blog.id1}
                        blog={blog}
                    ></Blog>))

                }
            </div>




        </div>
    );
};

export default Blogs;