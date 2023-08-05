import React from "react";
import { DocsThemeConfig } from "nextra-theme-docs";
import Image from "next/image";
import HeadMetas from "./components/head-metas";

const config: DocsThemeConfig = {
  head: <HeadMetas />,
  useNextSeoProps: () => ({
    titleTemplate: "%s | Boilerplate Templater Documentation",
  }),
  logo: (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        gap: "0.5rem",
        alignItems: "center",
      }}
    >
      <Image src="/icon.png" alt="Logo" width={30} height={30} unoptimized />
      <span
        style={{
          fontWeight: "500",
        }}
      >
        Boilerplate Templater
      </span>
    </div>
  ),
  project: {
    link: "https://github.com/Cybernetics354/vscode-boilerplates-templater-docs",
  },
  docsRepositoryBase:
    "https://github.com/Cybernetics354/vscode-boilerplates-templater-docs",
  footer: {
    text: "️Created by Hanif Miftahuddin",
  },
};

export default config;
