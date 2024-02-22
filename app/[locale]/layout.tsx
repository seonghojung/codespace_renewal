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
