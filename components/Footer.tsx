import Link from 'next/link'
import Image from 'next/image'
import React from 'react'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'

const Footer = () => {
  return (
    <footer className='flexCenter mb-24'>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-col items-start justify-center gap-[10%] md:flex-row'>
          <Link href="/" className='mb-10'>
            UFGP
          </Link>

          <div className='flex flex-wrap gap-10 sm:justify-between md:flex-1'>
            {FOOTER_LINKS.map((columns)  => (
              <FooterColumn title={columns.title}>
                <ul className='regular-14 flex flex-col gap-4 text-gray-30'>
                  {columns.links.map((item)  => (
                    <Link href="/" key={item}>
                      {item}
                    </Link>
                  ))}
                </ul>
              </FooterColumn>
            ))}
            <div className='flex  flex-col gap-5'>
              <FooterColumn title={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.contacts.map((contact) => (
                  <Link
                    href="/"
                    key={contact.label}
                    className='flex gap-4 md:flex-cpol lg:flex-row'
                  >
                    <p className='whitespace-nowrap'>
                      {contact.label}:
                    </p>
                    <p className='medium-14 whitespace-nowrap text-blue-70'>
                      {contact.value}
                    </p>
                  </Link>
                ))}
              </FooterColumn>
            </div>
  
            <div className='flex flex-col gap-5'>
              <FooterColumn title={SOCIALS.title}>
                <ul className='regular-14 flex gap-4 text-white'>
                  {SOCIALS.pictures.map((picture) => (
                    <Link href="/" key={picture}>
                      <Image src={picture} alt="logo" width={24} height={24} color='white'/>
                    </Link>
                  ))}

                </ul>
              </FooterColumn>
            </div>
          </div>
        </div>
        <div className="border bg-gray-20"/>
        <p>2023 Universal Fighting Game Platform</p>
      </div>

    </footer>
  )
}

type  FooterColumnProps = {
  title: string;
  children: React.ReactNode
}

const FooterColumn = ({title, children}: FooterColumnProps) => {
  return (
    <div>
      <h4> {title} </h4>
      {children}
    </div>
  )
}

export default Footer