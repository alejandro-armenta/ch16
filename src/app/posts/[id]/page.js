export default async function ViewPostPage({ params }) {
  const { id } = await params
  return <strong>View Post {id}</strong>
}
