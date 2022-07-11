import { gql, useQuery } from '@apollo/client'
import React, { HtmlHTMLAttributes, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ModalPost } from '../Components/ModalPost'
import { Post } from '../Components/Post'
import { PostHeader } from '../Components/PostHeader'
import { Footer } from '../Components/Utils/Footer'
import { Header } from '../Components/Utils/Header'
import { LoadMore } from '../Components/Utils/LoadMore'

const GET_POSTS = gql`
  query GetPosts {
    posts {
      date
      excerpt
      slug
      title
      id
      author {
        name
      }
    }
  }
`

interface GetPostsResponse {
  posts: {
    date: Date
    excerpt: string
    slug: string
    title: string
    id: string
    author: {
      name: string
    }
  }[]
}

export function Home() {
  const { slug } = useParams<{ slug: string }>()
  const { data } = useQuery<GetPostsResponse>(GET_POSTS)
  return (
    <div id="all" className="flex flex-col min-h-screen">
      {slug ? <ModalPost slug={slug} /> : null}
      <Header />
      <main className="flex flex-1 justify-center py-6">
        <div className="w-[70%] h-full flex flex-col">
          <PostHeader />
          <div className="w-full flex justify-end">
            <div className="w-[98%]">
              {data?.posts.map(post => {
                return (
                  <Post
                    key={post.id}
                    author={post.author.name}
                    date={new Date(post.date)}
                    excerpt={post.excerpt}
                    title={post.title}
                    slug={post.slug}
                  />
                )
              })}

              <LoadMore />
            </div>
          </div>
        </div>
      </main>
      <div className="px-8">
        <Footer />
      </div>
    </div>
  )
}
