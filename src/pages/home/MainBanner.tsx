import styled from "styled-components";

const MainBanner = () => {
  return <Banner src="images/main_banner.png" alt="banner" />;
};

export default MainBanner;

const Banner = styled.img`
  width: 100%;
  height: 480px;
`;
