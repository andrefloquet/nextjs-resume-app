async function getPost(slug) {
  const res = await fetch("http://127.0.0.1:8000/api/posts/" + slug);

  if (!res.ok) {
    throw new Error("Post not found.");
  }

  return res.json();
}

export default async function PostPage({ params }) {
  const post = await getPost(params.slug);

  const postDate =
    new Date(post.created_at).getDate() +
    "/" +
    parseInt(new Date(post.created_at).getMonth() + 1) +
    "/" +
    new Date(post.created_at).getFullYear();

  return (
    <div class="container mx-auto px-4 py-8">
      <div class="max-w-3xl mx-auto bg-white shadow-md rounded-md p-6">
        <img
          src="https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
          alt="Post Image"
          class="w-full h-64 object-cover object-center rounded-md mb-6"
        />
        <h1 class="text-3xl font-semibold mb-6">{post.title}</h1>
        <p class="text-gray-400 mb-6">
          Published on {postDate} by {post.user.name}
        </p>
        <div
          class="prose"
          dangerouslySetInnerHTML={{
            __html: post.body,
          }}
        ></div>
      </div>
    </div>
  );
}
