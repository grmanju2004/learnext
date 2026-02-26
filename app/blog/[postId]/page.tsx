import axios from "axios";
export default async function BlogPost({ params }: any) {
    const { postId } = await params;
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`);
    const data = await res.json();

    return <div>
        This is a blog post {postId}
        <br />
        <p>title - {data.title}</p>
        <p>body - {data.body}</p>
    </div>
}