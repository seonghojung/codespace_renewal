import type { Metadata } from "next";
import Navigation from "@/app/[locale]/components/navigation";
import Footer from "@/app/[locale]/components/footer";
import StyledComponentsRegistry from "@/lib/registry";
import { useTranslations } from "next-intl";
import { locales } from "@/i18n";

import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Common" });
  return {
    title: { template: t("Metadata.template"), default: t("Metadata.default") },
    description: t("Metadata.template"),
  };
}

export default function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  // i18n footer
  const t = useTranslations("Footer");
  const commonT = useTranslations("Common");

  const localeOptions = locales.map((cur) => (
    <option key={cur} value={cur}>
      {t("LocaleSwitcher.locale", { locale: cur })}
    </option>
  ));
  const localeLable = t("LocaleSwitcher.label");
  const localeAddress = t("Address");

  // i18n header
  const h = useTranslations("Header");
  const localeHeaderAddress = h("Address");
  const localeAddressURL = commonT("AddressURL");
  return (
    <html lang={locale}>
      <head>
        <link rel={"alternate"} href={`domain.com/${locale}`} hrefLang={locale}></link>
        <meta property="og:type" content="website" />

        {/*TODO: 대표 url 변경 */}
        <meta property="og:url" content="http://localhost:8000" />
        <meta property="og:site_name" content={commonT("Metadata.title")} />
        <meta property="og:title" content={commonT("Metadata.title")} />
        <meta property="og:description" content={commonT("Metadata.description")} />
        <meta property="og:image" content="/og_codespace.jpg" />
        <meta property="twitter:card" content={commonT("Metadata.description")} />
        <meta property="twitter:title" content={commonT("Metadata.title")} />
        <meta property="twitter:description" content={commonT("Metadata.description")} />
        <meta property="twitter:image" content="/og_codespace.jpg" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link rel="apple-touch-icon" sizes="152x152" href="/apple-touch-icon.png" />
        <link rel="icon" sizes="16x16" href="/favicon-16x16.png" />
        <link rel="icon" sizes="32x32" href="/favicon-32x32.png" />
      </head>
      <body>
        <StyledComponentsRegistry>
          <Navigation
            localeAddress={localeHeaderAddress}
            localeAddressURL={localeAddressURL}
            localeOptions={localeOptions}
            locale={locale}
            localeLable={localeLable}
          />
          {children}
          <Footer
            locale={locale}
            localeOptions={localeOptions}
            localeLable={localeLable}
            localeAddress={localeAddress}
            localeAddressURL={localeAddressURL}
          />
          <div id="portal"></div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
