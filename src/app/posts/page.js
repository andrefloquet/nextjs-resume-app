import Link from "next/link";

import { PostsIndex, PostsDestroy } from '../../../src/app/actions';

export default async function PostsIndexPage() {

  const posts = await PostsIndex();

  return (
    <>
      <div className="flex items-center justify-between m-6 mb-0">
        <h1 className="text-4xl">Posts</h1>
        <Link href="/posts/create" className="text-blue-500 ml-4">Create new Post</Link>
      </div>
      <div className="relative pt-2 lg:pt-2 min-h-screen">
        <div
          className="bg-cover w-full flex justify-center items-center"
          // style={{background-image: url('/images/mybackground.jpeg')}}
        >
          <div className="w-full bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
            <div className="w-12/12 mx-auto rounded-2xl bg-white p-5 bg-opacity-40 backdrop-filter backdrop-blur-lg">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 text-center px-2 mx-auto">
                {posts.map((post) => (
                  <article key={post.id} className="bg-white p-6 mb-6 shadow transition duration-300 group transform hover:-translate-y-2 hover:shadow-2xl rounded-2xl cursor-pointer border">
                    <div className="relative mb-4 rounded-2xl">
                      <img
                        className="max-h-80 rounded-2xl w-full object-cover transition-transform duration-300 transform group-hover:scale-105"
                        src="https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                        alt=""
                      />
                      <div className="absolute bottom-3 left-3 inline-flex items-center rounded-lg bg-white p-2 shadow-md">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="h-5 w-5 text-red-700"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
                          />
                        </svg>
                        <span className="ml-1 text-sm text-slate-400">2</span>
                      </div>

                      <Link
                        className="flex justify-center items-center bg-red-700 bg-opacity-80 z-10 absolute top-0 left-0 w-full h-full text-white rounded-2xl opacity-0 transition-all duration-300 transform group-hover:scale-105 text-xl group-hover:opacity-100"
                        href={"/posts/" + post.slug}
                        target="_self"
                        rel="noopener noreferrer"
                      >
                        Read Post
                        <svg
                          className="ml-2 w-6 h-6"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M13 5l7 7-7 7M5 5l7 7-7 7"
                          ></path>
                        </svg>
                      </Link>
                    </div>
                    <div className="flex justify-between items-center w-full pb-4 mb-auto">
                      <div className="flex items-center">
                        <div className="pr-3">
                          <img
                            className="h-12 w-12 rounded-full object-cover"
                            src="https://images.pexels.com/photos/163097/twitter-social-media-communication-internet-network-163097.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                            alt=""
                          />
                        </div>
                        <div className="flex flex-1">
                          <div className="">
                            <p className="text-sm font-semibold ">
                              {post.user.name}
                            </p>
                            <p className="text-sm text-gray-500">
                              Published on{" "}
                              {new Date(post.created_at).getDate() +
                                "/" +
                                parseInt(
                                  new Date(post.created_at).getMonth() + 1
                                ) +
                                "/" +
                                new Date(post.created_at).getFullYear()}
                            </p>
                          </div>
                        </div>
                      </div>
                      <div className="flex justify-end">
                        <div className="text-sm flex items-center text-gray-500 ">
                          2 Days ago
                          <svg
                            className="ml-1 w-4 h-4"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth="1"
                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                            ></path>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <h3 className="font-medium text-xl leading-8">
                      <Link
                        href={"/posts/" + post.slug}
                        className="block relative group-hover:text-red-700 transition-colors duration-200 "
                      >
                        {post.title}
                      </Link>
                    </h3>
                    <hr className="w-3/4 mx-auto mt-4" />
                    <div className="flex items-center justify-between mt-4 mx-6">
                      <Link href={"/posts/" + post.slug + "/edit"} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Edit
                      </Link>
                      <button form={"delete-form-"+post.id} className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
                        Delete
                      </button>
                    </div>
                    <form className="hidden" id={"delete-form-"+post.id} action={PostsDestroy}>
                                <input type="hidden" name="slug" value={post.slug} />
                    </form>
                  </article>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
