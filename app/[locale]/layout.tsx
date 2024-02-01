import type { Metadata } from "next";
import Navigation from "@/app/[locale]/components/navigation";
import Footer from "@/app/[locale]/components/footer";
import StyledComponentsRegistry from "@/lib/registry";

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function LocaleLayout({ children, params: { locale } }: { children: React.ReactNode; params: { locale: string } }) {
  return (
    <html lang={locale}>
      <body>
        <StyledComponentsRegistry>
          {/* <div style={{ minHeight: "calc(100vh)" }}> */}
          <Navigation />
          {children}
          <Footer />
          {/* </div> */}
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
