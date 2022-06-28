import { loadPosts } from '../lib/fetch-posts'

function Blog({ posts }) {
  return (
    <ul>
      {posts.map((post) => (
        <li>{post.title}</li>,
        <li>{post.subtitle}</li>
      ))}
    </ul>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Call an external API endpoint to get posts
  const res = await fetch('https://localhost:3000/posts')
  const posts = await loadPosts()

  // By returning { props: { posts } }, the Blog component
  // will receive `posts` as a prop at build time
  return {
    props: {
      posts,
    },
  }
}

export default Blog