import { type UUID } from "crypto"

export type Like = {
  user_id: UUID,
  post_id: UUID,
  title: string,
  description: string,
  filename?: string
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