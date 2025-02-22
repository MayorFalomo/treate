export interface PostType{
  id: string | number;
  userId: number;
    title: string;
    body: string;
}

export interface Likes {
  name: string;
  avatars: string;
}

export interface NavType {
  id: number;
  title: string;
  path: string;
}