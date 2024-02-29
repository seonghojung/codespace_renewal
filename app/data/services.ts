export interface IContent {
  thumbnail: string;
  subtitle: string;
  h3: string;
  description: string;
  descriptionMb: string;
  techDescription: string[];
}

interface IContents {
  ko: IContent[];
  en: IContent[];
}

export const contents: IContents = {
  ko: [
    {
      thumbnail: "/videos/service/web.mp4",
      subtitle: "Web",
      h3: `어떤 환경에서나 
유연한 웹사이트`,
      description:
        "다양한 디바이스, 브라우저에서도 유연한 웹사이트를 통해 반응형 디자인, 크로스 브라우징을 비롯한 접근성 고려, SEO 최적화 텐츠 가독성 향상이 모바일과 PC 등 다양한 환경에서 올바르게 보여질 수 있도록 제공하고 있습니다.",
      descriptionMb: `다양한 디바이스, 브라우저에서도 유연한 웹사이트를 통해 반응형 디자인, 크로스 브라우징을 비롯한 접근성고려, SEO 최적화 콘텐츠 가독성 향상이 모바일과 PC 등 다양한 환경에서 올바르게 보여질 수 있도록 제공하고 있습니다.`,
      techDescription: ["반응형 웹", "컨텐츠 전략", "크로스 브라우징", "웹 성능 최적화", "API 개발 및 통합", "웹 분석 및 추적"],
    },
    {
      thumbnail: "/videos/service/app.mp4",
      subtitle: "App",
      h3: "핵심 기능이 담긴 애플리케이션",
      description:
        "비즈니스에 필요한 핵심 기능만 올바르게 담긴 애플리케이션을 개발하여 합리적인 가격으로 투자에 대한 최대 가치를 제공하고 있습니다. 서비스의 품질과 목표를 동시에 달성하는 앱 개발의 여정을 코드스페이스와 함께하세요.",

      descriptionMb: `비즈니스에 필요한 핵심 기능만 올바르게 담긴
애플리케이션을 개발하여 합리적인 가격으로 투자에 대한
최대 가치를 제공하고 있습니다. 서비스의 품질과 목표를 동시에
달성하는 앱 개발의 여정을 코드스페이스와 함께하세요.`,
      techDescription: ["크로스 플랫폼 개발", "앱 성능 최적화", "푸시 알림", "앱 수익화 전략", "하이브리드 앱 개발", "웹앱 패키징"],
    },
    {
      thumbnail: "/videos/service/ui.mp4",
      subtitle: "UI/UX",
      h3: `감각적인 UX을 통해
만들어지는 매력적인 UI`,
      description: "사용자 패턴을 분석하여 파트너가 바라보는 산업에 알맞는 비주얼 시스템을 제작합니다. 단순히 일관성을 보는 것이 아닌 향후 전개될 비즈니스 확장을 고려하여 서비스를 제공하고 있습니다.",
      descriptionMb: `사용자 패턴을 분석하여 파트너가 바라보는 산업에 알맞는 비주얼 시스템을 제작합니다. 단순히 일관성을 보는 것이 아닌 향후 전개될 비즈니스 확장을 고려하여 서비스를 제공하고 있습니다.`,
      techDescription: ["사용자 조사", "페르소나 전략", "사용자 경험 전략", "사용자 인터페이스 디자인", "비주얼 디자인", "모바일 아이콘 디자인"],
    },
    {
      thumbnail: "/videos/service/cms.mp4",
      subtitle: "CMS Solution",
      h3: `사용자 친화적인 
CMS 솔루션`,
      description: "모두가 쉽게 제작할 수 있도록 제작 된 강력한 CMS 솔루션으로 콘텐츠를 혁신적으로 관리하고 고객 관리의 효율성을 높일 수 있는 운영에 필요한 개발 서비스를 제공하고 있습니다.",
      descriptionMb: `모두가 쉽게 제작할 수 있도록 제작 된 강력한 CMS 솔루
션으로 콘텐츠를 혁신적으로 관리하고 고객 관리의 효율
성을 높일 수 있는 운영에 필요한 개발 서비스를 
제공하고 있습니다.`,
      techDescription: ["사용자 및 권한 관리", "내용 분류", "사용자 친화적인 인터페이스", "컨텐츠 가져오기 / 내보내기", "컨텐츠 작성 및 편집", "다국어 지원"],
    },
    {
      thumbnail: "/videos/service/seo.mp4",
      subtitle: "SEO",
      h3: `핵심적인 키워드로 
만나는 핵심 서비스 고객`,
      description: "플랫폼의 검색 가시성을 극대화하고 발전하는 기술과 트렌드를 활용하여 파트너의 서비스가 핵심 고객에게 올바르게 보여질 수 있도록 검색 트래픽 최적화 서비스를 제공하고 있습니다.",

      descriptionMb: `플랫폼의 검색 가시성을 극대화하고 발전하는 기술과 트
    렌드를 활용하여 파트너의 서비스가 핵심 고객에게 올바
    르게 보여질 수 있도록 검색 트래픽 최적화 서비스를 제공
    하고 있습니다.`,
      techDescription: ["A/B 테스트", "키워드 연구", "페이지 로드 속도 최적화", "구글 애널리틱스 통합", "SEO 친화적인 URL 구조", "SEO 보고 및 분석"],
    },
  ],
  en: [
    {
      thumbnail: "/videos/service/web.mp4",
      subtitle: "Web",
      h3: `Compatible Website in all OS environment`,
      description:
        "We provide an optimal user experience through a website that is accessible on various devices and browsers. This includes considerations for responsive design, cross-browser compatibility, accessibility, SEO optimization, and improved content readability to ensure proper display across diverse environments such as mobile and PC.",
      descriptionMb: `다양한 디바이스, 브라우저에서도 유연한 웹사이트를
통해 반응형 디자인, 크로스 브라우징을 비롯한 접근성
고려, SEO 최적화 콘텐츠 가독성 향상이 모바일과 PC 등
다양한 환경에서 올바르게 보여질 수 있도록
제공하고 있습니다.`,
      techDescription: ["Responsive Web", "Content Strategy", "Cross-Browsing", "Web Performance Optimization", "API Development and Integration", "Web Analytics and Tracking"],
    },
    {
      thumbnail: "/videos/service/app.mp4",
      subtitle: "App",
      h3: "Application focused on core features",
      description:
        "We develop applications that accurately captures the essential features needed for business, providing maximum value for investment at a reasonable price. Launch an app development with Codespace, achieving both the quality of service and your goals.",
      descriptionMb: `비즈니스에 필요한 핵심 기능만 올바르게 담긴
애플리케이션을 개발하여 합리적인 가격으로 투자에 대한
최대 가치를 제공하고 있습니다. 서비스의 품질과 목표를 동시에
달성하는 앱 개발의 여정을 코드스페이스와 함께하세요.`,
      techDescription: ["Cross-platform Development", "App Performance Optimization", "Push Notification", "App Monetization Strategies", "Hybrid App Development", "Web App Packaging"],
    },
    {
      thumbnail: "/videos/service/ui.mp4",
      subtitle: "UI/UX",
      h3: `Attractive UI through sensuous UX `,
      description:
        "We create a visual system tailored to the industry as perceived by the partner by analyzing user patterns. Rather than simply maintaining consistency, we provide services considering future business expansion.",
      descriptionMb: `사용자 패턴을 분석하여 파트너가 바라보는 산업에 알맞
    는 비주얼 시스템을 제작합니다. 단순히 일관성을 보는 것
    이 아닌  향후 전개될 비즈니스 확장을 고려하여 서비스를
    제공하고 있습니다.`,
      techDescription: ["User Research", "Persona Strategy", "User Experience", "User Interface", "Visual Design Direction", "Mobile Iconography"],
    },
    {
      thumbnail: "/videos/service/cms.mp4",
      subtitle: "CMS Solution",
      h3: `User Friendly CMS Solution`,
      description:
        "We provide development service for operations using a powerful CMS solution designed for easy creation, enabling innovative content management and increasing efficiency in customer management.",
      descriptionMb: `모두가 쉽게 제작할 수 있도록 제작 된 강력한 CMS 솔루
션으로 콘텐츠를 혁신적으로 관리하고 고객 관리의 효율
성을 높일 수 있는 운영에 필요한 개발 서비스를 
제공하고 있습니다.`,
      techDescription: ["User and Permission Management", "Content Categorization", "User-Friendly Interface", "Content Import/Export", "Content Creation and Editing", "Multilingual Support"],
    },
    {
      thumbnail: "/videos/service/seo.mp4",
      subtitle: "SEO",
      h3: `Meeting Customers through Right Keyword`,
      description:
        "We provide search traffic optimization by maximizing search visibility of the platform and leveraging evolving technologies and trends. This ensures that our partner's services are correctly presented customers.",
      descriptionMb: `플랫폼의 검색 가시성을 극대화하고 발전하는 기술과 트
    렌드를 활용하여 파트너의 서비스가 핵심 고객에게 올바
    르게 보여질 수 있도록 검색 트래픽 최적화 서비스를 제공
    하고 있습니다.`,
      techDescription: ["A/B Testing", "Keyword Research", "Page Load Speed Optimization", "Google Analytics Integration", "SEO-friendly URL Structures", "SEO Reporting and Analysis"],
    },
  ],
};
