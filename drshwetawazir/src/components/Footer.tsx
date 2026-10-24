import React from "react";
import Link from "next/link";
import { clinic, footerAbout } from "../data/site";
import { FacebookIcon, InstagramIcon, YoutubeIcon } from "./Icons";

export default function Footer() {
  return (
    <footer className="main-footer">
      <span className="main-footer__shape" />
      <span className="main-footer__shape main-footer__shape--two" />
      <div className="container">
        <div className="footer-grid">
          <div className="footer-widget footer-widget--about">
            <Link href="/" className="footer-logo">
              <img src={clinic.logo} alt={clinic.name} />
            </Link>
            <p>{footerAbout}</p>
            <div className="footer-social">
              <a href={clinic.social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                <FacebookIcon />
              </a>
              <a href={clinic.social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a href={clinic.social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube">
                <YoutubeIcon />
              </a>
            </div>
          </div>

          <div className="footer-widget">
            <h3 className="widget-title">Contact Us</h3>
            <ul className="footer-list">
              <li>
                <span>Tel :</span> <a href={clinic.phoneHref}>{clinic.phone}</a>
              </li>
              <li>
                <span>Email :</span> <a href={`mailto:${clinic.email}`}>{clinic.email}</a>
              </li>
              <li>
                <span>Location :</span> {clinic.footerAddress}
              </li>
            </ul>
          </div>

          <div className="footer-widget">
            <h3 className="widget-title">Working Hours</h3>
            <ul className="footer-list">
              {clinic.hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>

          <div className="footer-widget">
            <h3 className="widget-title">Address</h3>
            <ul className="footer-list">
              <li>
                <span>Location :</span> {clinic.hospital.address}
              </li>
            </ul>
            <h3 className="widget-title widget-title--spaced">Working Hours</h3>
            <ul className="footer-list">
              {clinic.hospital.hours.map((h) => (
                <li key={h}>{h}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="bottom-footer">
        <div className="container bottom-footer__inner">
          <p>&copy; Copyright {clinic.name} {new Date().getFullYear()}. All right reserved.</p>
          <p>
            <Link href="/contact-us">Book an Appointment</Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
