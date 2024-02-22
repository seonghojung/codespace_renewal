import { useTranslations } from "next-intl";
import { Layout } from "../components/navigation";
import { BannerSection } from "./BannerSection";
import { Metadata } from "next";
import { ContactSection } from "./ContactSection";
import { getTranslations } from "next-intl/server";

export async function generateMetadata({ params: { locale } }: { params: { locale: string } }): Promise<Metadata> {
  const t = await getTranslations({ locale, namespace: "Contact" });
  return {
    title: t("Metadata.title"),
    description: t("Metadata.description"),
  };
}
function Contact() {
  const t = useTranslations("Contact");
  const QustionTranslation = {
    title: t.rich("title", { br: () => <br /> }),
    description: t.rich("description", { br: () => <br /> }),
  };

  return (
    <div style={{ minHeight: "70vh" }}>
      <BannerSection />
      <Layout>
        <ContactSection translation={QustionTranslation} />
      </Layout>
    </div>
  );
}

export default Contact;
