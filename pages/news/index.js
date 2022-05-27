import Link from 'next/link'

// our-domain.com/news/

const News = () => {
  return (
    <>
      <h1>The Home Page</h1>
      <ul>
        <li>
          <Link href='/news/nextjs-routing'>NextJS is a great framework</Link>
        </li>
        <li>
          <Link href='/news/nextjs-routing'>Something else</Link>
        </li>
      </ul>
    </>
  )
}

export default News
