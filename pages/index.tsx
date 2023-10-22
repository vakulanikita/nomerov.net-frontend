import Head from 'next/head'
import Image from 'next/image'
import s from '@/styles/Home.module.scss'

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={s.root}>
        <video className={s.pageLoader} autoPlay loop muted>
          <source src={'/videoplayback.mp4'} type='video/mp4' />
        </video>
      </div>
    </>
  )
}
