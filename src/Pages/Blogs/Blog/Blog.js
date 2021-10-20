import React from 'react';
import './Blog.css'

const Blog = ({ blog }) => {
    const { title, picture, description, like, dislike } = blog;

    return (
        <div>
            <div className="card mb-3 blog-style" >
                <div class="row g-0">
                    <div class="col-md-4 col-12">
                        <img src={picture} class="img-fluid rounded-start" alt="..." />
                    </div>
                    <div class="col-md-8 col-12">
                        <div class="card-body">
                            <h5 class="card-title blog-title">{title}</h5>
                            <p class="card-text">{description.slice(0, 150)}</p>
                            <div className="d-flex ">
                                <p class="card-text m-3"> <i class="fas fa-thumbs-up"></i> {like}</p>
                                <p class="card-text m-3"> <i class="fas fa-thumbs-down"></i> {dislike}</p>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default Blog;