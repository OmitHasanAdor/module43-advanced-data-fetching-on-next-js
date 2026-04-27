
/* basic data fetching */ 
// const getPosts= async()=>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     return res.json()
// }


/* try cathch error handling */ 

// try{
    
// const getPosts= async()=>{
//     const res = await fetch('https://jsonplaceholder.typicode.com/posts')
//     return res.json()
// }
// }catch(err){
//     throw new Error('Failed to fetch posts');
// }


/* try cathch error handling */ 
const getPosts= async()=>{
    const res = await fetch('https://jsonplaceholder.typicode.com/posts')
    
    if(!res.ok){
        throw new Error('Failed to fetch posts');
    }
    return res.json()
}


const PostPage = async () => {
    const posts = await getPosts();

    return (
        <div>
            <h1>Posts</h1>
            <h3>{posts.length}</h3>
        </div>
    );
};

export default PostPage;