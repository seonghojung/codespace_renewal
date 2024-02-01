import { Layout } from "../components/navigation";
import ContentsSection from "./ContentsSection";
import HeaderSection from "./HeaderSection";
import SwiperSection from "./SwiperSection";

function Services() {
  return (
    <>
      <Layout>
        <HeaderSection />
      </Layout>
      <ContentsSection />
      <SwiperSection />
    </>
  );
}

export default Services;
