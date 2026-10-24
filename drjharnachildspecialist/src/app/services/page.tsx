import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb, InnerBanner } from "@/components/InnerBanner";
import { Photo } from "@/components/Photo";
import { doctor, images, services } from "@/data/site";

export const metadata: Metadata = {
  title: "Our Services",
  description:
    "Newborn care and breastfeeding guidance, immunisation, growth and development, child nutrition, allergy and asthma, adolescent counselling and sick child care in Gurgaon.",
};

export default function ServicesPage() {
  return (
    <>
      <InnerBanner image={images.innerBanners.services} />
      <Breadcrumb trail={[{ label: "Our Services" }]} />
      <div className="inner-cont">
        <div className="lay-width tcontainer">
          <aside className="tleft">
            <div className="left-links">
              <ul>
                {services.map((s) => (
                  <li key={s.id}>
                    <Link href={`/services#${s.id}`}>{s.menuLabel}</Link>
                  </li>
                ))}
              </ul>
            </div>
            <Link href="/meet-the-doctor" className="left-doctor">
              <Photo src={images.doctorSidebar} alt={doctor.name} aspect="1 / 1" />
              <span>
                <strong>{doctor.name}</strong>
                {doctor.qualifications}
              </span>
            </Link>
          </aside>
          <div className="tright">
            <div className="tright-text">
              {services.map((s) => (
                <section key={s.id} id={s.id} className="service-block">
                  <h2>{s.title}</h2>
                  {s.body.map((b, i) => (
                    <div key={i}>
                      {b.heading && <h3>{b.heading}</h3>}
                      <p>{b.text}</p>
                    </div>
                  ))}
                  {s.images && (
                    <div className={s.images.length > 1 ? "two-col" : undefined}>
                      {s.images.map((src) => (
                        <Photo key={src} src={src} alt={`${s.title} chart`} aspect="4 / 3" />
                      ))}
                    </div>
                  )}
                </section>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
