import { useState } from "react"
import apiService from "../services/apiServices.js"

const CreatePostForm= ({onPostCreated}) => {

    const [title, setTitle] = useState("")
    const [body, setBody] = useState("")
    const [isSubmitting, setIsSubmitting] = useState(false)

    const handleSubmit = async (e) => {
        e.preventDefault()
        setIsSubmitting(true)

        try {
            const newPost = {
                title,
                body,
                userId: 1, // hardcoded userID
            }

            const createdPost = await apiService.createPosts(newPost);
            alert("Post Created Successfully")
            onPostCreated(createdPost)
        } catch(error) {
            console.error('Error creating post:', error)
            alert("Failed to create post. Please try again")
        } finally {
            setIsSubmitting(false)
        }
    } 

    return(
        <form onSubmit={handleSubmit} className="mb-4 p-3 border rounded bg-light">
            <div className="mb-3">
                <label className = "form-label fw-bold" htmlFor="">Title</label>
                <input 
                    type = "text"
                    className = "form-control"
                    id = "postTitle"
                    placeholder="Enter Post Title"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                    disabled={isSubmitting} // disable when the form is submitting
                />
            </div>

            <div className="mb-3">
                <label className = "form-label fw-bold" htmlFor="">Content</label>
                <textarea 
                    className = "form-control"
                    id = "postContent"
                    placeholder="Enter Post Content"
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                    required
                    disabled={isSubmitting} // disable when the form is submitting
                ></textarea>
            </div>

            <button type="submit" className="btn btn-danger" disabled={isSubmitting}>
                {isSubmitting ? 'Creating post...' : 'Create Post'}
            </button>
        </form>
    )

}

export default CreatePostForm