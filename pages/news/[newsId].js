import { useRouter } from 'next/router'

// our-domain.com/news/something

const Detail = () => {
  const router = useRouter()

  const newsId = router.query.newsId

  // send a requestmto the backend to fetch the news item with newsId

  return <h1>The Detail Page</h1>
}

export default Detail
