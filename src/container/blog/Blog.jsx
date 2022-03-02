import React from 'react'
import './blog.css'
import {Article} from "../../component"
import {blog1, blog2, blog3, blog4, blog5} from "./import"


const Blog = () => {
    return (
        <div className='blog section__padding' id="blog">
            <div className="blog-heading">
                <h1 className='gradient__text'>A lot is happening, We are blogging about it. </h1>
            </div>
            <div className="blog-container">
                <div className="blog-ctn-A">
                    <Article imgLink={blog1} date="Mar 02, 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?" />
                </div>
                <div className="blog-ctn-B">
                    <Article imgLink={blog2} date="Mar 02, 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                    <Article imgLink={blog3} date="Mar 02, 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                    <Article imgLink={blog4} date="Mar 02, 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                    <Article imgLink={blog5} date="Mar 02, 2022" title="GPT-3 and Open  AI is the future. Let us exlore how it is?"/>
                </div>
            </div>
        </div>
    )
}

export default Blog
