export async function getAllPosts() {
      const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts`);
  if (!res.ok) {
    throw new Error('Failed to fetch posts');
  }
  return res.json();
};

export async function getASinglePost(id: string) {
  const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/posts/${id}`);
  if (!res.ok) {
    throw new Error('Failed to fetch post');
  }
  return res.json();
}