async function getPosts() {
  const res = await fetch("http://127.0.0.1:8000/api/posts");

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch posts");
  }

  return res.json();
}

export default async function Post() {
  const posts = await getPosts();

  return (
    <>
      <h1>Posts</h1>
      <p class="mb-4">This is my Posts Page</p>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul>
    </>
  );
}
