import { useEffect, useState } from "react";
import axios from "axios";
import PostItem from "./PostItem";
import AddPost from "./AddPost";

const PostList = () => {
    const [posts, setPosts] = useState([]);
    
    const onFetchPosts = async () => {
        const { data }= await axios.get("http://localhost:3000/posts");
        setPosts(data);
    };

    useEffect(() => {
        onFetchPosts();
    }, []);

    const addPost = async ({title}) => {
        const { data } = await axios.post("http://localhost:3000/posts", {
            title,
            views: 0
        });
        setPosts([...posts, data]);
    };

    const removeById = async (id) => {
        await axios.delete(`http://localhost:3000/posts/${id}`)
        setPosts(posts.filter((post) => post.id !== id))
    }

    return (
    <>
    <AddPost addPost={addPost} />
    {posts.map((post) => (
        <PostItem {...post} key={post.id} removePost={removeById}/>
    ))}
    </>
);
};

export default PostList;