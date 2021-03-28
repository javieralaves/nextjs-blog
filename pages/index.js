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
      <section class="text-2xl text-gray-500 my-5">
        <p>I'm a product designer, developer, and content creator, living in Berlin. Currently part of the product team at <a href="http://tribe.so/">Tribe</a>.</p>
      </section>
      <section>
        <h2 class="text-3xl font-bold my-5">Blog</h2>
        <ul>
          {allPostsData.map(({ id, date, title }) => (
            <li key={id}>
              <Link href={`/posts/${id}`}>
                <a class="text-2xl text-blue-500">{title}</a>
              </Link>
              <br />
              <div class="text-lg text-gray-500">
                <Date dateString={date} />
              </div>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  )
}
