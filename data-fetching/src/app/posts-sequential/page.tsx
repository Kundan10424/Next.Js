import { Author } from "./author";



type Post = {
    userId: number;
    id: number;
    title: string;
    body: string;
}

export default async function PostSequential(){
    const response = await fetch("https://jsonplaceholder.typicode.com/posts")
    const post: Post[] = await response.json()

    const filterPosts = post.filter((post) => post.id % 10 === 1)


    return(
        <div className="p-4 max-w-7xl mx-auto">
            <h1 className="text3xl font-extrabold mb-8">Blog Post</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {filterPosts.map((post) => (
                    <div key ={post.id} className="bg-white shadow-md rounded-lg">
                        <h2 className="text-2xl font-bold mb-3 text-gray-800 leading-tight">{post.title}</h2>
                        <p className="text-gray-600 mb-4 leading-relaxed">{post.body}</p>
                        <Author userId={post.userId}/>
                    </div>
                ))}
            </div>
        </div>
    )
}