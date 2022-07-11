import { gql, useQuery } from '@apollo/client'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'
import { CalendarBlank, UserCircle, X } from 'phosphor-react'
import React, { useState } from 'react'
import Modal from 'react-modal'
import { Link } from 'react-router-dom'

const GET_POSTS_BY_SLUG = gql`
  query MyQuery($slug: String) {
    post(where: { slug: $slug }) {
      content {
        html
      }
      date
      id
      slug
      title
      author {
        name
      }
    }
  }
`

const customStyles = {
  overlay: {
    backgroundColor: '#7c7c7c9d',
    zIndex: '1'
  },
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
    width: '50%',
    backgroundColor: '#09090A',
    height: '95%',
    overflow: 'auto',
    border: 'none',
    borderRadius: '5px',
    outline: 'none',
    zIndex: '2'
  }
}
Modal.setAppElement('#root')

interface ModalPostProps {
  slug: string
}

interface ModalPostResponse {
  post: {
    content: {
      html: string
    }
    date: Date
    id: string
    slug: string
    title: string
    author: {
      name: string
    }
  }
}

export function ModalPost(props: ModalPostProps) {
  const { data } = useQuery<ModalPostResponse>(GET_POSTS_BY_SLUG, {
    variables: { slug: props.slug }
  })
  const [isOpen, setIsOpen] = useState<boolean>(true)
  function closeModal() {
    setIsOpen(false)
  }
  if (!data) {
    return <h1>Carregando post</h1>
  }
  return (
    <Modal isOpen={isOpen} style={customStyles}>
      <div className="">
        <div className="flex justify-end">
          <Link to={'/'}>
            <X onClick={closeModal} size={21} />
          </Link>
        </div>
        <div>
          <h1 className="title">{data.post.title}</h1>
          <div className="flex gap-6 mt-3">
            <div className="flex items-center gap-1">
              <CalendarBlank size={20} className="text-green-300" />
              <span className="text-sm text-gray-300">
                {new Date(data.post.date).toDateString()}
              </span>
            </div>
            <Link to={`/author/${data.post.author.name}`}>
              <div className="flex items-center gap-1">
                <UserCircle size={20} className="text-green-300" />
                <span className="text-sm text-gray-300 hover:text-white">
                  {data.post.author.name}
                </span>
              </div>
            </Link>
          </div>
        </div>
        <div
          className="mt-8 flex flex-col gap-2"
          dangerouslySetInnerHTML={{ __html: data.post.content.html }}
        ></div>
      </div>
    </Modal>
  )
}
