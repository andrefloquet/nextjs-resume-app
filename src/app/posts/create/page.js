
import { PostsCreate } from '../../../../src/app/actions';

export default async function PostsCreatePage() {

  return (
    <>
      <h1 className="text-center text-2xl mt-6">Create a new Post</h1>
      <form action={PostsCreate} className="max-w-md mx-auto mt-10">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700 font-bold mb-2">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter title"
            required
          />
        </div>
        <div className="mb-4">
          <label htmlFor="body" className="block text-gray-700 font-bold mb-2">
            Body
          </label>
          <textarea
            id="body"
            name="body"
            rows="5"
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:border-blue-500"
            placeholder="Enter body"
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
        >
          Submit
        </button>
      </form>
    </>
  );
}
