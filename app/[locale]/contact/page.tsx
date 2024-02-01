import { Layout } from "../components/navigation";
import { BannerSection } from "./BannerSection";
import { ContactEmailSection } from "./ContactEmailSection";
import { ContactPhoneSection } from "./ContactPhoneSection";

function Contact() {
  return (
    <>
      <div style={{ minHeight: "calc(100vh - 510px)" }}>
        <BannerSection />
        <Layout>
          <div style={{ maxWidth: "1244px" }}>
            <ContactEmailSection />
            <ContactPhoneSection />
          </div>
        </Layout>
      </div>
    </>
  );
}

export default Contact;
