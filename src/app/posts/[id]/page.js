import { FullPost } from '@/components/FullPost'

export default async function ViewPostPage({ params }) {
  const { id } = await params

  const post = {
    title: `Hello next js ${id}`,
    contents: 'this will be fetched from the database later',
    author: { username: 'Daniel Bugl' },
  }

  return (
    <FullPost
      title={post.title}
      contents={post.contents}
      author={post.author}
    />
  )
}
