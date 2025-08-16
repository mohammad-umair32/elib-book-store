import { Book } from '@/types'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const BookCard = ({book}: {book:Book}) => {
  return (
    <div className='flex gap-5 border border-gray-300 p-5 shadow-md rounded'>
      <Image src={book.coverImage} alt={book.title} width={0} height={0} sizes='100vw' style={{width: 'auto', height: "12rem"}} />
      <div>
        <h2 className='line-clamp-2 text-xl font-bold text-[#bf5a36] text-balance'>{book.title}</h2>
        <p className='font-bold text-[#683226] mt-1'>{book.author.name}</p>
        <Link className='py-1 px-2 rounded border border-[#ce7041] mt-4 inline-block text-[#ce7041] font-medium text-sm
                    hover:border-[#f7eadd] hover:bg-[#f7eadd] transition' href={`/book/${book._id}`}>Read more</Link>
      </div>
    </div>
  )
}

export default BookCard
