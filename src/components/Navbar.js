/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react"
import {Link} from 'react-router-dom'

export const Navbar = () => {
  return (
    <nav className="navbar navbar-dark navbar-expand-lg bg-primary p-2">
      <div className="navbar-brand">Todo App</div>
      <ul className="navbar-nav">
            <li className="nav-item active">
              <Link className="nav-link" to="/">Главная</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">Информация</Link>
            </li>
          </ul>
    </nav>
  )
}