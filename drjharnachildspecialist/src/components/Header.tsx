import Link from "next/link";
import { contact, primaryClinic } from "@/data/site";
import { Icon } from "./Icons";
import { Logo } from "./Logo";
import { NavMenu } from "./NavMenu";

export function Header() {
  return (
    <header className="header">
      <div className="top-bar">
        <div className="lay-width top-bar-inner">
          <span className="tp-mail">
            <b>Email Us:</b> <a href={`mailto:${contact.email}`}>{contact.email}</a>
          </span>
          <Link href="/contact-us" className="tp-apoint">
            <span>Make An Appointment</span>
          </Link>
          <span className="top-social">
            <b>Social with us:</b>
            <a href={contact.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
              <Icon name="facebook" size={20} />
            </a>
            <a href={contact.twitter} target="_blank" rel="noopener noreferrer" aria-label="Twitter">
              <Icon name="twitter" size={20} />
            </a>
          </span>
        </div>
      </div>

      <div className="logo-tp-contact">
        <div className="lay-width logo-row">
          <Logo />
          <div className="tp-contact">
            <div className="tp-phone">
              <Icon name="mobile" size={22} />
              <span>Call us today:</span>
              <a href={contact.phoneHref}>{contact.phone}</a>
            </div>
            <p>
              <b>{primaryClinic.name}:</b> {primaryClinic.address}
            </p>
          </div>
        </div>
      </div>

      <div className="nav-tp">
        <div className="lay-width">
          <NavMenu />
        </div>
      </div>
    </header>
  );
}
