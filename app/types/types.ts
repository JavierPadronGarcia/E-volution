import { type UUID } from "crypto"

export type Like = {
  user_id: UUID,
  post_id: UUID,
  title: string,
  description: string,
  filename?: string,
}

export type Post = {
  id?: UUID,
  title: string,
  description: string,
  filename: string,
  user_id: UUID,
  users?: {
    name?: string,
    filename?: string
  }
}

export type User = {
  id: UUID,
  filename?: string,
  created_at: string,
  name?: string,
  description?: string,
  e_percentage?: number
}