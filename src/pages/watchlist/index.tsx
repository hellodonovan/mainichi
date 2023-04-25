import { type NextPage } from "next";
import Head from "next/head";
import Link from "next/link";
import AnimeContext from "~/context/AnimeContext";
import { useContext } from "react";
import Navbar from "~/components/Navbar";


interface animeProps {
  anime: {
    mal_id: number;
    url: string;
    title: string;
    images: {
      jpg: string;
      webp: {
        image_url: string,
      }
    };
    genres: [
      {
        name: string,
        url: string
      }
    ]
    broadcast: {
      day: string
    }
  }[];
}

const Home: NextPage<animeProps> = () => {
    const { watching } = useContext(AnimeContext);
  return (
    <>
      <Head>
        <title>Create T3 App</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <main className="flex min-h-screen flex-col items-center justify-center">
        <h1>Uwuuuuu</h1>
        <h2>Your watchlist</h2>
      </main>
    </>
  );
};

// export async function getServerSideProps() {
//   const res = await fetch("https://api.jikan.moe/v4/seasons/2023/spring");
//   const data = await res.json();
//   const anime = data.data;

//   return { props: { anime } };
// }

export default Home;
