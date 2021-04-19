import  React from 'react';
import  icon from '../images/publication/icon.png'
import  comment from "../images/publication/comment.png"
import  repost from '../images/publication/repost.png'
import  loader from '../images/publication/uploader.png'
import  like from '../images/publication/like.png'
import  avatar from '../images/publication/Anakin-Jedi.jpg'
import  post1 from '../images/publication/Post1.jpg'
import  post2 from '../images/publication/post2.jfif'
import  post3 from '../images/publication/post3.jfif'


const Posts = [
    {
        name: "Anakin skywalker",
        photo: avatar,
        nickname: "@dart_vader",
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        image: post1,
        date: " 7 квітня",
        coment: 82,
        repost: 46,
        like: 87
    },
    {
        name: "Anakin skywalker",
        photo: avatar,
        nickname: "@dart_vader",
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        image: post2,
        date: " 8 квітня",
        coment: 82,
        repost: 46,
        like: 87
    },
    {
        name: "Anakin skywalker",
        photo: avatar,
        nickname: "@dart_vader",
        content: "WTF? Who is Ray? Why she is Skywalker? Luke...?",
        image: post3,
        date: " 9 квітня",
        coment: 82,
        repost: 46,
        like: 87
    }
]

export const Publication = () => {
    return(
        <div>
            {Posts.map(post =>(
               <div key={post.date} className={"cont"}>
                <div >
            <img className={"logo"} src={post.photo}  alt={"logo"}/>
            </div>
            <div className={"content1"}>
                <label className={"name"}>{post.name} <img className={"icon"} src={icon} alt={"icon"}/> </label>
                <label className={"nickname"}>{post.nickname} · {post.date}</label><br/>
            <label className={"content"}>{post.content}</label>

            <img className={"post_image"} src={post.image} alt={"post_image"}/>
            <div className={"icon_panel"}>
                <img src={comment} alt={"comment"}/><label>{post.coment}</label>
                <img src={repost} alt={"repost"}/><label>{post.repost}</label>
                <img src={like} alt={"like"}/><label>{post.like}</label>
                <img src={loader} alt={"loader"}/>
            </div>
        </div>
        </div>
        ))}
        </div>
    )
}