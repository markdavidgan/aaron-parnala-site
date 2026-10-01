import { InstagramIcon } from "@/components/icons/InstagramIcon";
export default function Contact() {
  return (
    <section className="contact-page section-shell">
      <div className="page-heading">
        <p>A conversation starts here.</p>
        <h1>
          Your space.
          <br />
          Your story.
        </h1>
      </div>
      <div className="instagram-contact">
        <h2>
          Tell us what
          <br />
          you have in mind.
        </h2>
        <p>
          A home, a clinic, a place to gather. Send Aaron a message on Instagram
          to talk about your space.
        </p>
        <a
          className="round-link"
          href="https://www.instagram.com/aaron_parnala_projects/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Contact on Instagram{" "}
          <span aria-hidden="true">
            <InstagramIcon />
          </span>
        </a>
        <p className="instagram-handle">@aaron_parnala_projects</p>
      </div>
    </section>
  );
}
