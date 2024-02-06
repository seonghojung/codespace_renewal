import { useTranslations } from "next-intl";
import { Layout } from "../components/navigation";
import { BannerSection } from "./BannerSection";
import { ContactEmailSection } from "./ContactEmailSection";
import { ContactPhoneSection } from "./ContactPhoneSection";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "성장하는 서비스를위한 기획부터 웹, 앱, 로고, 브랜드, UI, UX 디자인과 개발까지",
  description:
    "코드스페이스 - 플랫폼 서비스의 모든 단계에서 전문적인 도움을 드리는 종합 디지털 에이전시입니다. 효과적인 기획부터 로고, 브랜드, UI/UX 디자인, 그리고 완벽한 개발까지 한 곳에서 모든 것을 해결하세요. 우리는 혁신적인 솔루션으로 고객의 비즈니스를 성공으로 이끕니다. 문의를 환영합니다.",
};

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
