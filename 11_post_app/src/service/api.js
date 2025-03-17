const apiUrl = import.meta.env.VITE_API_BASE_URL
const accessToken = import.meta.env.VITE_ACCESS_TOKEN
const userID = import.meta.env.VITE_USER_ID


const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${accessToken}`
}


export const postsAPI = {
    getPosts: async () => {
        const response = await fetch(`${apiUrl}/users/${userID}/posts`, {
          method: 'GET',
          headers  
        })

        if (!response.ok) {
            throw new Error("Something went wrong");
        }

        return response.json()
    }
}
