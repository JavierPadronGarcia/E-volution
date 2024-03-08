import Link from "next/link";
import { headers } from "next/headers";
import { createClient } from "@/utils/supabase/server";
import { redirect } from "next/navigation";
import { SubmitButton } from "./submit-button";
import BackArrow from "@/components/backArrow";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  const signIn = async (formData: FormData) => {
    "use server";

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/news");
  };

  const signUp = async (formData: FormData) => {
    "use server";

    const origin = headers().get("origin");
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;
    const supabase = createClient();

    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        emailRedirectTo: `${origin}/auth/callback`,
      },
    });

    if (error) {
      return redirect("/login?message=Could not authenticate user");
    }

    return redirect("/login?message=Check email to continue sign in process");
  };

  return (
     <div className="ml-0 px-0 w-5/6"> <BackArrow></BackArrow>
    <div className="flex flex-col w-full sm:max-w-md gap-2">
      <h1 className="text-center flex justify-center items-center mt-12 mb-20 ">
        <span className="font-poly italic text-6xl"> E </span>
        <span className="flex align-middle text-4xl"> -volution</span>
      </h1>
    
      <form className="animate-in flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <label className="text-md" htmlFor="email">
          Email
        </label>
        <input
          className="rounded-xl px-4 py-2 bg-inherit border-2 border-darkGreen mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <label className="text-md" htmlFor="password">
          Password
        </label>
        <input
          className="rounded-xl px-4 py-2 bg-inherit border-2 border-darkGreen mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />


      <div className="justify-center flex pt-[150px]">
        <SubmitButton
          formAction={signIn}
          pendingText="Signing In...">
          Sign In
        </SubmitButton>
        </div>
        <div>
          <p className="underline justify-center flex"> Register</p>
      </div>

      </form>
    </div>
    </div>
    );
}
