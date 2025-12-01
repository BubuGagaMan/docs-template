import Link from "next/link";
import './styles.css'

export default function PrimaryTopNav() {

  const primaryLinksOptions = [
    {
      label: "Topic One",
      href: "/topic-one"
    },
    {
      label: "Topic Two",
      href: "/topic-two"
    },
  ]

  const linksMap = primaryLinksOptions.map(link => (
    <Link key={link.href} href={link.href} className="main-nav-link" >
      {link.label}
    </Link>
  ))

  return (
    <nav className="main-nav">
      {linksMap}
    </nav>
  );
}
