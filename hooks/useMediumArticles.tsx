import { useCallback, useEffect, useState } from 'react'

export interface MediumArticleProps {
  author: string
  categories: string[]
  content: string
  description: string
  link: string
  pubDate: string
  thumbnail: string
  title: string
}

const useMediumArticles = (): [
  articles: MediumArticleProps[],
  fetchArticles: () => Promise<void>
] => {
  const [articles, setArticles] = useState<MediumArticleProps[]>([])
  const controller = new AbortController()
  
  const fetchArticles = useCallback(async () => {
    const response = await fetch(
      'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/Popcorndao'
    , { signal: controller.signal })
    const data = await response.json()
    setArticles(data.items)
  }, [])


  useEffect(() => {
    fetchArticles()
    return () => {
      controller.abort()
    }
  }, [fetchArticles])

  return [articles, fetchArticles]
}

export default useMediumArticles