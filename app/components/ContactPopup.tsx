"use client";

import { useEffect, useState } from "react";
import type { Lang } from "@/lib/unityI18n";
import { ui } from "@/lib/unityI18n";

type Props = {
  lang: Lang;
};

function LineIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M20 10.5c0-4.7-3.6-8.5-8-8.5s-8 3.8-8 8.5c0 4.2 2.8 7.7 6.6 8.4l-.3 2.6c0 .2.2.4.4.3l3-1.9c.8.1 1.6.2 2.3.2 4.4 0 8-3.8 8-8.6Z"
        fill="currentColor"
      />
      <path
        d="M8.3 8.7h1.1v4.2h2.3v1H8.3V8.7Zm4.3 0h1.1v5.2h-1.1V8.7Zm2.3 0H16l2.2 3v-3h1.1v5.2h-1.1L16 10.8v3.1h-1.1V8.7Z"
        fill="#fff"
      />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M6.6 3.8c.4-.4 1-.6 1.6-.5l2.2.5c.8.2 1.4.8 1.5 1.6l.2 1.8c.1.6-.1 1.2-.5 1.7l-1 1.1c1 2 2.6 3.6 4.6 4.6l1.1-1c.4-.4 1.1-.6 1.7-.5l1.8.2c.8.1 1.4.7 1.6 1.5l.5 2.2c.1.6-.1 1.2-.5 1.6l-1 1c-.7.7-1.7 1-2.7.8-3.3-.8-6.3-2.5-8.7-4.9s-4.1-5.4-4.9-8.7c-.2-1 .1-2 .8-2.7l1-1Z"
        fill="currentColor"
      />
    </svg>
  );
}

function MailIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        d="M4 6.5A2.5 2.5 0 0 1 6.5 4h11A2.5 2.5 0 0 1 20 6.5v11a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 17.5v-11Zm2 .8v.4l6 4.5 6-4.5v-.4a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5Zm12 2.9-5.4 4.1a1 1 0 0 1-1.2 0L6 10.2v7.3c0 .3.2.5.5.5h11c.3 0 .5-.2.5-.5v-7.3Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ContactPopup({ lang }: Props) {
  const [expanded, setExpanded] = useState(false);
  const [open, setOpen] = useState(false);
  const t = ui[lang];

  useEffect(() => {
    function handleOpenModal() {
      setExpanded(true);
      setOpen(true);
    }

    window.addEventListener(
      "open-contact-modal",
      handleOpenModal as EventListener
    );

    return () => {
      window.removeEventListener(
        "open-contact-modal",
        handleOpenModal as EventListener
      );
    };
  }, []);

  return (
    <>
      <div className={`contactDock ${expanded ? "expanded" : ""}`}>
        <div className="contactDockItems">
          <a
            className="contactDockItem contactLine"
            href="https://line.me/R/ti/p/@unitycode"
            target="_blank"
            rel="noreferrer"
            aria-label="Line"
          >
            <span className="contactDockItemIcon">
              <LineIcon />
            </span>
            <span className="contactDockItemText">
              <small>{t.line}</small>
              <strong>@unitycode</strong>
            </span>
          </a>

          <a
            className="contactDockItem contactPhone"
            href="tel:+66900000000"
            aria-label="Phone"
          >
            <span className="contactDockItemIcon">
              <PhoneIcon />
            </span>
            <span className="contactDockItemText">
              <small>{t.phone}</small>
              <strong>090-000-0000</strong>
            </span>
          </a>

          <a
            className="contactDockItem contactMail"
            href="mailto:unitycode.studio@example.com"
            aria-label="Email"
          >
            <span className="contactDockItemIcon">
              <MailIcon />
            </span>
            <span className="contactDockItemText">
              <small>{t.email}</small>
              <strong>unitycode.studio@example.com</strong>
            </span>
          </a>

          <button
            type="button"
            className="contactDockItem contactAsk"
            onClick={() => setOpen(true)}
            aria-label={t.contactPopupTitle}
          >
            <span className="contactDockItemIcon contactAskIcon">✦</span>
            <span className="contactDockItemText">
              <small>Unity Code</small>
              <strong>{t.contactPopupTitle}</strong>
            </span>
          </button>
        </div>

        <button
          type="button"
          className="contactDockToggle"
          onClick={() => setExpanded((prev) => !prev)}
          aria-label="Toggle quick contact"
        >
          <span className={`contactDockToggleMark ${expanded ? "open" : ""}`}>
            {expanded ? "×" : "+"}
          </span>
        </button>
      </div>

      {open && (
        <div className="contactOverlay">
          <div className="contactModal">
            <button className="modalClose" onClick={() => setOpen(false)}>
              ×
            </button>

            <p className="eyebrow">{t.navContact}</p>
            <h3>{t.contactPopupTitle}</h3>
            <p>{t.contactPopupText}</p>

            <div className="agencyContactGrid">
              <a
                href="https://line.me/R/ti/p/@unitycode"
                target="_blank"
                rel="noreferrer"
                className="agencyContactCard"
              >
                <span className="agencyContactIcon lineTone">
                  <LineIcon />
                </span>
                <div>
                  <small>{t.line}</small>
                  <strong>@unitycode</strong>
                </div>
              </a>

              <a href="tel:+66900000000" className="agencyContactCard">
                <span className="agencyContactIcon phoneTone">
                  <PhoneIcon />
                </span>
                <div>
                  <small>{t.phone}</small>
                  <strong>090-000-0000</strong>
                </div>
              </a>

              <a
                href="mailto:unitycode.studio@example.com"
                className="agencyContactCard"
              >
                <span className="agencyContactIcon mailTone">
                  <MailIcon />
                </span>
                <div>
                  <small>{t.email}</small>
                  <strong>unitycode.studio@example.com</strong>
                </div>
              </a>
            </div>

            <button className="secondaryClose" onClick={() => setOpen(false)}>
              {t.close}
            </button>
          </div>
        </div>
      )}
    </>
  );
}