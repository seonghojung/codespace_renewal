import { Layout } from "../components/navigation";
import { BannerSection } from "./BannerSection";
import { ContactEmailSection } from "./ContactEmailSection";
import { ContactPhoneSection } from "./ContactPhoneSection";

function Contact() {
  return (
    <>
      <div style={{ minHeight: "calc(100vh-510px)" }}>
        <BannerSection />
        <Layout>
          <ContactEmailSection />
          <ContactPhoneSection />
        </Layout>
      </div>
    </>
  );
}

export default Contact;
