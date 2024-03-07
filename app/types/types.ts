import { type UUID } from "crypto"

export type Like = {
  user_id: UUID,
  post_id: UUID,
  title: string,
  description: string,
  filename?: string
}