"use client";

import Link from "next/link";
import { useParams, useSearchParams } from "next/navigation";
import ContactPopup from "@/app/components/ContactPopup";
import {
  getSafeLang,
  isPackageSlug,
  packagesByLang,
  ui,
} from "@/lib/unityI18n";

function getPackagePreview(slug: string) {
  return `/package-previews/${slug}.png`;
}

function DetailList({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="packageDetailBlock">
      <h3>{title}</h3>

      <ul>
        {items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  );
}

function openContactPopup() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event("open-contact-modal"));
  }
}

export default function PackageDetailPage() {
  const params = useParams<{ slug: string }>();
  const searchParams = useSearchParams();

  const lang = getSafeLang(searchParams.get("lang"));
  const t = ui[lang];

  const slug = params.slug;

  if (!isPackageSlug(slug)) {
    return (
      <main className="packageDetailMain">
        <nav className="navbar">
          <Link className="brand" href={`/?lang=${lang}`}>
            <span className="brandMark">UC</span>
            <span>Unity Code</span>
          </Link>

          <div className="navLinks">
            <Link href={`/?lang=${lang}#packages`}>{t.navPackages}</Link>
            <Link href={`/?lang=${lang}#api`}>{t.navApiAi}</Link>
            <Link href={`/?lang=${lang}#contact`}>{t.navContact}</Link>
          </div>

          <Link className="navBtn" href={`/?lang=${lang}#contact`}>
            {t.startProject}
          </Link>
        </nav>

        <section className="packageDetailHero packageDetailHeroWithImage">
          <div>
            <p className="eyebrow">Unity Code</p>

            <h1>Package not found</h1>

            <p className="detailHeroText">
              This package does not exist or the link is incorrect.
            </p>

            <div className="heroActions">
              <button
                type="button"
                className="primaryBtn"
                onClick={openContactPopup}
              >
                {t.askConsult}
              </button>
            </div>
          </div>
        </section>

        <Link className="floatingBackCorner" href={`/?lang=${lang}#packages`}>
          <span>←</span>
          <span>{t.backHome}</span>
        </Link>

        <button
          type="button"
          className="floatingConsultCorner"
          onClick={openContactPopup}
        >
          <span className="floatingConsultDot"></span>
          <span>{t.askConsult}</span>
        </button>

        <ContactPopup lang={lang} />
      </main>
    );
  }

  const packageItem = packagesByLang[lang].find((item) => item.slug === slug);

  if (!packageItem) {
    return (
      <main className="packageDetailMain">
        <nav className="navbar">
          <Link className="brand" href={`/?lang=${lang}`}>
            <span className="brandMark">UC</span>
            <span>Unity Code</span>
          </Link>

          <div className="navLinks">
            <Link href={`/?lang=${lang}#packages`}>{t.navPackages}</Link>
            <Link href={`/?lang=${lang}#api`}>{t.navApiAi}</Link>
            <Link href={`/?lang=${lang}#contact`}>{t.navContact}</Link>
          </div>

          <Link className="navBtn" href={`/?lang=${lang}#contact`}>
            {t.startProject}
          </Link>
        </nav>

        <section className="packageDetailHero packageDetailHeroWithImage">
          <div>
            <p className="eyebrow">Unity Code</p>

            <h1>Package not found</h1>

            <p className="detailHeroText">
              This package does not exist or the link is incorrect.
            </p>

            <div className="heroActions">
              <button
                type="button"
                className="primaryBtn"
                onClick={openContactPopup}
              >
                {t.askConsult}
              </button>
            </div>
          </div>
        </section>

        <Link className="floatingBackCorner" href={`/?lang=${lang}#packages`}>
          <span>←</span>
          <span>{t.backHome}</span>
        </Link>

        <button
          type="button"
          className="floatingConsultCorner"
          onClick={openContactPopup}
        >
          <span className="floatingConsultDot"></span>
          <span>{t.askConsult}</span>
        </button>

        <ContactPopup lang={lang} />
      </main>
    );
  }

  return (
    <main className="packageDetailMain">
      <nav className="navbar">
        <Link className="brand" href={`/?lang=${lang}`}>
          <span className="brandMark">UC</span>
          <span>Unity Code</span>
        </Link>

        <div className="navLinks">
          <Link href={`/?lang=${lang}#packages`}>{t.navPackages}</Link>
          <Link href={`/?lang=${lang}#api`}>{t.navApiAi}</Link>
          <Link href={`/?lang=${lang}#contact`}>{t.navContact}</Link>
        </div>

        <Link className="navBtn" href={`/?lang=${lang}#contact`}>
          {t.startProject}
        </Link>
      </nav>

      <section className="packageDetailHero packageDetailHeroWithImage">
        <div>
          <p className="eyebrow">{t.detailPackage}</p>

          <h1>{packageItem.name}</h1>

          <p className="detailHeroSubtitle">{packageItem.subtitle}</p>

          <span className="quoteText">{t.quoteByScope}</span>

          <p className="detailHeroText">{packageItem.desc}</p>

          <div className="heroActions">
            <button
              type="button"
              className="primaryBtn"
              onClick={openContactPopup}
            >
              {t.askConsult}
            </button>
          </div>
        </div>

        <div className="detailHeroPreviewCard">
          <img
            src={getPackagePreview(packageItem.slug)}
            alt={`${packageItem.name} preview`}
            className="detailHeroPreviewImage"
          />

          <div className="detailHeroPreviewContent">
            <span>Unity Code</span>

            <strong>{packageItem.name}</strong>

            <p>{t.includedFirstYear}</p>

            <ul>
              <li>{t.cloudDomain} 1 Year</li>
              <li>{t.sslIncluded}</li>
              <li>{t.seoSetup}</li>
              <li>{t.responsiveDesign}</li>
              <li>{t.professionalUiUx}</li>
            </ul>
          </div>
        </div>
      </section>

      <section className="packageDetailSection">
        <div className="detailIntro">
          <p className="eyebrow">{t.overview}</p>

          <h2>{packageItem.name}</h2>

          <p>{packageItem.desc}</p>
        </div>

        <div className="packageDetailGrid">
          <DetailList title={t.bestFor} items={packageItem.bestFor} />

          <DetailList title={t.modules} items={packageItem.pages} />

          <DetailList title={t.features} items={packageItem.features} />

          <DetailList title={t.seo} items={packageItem.seo} />

          <DetailList title={t.notIncluded} items={packageItem.notIncluded} />

          <div className="packageDetailBlock premiumBlock">
            <h3>{t.benefit}</h3>
            <p>{packageItem.benefit}</p>
          </div>

          <div className="packageDetailBlock premiumBlock">
            <h3>{t.timeline}</h3>
            <p>{packageItem.timeline}</p>
          </div>
        </div>
      </section>

      <section className="detailBottomCta">
        <p className="eyebrow">{t.ctaBadge}</p>

        <h2>{t.ctaTitle}</h2>

        <p>{t.ctaText}</p>

        <div className="heroActions centerActions">
          <button
            type="button"
            className="primaryBtn"
            onClick={openContactPopup}
          >
            {t.askConsult}
          </button>
        </div>
      </section>

      <Link className="floatingBackCorner" href={`/?lang=${lang}#packages`}>
        <span>←</span>
        <span>{t.backHome}</span>
      </Link>

      <button
        type="button"
        className="floatingConsultCorner"
        onClick={openContactPopup}
      >
        <span className="floatingConsultDot"></span>
        <span>{t.askConsult}</span>
      </button>

      <ContactPopup lang={lang} />
    </main>
  );
}