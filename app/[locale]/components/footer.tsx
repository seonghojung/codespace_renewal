"use client";

import Link from "next/link";
import styled from "styled-components";
import logoIconPC from "../../../public/images/logo.png";
import Image from "next/image";
import { Layout } from "./navigation";

const FooterWrap = styled.footer`
  background-color: #f4f5f8;
  padding: 60px 10px 20px;
  height: 520px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .rspWrap {
    header {
      img {
        width: 193px;
        height: 28px;
      }
    }
    ul {
      display: flex;
      justify-content: space-between;
      margin-top: 80px;
      li {
        display: flex;
        flex-direction: column;
        gap: 14px;
        h2 {
          color: rgba(0, 0, 0, 0.6);
          font-size: 16px;
          font-weight: 500;
        }
        div.content {
          display: flex;
          flex-direction: column;
          gap: 12px;
          a {
            color: rgba(0, 0, 0, 0.4);
            font-size: 12px;
            font-weight: 400;
            &:hover {
              color: rgba(0, 0, 0, 0.6);
            }
          }
        }
      }
    }
  }
  footer {
    display: flex;
    justify-content: space-between;
    span {
      color: rgba(0, 0, 0, 0.4);
      font-size: 12px;
      font-weight: 400;
      line-height: 24px;
    }
  }

  @media (min-width: 1200px) {
    padding: 80px 120px 26px;
    .rspWrap {
      justify-content: space-between;
      display: flex;
      ul {
        width: 489px;
        margin-top: 0px;
        li {
          gap: 12px;
          h2 {
            font-size: 18px;
          }
        }
      }
    }
  }
`;
export default function Footer() {
  return (
    <FooterWrap>
      <Layout>
        <div className="rspWrap">
          <header>
            <Link href="/">
              <Image src={logoIconPC} alt="피씨 코드스페이스 로고 아이콘" width={193} height={28} />
            </Link>
          </header>
          <ul>
            <li>
              <h2 className="title">MAIN</h2>
            </li>
            <li>
              <h2 className="title">PROJECT</h2>
              <div className="content">
                <Link href="#">Project</Link>
              </div>
            </li>
            <li>
              <h2 className="title">SERVICES</h2>
              <div className="content">
                <Link href="#">Websites</Link>
                <Link href="#">Application</Link>
                <Link href="#">Management</Link>
                <Link href="#">UI/UX</Link>
                <Link href="#">CMS Solution</Link>
                <Link href="#">SEO</Link>
              </div>
            </li>
            <li>
              <h2 className="title">CONTACT</h2>
              <div className="content">
                <Link href="#"> Contact</Link>
              </div>
            </li>
          </ul>
        </div>
        <footer>
          <span>©2023 Code Space co. ltd.</span>
          <span style={{ display: "none" }}>언어 : 한국어</span>
        </footer>
      </Layout>
    </FooterWrap>
  );
}
