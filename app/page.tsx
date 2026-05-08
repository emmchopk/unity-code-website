"use client";

import Link from "next/link";
import { Suspense, useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import ContactPopup from "./components/ContactPopup";
import {
  getSafeLang,
  languages,
  packagesByLang,
  projectsByLang,
  servicesByLang,
  solutionsByLang,
  type Lang,
  ui,
} from "@/lib/unityI18n";

function getPackagePreview(slug: string) {
  return `/package-previews/${slug}.png`;
}

function HomeContent() {
  const router = useRouter();
  const searchParams = useSearchParams();

  const [lang, setLang] = useState<Lang>(() =>
    getSafeLang(searchParams.get("lang"))
  );

  useEffect(() => {
    setLang(getSafeLang(searchParams.get("lang")));
  }, [searchParams]);

  function changeLanguage(value: string) {
    const nextLang = getSafeLang(value);
    setLang(nextLang);
    router.replace(`/?lang=${nextLang}`, { scroll: false });
  }

  const t = ui[lang];
  const packages = packagesByLang[lang];
  const projects = projectsByLang[lang];
  const solutions = solutionsByLang[lang];
  const services = servicesByLang[lang];

  return (
    <main>
      <nav className="navbar">
        <div className="brand">
          <span className="brandMark">UC</span>
          <span>Unity Code</span>
        </div>

        <div className="navLinks">
          <a href="#work">{t.navProjects}</a>
          <a href="#solutions">{t.navSolutions}</a>
          <a href="#packages">{t.navPackages}</a>
          <a href="#api">{t.navApiAi}</a>
          <a href="#contact">{t.navContact}</a>
        </div>

        <div className="navRight">
          <select
            className="langSelect"
            value={lang}
            onChange={(event) => changeLanguage(event.target.value)}
          >
            {languages.map((item) => (
              <option value={item.code} key={item.code}>
                {item.label}
              </option>
            ))}
          </select>

          <a href="#contact" className="navBtn">
            {t.startProject}
          </a>
        </div>
      </nav>

      <section className="hero">
        <div className="heroLeft">
          <p className="eyebrow">{t.heroBadge}</p>

          <h1>
            {t.heroTitle1}
            <span>{t.heroTitle2}</span>
          </h1>

          <p className="heroText">{t.heroText}</p>

          <div className="aiBadges">
            <span>{t.aiChatbot}</span>
            <span>{t.aiAssistant}</span>
            <span>{t.automation}</span>
            <span>{t.apiReady}</span>
          </div>

          <div className="heroActions">
            <a href="#packages" className="primaryBtn">
              {t.viewPackages}
            </a>

            <a href="#work" className="ghostBtn">
              {t.exploreProjects}
            </a>
          </div>

          <div className="heroStats">
            <div>
              <strong>7</strong>
              <span>{t.servicePackages}</span>
            </div>

            <div>
              <strong>{t.oneYear}</strong>
              <span>{t.cloudDomain}</span>
            </div>

            <div>
              <strong>SEO</strong>
              <span>{t.seoIncluded}</span>
            </div>
          </div>
        </div>

        <div className="heroVisual">
          <div className="orbit orbitOne"></div>
          <div className="orbit orbitTwo"></div>
          <div className="orbit orbitThree"></div>

          <div className="planet mainPlanet">
            <span>Unity</span>
            <strong>Code</strong>
          </div>

          <div className="floatingCard cardOne">
            <span>{t.webApp}</span>
            <strong>{t.custom}</strong>
          </div>

          <div className="floatingCard cardTwo">
            <span>{t.cloudDomainLabel}</span>
            <strong>{t.oneYear}</strong>
          </div>

          <div className="floatingCard cardThree">
            <span>{t.aiApi}</span>
            <strong>{t.ready}</strong>
          </div>
        </div>
      </section>

      <section className="strip">
        {solutions.map((item) => (
          <span key={item}>{item}</span>
        ))}
      </section>

      <section className="section" id="work">
        <div className="sectionHead">
          <p className="eyebrow">{t.projectsBadge}</p>
          <h2>{t.projectsTitle}</h2>
          <p>{t.projectsText}</p>
        </div>

        <div className="projectLayout">
          {projects.map((project) => (
            <article className="projectCard" key={project.title}>
              <div className="projectTop">
                <span>{project.number}</span>
                <small>{project.type}</small>
              </div>

              <h3>{project.title}</h3>
              <p>{project.detail}</p>

              <a href="#packages">{t.viewSolution}</a>
            </article>
          ))}
        </div>
      </section>

      <section className="section solutionSection" id="solutions">
        <div className="sectionHead">
          <p className="eyebrow">{t.solutionsBadge}</p>
          <h2>{t.solutionsTitle}</h2>
        </div>

        <div className="solutionPanel">
          <div className="solutionBig">
            <h3>{t.solutionBigTitle}</h3>
            <p>{t.solutionBigText}</p>
          </div>

          <div className="solutionList">
            <div>
              <strong>01</strong>
              <span>{t.publicWebsite}</span>
            </div>

            <div>
              <strong>02</strong>
              <span>{t.adminDashboard}</span>
            </div>

            <div>
              <strong>03</strong>
              <span>{t.databaseWorkflow}</span>
            </div>

            <div>
              <strong>04</strong>
              <span>{t.apiAiAutomation}</span>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="packages">
        <div className="sectionHead">
          <p className="eyebrow">{t.packagesBadge}</p>
          <h2>{t.packagesTitle}</h2>
          <p>{t.packagesText}</p>
        </div>

        <div className="packageGrid packageGridDetail">
          {packages.map((item, index) => (
            <article
              className={`packageCard packageCardDetail ${
                index === 3 ? "highlight" : ""
              }`}
              key={item.slug}
            >
              <div className="packagePreviewWrap">
                <img
                  src={getPackagePreview(item.slug)}
                  alt={`${item.name} preview`}
                  className="packagePreviewImage"
                />
              </div>

              <div className="packageCardTop">
                <span className="packageNo">0{index + 1}</span>
              </div>

              <h3>{item.name}</h3>

              <p className="packageSubtitle">{item.subtitle}</p>

              <span className="quoteText">{t.quoteByScope}</span>

              <p>{item.desc}</p>

              <ul>
                <li>{t.cloudDomain} 1 ปี</li>
                <li>{t.sslIncluded}</li>
                <li>{t.seoIncluded}</li>
                <li>{t.responsiveDesign}</li>
              </ul>

              <Link
                className="detailPageBtn"
                href={`/packages/${item.slug}?lang=${lang}`}
              >
                {t.viewDetail}
              </Link>
            </article>
          ))}
        </div>
      </section>

      <section className="section apiSection" id="api">
        <div className="sectionHead">
          <p className="eyebrow">{t.apiBadge}</p>
          <h2>{t.apiTitle}</h2>
          <p>{t.apiText}</p>
        </div>

        <div className="serviceChipGrid">
          {services.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </section>

      <section className="finalCta" id="contact">
        <div>
          <p className="eyebrow">{t.ctaBadge}</p>

          <h2>{t.ctaTitle}</h2>

          <p>{t.ctaText}</p>
        </div>

        <div className="contactCard">
          <h3>Unity Code</h3>
          <p>Website & Web Application Development Studio</p>

          <div>
            <span>{t.email}</span>
            <strong>unitycode.studio@example.com</strong>
          </div>

          <div>
            <span>{t.line}</span>
            <strong>@unitycode</strong>
          </div>

          <div>
            <span>{t.phone}</span>
            <strong>090-000-0000</strong>
          </div>
        </div>
      </section>

      <footer>
        <span>Unity Code</span>
        <p>© 2026 Unity Code. All rights reserved.</p>
      </footer>

      <ContactPopup lang={lang} />
    </main>
  );
}

export default function HomePage() {
  return (
    <Suspense fallback={null}>
      <HomeContent />
    </Suspense>
  );
}