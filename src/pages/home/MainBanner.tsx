import styled from "styled-components";

const MainBanner = () => {
  return (
    <Banner>
      <BannerTitle>
        상상력을 현실로
        <br />
        코드스페이스
      </BannerTitle>
    </Banner>
  );
};

export default MainBanner;

const Banner = styled.div`
  margin-top: 160px;
  position: relative;
  width: 100%;
  height: 480px;
  background-image: url(images/main_banner-mb.png);
`;

const BannerTitle = styled.p`
  position: absolute;
  top: 40px;
  left: 10px;
  font-size: 48px;
  font-weight: 600;
  color: #fff;
`;
