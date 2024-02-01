import { Layout } from "../components/navigation";
import { BannerSection } from "./BannerSection";
import { ContactEmailSection } from "./ContactEmailSection";
import { ContactPhoneSection } from "./ContactPhoneSection";

function Contact() {
  return (
    <>
      <BannerSection />
      <Layout>
        <ContactEmailSection />
        <ContactPhoneSection />
      </Layout>
    </>
  );
}

export default Contact;
