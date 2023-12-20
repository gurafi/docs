import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";

const config: DocsThemeConfig = {
  logo: <span>Gurafi</span>,
  project: {
    link: "https://github.com/gurafi/gurafi",
  },
  docsRepositoryBase: "https://github.com/gurafi/docs/tree/main",
  banner: {
    dismissible: false,
    key: "prerelease-banner",
    text: <>This crate is unreleased so there is no stability guarantees!</>,
  },
  footer: {
    component: <></>,
  },
};

export default config;
