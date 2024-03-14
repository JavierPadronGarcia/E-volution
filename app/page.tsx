"use server"
import { redirect } from "next/navigation";
import AuthButton from "../components/AuthButton";
import { createClient } from "@/utils/supabase/server";
import { getLoggedInUser } from '@/services/auth.service'

export default async function Index() {

  const user = await getLoggedInUser();

  if (user) {
    return redirect('/news');
  } else {
    return redirect('/relevantNews');
  }
}
