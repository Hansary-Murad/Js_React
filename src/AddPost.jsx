import { useState } from "react"

const AddPost = (props) => {
    const [title, setTitle] = useState('')
    const onChange = (e) => {
        setTitle(e.target.value);
    }

    const onSave = () => {
        if(!props.addPost) {
            return;
        }
        props.addPost({title});
        setTitle('');
    }

    return (
        <div>
            <label>Title</label>
            <input value={title} onChange={onChange}/>
            <button onClick={onSave}>Save</button>
        </div>
    )
}

export default AddPost;