import type { Metadata } from "next";
import Navigation from "@/app/[locale]/components/navigation";
import Footer from "@/app/[locale]/components/footer";
import StyledComponentsRegistry from "@/lib/registry";
import { useTranslations } from "next-intl";
import { locales } from "@/i18n";

export const metadata: Metadata = {
  title: {
    template: "코드스페이스 | %s ",
    default: "코드스페이스 | 상상하는 서비스를 현실로 만들어내는 혁신적인 기술 파트너",
  },
  description: "코드스페이스 - 세상을 바꾸는 당신의 아이디어를 놀라운 수준으로 끌어올립니다. 현실적이고 효과적이며 대중적인 서비스를 제작하고 성장하세요",
};

export default function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  // i18n footer
  const t = useTranslations("Footer");
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

  return (
    <html lang={locale}>
      <body>
        <StyledComponentsRegistry>
          <Navigation localeAddress={localeHeaderAddress} />
          {children}
          <Footer locale={locale} localeOptions={localeOptions} localeLable={localeLable} localeAddress={localeAddress} />
          <div id="portal"></div>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
