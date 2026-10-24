import React from "react";
import Link from "next/link";
import { img } from "../data/site";

interface PageHeaderProps {
  title: string;
  /** Text for the last breadcrumb item (defaults to the title). */
  crumb?: string;
}

/** Inner-page banner with breadcrumb (matches the theme's "inner-banner"). */
export default function PageHeader({ title, crumb }: PageHeaderProps) {
  return (
    <section className="page-header" style={{ backgroundImage: `url(${img("uploads/2023/07/website-banner-c.jpg")})` }}>
      <div className="container">
        <h1>{title}</h1>
        <ul className="breadcrumb">
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>{crumb ?? title}</li>
        </ul>
      </div>
    </section>
  );
}
