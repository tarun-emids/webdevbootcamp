import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import apiService from "../services/apiServices";

const PostDetail = () => {

    const { id } = useParams();

    const [post, setPost] = useState(null)
    const [comments, setComments] = useState([])
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(null)

    // whenever theres a change in ID in the URL, re-fetch the post
    useEffect(() => {

        fetchPostData();

    }, [id]);

    const fetchPostData = async () => {
        try {
            setLoading(true)
            const [postData, commentData] = await Promise.all([
                apiService.getPostsById(id),
                apiService.getPostComments(id)
            ])

            setPost(postData)
            setComments(commentData)


        } catch (err) {
            setError('Failed to load post data')
            console.error("Error fetching post: ", err)

        } finally {
            setLoading(false);
        }
    }

    if (loading) {
        return (
            <div className="text-center my-5">
                <div className="spinner-border text-success" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
                <p className="mt-2">Loading Posts...</p>
            </div>
        )
    }

    if (error) {
        <div className="containermt-5">
            <div className="alert alert-danger">{error}</div>
        </div>
    }

    if (!post) {
        return (
            <div className="container mt-5">
                <h1>Post Not Found</h1>
            </div>
        )
    }

    return (
        <div className="container mt-4">
            <div className="card mb-4">
                <div className="card-body">
                    <h2 className="card-title">{post.title}</h2>
                    <p className="card-text">{post.body}</p>
                </div>
            </div>

            <h2 className="mb-3">Comments</h2>
            {
                comments.length ? (
                    comments.map((comment) => (
                        <div key = {comment.id} className="card mb-3">
                            <div className="card-body">
                                <h5 className="card-title">{comment.user.fullName}</h5>
                                <p className="card-text">{comment.body}</p>
                            </div>
                        </div>
                    ))
                ) : (
                    <div className="alert alert-info">No comments yet</div>
                )
            }
        </div>
    )

}

export default PostDetail