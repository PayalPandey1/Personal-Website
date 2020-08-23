import Link from 'next/link'

export default function Home() {
  return (
    <div className="container">
      <h3>Payal Pandey</h3>
      <h4>About</h4>
      <h4>Interests</h4>
      <h4>Ideas</h4>
      <h4>Reviews</h4>
      <Link href="/resume">
        <a>Resume</a>
      </Link>
    </div>
  )
}
