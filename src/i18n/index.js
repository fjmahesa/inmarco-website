import i18n from "i18next";
import { initReactI18next } from "react-i18next";

import metaId from "./locales/id/meta.json";
import navbarId from "./locales/id/navbar.json";
import footerId from "./locales/id/footer.json";
import servicesPageId from "./locales/id/servicesPage.json";
import otherPagesId from "./locales/id/otherPages.json";
import homeHeroId from "./locales/id/homeHero.json";
import homeVisionId from "./locales/id/homeVision.json";
import homeDigitalId from "./locales/id/homeDigital.json";
import homeMiscId from "./locales/id/homeMisc.json";
import homeListsId from "./locales/id/homeLists.json";
import aboutId from "./locales/id/about.json";

import metaEn from "./locales/en/meta.json";
import navbarEn from "./locales/en/navbar.json";
import footerEn from "./locales/en/footer.json";
import servicesPageEn from "./locales/en/servicesPage.json";
import otherPagesEn from "./locales/en/otherPages.json";
import homeHeroEn from "./locales/en/homeHero.json";
import homeVisionEn from "./locales/en/homeVision.json";
import homeDigitalEn from "./locales/en/homeDigital.json";
import homeMiscEn from "./locales/en/homeMisc.json";
import homeListsEn from "./locales/en/homeLists.json";
import aboutEn from "./locales/en/about.json";

const STORAGE_KEY = "inmarco-language";

const getInitialLanguage = () => {
  try {
    const saved = localStorage.getItem(STORAGE_KEY);
    return saved === "en" || saved === "id" ? saved : "id";
  } catch {
    return "id";
  }
};

const resources = {
  id: {
    meta: metaId,
    navbar: navbarId,
    footer: footerId,
    servicesPage: servicesPageId,
    otherPages: otherPagesId,
    homeHero: homeHeroId,
    homeVision: homeVisionId,
    homeDigital: homeDigitalId,
    homeMisc: homeMiscId,
    homeLists: homeListsId,
    about: aboutId,
  },
  en: {
    meta: metaEn,
    navbar: navbarEn,
    footer: footerEn,
    servicesPage: servicesPageEn,
    otherPages: otherPagesEn,
    homeHero: homeHeroEn,
    homeVision: homeVisionEn,
    homeDigital: homeDigitalEn,
    homeMisc: homeMiscEn,
    homeLists: homeListsEn,
    about: aboutEn,
  },
};

const updateDocumentMeta = (lng) => {
  if (typeof document === "undefined") return;

  document.documentElement.lang = lng;
  document.title = i18n.t("title", { ns: "meta", lng });

  const setMeta = (selector, attribute, value) => {
    const element = document.querySelector(selector);
    if (element) element.setAttribute(attribute, value);
  };

  const description = i18n.t("description", { ns: "meta", lng });
  setMeta('meta[name="title"]', "content", i18n.t("title", { ns: "meta", lng }));
  setMeta('meta[name="description"]', "content", description);
  setMeta('meta[property="og:title"]', "content", i18n.t("ogTitle", { ns: "meta", lng }));
  setMeta('meta[property="og:description"]', "content", description);
  setMeta('meta[property="twitter:title"]', "content", i18n.t("ogTitle", { ns: "meta", lng }));
  setMeta('meta[property="twitter:description"]', "content", description);
};

i18n.use(initReactI18next).init({
  resources,
  lng: getInitialLanguage(),
  fallbackLng: "id",
  supportedLngs: ["id", "en"],
  ns: Object.keys(resources.id),
  defaultNS: "navbar",
  interpolation: {
    escapeValue: false,
  },
});

updateDocumentMeta(i18n.language);

i18n.on("languageChanged", (lng) => {
  try {
    localStorage.setItem(STORAGE_KEY, lng);
  } catch {
    // localStorage might be unavailable (private mode / SSR)
  }
  updateDocumentMeta(lng);
});

export default i18n;
