import { InquiryForm } from "@/components/InquiryForm";
export default function Contact() {
  return (
    <div className="contact-page section-shell">
      <div className="page-heading">
        <p>A conversation starts here.</p>
        <h1>
          Your space.
          <br />
          Your story.
        </h1>
      </div>
      <div className="contact-grid">
        <aside>
          <h2>
            Tell us what
            <br />
            you have in mind.
          </h2>
          <p>
            A home, a clinic, a place to gather. Share a little about the space
            and what you’d like it to become.
          </p>
          <p className="form-notice">
            Prototype form: this demonstrates an inquiry only. Nothing is sent
            or saved.
          </p>
          <a className="text-link" href="mailto:aaronparnala@gmail.com">
            Email Aaron directly
          </a>
          <a
            className="text-link"
            href="https://www.instagram.com/aaron_parnala_projects/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Project journal on Instagram
          </a>
        </aside>
        <InquiryForm />
      </div>
    </div>
  );
}
