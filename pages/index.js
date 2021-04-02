import Head from 'next/head'
import Layout, { siteTitle } from '../components/layout'
import { getSortedPostsData } from '../lib/posts'
import Link from 'next/link'
import Date from '../components/date'

export async function getStaticProps() {
  const allPostsData = getSortedPostsData()
  return {
    props: {
      allPostsData
    }
  }
}

export default function Home({ allPostsData }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className="text-lg text-gray-700 my-5">
        <p>Frontend developer and designer, occasionally gaming and playing piano. Writing about design and code.</p>
        <p className="mt-5">Working with <a href="http://tribe.so/">Tribe</a> on a platform for online communities.</p>
      </section>
      <section>
        <h2 className="text-3xl font-bold my-5">Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a className="text-2xl text-blue-500">{title}</a>
              </Link>
              <br />
              <div className="text-lg text-gray-500">
                <Date dateString={date} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
