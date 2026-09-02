import axios from "axios";

const API_BASE_URL = "https://dummyjson.com";

const apiService = {
    
    getPosts: async () => {
        try {
            const response = await axios.get(`${API_BASE_URL}/posts`);
            return response.data.posts
        } catch (error) {
            console.error("Error fetching posts: ", error);
            throw error;
        }
    },

    getPostsById: async (id) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/posts/${id}`);
            return response.data
        } catch (error) {
            console.error("Error fetching posts: ", error);
            throw error;
        }
    },

    createPosts: async (postData) => {
        try {
            const response = await axios.post(`${API_BASE_URL}/posts/add`, postData);
            return response.data
        } catch (error) {
            console.error("Error fetching posts: ", error);
            throw error;
        }
    },

    getPostComments: async (postId) => {
        try {
            const response = await axios.get(`${API_BASE_URL}/posts/${postId}/comments`);
            return response.data.comments
        } catch (error) {
            console.error("Error fetching posts: ", error);
            throw error;
        }
    }   

}

export default apiService