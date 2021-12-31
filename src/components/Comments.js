import React from 'react';
import Comment from './Comment'
import person from './images/person.png'
const Comments = ({ commentCount }) => {
    let u2 = "Rahul Gupta";
    let u1 = "Rahul Gupta";
    let p1 = "This is a great post";
    let p2 = "This is a great post";
    let t1 = 2;
    let t2 = 2;

    return (
        <div id="parentComment">
            <div>
                <h1>{commentCount} comments</h1>
                <Comment u={u1} p={p1} i={person} t={t1} />
                <Comment u={u2} p={p2} i={person} t={t2}/>
            </div>
        </div>
    );
}

export default Comments;
