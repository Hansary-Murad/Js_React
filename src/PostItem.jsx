import { useState } from "react"
import AddPost from "./AddPost"

const PostItem = ({id, title, views, removePost}) => {
    const [changeToggle, setChangeToggle] = useState(false)

    const onRemove = () => {
        removePost(id)
    }

    const updatePost = async ({title}) => {
        await axios.put(`http://localhost:3000/posts/${id}`, { title, views });
        setChangeToggle(false)
    }

    if(changeToggle) {
        return <AddPost title={title} addPost={updatePost} />
    }

    return (
        <div>
            <span>
                title: {title}, views: {views}
            </span>
            <button onClick={onRemove}>Remove</button>
            <button onClick={() => setChangeToggle(!changeToggle)}>Change</button>
        </div>
    )
}

export default PostItem;