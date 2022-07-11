import { format } from 'date-fns'
import { ptBR } from 'date-fns/locale'
import { CalendarBlank, UserCircle } from 'phosphor-react'
import { Link } from 'react-router-dom'

interface PostProps {
  title: string
  excerpt: string
  date: Date
  author: string
  slug: string
}

export function Post(props: PostProps) {
  const dateFormatted = format(props.date, "MMM '.' dd ',' uuuu", {
    locale: ptBR
  })
  return (
    <section className="w-full py-4 border-b border-gray-500">
      <div>
        <Link to={`/post/${props.slug}`}>
          <h1 className="font-bold text-2xl mb-1 cursor-pointer hover:underline hover:text-green-300">
            {props.title}
          </h1>
        </Link>
        <p className="text-sm text-gray-200">{props.excerpt}</p>
        <div className="flex gap-6 mt-3">
          <div className="flex items-center gap-1">
            <CalendarBlank size={20} className="text-green-300" />
            <span className="text-sm text-gray-300">{dateFormatted}</span>
          </div>
          <Link to={`/author/${props.author}`}>
            <div className="flex items-center gap-1">
              <UserCircle size={20} className="text-green-300" />
              <span className="text-sm text-gray-300 hover:text-white">
                {props.author}
              </span>
            </div>
          </Link>
        </div>
      </div>
    </section>
  )
}
