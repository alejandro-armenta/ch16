import { FullPost } from '@/components/FullPost'
import { getPostById } from '@/data/posts'
import { initDatabase } from '@/db/init'
import { notFound } from 'next/navigation'

export default async function ViewPostPage({ params }) {
  await initDatabase()

  const { id } = await params
  const post = await getPostById(id)

  if (!post) notFound()

  return (
    <FullPost
      title={post.title}
      contents={post.contents}
      author={post.author}
    />
  )
}
