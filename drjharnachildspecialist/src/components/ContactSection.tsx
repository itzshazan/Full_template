import { contact, primaryClinic } from "@/data/site";
import { ContactForm } from "./ContactForm";
import { Icon } from "./Icons";

export function ContactSection() {
  return (
    <section className="contact-area">
      <h2>
        Schedule Your Consultation <span>CONTACT US TODAY</span>, we are here to help!
      </h2>
      <div className="contact-form-area">
        <div className="lay-width contact-grid">
          <div className="form">
            <ContactForm />
          </div>
          <div className="contact">
            <h3>{primaryClinic.name}</h3>
            <p>{primaryClinic.address}</p>
            <div className="social">
              <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <Icon name="facebook" size={48} />
              </a>
              <a href={contact.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
                <Icon name="twitter" size={48} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export function MapEmbed({
  src = contact.mapEmbed,
  title = primaryClinic.name,
  height = 360,
  className = "fmap",
}: { src?: string; title?: string; height?: number; className?: string }) {
  return (
    <div className={className}>
      <iframe
        src={src}
        title={`Map – ${title}`}
        width="100%"
        height={height}
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}
