import React from 'react';
import './style.css'
const Comment = ({ u, p, i,t }) => {
    return (
        <div className='post'>
            <img src={i} id="personImg" />
            <div id="comment">
                <p id="commenter">{u} <b id="old">{t} months ago</b></p>
                <p id='commentBody'>{p}</p>
            </div>
        </div>
    );
}

export default Comment;
