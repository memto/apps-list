import React from 'react'
import Link from 'next/link'

const menus = [
  {
    "text": "Users search",
    "url": "/walletsapp/user-search"
  },
  {
    "text": "Accounts search",
    "url": "/walletsapp/account-search"
  }
]

const Sidebar = () => {
  return (
    <div className="menu">
      <p className="menu-label">
        All pages
      </p>
      <ul className="menu-list">
        {menus.map((menu, idx) => (
          <li key={idx}>
            <Link href={menu.url}>
              <a className="">{menu.text}</a>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Sidebar
