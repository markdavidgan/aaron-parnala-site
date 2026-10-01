import Link from "next/link";
export function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-top">
        <Link href="/" className="footer-name">
          Aaron
          <br />
          Parnala.
        </Link>
        <div>
          <p>
            Interior design & turnkey fit-out.
            <br />
            Metro Manila, Philippines.
          </p>
          <a href="mailto:aaronparnala@gmail.com">aaronparnala@gmail.com</a>
          <a
            href="https://www.instagram.com/aaron_parnala_projects/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram / Project journal
          </a>
        </div>
        <nav aria-label="Footer navigation">
          <Link href="/projects">Selected spaces</Link>
          <Link href="/about">The practice</Link>
          <Link href="/contact">Start a project</Link>
        </nav>
      </div>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Aaron Parnala Projects</span>
        <span>Speculative prototype / inquiries are simulated</span>
      </div>
    </footer>
  );
}
