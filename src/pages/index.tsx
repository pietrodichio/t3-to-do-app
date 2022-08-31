import type { NextPage } from "next";
import { signIn, signOut, useSession } from "next-auth/react";
import Head from "next/head";
import { trpc } from "../utils/trpc";

type TechnologyCardProps = {
  name: string;
  description: string;
  documentation: string;
};

const Home: NextPage = () => {
  const { data: session, status } = useSession()

  if (status === "loading") {
    return <main>Loading...</main>;
  }
  
  return (
    <main>
      <h1>Guestbook</h1>
      { session ? (
        <div>
          <p>
            Hi {session?.user?.name}
          </p>
          <button onClick={()=> signOut() }>Logout</button>
        </div>
      ) : 
      <button onClick={()=> signIn("discord") }>Login with Discord</button>
      }
      
    </main>
  );
};

export default Home;
