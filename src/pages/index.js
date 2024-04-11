import Image from "next/image";
import Head from 'next/head'
import Link from 'next/link'

export default function Home() {
  return (
    <main className='font-mono ml-7 mt-7'>
      <Head>
        <title>Vrindavn Sanap</title>
        <link rel="icon" href="./favicon.ico" />
      </Head>
      <h1 className="text-4xl">
        Vrindavan's home on the internet
      </h1>
      <Image
        src="/rocket.jpeg"
        width={300}
        height={500}
        className="mt-4 border-4"
        alt="Rocket"
      />
      <p className="text-l mt-5">Hii!!, I am Vrindavan, I love software and computers. I mainly work with Python,(ai mlstack- numpy, matplotlib, pytorch), C, C++, and flask, react, tailwind for frontend. My hobbies incude solving CTFs, reading sci-fi/ tech-history books.
      </p>
      <br />
      <Link href="/blog/" className="underline text-2xl text-blue-600 hover:text-blue-800 visited:text-purple-600 cursor-pointer">Blog</Link>
      <br />
      <Link href="/projects" className="underline text-2xl text-blue-600 hover:text-blue-800 visited:text-purple-600 cursor-pointer">Projects</Link>
    </main>
  );
}
