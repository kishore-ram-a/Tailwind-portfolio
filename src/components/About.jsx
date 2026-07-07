import aboutSvg from '../assets/about.svg'
import SectionTitle from './SectionTitle'
import React from 'react'

const About = () => {
  return (
    <section id='about' className='bg-white py-20'>
      <div className='align-element grid md:grid-cols-2 items-center gap-16'>
        <img src={aboutSvg} alt='' className='w-full h-64' />
        <article>
          <SectionTitle text='Code with me' />
          <p className='text-slate-600 mt-8 leading-loose'>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet
            facilis soluta fugit, possimus doloremque beatae tenetur distinctio
            molestiae voluptatibus dicta illo error quaerat non quae rem laborum
            commodi assumenda. Sunt consectetur aut modi perspiciatis aspernatur
            neque, eius vero non deserunt cum pariatur incidunt repudiandae?
            Assumenda, nulla? Iusto sit consequatur vitae?
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
