import { useTranslations } from "next-intl";
import { Metadata } from "next";
import { getTranslations } from "next-intl/server";
import ContactPage from "./ContactPage";

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

  return <ContactPage translation={QustionTranslation} />;
}

export default Contact;
