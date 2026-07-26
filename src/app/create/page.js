import { CreatePost } from '@/components/CreatePost'
import { createPost } from '@/data/posts'
import { getUserIdByToken } from '@/data/users'
import { initDatabase } from '@/db/init'
import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export default async function CreatePostPage() {
  const cookieStore = await cookies()

  const token = cookieStore.get('AUTH_TOKEN')

  const createPostAction = async (formData) => {
    'use server'

    const id = getUserIdByToken(token?.value)

    await initDatabase()

    const post = await createPost(id, {
      title: formData.get('title'),
      contents: formData.get('contents'),
    })

    redirect(`/posts/${post._id}`)
  }

  if (!token?.value) {
    return <strong>You need to be logged in to create posts</strong>
  }

  return <CreatePost createPostAction={createPostAction} />
}
