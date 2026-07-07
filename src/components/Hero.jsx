import heroImg from '../assets/hero.svg'
import { FaGithubSquare, FaLinkedin, FaTwitterSquare } from 'react-icons/fa'
import React from 'react'

const Hero = () => {
  return (
    <div className='bg-emerald-100 py-24'>
      <div className='mx-auto max-w-7xl px-8 grid md:grid-cols-2 items-center gap-8 justify-between'>
        <section>
          <h1 className='text-7xl font-bold tracking-wider'>I'm Kishore</h1>
          <p className='mt-4 text-3xl text-slate-700 capitalize tracking-wide'>
            Aspiring web developer
          </p>
          <p className='mt-2 text-lg text-slate-700 capitalize tracking-wide'>
            Learning through projects
          </p>
          <div className='flex gap-x-4 mt-4 text-3xl'>
            <a href='https://github.com/kishore-ram-a'>
              <FaGithubSquare />
            </a>
            <a href='https://www.linkedin.com/in/kishoreram2008?utm_source=share_via&utm_content=profile&utm_medium=member_android'>
              <FaLinkedin />
            </a>
            <a href='#'>
              <FaTwitterSquare />
            </a>
          </div>
        </section>
        <article className='hidden sm:block'>
          <img src={heroImg} alt='' />
        </article>
      </div>
    </div>
  )
}

export default Hero
