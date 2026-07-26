import { PostList } from '@/components/PostList'
import { listAllPosts } from '@/data/posts'
import { initDatabase } from '@/db/init'

export default async function HomePage() {
  await initDatabase()
  const posts = await listAllPosts()
  console.log(posts)
  return <PostList posts={posts} />
}
