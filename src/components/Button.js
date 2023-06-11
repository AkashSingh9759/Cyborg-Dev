import Link from 'next/link'
import React from 'react'

const defaultLink = "/";
const defaultSize = "btn-md";

const Button = ({title,link,size}) => {
  return (
    <Link href={link} className={`btn ${size}`}>{title}</Link>
  )
}

export default Button