import Link from 'next/link'
import React from 'react'

const Social = () => {
  return (

        <div className="h-fit w-fit p-8 px-4 bg-white fixed left-0 top-1/2 -translate-y-1/2 flex flex-col rounded-tr-2xl rounded-br-2xl max-md:hidden">
        <Link target='_blank' href={"https://www.linkedin.com/in/tech-villa-660a8a290"}>
              <i className="ri-linkedin-box-fill hover:text-orange-800 ease-in-out duration-300 text-3xl"></i>
            </Link>
            <Link
              target='_blank' href={
                "https://instagram.com/techvilla_lnct?igshid=MzRlODBiNWFlZA=="
              }
            >
              <i className="ri-instagram-fill hover:text-orange-800 ease-in-out duration-300 text-3xl"></i>
            </Link>
            <Link
              target='_blank' href={"https://x.com/Techvilla_?t=Ah651-6AZsJ7ayYT9tArDw&s=09"}
            >
              <i className="ri-twitter-x-fill hover:text-orange-800 ease-in-out duration-300 text-3xl"></i>
            </Link>
            <Link target='_blank' href={"https://github.com/techvillaLnct"}>
              <i className="ri-github-fill hover:text-orange-800 ease-in-out duration-300 text-3xl"></i>
            </Link>
        </div>
   
  )
}

export default Social