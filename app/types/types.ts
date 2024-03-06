export type Like = {
  user_id: string,
  post_id: string,
  created_at: string,
  users?: {
    filename?: string,
    name?: string,
    e_percentage?: number
  }
}