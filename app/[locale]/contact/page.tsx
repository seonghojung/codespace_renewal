import { useTranslations } from "next-intl";
import { Layout } from "../components/navigation";
import { BannerSection } from "./BannerSection";
import { ContactEmailSection } from "./ContactEmailSection";
import { ContactPhoneSection } from "./ContactPhoneSection";

function Contact() {
  const t = useTranslations("Contact");
  const QustionTranslation = {
    title: t.rich("title", { br: () => <br /> }),
  };
  const ContactTranslation = {
    description: t.rich("description", { br: () => <br /> }),
  };

  return (
    <>
      <div style={{ minHeight: "70vh" }}>
        <BannerSection />
        <Layout>
          <ContactEmailSection translation={QustionTranslation} />
          <ContactPhoneSection translation={ContactTranslation} />
        </Layout>
      </div>
    </>
  );
}

export default Contact;
