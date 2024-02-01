import { Layout } from "../components/navigation";
import ContentsSection from "./ContentsSection";
import HeaderSection from "./HeaderSection";
import SwiperSection from "./SwiperSection";

function Services() {
  return (
    <>
      <Layout>
        <HeaderSection />
        <ContentsSection />
      </Layout>
      <SwiperSection />
    </>
  );
}

export default Services;
