import { PostList } from '@/components/PostList'

export default function HomePage() {
  const posts = [
    { _id: 123, title: 'hello next.js', author: { username: 'Daniel Bugl' } },
    {
      _id: 124,
      title: 'hello next.js',
      author: { username: 'Alejandro Armenta' },
    },
  ]
  return <PostList posts={posts} />
}
