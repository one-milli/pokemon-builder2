import React from "react"
import Link from "next/link"

const Header = () => {
  return (
    <header style={headerStyle}>
      <nav style={navStyle}>
        <div>Pokemon Builder 2</div>
        <ul style={ulStyle}>
          <li style={liStyle}>
            <Link href="/">Home</Link>
          </li>
          <li style={liStyle}>
            <Link href="/about">About</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

const headerStyle: React.CSSProperties = {
  backgroundColor: "#333",
  color: "#fff",
  padding: "10px 0",
  textAlign: "center",
}

const navStyle: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
}

const ulStyle: React.CSSProperties = {
  listStyle: "none",
  padding: 0,
  margin: 0,
  display: "flex",
}

const liStyle: React.CSSProperties = {
  margin: "0 10px",
}

export default Header
