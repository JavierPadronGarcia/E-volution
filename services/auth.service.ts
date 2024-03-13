import { createClient } from "@/utils/supabase/server";

export const getLoggedInUser = async () => {
  const supabase = createClient();

  const { data: { user } } = await supabase.auth.getUser();
  return user;
}