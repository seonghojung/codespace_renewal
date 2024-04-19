import { StaticImageData } from "next/image";
import small from "../public/images/projectComponents/mb1_square_thumbnail.webp";
import medium from "../public/images/projectComponents/mb2_rectangle_thumbnail.webp";
import large from "../public/images/projectComponents/mb3_rectangle_thumbnail.webp";
import largePc from "../public/images/projectComponents/pc3_rectangle_thumbnail_1280.webp";

export interface ProjectProps {
  isMainPortfolio: boolean; // 대표 포트폴리오 여부
  id: string; // en과 ko가 공통으로 가질 id (프로젝트 정렬할 때 사용함)
  size: "small" | "medium" | "large";
  videoSrc: string;
  image: {
    src: StaticImageData;
    src1280: StaticImageData;
  };
  title: string;
  description: string;
  categories: string[];
  date: string;
  details?: {
    titles: string[];
    descriptions: string[];
    images: string[];
  };
}
export interface IProjects {
  en: ProjectProps[];
  ko: ProjectProps[];
}
export const Projects: IProjects = {
  en: [
    // KIA EV6 Unplugged
    {
      id: "kia",
      size: "small",
      isMainPortfolio: true,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "KIA EV6 Unplugged",
      description: "KIA EV6 Unplugged Experience Center Introduction & Reservation Responsive Website",
      categories: ["UI/UX", "Web", "Enterprise"],
      date: "Aug. 2022",
      // TODO: images
      details: {
        titles: [
          "Effectively deliver product information and focus on test drive reservation services",
          "Ensuring the product's visuals are\nwell-suited for the digital environment",
          "Anytime, anywhere\non your phone",
        ],
        descriptions: [
          "The Kia Unplugged EV6 project has been designed as a responsive website to introduce offline facilities where customers can test drive and experience the vehicle firsthand at each location. The design and planning were carried out to accurately inform customers not only about the details of newly released vehicles but also to convey information from an experiential perspective, including test drive reservations and courses.",
          "The EV6's electric category seamlessly integrates into eco, style, and trend elements, creating images that naturally blend and consider the customer's perspective to depict the satisfaction they can envision when making a purchase.",
          "The design emphasizes the proper communication of the planning direction to customers in the mobile environment, ensuring that the identity of the product is well conveyed through the positioning and arrangement of assets. Various courses, events, and ongoing activities are integrated to showcase a dynamic and engaging presentation, ensuring the essence of the product is effectively captured in the mobile environment compared to the PC setting.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Dr.full
    {
      id: "drfull",
      size: "medium",
      isMainPortfolio: true,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "Dr.full",
      description: "Companion Plant Management & Community Platform",
      categories: ["UI/UX", "Web", "App", "Community"],
      date: "Oct, 2023",
      // TODO: images
      details: {
        titles: [
          "A plant community where we grow together Plant Doctor",
          "Expanding beyond a simple community\nto encompass O2O integration",
          "Ensuring accurate weather information\nis delivered to the customers",
        ],
        descriptions: [
          "Plant Doctor goes beyond individual plant care, unlike existing platforms. It is a plant community platform where people share their plants and explore information under the same local weather conditions. We understood the business structure of existing plant platforms, developed a business model suitable for the current market, and proceeded with the beta service design, planning, and development accordingly.",
          "Plant Doctor goes beyond exchanging information on plant care to suggest products for better growth, taking into account sales items and local weather conditions. We considered extending the design and planning to the O2O realm, where users can encounter even better information.",
          "The key focus of this development was to provide accurate weather information for users residing in different locations. Weather was identified as a crucial development element to optimize convenience and increase revisit rates by delivering a consistent service without delays or errors in weather updates.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // UFO Coffee
    {
      id: "ufo",
      size: "large",
      isMainPortfolio: true,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "UFO Coffee",
      description: "Coffee Roasting Brand Website with CMS design",
      categories: ["UI/UX", "Web", "CMS", "Ecommerce"],
      date: "Jul, 2023",
      // TODO: images
      details: {
        titles: [
          "Ways to enjoy coffee experience",
          "Website that offers\nvarious entertainment options",
          "A CMS that allows\naccess to customer data",
        ],
        descriptions: [
          "UFO Coffee is a B2B brand engaged in coffee bean roasting, but there was a need for web development to expand into the B2C sector for selling its own coffee beans. This website not only focuses on selling coffee beans but also incorporates various programs and content, providing a comprehensive web service.",
          "As mentioned, UFO Coffee not only sells coffee beans but also offers various entertaining elements on its website, including comics, programs, friendships, cinema, and more. The goal was to create a layout where each element is displayed, and information is presented smoothly for an engaging user experience.",
          "For a site with abundant content, it is crucial to understand what captures the customer's interest which leads to purchases. With UFO Coffee, data was built to track customer routes, including preferred content and purchased products across different age and gender demographics. Also, key management functions were developed for overall operations, such as reservations and necessary inquiries.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // +X+
    {
      id: "plusxplus",
      size: "medium",
      isMainPortfolio: true,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "+X+",
      description: "Regional Daily Chat-base Community Platform",
      categories: ["UI/UX", "App", "CMS", "Startup"],
      date: "Oct, 2020",
      // TODO: images
      details: {
        titles: [
          "+X+ aids in quick and simple chats with local users",
          "Enhancing visibility\nthrough various color choices",
          "Prioritizing on data protection\neven for the deleted messages",
        ],
        descriptions: [
          "descripti+X+ is a social communication application where users can share information about their local area by simply entering messages when they have questions or desire to know the latest news. The unique element of this website is that all messages are text-based rather than image, and the all messages are deleted after 24 hours.on1",
          "Since this service relies solely on messaging, we prioritized on accessibility and readability. All designs are based on message boxes, allowing customers to choose from various colors for better visibility and readability.",
          "Although the service principle is to delete all messages after 24 hours, we designed the system to ensure that even if malicious messages or data exposing personal information were to be deleted, it would be done thoroughly without any leakage. Development efforts were made to improve accessibility, ensuring that all customers can access and engage with the service without any difficulty.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // TetherMax
    {
      id: "tethermax",
      size: "small",
      isMainPortfolio: true,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "TetherMax",
      description: "Cryptocurrency Futures Transaction Fee Payback Service",
      categories: ["Web", "CMS", "Fintech"],
      date: "Dec, 2023",
      // TODO: images
      details: {
        titles: [
          "TetherMax, a commission reward platform where users share transaction benefits",
          "Highlighting participating users and\nachieving goals for a visible rewards system.",
          "System for comprehensive\ncustomer management",
        ],
        descriptions: [
          "TetherMax is a platform that rewards users in the form of commissions for the frequent cryptocurrency transactions they engage in. It is designed to provide users with useful information and experience the benefits of rewards while conducting transactions.",
          "The advantage of transaction fees is that they offer more benefits when multiple users participate compared to one participant. The wow factor in this design focuses on convenience by displaying information in a way that builds trust among users and encourages active participation, ensuring that more benefits can be gained through collaboration.",
          "The system is designed to allow administrators to accurately analyze customer actions from the moment they choose a cryptocurrency exchange, proceed with authentication and payment, and receive rewards. This involves simultaneous development of both front-end and back-end components, with consideration for maintenance-oriented management functions, ensuring seamless business benefits continuation.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Fuleaf
    {
      id: "fuleaf",
      size: "large",
      isMainPortfolio: true,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "Fuleaf",
      description: "Plant Encyclopedia & Curation Service",
      categories: ["UI/UX", "Web", "CMS", "Startup"],
      date: "Dec, 2021",
      // TODO: images
      details: {
        titles: [
          "Easy plant care with Fuleaf Plant platform",
          "A space where diverse magazines\nand stories can coexist",
          "To enable expansion\nwith more services",
        ],
        descriptions: [
          "Fuleaf is a comprehensive plant platform starting with a fast and accurate plant search platform that provides information for anyone curious about plant care. It expands into a B2B, B2C integrated plant platform where various plant-related products can be purchased.",
          "Beyond searching for a plant encyclopedia, Fuleaf goes further by collaborating with affiliated writers to share content in a magazine format. The design and planning were centered around allowing users to subscribe and continuously enjoy their plant life, and development was carried out based on this concept.",
          "To create a community and market within the platform, catering to plant enthusiasts, we comprehensively reviewed various IA scenarios in different situations on the information- providing platform. This approach ensures that when development continues in the future, diverse sub-objects can be seamlessly integrated to make the product even more robust.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Richgo
    {
      id: "richgo",
      size: "small",
      isMainPortfolio: true,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "Richgo",
      description: "Real Estate Platform where Real Estate Information is updated in real time",
      categories: ["UI/UX", "App", "O2O"],
      date: "Apr. 2020",
      // TODO: images
      details: {
        titles: [
          "Richgo, a platform that predicts future real estate price based on historical data",
          "Planning and developing for both\nresident and investor perspectives",
          "Simple presentation of diverse information\nfor easy comprehension at a glance",
        ],
        descriptions: [
          "Richgo is a comprehensive real estate platform that provides regional real estate information based information on actual residents, actual transactions, and commercial area analysis. It assists both customers aiming to invest in real estate and those targeting residential properties, enabling them to explore real estate tailored to their individual situations.",
          "While many real estate platforms primarily focus on investment, Richgo places a stronger emphasis on the resident's perspective. It is designed to provide a comprehensive view of the surrounding environment, including nearby schools, amenities, medical facilities, and other practical factors that residents consider when living in a particular area.",
          "Presenting data visually for readers to comprehend can be difficult. In this project, special attention was given to design elements and focal points on each page, utilizing  infographics to make data more accessible and easily understandable for readers.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Kick-off
    {
      id: "kickoff",
      size: "medium",
      isMainPortfolio: true,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "Kick-off",
      description: "Global Outsourcing Matching Platform",
      categories: ["UI/UX", "Web", "App", "CMS", "Startup"],
      date: "Aug, 2021",
      // TODO: images
      details: {
        titles: [
          "Empowering users to freely discover projects and trust their partners ",
          "Quickest MVP service\ncreated for fast-paced market",
          "A visual identity design made with\nconsideration for IP business",
        ],
        descriptions: [
          "Kick-off is an outsourcing O2O platform that facilitates connections between experts bidding for projects and partners looking to entrust their work. It is designed to address the issues of excessive and false information present in traditional outsourcing platforms by providing access to partner information crafted with professionalism at reasonable prices.",
          "Kick-off is a two-way O2O platform, requiring constant interaction between partners and experts. While many pages and processes are inherent to such services, this platform was designed with the majority of functions automated through CMS (Content Management System). This approach allowed for a quick product launch to the market, optimizing the development timeline.",
          "As an O2O platform encompassing various experts, Kick-off caters to customers of diverse professions and preferences. To make the Kick-off service memorable for users and encourage return visits, a unified identity was established. Simultaneously, planning for a unique IP business was conducted, laying the foundation for a broad and impactful service.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Chart-in
    {
      id: "chartin",
      size: "large",
      isMainPortfolio: true,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "Chart-in",
      description: "Music Platform that Matches Musicians with Experts",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      date: "Feb, 2022",
      // TODO: images
      details: {
        titles: [
          "Chart-in, Global music portfolio platform",
          "Focusing on core colors\nto achieve professionalism",
          "Developed with consideration of\nvarious scenarios and circumstances",
        ],
        descriptions: [
          "Chart-in is a music community platform service for everyone who loves music and wants to discover new playlists. It features a community where individuals can promote themselves, listen to and evaluate trending music, and receive feedback from other users.",
          "UI features core colors that reflects a dark background resembling the environment where music creators concentrate on their work. Through the overall atmosphere and visual balance, users are encouraged to engage more professionally on Chart-in, fostering a sense of expertise",
          "Chart-in is a platform where users can upload their music, receive evaluations, and potentially lead to actual debut stages. It goes beyond just sharing one's work. it is a comprehensive platform where music is evaluated and made public. The development environment was built to facilitate smooth interaction throughout this process.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 당신의 타로
    {
      id: "taro",
      size: "medium",
      isMainPortfolio: true,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "urtarot",
      description: "Tarot platform web publishing",
      categories: ["UI/UX", "Web", "Product", "Publishing"],
      date: "Dec, 2023",
      // TODO: images
      details: {
        titles: ["_", "_", "_"],
        descriptions: ["_", "_", "_"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Find Nomusa
    {
      id: "findnomusa",
      size: "small",
      isMainPortfolio: true,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "Find Nomusa",
      description: "Labor Attorney Matching & Consulting Platform",
      categories: ["UI/UX", "Web", "CMS", "O2O"],
      date: "Dec, 2022",
      // TODO: images
      details: {
        titles: [
          "A quick and accurate O2O platform for labor-related Q&A",
          "Empowering labor attorneys to clearly present themselve\nand clients to clearly express themselves",
          "Developed monitoring system to\naccurately track the progress of clients’ task",
        ],
        descriptions: [
          "Find Nomusa is a comprehensive O2O platform where labor-related tasks can be carried out online by both labor attorneys and clients. Designed to handle various legal issues promptly, it ensures that the characteristics of labor-related tasks, which require quick checks and processing, can be efficiently executed online without any constraints.",
          "Labor attorneys promptly showcase their portfolios and engage in client consultations, adding value to their business on Find Nomusa. Additionally, focusing on comprehensive planning, design, and consideration of the overall situation to allow clients to quickly seek advice from multiple labor attorneys based on their specific situations.",
          "Find Nomusa requires a separate monitoring system for both labor attorneys and clients to track their progress and ongoing consultations. This platform ensures that every customer experiencing O2O is aware of their service situation accurately, enabling them to seamlessly transition to the next service through an optimized development environment.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // AIRKID
    {
      id: "airkid",
      size: "large",
      isMainPortfolio: true,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "AIRKID",
      description: "Air Kid, Helmet Designed for Kids, Introduction Responsive Website",
      categories: ["UI/UX", "Web", "3D", "Enterprise"],
      date: "Jul, 2020",
      // TODO: images
      details: {
        titles: [
          "A responsive PDP website where users can easily learn about the product",
          "Showcasing different angles of\nthe product with each scroll",
          "The core of the brand identity is\nwell integrated into the GUI",
        ],
        descriptions: [
          "AIRKID is a brand specializing in helmets for toddlers, developed by Legit. The goal was to build a website that effectively communicates the unique features of toddler helmets, which were unfamiliar to customers at the time. Therefore, the website was designed to showcase the product from various angles, illustrating the incorporation of detailed technology in a way that is easily understandable to customers.",
          "The high-resolution modeling images are optimized for smooth delivery to customers without any lag when scrolling. We developed optimization techniques for image data to ensure efficient file sizes while providing the correct frames for each scroll. This ensures a natural interaction for customers during the entire scrolling process, whether they are scrolling up or down.",
          "Taking into account the situation where both the brand and the product are being introduced to the market for the first time, the graphic interface is designed considering the brand identity to help customers remember the brand well and facilitate the repurchase process through revisits. The emphasis is placed on creating a design direction where the key points, from characters to the overall brand color, are clearly highlighted.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // DOOSIL
    {
      id: "doosil",
      size: "small",
      isMainPortfolio: true,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "DOOSIL",
      description: "Real Estate Interior Brokerage O2O Platform",
      categories: ["UI/UX", "Web", "App", "O2O"],
      date: "Aug, 2022",
      // TODO: images
      details: {
        titles: [
          "DOOSIL, the interior brokerage plaform to find your perfect home",
          "To make various tags appear\nsimple and easy to understand",
          "From web browsers\nto mobile applications",
        ],
        descriptions: [
          "DOOSIL is an interior O2O platform that helps you find the perfect home by providing diverse home interior information. Through various lifestyle tags, the platform identifies your consumer preferences and the brands you encounter. It then offers insights into how your living space should be designed and provides assistance in the actual implementation and execution of interior projects.",
          "Existing interior platforms have commonly featured excessive white space or a UI environment similar to traditional shopping mall sites. DOOSIL aimed to differentiate itself by considering various aspects such as multi-directional scrolling and page depth in the planning and design, providing customers with a feeling of searching for and reading lifestyle tags akin to a life magazine.",
          "DOOSIL regularly checks the interior and provides a service where partners, construction companies, and customers can visit freely without any constraints. In order to enhance convenience in such situations, we have made efforts to provide tailored development environments and guides on all devices to increase customer service convenience.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // City Hoppers
    {
      id: "cityhoppers",
      size: "medium",
      isMainPortfolio: true,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "City Hoppers",
      description: "Travel Magazine & Community Platform",
      categories: ["Web", "CMS", "Magazine", "O2O"],
      date: "Jun, 2022",
      // TODO: images
      details: {
        titles: [
          "Subscription-based Travel Story Magazine Service",
          "Optimized development environment\nfor visibility of content",
          "To facilitate voluntary\nexpansion of the community",
        ],
        descriptions: [
          "City Hoppers is a travel content subscription platform where customers can subscribe to magazines based on cities, themes, and industries. The platform is developed as not only to allow users to read magazines but also to expand into a community platform where they can create and join group gatherings.",
          "The most crucial aspect for development was to establish a service environment on City Hoppers where customers can use platform in any specifications and editors can consistently create high-quality content within the same standards. In this development, we have taken a comprehensive responsive design approach to ensure that the content looks good on various devices.",
          "City Hoppers is characterized not only by reading the content but also by the voluntary creation and participation in a community that aligns with the travel theme. To ensure smooth interaction among users and to minimize any inconvenience in using the service at any time, we have crafted a user-centric roadmap for seamless community functionality implementation.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 3.3 DESIGN SPACE
    {
      id: "designspace",
      size: "large",
      isMainPortfolio: true,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "3.3 DESIGN SPACE",
      description: "Interior Company Introduction & Quote Responsive Website",
      categories: ["UI/UX", "Web", "Publishing", "Enterprise"],
      date: "Apr, 2021",
      // TODO: images
      details: {
        titles: [
          "Presenting interior design in a book-like format on the web",
          "Where variety of\nstorytelling can be expressed",
          "Accurately capture\nthe customer's voice",
        ],
        descriptions: [
          "3.3 DESIGN SPACE, as an interior design company, desired to build an introduction portfolio website that could complement the overall visual aesthetics of its extensive portfolio. In this project, we focused on creating an environment where customers can not only view interior designs but also flip through them like a book. We designed an environment where the distinctions and differences in portfolios are clearly visible using ample white space, clear differentiation between portfolios.",
          "Interior design should not only showcase the appearance from a construction perspective but also be crafted to reflect the customer's identity and persona, incorporating diverse storytelling in the portfolio. This website aims to create a web environment where the storytelling in each interior design portfolio resonates with customers, allowing for better visibility and connection.",
          "We have developed a website from an O2O service perspective, enabling not only the basic uploading of portfolios but also the ability to receive customer reservations and adjust consultation schedules. The website is designed to facilitate a seamless flow where customers can inquire directly on the website after viewing the portfolio, eliminating the need to separate contact.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Nine Ark
    {
      id: "nineark",
      size: "medium",
      isMainPortfolio: true,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "Nine Ark",
      description: "Kakao’s Mobile Game Developers Introduction Responsive Website",
      categories: ["UI/UX", "Web", "Publishing"],
      date: "Apr, 2021",
      // TODO: images
      details: {
        titles: [
          "Clearly showcase the intentions and directions of the production company",
          "Nine Ark, where diverse members\nwith unique characteristics gather",
          "To ensure real-time news is\neffectively communicated to the viewers",
        ],
        descriptions: [
          "Nine Ark is a game development and publishing company under Kakao Games, releasing various games while also launching their own game assets. This website aims to create an environment where the identity of the ongoing games and the company's vision and beliefs are well showcased. Efforts have been made to build a platform where the identity of both the current games and the company can be clearly seen.",
          "Nine Ark adopts a corporate structure with multiple game development members, showcasing the image of a unified development company while also highlighting the activities of various members. In building this web environment, emphasis was placed on designing and planning to ensure that all identities are well-displayed under one roof.",
          "The most commonly used news layout on corporate introduction websites is designed with the goal of providing information at a glance. The layout is developed to allow administrators to quickly apply and display links and titles based on the situation, ensuring a fast and efficient environment for showcasing content.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // BTBG
    {
      id: "btbg",
      size: "small",
      isMainPortfolio: true,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "BTBG",
      description: "Luxury Vehicle Export Company Introduction Responsive Website",
      categories: ["UI/UX", "Web", "CMS", "Enterprise"],
      date: "Apr, 2023",
      // TODO: images
      details: {
        titles: [
          "BTBG, a global mobility auction service",
          "Displaying variety of vehicles\nin simplified manner",
          "A system that consistently\nmanages inquiries and services",
        ],
        descriptions: [
          "BTBG is a website where both international and domestic buyers auction and introduce luxury vehicles. It is designed to showcase the vehicles that have been imported and are ready for auction, allowing customers to find vehicles that match their preferences through various tags.",
          "Given that the images of various brands and colors are displayed in correlation with the number of vehicles being auctioned on BTBG, it was crucial to design the overall UI environment in a way that avoids complexity and appears concise. The design ensures that the continuous exposure of the service's brand does not make it look cluttered, allowing the clear visibility of various products.",
          "Even for a service that primarily involves uploading vehicles and conducting auctions, we have developed a CMS from the perspective of administrators. This CMS allows administrators to manage reservations, track which vehicles have been listed, and operate efficiently with the ability to organize content based on different tags.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Second White
    {
      id: "secondwhite",
      size: "large",
      isMainPortfolio: true,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "Second White",
      description: "Product Design Agency Introduction Responsive Website",
      categories: ["Web", "CMS", "Enterprise"],
      date: "Dec, 2020",
      // TODO: images
      details: {
        titles: [
          "Clearly showcased the company’s belief",
          "Environment kept simple,\nwhile the work presented clearly",
          "Self-maintainable environment",
        ],
        descriptions: [
          "Second White, as a product design company, aimed to build a website that clearly reflects our internal brand values, beliefs, and operational direction. Aligning with its name, we designed the website with a spacious white background to enhance the clarity and visibility of our work.",
          "Product design requires a clear focus through modeling, implementation images, and more. In this project, we designed the entire web content area to ensure Second White's works are solely showcased, capturing full attention of the customers.",
          "A portfolio site website requires ongoing management that consistantly pays attention to the client's tone and manner even after development. Codespace created the website with the consideration of providing clients with a self-maintainable environment, allowing them to continuously fill the web space in alignment with their desired brand direction.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Aware
    {
      id: "aware",
      size: "small",
      isMainPortfolio: false,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "Aware",
      categories: ["Web", "CMS", "Finance", "Magazine"],
      description: "Finance/Investment Journal Magazine Responsive Website",
      date: "Nov, 2022",
    },
    // Digital MBTI Curation
    {
      id: "digital",
      size: "medium",
      isMainPortfolio: false,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "Digital MBTI Curation",
      categories: ["Web", "App", "CMS", "MBTI"],
      description: "Digital New Way of Life MBTI Test",
      date: "Sep, 2022",
    },
    // Meta Character
    {
      id: "metacharacter",
      size: "large",
      isMainPortfolio: false,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "Meta Character",
      categories: ["Web", "App", "CMS", "Scraping", "B2B"],
      description: "Global Character Content Marketing Servive",
      date: "Nov, 2022",
    },
    // Ubiocean
    {
      id: "ubiocean",
      size: "medium",
      isMainPortfolio: false,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "Ubiocean",
      categories: ["UI/UX", "Web", "App", "CMS", "B2C"],
      description: "Water Sports Companies Introduction Responsive Website based on Google Maps",
      date: "Aug, 2022",
    },
    // Invenconn
    {
      id: "invenconn",
      size: "small",
      isMainPortfolio: false,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "Invenconn",
      categories: ["Web", "App", "CMS", "Ecommerce", "B2B"],
      description: "Inter-company Used Goods Trading Platform",
      date: "Jan, 2022",
    },
    // Aliquor Plus
    {
      id: "aliquorplus",
      size: "large",
      isMainPortfolio: false,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "Aliquor Plus",
      categories: ["UI/UX", "Web", "CMS", "Video"],
      description: "Baking Class Online Lecture Platform",
      date: "Jul, 2021",
    },
    // Beum
    {
      id: "beum",
      size: "small",
      isMainPortfolio: false,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "Beum",
      categories: ["Web", "App", "CMS", "Video"],
      description: "Online Lecture & Crowdfunding Platform",
      date: "Aug, 2021",
    },
    // Gradation
    {
      id: "gradation",
      size: "medium",
      isMainPortfolio: false,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "Gradation",
      categories: ["UI/UX", "Web", "CMS", "University"],
      description: "Department of Visual Design Graduation Work Exhibition Responsive Website",
      date: "Dec, 2021",
    },
    // Contents Garden
    {
      id: "contentsgarden",
      size: "large",
      isMainPortfolio: false,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "Contents Garden",
      categories: ["UI/UX", "Web", "Publishing", "Magazine"],
      description: "Online Magazine Subscription Responsive Web Publishing",
      date: "Jan, 2021",
    },
    // Cell My Brain
    {
      id: "cellmybrain",
      size: "medium",
      isMainPortfolio: false,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "Cell My Brain",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      description: "Lawyers Matching Platform specialized for Property Rights",
      date: "Mar, 2021",
    },
    // Aniverything
    {
      id: "aniverything",
      size: "small",
      isMainPortfolio: false,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "Aniverything",
      categories: ["Web", "CMS", "Archive", "Startup"],
      description: "Animation Information Sharing Community Responsive Website",
      date: "Feb, 2021",
    },
    // Coreana Curation
    {
      id: "coreanacuration",
      size: "large",
      isMainPortfolio: false,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "Coreana Curation",
      categories: ["Web", "App", "CMS", "MBTI"],
      description: "Coreana Product Curation & MBTI Test",
      date: "Jan, 2021",
    },
    // HYID
    {
      id: "hyid",
      size: "small",
      isMainPortfolio: false,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "HYID",
      categories: ["UI/UX", "Web", "CMS", "University"],
      description: "Department of Industrial Design Graduation Work Exhibition Responsive Website",
      date: "Nov, 2020",
    },
    // IZE U VIDEO
    {
      id: "izeuvideo",
      size: "medium",
      isMainPortfolio: false,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "IZE U VIDEO",
      categories: ["UI/UX", "Web", "CMS", "Enterprise"],
      description: "Video Production Company Introduction Responsive Website",
      date: "Oct, 2020",
    },
    // nJobs
    {
      id: "njobs",
      size: "large",
      isMainPortfolio: false,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "nJobs",
      categories: ["UI/UX", "Web", "App", "CMS", "Startup"],
      description: "Recruitment Platform Specialized in IT industry",
      date: "Aug, 2020",
    },
    // Ahha Asset
    {
      id: "ahhaasset",
      size: "medium",
      isMainPortfolio: false,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "Ahha Asset",
      categories: ["Web", "CMS", "Enterprise"],
      description: "Asset Management Experts Introduction Responsive Website",
      date: "Nov, 2019",
    },
    // The Lead Law
    {
      id: "theleadlaw",
      size: "small",
      isMainPortfolio: false,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "The Lead Law",
      categories: ["Web", "CMS", "Enterprise"],
      description: "Law Firm Introduction Responsive Website",
      date: "Sep, 2019",
    },
    // Shortudy
    {
      id: "shortudy",
      size: "large",
      isMainPortfolio: false,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "Shortudy",
      categories: ["Web", "App", "CMS", "Startup"],
      description: "Problem Solving & Editing Platform",
      date: "Sep, 2019",
    },
    // Refeed
    {
      id: "refeed",
      size: "small",
      isMainPortfolio: false,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "Refeed",
      categories: ["Web", "CMS", "Publishing", "Enterprise"],
      description: "BIO Company Introduction Responsive Website",
      date: "Jul, 2019",
    },
    // Soom
    {
      id: "soom",
      size: "medium",
      isMainPortfolio: false,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "Soom",
      categories: ["Web", "CMS", "Publishing", "Enterprise"],
      description: "Medical Device Company Introduction Responsive Website",
      date: "Jul, 2019",
    },
    // The CI Mall
    {
      id: "thecimall",
      size: "large",
      isMainPortfolio: false,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "The CI Mall",
      categories: ["Web", "CMS", "Ecommerce"],
      description: "Inter Company Mall for Corporate Welfare Responsive Website",
      date: "Aug, 2019",
    },
    // The CI Group
    {
      id: "thecigroup",
      size: "medium",
      isMainPortfolio: false,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "The CI Group",
      categories: ["Web", "CMS", "Publishing", "Enterprise"],
      description: "CI Group Introduction Responsive Website",
      date: "Jun, 2019",
    },
    // Next Challenge
    {
      id: "nextchallenge",
      size: "small",
      isMainPortfolio: false,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "Next Challenge",
      categories: ["Web", "CMS", "Enterprise", "Startup"],
      description: "Global Accelerater Introduction Responsive Website",
      date: "May, 2019",
    },
    // Mitdembauhaus
    {
      id: "mitdembauhaus",
      size: "large",
      isMainPortfolio: false,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "Mitdembauhaus",
      categories: ["Web", "CMS", "Ecommerce", "B2B"],
      description: "Furniture & Lighting Company Imports from Germany Introduction & Purchasing Responsive Website",
      date: "Apr, 2019",
    },
  ],
  ko: [
    // KIA
    {
      id: "kia",
      size: "small",
      isMainPortfolio: true,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "KIA EV6 언플러그드",
      description: "기아 EV6 언플러그드 체험관 소개 예약 반응형 웹",
      categories: ["UI/UX", "Web", "Enterprise"],
      date: "Aug. 2022",
      // TODO: 이미지
      details: {
        titles: [
          "제품의 정보를 잘 전달하고 시승 예약 서비스에 집중",
          `제품의 비주얼이\n디지털 환경에서 잘 보일 수 있도록`,
          `언제 어디서나\n모바일로 간편하게 방문`,
        ],
        descriptions: [
          "기아 언플러그드 EV6 프로젝트는 각 지점별 시승 및 차량 경험이 가능한 오프라인 시설을 소개하기 위한 반응형 웹 사이트로 제작이 되었습니다. 고객들이 새롭게 출시되는 차량에 대한 정보를 제대로 인지하는 것과 더불어 시승 예약, 코스 등 경험 관점의 정보를 제대로 전달하기 위해 디자인 / 기획을 진행하였습니다.",
          "EV6의 전기 카테고리를 활용한 에코, 스타일, 트랜드에 자연스럽게 녹아들며 실질적으로 구매 시 고객이 얻는 만족감을 상상할 수 있는 이미지 등을 고객의 시선 방향에 고려하여 제작 표현되었습니다.",
          "PC 환경보다 모바일 환경에서 기획 방향이 제대로 고객에게 전달이 될 수 있도록 에셋들간의 위치 배열 등 소개하고자 하는 제품의 정체성이 잘 담겨지도록 설계하였으며 다양한 코스, 이벤트 등이 지속적으로 운영되어 보여질 수 있도록 제작하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 풀박사
    {
      id: "drfull",
      size: "medium",
      isMainPortfolio: true,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "풀박사",
      description: "반려식물 관리 및 커뮤니티 플랫폼",
      categories: ["UI/UX", "Web", "App", "Community"],
      date: "Oct, 2023",
      // TODO: 이미지
      details: {
        titles: [
          "함께 키우는 식물 커뮤니티 풀박사",
          "단순한 커뮤니티를 넘어\nO2O까지 확장이 되도록",
          "정확한 날씨 정보가\n고객에게 전달 될 수 있도록",
        ],
        descriptions: [
          "풀박사는 기존에 플랫폼들과 달리 혼자 키우는 식물을 넘어서 사람들끼리 같은 지역 날씨 환경 아래 자신 들의 식물을 공유하고 정보를 탐색하는 식물 커뮤니티 플랫폼입니다. 기존 식물 플랫폼의 비즈니스 구조 를 이해하고 현 시장에 알맞는 비즈니스 구조를 함께 설계를 하였고 이에 따른 베타 서비스 디자인, 기획, 개발을 진행하였습니다.",
          "풀박사는 식물을 키우는 정보를 교류하는 것을 넘어 더 잘 키우기 위해서 접하는 판매 제품 및 지역별 날씨를 제안하고 더 좋은 정보를 만날 수 있는 O2O 영역까지의 확장을 고려하며 디자인 및 기획 설계를 진행하였습니다.",
          "이번 개발의 핵심은 모두가 다른 지역에 거주하면서 각자 위치의 날씨 정보를 정확하게 제공 받는 것이었 습니다. 개발 요소 중 날씨가 딜레이 & 오차 없이 일정한 서비스를 제공하여 편의성, 재방문률을 높일 수 있는 개발 요소의 최적화를 목표로 진행하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // ufo
    {
      id: "ufo",
      size: "large",
      isMainPortfolio: true,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "UFO Coffee",
      description: "커피 로스팅 브랜드 쇼핑몰 및 CMS 설계",
      categories: ["UI/UX", "Web", "CMS", "Ecommerce"],
      date: "Jul, 2023",
      // TODO: images
      details: {
        titles: ["Play your Flavor, 커피를 가장 재밌게 즐기는 법", "다양한 놀거리가\n제공되는 사이트", "고객의 데이터까지\n확인이 가능한 CMS"],
        descriptions: [
          "유에프오커피는 원두 로스팅 컴퍼니로 B2B를 진행하는 브랜드이지만 자체적 원두 생산 판매를 할 수 있는 B2C 영역의 확장으로 이에 맞는 웹 구축이 필요했습니다. 이번 웹 사이트에서는 단순히 원두를 판매하는 것 뿐만이 아니라 다양한 프로그램, 콘텐츠까지 확인할 수 있는 웹 서비스를 구축하였습니다.",
          "앞서 말한 것과 같이 유에프오커피는 원두를 판매하는 것과 동시에 다양한 콘텐츠를 확인할 수 있는 코믹스, 프로그램, 프랜드쉽, 시네마 등 다양한 재미 요소를 품고 있는 웹 사이트입니다. 각 요소들이 보여지는 레이아웃, 정보들이 원활하게 보일 수 있는 것을 목표로 제작이 되었습니다.",
          "콘텐츠가 많은 사이트일 수록 고객이 어떤 것에 흥미를 갖고 구매까지 이어지는지 확인하는 것이 필요합니다. 이번 유에프오커피는 각 연령, 성별 고객이 어떤 데이터를 가장 좋게 보고 있고 어떤 제품을 구매를 하였는지 고객의 루트를 확인할 수 있는 데이터 구축 뿐만이 아니라 전체 예약, 문의 등 기본적인 시스템 운영에 필요한 관리 기능을 개발하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // +X+
    {
      id: "plusxplus",
      size: "medium",
      isMainPortfolio: true,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "+X+",
      description: "지역간 데일리 채팅 기반 커뮤니티 플랫폼",
      categories: ["UI/UX", "App", "CMS", "Startup"],
      date: "Oct, 2020",
      // TODO: images
      details: {
        titles: [
          "빠르게 지역 사람들과 간단 채팅을 도와주는 +X+",
          "색상을 통해 더욱 가시성이\n높아질 수 있도록",
          "삭제되는 메시지라 할지라도\n데이터가 보호되는 것을 우선",
        ],
        descriptions: [
          "+X+는 사람들이 궁금한게 있을 때 그 지역에 대한 소식을 알고싶을 때 자신이 있는 지역에서 메시지를 가볍게 입력하여 정보를 공유하는 소셜 커뮤니케이션 애플리케이션입니다. 모든 메세지는 이미지가 아닌 텍스트 위주로 올라가도록 되어있고하루가 지나면 모든 메세지가 삭제되는 위주로 제작이 되었습니다.",
          "메세지로만 소통을 해야하는 서비스다보니 그 무엇보다 접근성, 시인성이 좋아야하는 이유가 있었습니다. 모든 디자인은 메시지 박스를 기반으로 다양한 색상을 고객들이 선택하고 볼 수 있도록 하였습니다.",
          "모든 메시지가 24시간 후 삭제가 되는 것을 서비스 원칙으로 하고 있지만 악성 메시지를 비롯하여 여러 개인정보에 노출이 될 수 있는 데이터를 유출이 되지않고 삭제가 되더라도 완벽히 될 수 있도록 설계하였고 모든 고객들이 접근을 하고 활동하는데 있어서 어려움이 없도록 접근성을 개선한 개발을 진행하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // tethermax
    {
      id: "tethermax",
      size: "small",
      isMainPortfolio: true,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "테더맥스",
      description: "코인 선물 거래수수료 페이백 서비스",
      categories: ["Web", "CMS", "Fintech"],
      date: "Dec, 2023",
      // TODO: images
      details: {
        titles: [
          "고객에게 거래 혜택을 공유할 수 있는 수수료 리워드 플랫폼 테더맥스",
          "달성 목표와 리워드 참여 유저가\n잘 보일 수 있도록",
          "전체 고객관리가 체계적으로\n이뤄질 수 있는 관리 시스템 구축",
        ],
        descriptions: [
          "테더맥스는 많은 사람들이 수시로 거래되는 가상화폐 거래 시 발생하는 수수료를 리워드 형식으로 제공하는 플랫폼입니다. 많은 고객들이 거래를 하는데 있어서 더 좋은 정보를 얻고 리워드 편익을 온전히 느낄 수 있도록 제작되었습니다.",
          "거래 수수료는 한명이 아닌 다수가 참여를 했을 때 더 많은 혜택을 줄 수 있다는 장점이 존재를 합니다. 이번 디자인의 와우 포인트는 여러 유저들이 신뢰할 수 있고 더 많은 혜택을 여러 사람들과 적극적으로 참여 할 수 있도록 정보를 보여주는 편의성에 집중하여 제작되었습니다.",
          "어떤 유저가 거래소를 선택을 하였고, 결제를 진행 하는 것에 대해 인증을 하고 리워드가 지급이 되었는지 관리자 시점에서 정확하게 고객의 행동을 분석하고 비즈니스 편익을 이어갈 수 있도록 프론트와 백앤드 개발과 동시에 유지보수 개념의 관리 기능까지 고려하여 제작하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // fuleaf
    // TODO: 썸네일이미지
    {
      id: "fuleaf",
      size: "large",
      isMainPortfolio: true,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "플립 [Fuleaf]",
      description: "식물 도감 및 큐레이션 서비스",
      categories: ["UI/UX", "Web", "CMS", "Startup"],
      date: "Dec, 2021",
      // TODO: images
      details: {
        titles: ["누구나 식물이 쉽게 식물 정보 플랫폼 플립", "다양한 매거진과\n이야기 거리가 공존할 수 있도록", "더 많은 서비스로\n확장할 수 있도록"],
        descriptions: [
          "플립은 식물을 키우는 누구나 궁금해하는 정보를 빠르고 정확하게 전달받을 수 있는 식물 검색 플랫폼을 시작으로 다양한 식물 관련 제품을 구매할 수 있는 B2B, B2C 종합 식물 플랫폼입니다.",
          "플립은 식물 도감을 검색하는 것을 넘어 제휴 작가와 함께 콘텐츠를 매거진 형식으로 공유하고 사용자가 구독자가 되어 식물 라이프를 지속적으로 향유할 수 있는 것을 중심으로 설계 된 디자인과 기획을 바탕으로 개발을 진행하였습니다.",
          "정보를 제공하는 플랫폼에서 식물을 좋아하는 매니아층이 모여 하나의 커뮤니티와 마켓을 만들 수 있도록 여러 상황의 IA를 종합적으로 검토하여 훗날에도 개발을 진행 하였을 때 다양한 서브 오브젝트들이 붙어 더욱 강력한 프로덕트가 될 수 있도록 개발을 진행하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 리치고
    {
      id: "richgo",
      size: "small",
      isMainPortfolio: true,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "리치고",
      description: "부동산 정보를 실시간 데이터로 확인할 수 있는 부동산데이터 플랫폼",
      categories: ["UI/UX", "App", "O2O"],
      date: "Apr. 2020",
      // TODO: images
      details: {
        titles: [
          "데이터를 통한 실거래가와 미래가격 예측 부동산 플랫폼, 리치고",
          "거주자 관점, 투자자 관점\n양쪽을 고려한 기획 설계",
          "다양한 정보가 복잡하지 않게\n한눈에 보일 수 있도록",
        ],
        descriptions: [
          "리치고는 데이터 기반으로 만들어지는 실거주자, 실거래, 상권분석 등의 정보를 지역별 부동산 정보를 제공하는 종합 부동산 플랫폼으로 부동산을 투자하는 고객과 실거주를 목표로 하는 고객 모두가 자신의 상황에 맞게 부동산을 탐색할 수 있도록 도와주는 플랫폼입니다.",
          "모든 부동산 플랫폼이 대부분 투자에 포커스를 두고 있지만 이번 리치고에서는 거주자 관점을 더욱 집중하여 주변 학군을 비롯해 편의시설, 의료시설 등 실질적으로 거주 시 얻을 수 있는 주변 시설의 환경까지 한눈에 확인할 수 있도록 제작되었습니다.",
          "데이터라는 것은 기본적으로 보여지도록 만들기도 어려울 뿐더러 읽는 사람에게도 어려움을 동반할 수 있는 카테고리입니다. 이번 제작에는 데이터가 더욱 쉽고 인포그래픽을 활용하여 고객에게 잘 전달될 수 있도록 디자인 요소와 페이지 마다의 집중 요소를 면밀히 체크하여 제작하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 킥오프
    {
      id: "kickoff",
      size: "medium",
      isMainPortfolio: true,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "킥오프",
      description: "글로벌 외주 매칭 플랫폼",
      categories: ["UI/UX", "Web", "App", "CMS", "Startup"],
      date: "Aug, 2021",
      // TODO: images
      details: {
        titles: [
          "누구나 자유롭게 자신의 프로젝트를 찾고 프로젝트를 믿고 맡길 수 있도록",
          "가장 빠르게 만들어진\nMVP 서비스",
          "IP사업까지 고려하여 제작된\n비주얼 아이덴티티 디자인",
        ],
        descriptions: [
          "킥오프는 프로젝트를 수주하는 전문가와 일을 맡겨야하는 파트너간의 연결을 도와주는 아웃소싱 O2O 플랫폼입니다. 기존의 아웃소싱 플랫폼이 가지고 있었던 과도한 정보와 허위 정보를 잡고 전문성으로 만들어진 파트너 정보를 합리적인 가격으로 이용이 될 수 있도록 제작되었습니다.",
          "킥오프는 양방향 O2O 플랫폼으로 파트너와 전문가가 상시 교류를 해야하는 서비스입니다. 그러므로 다양한 페이지가 존재하고 과정이 있는 것이 다반사이지만 이번 플랫폼에서는 최대한 대부분의 기능은 CMS를 통해 자동화로 진행이 될 수 있도록 제작이 되었고 이 과정을 통해 시장에 더욱 빠르게 제품을 선보일 수 있는 최적의 작업 기간으로 진행하였습니다.",
          "O2O 플랫폼이면서 다양한 전문가를 담고 있는 킥오프는 그만큼 다양한 직군과 성향의 고객들을 맞이하는 서비스 중 하나입니다. 이러한 고객들이 더욱 킥오프라는 서비스를 기억하고 다시금 방문할 수 있도록 통일화된 아이덴티티를 구축함과 동시에 고유 IP 사업 기획까지 진행하여 폭 넓은 서비스가 될 수 있는 발판을 마련하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 차트인
    {
      id: "chartin",
      size: "large",
      isMainPortfolio: true,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "차트인",
      description: "뮤지션과 전문가를 매칭해주는 음악 플랫폼",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      date: "Feb, 2022",
      // TODO: images
      details: {
        titles: [
          "글로벌 뮤직 포트폴리오 플랫폼 차트인",
          "더욱 전문적일 수 있도록\n핵심 컬러에만 집중",
          "여러 경우의 수를 파악하며\n진행 된 개발 환경",
        ],
        descriptions: [
          "차트인은 음악을 좋아하는 사람, 음악을 찾고 싶은 사람 모두가 즐길 수 있는 음악 커뮤니티 플랫폼 서비스입니다. 다수의 사람들이 자신을 PR하고 더 나아가 현재 트랜드로 자리잡고 있는 음악 등을 함께 듣고 평가하고 평가를 받을 수 있는 서비스의 특징을 담고 있습니다.",
          "음악을 만드는 사람들이 방 안에서 자신의 음악에 집중하며 마주하는 컬러처럼 어두운 다크 배경에 핵심적인 컬러가 UI에 작용할 수 있도록 제작되었습니다. 전체적인 분위기나 비주얼 벨런스를 통해 고객이 더욱 차트인에서 활동하며 전문성을 키울 수 있도록 하였습니다.",
          "차트인은 음악을 올리고 평가를 받아 실제로 데뷔 무대까지 이어질 수 있는 플랫폼으로 단순히 자신의 작업물을 올리는 것에 그치는 것이 아닌 실제로 평가를 받아 사람들에게 공개가 되는 종합 플랫폼의 모습을 띄고 있습니다. 이러한 과정이 원활하게 상호작용 될 수 있도록 개발 환경을 구축, 제작 되었습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 당신의 타로
    {
      id: "taro",
      size: "medium",
      isMainPortfolio: true,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "당신의 타로",
      description: "타로 플랫폼 웹 퍼블리싱",
      categories: ["UI/UX", "Web", "Product", "Publishing"],
      date: "Nov, 2023",
      // TODO: images
      details: {
        titles: ["_"],
        descriptions: ["_"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 구해줘 노무사
    {
      id: "findnomusa",
      size: "small",
      isMainPortfolio: true,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "구해줘 노무사",
      description: "노무사 매칭 및 상담 플랫폼",
      categories: ["UI/UX", "Web", "CMS", "O2O"],
      date: "Dec, 2022",
      // TODO: images
      details: {
        titles: [
          "빠르고 정확하게 노무 Q&A 도움이 가능한 O2O 플랫폼",
          "노무사는 더욱 자신을 명확하게 알리고\n고객은 더욱 자신을 명확하게 말하도록",
          "자신의 진행 상황을 정확하게\n체크할 수 있도록 모니터링 시스템 개발",
        ],
        descriptions: [
          "구해줘 노무사는 노무사와 고객사 모두가 노무에 대한 업무를 온라인에서 진행할 수 있는 노무 종합 O2O 플랫폼입니다. 다양한 법적인 문제부터 빠르게 체크하며 진행되어야 하는 노무의 특성이 온라인에서 제약없이 서비스 진행이 될 수 있도록 제작되었습니다.",
          "노무사는 자신들의 포트폴리오와 고객 상담 등을 자유롭게 받으며 업무에 플러스가 될 수 있도록 제작을 하였고 더불어 고객들은 자신의 상황을 빠르게 여러 노무사들에게 상담 받을 수 있도록 전체 상황을 고려한 기획, 설계, 디자인에 초점을 맞춰 진행하였습니다.",
          "구해줘 노무사는 상담을 진행하는 노무사, 파트너 둘 다 자신이 어디까지 진행을 하고 있고 어떤 상담 등을 진행하고 있는지 서비스 운영 관리와 별도로 개별 모니터링 시스템이 필요한 플랫폼입니다. O2O를 경험하는 모든 고객들이 자신의 서비스 상황을 정확하게 인지하고 빠르게 다음 서비스로 이어갈 수 있도록 최적화된 개발 환경을 구축하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // airkid
    {
      id: "airkid",
      size: "large",
      isMainPortfolio: true,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "AIRKID",
      description: "어린이용 머리 보호 헬맷, 에어키드 소개 반응형 웹",
      categories: ["UI/UX", "Web", "3D", "Enterprise"],
      date: "Jul, 2020",
      // TODO: images
      details: {
        titles: [
          "제품을 온라인에서 자유롭게 확인할 수 있는 PDP 반응형 웹사이트",
          "스크롤마다 제품의 다각도 모습이\n잘 전달될 수 있도록",
          "브랜드 아이덴티티의 핵심이\nGUI에 잘 녹아들 수 있게",
        ],
        descriptions: [
          "AIRKID는 유아용 헬맷 브랜드인 Legit이 개발한 제품으로 당시에는 생소한 유아용 헬멧을 고객에게 올바르게 전달할 수 있는 웹을 구축하는 것이 목표였습니다. 그로인해 모델링이 자유 각도로 보여지고 세부적인 기술이 어떻게 들어가며 제작이 되었는지 고객에게 어렵지 않게 보여지는 것을 목표로 제작되었습니다.",
          "고해상도 모델링 이미지가 실제 스크롤을 내리면서 고객에게 보여졌을 때 최적화된 용량으로 버벅임 없이 전달될 수 있도록 이미지 데이터를 최적화하는 개발을 함과 동시에 스크롤 마다 프레임이 올바르게 보여질 수 있는 개발 기술을 통해 고객이 스크롤을 올리고 내리는 모든 과정에 자연스러운 인터렉션이 구동될 수 있는 개발 환경을 구축하였습니다.",
          "브랜드와 제품 모두가 시장에 처음 선보이는 상황을 감안하여 고객들이 향후에도 브랜드를 더욱 잘 기억하며 재방문을 통한 구매 과정에 도움이 될 수 있는 그래픽 인터페이스, 브랜드 정체성을 고려하여 제작되었습니다. 캐릭터부터 전체적인 브랜드 컬러까지 강조점이 명확히 보여질 수 있는 방향을 집중하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // DOOSIL
    {
      id: "doosil",
      size: "small",
      isMainPortfolio: true,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "DOOSIL",
      description: "부동산 인테리어 중개 O2O 플랫폼",
      categories: ["UI/UX", "Web", "App", "O2O"],
      date: "Aug, 2022",
      // TODO: images
      details: {
        titles: [
          "나에게 딱 맞는 집을 찾는 인테리어 중개 플랫폼 두꺼비실장",
          "다양한 태그가 복잡하게\n보이지 않고 이해되기 쉽도록",
          "웹 브라우저부터\n모바일 애플리케이션까지",
        ],
        descriptions: [
          "두꺼비실장은 다양한 라이프 스타일 태그를 통해 내가 소비하고 마주하는 브랜드가 무엇인지 그렇다면 내가 살고 있는 집 공간은 어떤 모습으로 인테리어가 되는 것이 좋은지 다양한 홈 인테리어 정보를 제공함과 동시에 직접 시공하고 인테리어를 진행 할 수록 도와주는 인테리어 O2O 플랫폼입니다.",
          "지금까지 인테리어 플랫폼은 과하게 공백, 여백을 만들거나 기존 쇼핑몰 사이트와 같은 UI 환경으로 구성이 되어있는 것이 시장의 공통된 모습이였습니다. 두꺼비실장은 고객이 자신의 라이프 스타일 태그를 찾고 서치하는 것과 더불어 라이프 매거진을 읽는 느낌을 얻을 수 있도록 다방면 스크롤, 페이지 뎁스 등을 고려하여 기획, 디자인하고자 노력하였습니다.",
          "두꺼비실장은 인테리어를 수시로 확인하며 진행하는 파트너와 시공사, 고객 등이 언제나 제약없는 환경에서 자유롭게 방문이 필요한 서비스입니다. 이러한 상황에 편의성이 더해질 수 있도록 모든 디바이스에서 각 환경에 맞춰진 개발 환경, 가이드를 제공하여 고객의 서비스 편의성을 높이고자 노력하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 시티호퍼스
    {
      id: "cityhoppers",
      size: "medium",
      isMainPortfolio: true,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "시티호퍼스",
      description: "여행 매거진 및 커뮤니티 플랫폼",
      categories: ["Web", "CMS", "Magazine", "O2O"],
      date: "Jun, 2022",
      // TODO: images
      details: {
        titles: ["구독형 여행 스토리 매거진 서비스", "콘텐츠가 잘 보일 수 있도록\n최적화 된 개발 환경", "자발적 커뮤니티가\n확장될 수 있도록"],
        descriptions: [
          "시티호퍼스는 고객이 도시,테마,산업 별 매거진을 구독하여 볼 수 있는 여행 콘텐츠 구독 플랫폼 입니다. 단순히 매거진을 읽는 것 뿐만이 아니라 자체적으로 모임을 개설 후 함께 즐길 수 있는 커뮤니티성 플랫폼으로 확장이 될 수 있도록 개발하였습니다.",
          "가장 중요한 것은 시티호퍼스에 온 고객들이 콘텐츠를 같은 규격에서 잘 읽을 수 있고 작성하는 에디터 또한 항상 일관된 환경에서 좋은 퀄리티의 콘텐츠를 작성하도록 서비스 환경을 구축하는 것 입니다. 이번 개발에서는 다양한 디바이스에서도 콘텐츠가 잘 보일 수 있도록 다각도 반응형을 고려하여 제작하였습니다.",
          "시티호퍼스는 앞서 설명한 것과 같이 단순히 콘텐츠를 읽는 것 뿐만이 아니라 여행이라는 테마와 어울리는 커뮤니티를 자발적으로 생성하여 참여하는 것이 특징입니다. 고객 간의 상호작용이 원활하게 이뤄질 수 있고 언제든 서비스 이용에 불편함이 없도록 고객 입장에서 참여하는 로드맵을 통해 원활한 커뮤니티 기능이 구현될 수 있도록 제작하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 3.3 DESIGN SPACE
    {
      id: "designspace",
      size: "large",
      isMainPortfolio: true,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "3.3 DESIGN SPACE",
      description: "인테리어 회사 소개 및 견적 반응형 웹",
      categories: ["UI/UX", "Web", "Publishing", "Enterprise"],
      date: "Apr, 2021",
      // TODO: images
      details: {
        titles: ["인테리어를 책자처럼 웹에서 볼 수 있도록", "다양한 스토리텔링이\n보여질 수 있도록", "고객의 목소리를\n정확히 들을 수 있도록"],
        descriptions: [
          "3.3 DESIGN SPACE는 인테리어 업체이지만 보유하고 있는 포트폴리오의 전체 비주얼에 어울릴 수 있는 소개 포트폴리오 사이트가 필요하였습니다. 이번 프로젝트에서는 단순히 인테리어를 보는 것이 아니라 고객이 책자를 넘기며 볼 수 있도록 충분한 여백과 포트폴리오들의 구별, 차이점이 명확히 보일 수 있는 환경을 고려하여 제작하였습니다.",
          "인테리어는 고객의 모습, 페르소나가 반영되어 제작이되어야 하는 것으로 단순히 시공 관점에서의 모습을 보여주는 것이 아니라 다양한 스토리텔링을 담은 포트폴리오 구성이 특징입니다. 이번 사이트 또한 각 인테리어 포트폴리오 별 스토리텔링이 고객들에게 공감을 줄 수 있고 잘 보여질 수 있는 웹 환경을 구축하고자 하였습니다.",
          "포트폴리오를 기본적으로 올리는 것 뿐만이 아니라 고객들의 예약을 받고 상담 일정을 조정할 수 있도록 O2O 서비스 관점의 웹 사이트를 구축하였습니다. 고객이 따로 연락을 해야하는 것이 아닌 포트폴리오를 보고난 후 바로 문의를 할 수 있는 자연스러운 플로우가 구현될 수 있도록 제작하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 나인아크
    {
      id: "nineark",
      size: "medium",
      isMainPortfolio: true,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "나인아크",
      description: "카카오 산하 모바일 게임 개발사 소개 반응형 웹",
      categories: ["UI/UX", "Web", "Publishing"],
      date: "Apr, 2021",
      // TODO: images
      details: {
        titles: [
          "제작사의 의도와 제작 방향이 잘 보여질 수 있도록",
          "다양한 크루가 모인 나인아크\n각자의 개성 또한 뚜렷하게",
          "실시간 뉴스가 보는 이들에게\n잘 전달될 수 있도록",
        ],
        descriptions: [
          "나인아크는 카카오게임즈 산하 게임 개발 제작사로 다양한 게임을 퍼블리싱함과 동시에 자신들의 게임 자산을 출시하는 기업입니다. 이번 웹은 나인아크의 비전과 신념이 잘 보여질 수 있도록 현재 진행 중인 게임의 아이덴티티와 기업의 아이덴티티가 잘 보일 수 있는 환경을 구축하고자 노력하였습니다.",
          "나인아크는 여러 게임 제작 크루를 보유한 형태의 기업구조로 하나의 개발사의 모습을 보여줌과 동시에 다양한 크루들의 활동까지 보여줘야하는 제작 기업의 형태를 띄고 있습니다. 이번 웹 환경을 구축할 때도 모든 아이덴티티가 하나의 지붕 아래에서 잘 보여질 수 있는 디자인, 기획을 중요하게 바라보며 제작하였습니다.",
          "기업 소개 사이트에서 가장 많이 사용되는 뉴스 레이아웃은 마우스만 올려도 전체 맥락과 내용을 한눈에 확인할 수 있도록 빠른 정보 제공을 목표로 하여 개발되었으며 올리는 관리자 또한 링크와 제목을 상황에 따라 빠르게 적용하고 보여질 수 있는 환경을 고려하여 제작되었습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // BTBG
    {
      id: "btbg",
      size: "small",
      isMainPortfolio: true,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "BTBG",
      description: "고급 차량 수출 회사 소개 반응형 웹",
      categories: ["UI/UX", "Web", "CMS", "Enterprise"],
      date: "Apr, 2023",
      // TODO: images
      details: {
        titles: ["다국적 모빌리티 옥션 서비스 BTBG", "다양한 차량이\n복잡하게 보이지 않도록", "문의와 서비스를\n지속적으로 관리하는 시스템"],
        descriptions: [
          "BTBG는 외국, 국내 바이어들이 고급 차량을 옥션하고 소개하는 사이트입니다. 직접 어떤 차량이 입고가 되었고, 준비가 되었는지 고객들에게 소개하는 것과 동시에 다양한 태그를 통해 자신과 맞는 차량을 찾을 수 있도록 제작되었습니다.",
          "BTBG는 차량이 올라가는 갯 수 만큼 보여지는 브랜드의 이미지, 색상의 이미지가 섞여서 보일 수 있기 때문에 전체 UI 환경은 이 모든 브랜드가 복잡하게 보이지 않고 간결하게 보이도록 설계되는 것이 중요했습니다. 서비스의 브랜드가 지속적으로 노출이 되면서도 다양한 상품들의 아이덴티티가 명확히 보여질 수 있도록 제작되었습니다.",
          "단순히 차량을 올리고 옥션을 진행하는 서비스라 할지라도 관리하는 운영자의 입장에서 어떤 내용이 예약으로 오고 있고 어떤 차량을 올렸는지 각 태그별로 운영이 가능한 CMS를 구축하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 세컨드 화이트
    {
      id: "secondwhite",
      size: "large",
      isMainPortfolio: true,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "세컨드 화이트",
      description: "프로덕트 디자인 에이전시 회사 소개 반응형 웹",
      categories: ["Web", "CMS", "Enterprise"],
      date: "Dec, 2020",
      // TODO: images
      details: {
        titles: ["회사의 신념이 명확히 보이도록", "환경은 심플하게\n작업물은 명확하게", "지속적으로 색을\n더할 수 있도록"],
        descriptions: [
          "세컨드 화이트는 제품 디자인 회사로 내부적으로 가지고 있는 브랜드 가치, 신념, 작업 방향성이 잘 보여질 수 있는 웹사이트를 구축하는 것을 목표로 하였습니다. 이름과 같이 여백이 많은 하얀색 웹에서 작업물이 더욱 또렷하게 보여질 수 있는 전체 구조를 고려하여 제작하였습니다.",
          "제품 디자인은 모델링, 구현 이미지 등을 통해 뚜렷히 집중되어 보여지는 것이 필요합니다. 이번 프로젝트에서는 세컨드 화이트의 작업물이 오롯이 고객에게 집중되어 보여질 수 있는 전체 웹 콘텐츠 영역을 고려하여 제작하였습니다.",
          "일회성으로 업로드가 되는 웹사이트가 아닌 지속적으로 관리가 필요한 포트폴리오 사이트는 고객사가 개발 이후에도 꾸준히 자신들의 톤 앤 매너를 고려하여 관리가 필요합니다. 코드스페이스는 고객사가 언제든 브랜드가 원하는 방향에 따라 웹 환경을 채워나갈 수 있도록 자체 유지보수가 가능한 환경을 고려하여 제작하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 어웨어
    {
      id: "aware",
      size: "small",
      isMainPortfolio: false,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "어웨어",
      categories: ["Web", "CMS", "Finance", "Magazine"],
      description: "금융/투자 저널 매거진 반응형 웹사이트",
      date: "Nov, 2022",
    },
    // 디지털 갓생 살기
    {
      id: "digital",
      size: "medium",
      isMainPortfolio: false,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "디지털 갓생 살기",
      categories: ["Web", "App", "CMS", "MBTI"],
      description: "디지털 갓생 살기 MBTI 테스트",
      date: "Sep, 2022",
    },
    // 메타 캐릭터
    {
      id: "metacharacter",
      size: "large",
      isMainPortfolio: false,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "메타 캐릭터",
      categories: ["Web", "App", "CMS", "Scraping", "B2B"],
      description: "글로벌 캐릭터 콘텐츠 마케팅 서비스",
      date: "Nov, 2022",
    },
    // 유비오션
    {
      id: "ubiocean",
      size: "medium",
      isMainPortfolio: false,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "유비오션",
      categories: ["UI/UX", "Web", "App", "CMS", "B2C"],
      description: "구글맵 기반 수상 레저 업체 소개 반응형 웹사이트",
      date: "Aug, 2022",
    },
    // 인벤컨
    {
      id: "invenconn",
      size: "small",
      isMainPortfolio: false,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "인벤컨",
      categories: ["Web", "App", "CMS", "Ecommerce", "B2B"],
      description: "기업간 중고 물품 거래 플랫폼",
      date: "Jan, 2022",
    },
    // 올리커 플러스
    {
      id: "aliquorplus",
      size: "large",
      isMainPortfolio: false,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "올리커 플러스",
      categories: ["UI/UX", "Web", "CMS", "Video"],
      description: "베이킹 클래스 온라인 강의 플랫폼",
      date: "Jul, 2021",
    },
    // 배움
    {
      id: "beum",
      size: "small",
      isMainPortfolio: false,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "배움",
      categories: ["Web", "App", "CMS", "Video"],
      description: "온라인 강의 및 크라우드 펀딩 플랫폼",
      date: "Aug, 2021",
    },
    // 그라데이션
    {
      id: "gradation",
      size: "medium",
      isMainPortfolio: false,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "그라데이션",
      categories: ["UI/UX", "Web", "CMS", "University"],
      description: "대학교 시각디자인과 졸업 작품 전시 반응형 웹사이트",
      date: "Dec, 2021",
    },
    // 콘텐츠 가든
    {
      id: "contentsgarden",
      size: "large",
      isMainPortfolio: false,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "콘텐츠 가든",
      categories: ["UI/UX", "Web", "Publishing", "Magazine"],
      description: "온라인 매거진 구독 반응형 웹 퍼블리싱",
      date: "Jan, 2021",
    },
    // 셀 마이 브레인
    {
      id: "cellmybrain",
      size: "medium",
      isMainPortfolio: false,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "셀 마이 브레인",
      categories: ["UI/UX", "Web", "App", "CMS", "O2O"],
      description: "지식재산권 관련 변호사 매칭 플랫폼",
      date: "Mar, 2021",
    },
    // 애니브리띵
    {
      id: "aniverything",
      size: "small",
      isMainPortfolio: false,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "애니브리띵",
      categories: ["Web", "CMS", "Archive", "Startup"],
      description: "애니메이션 정보 공유 커뮤니티 반응형 웹사이트",
      date: "Feb, 2021",
    },
    // 코리아나 큐레이션
    {
      id: "coreanacuration",
      size: "large",
      isMainPortfolio: false,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "코리아나 큐레이션",
      categories: ["Web", "App", "CMS", "MBTI"],
      description: "코리아나 제품 큐레이션 MBTI 테스트",
      date: "Jan, 2021",
    },
    // HYID
    {
      id: "hyid",
      size: "small",
      isMainPortfolio: false,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "HYID",
      categories: ["UI/UX", "Web", "CMS", "University"],
      description: "대학교 산업디자인과 학생들의 졸업 작품 전시 반응형 웹사이트",
      date: "Nov, 2020",
    },
    // 아이즈 유 비디오
    {
      id: "izeuvideo",
      size: "medium",
      isMainPortfolio: false,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "아이즈 유 비디오",
      categories: ["UI/UX", "Web", "CMS", "Enterprise"],
      description: "영상 제작 회사 소개 반응형 웹사이트",
      date: "Oct, 2020",
    },
    // 엔잡스
    {
      id: "njobs",
      size: "large",
      isMainPortfolio: false,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "엔잡스",
      categories: ["UI/UX", "Web", "App", "CMS", "Startup"],
      description: "IT 분야 특화 채용 플랫폼",
      date: "Aug, 2020",
    },
    // 아하 에셋 자산운용
    {
      id: "ahhaasset",
      size: "medium",
      isMainPortfolio: false,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "아하 에셋 자산운용",
      categories: ["Web", "CMS", "Enterprise"],
      description: "자산운용사의 소개 반응형 웹사이트",
      date: "Nov, 2019",
    },
    // 더 리드 법률사무소
    {
      id: "theleadlaw",
      size: "small",
      isMainPortfolio: false,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "더 리드 법률사무소",
      categories: ["Web", "CMS", "Enterprise"],
      description: "법무법인의 소개 반응형 웹사이트",
      date: "Sep, 2019",
    },
    // 숏터디
    {
      id: "shortudy",
      size: "large",
      isMainPortfolio: false,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "숏터디",
      categories: ["Web", "App", "CMS", "Startup"],
      description: "시험 문제 풀이 및 첨삭 플랫폼",
      date: "Sep, 2019",
    },
    // 뤼피드
    {
      id: "refeed",
      size: "small",
      isMainPortfolio: false,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "뤼피드",
      categories: ["Web", "CMS", "Publishing", "Enterprise"],
      description: "바이오 회사 소개 반응형 웹사이트",
      date: "Jul, 2019",
    },
    // 숨
    {
      id: "soom",
      size: "medium",
      isMainPortfolio: false,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "숨",
      categories: ["Web", "CMS", "Publishing", "Enterprise"],
      description: "의료기기 회사 소개 반응형 웹사이트",
      date: "Jul, 2019",
    },
    // 씨아이 그룹 자사몰
    {
      id: "thecimall",
      size: "large",
      isMainPortfolio: false,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "씨아이 그룹 자사몰",
      categories: ["Web", "CMS", "Ecommerce"],
      description: "기업 내부 복지를 위한 자사몰 반응형 웹사이트",
      date: "Aug, 2019",
    },
    // 씨아이 그룹 자사웹
    {
      id: "thecigroup",
      size: "medium",
      isMainPortfolio: false,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "씨아이 그룹 자사웹",
      categories: ["Web", "CMS", "Publishing", "Enterprise"],
      description: "씨아이 그룹 소개 반응형 웹사이트",
      date: "Jun, 2019",
    },
    // 넥스트 챌린지
    {
      id: "nextchallenge",
      size: "small",
      isMainPortfolio: false,
      videoSrc: "thumbnail_small_fake.mp4",
      image: {
        src: small,
        src1280: small,
      },
      title: "넥스트 챌린지",
      categories: ["Web", "CMS", "Enterprise", "Startup"],
      description: "글로벌 액셀러레이터 소개 반응형 웹사이트",
      date: "May, 2019",
    },
    // 미뗌바우하우스
    {
      id: "mitdembauhaus",
      size: "large",
      isMainPortfolio: false,
      videoSrc: "thumbnail_large_fake.mp4",
      image: {
        src: large,
        src1280: largePc,
      },
      title: "미뗌바우하우스",
      categories: ["Web", "CMS", "Ecommerce", "B2B"],
      description: "독일 직수입 조명 가구 소개 및 판매 반응형 웹사이트",
      date: "Apr, 2019",
    },
  ],
};
export const getProject = (locale: string): ProjectProps[] => {
  if (locale === "en") return Projects.en;
  if (locale === "ko") return Projects.ko;
  return Projects.en;
};

// 소팅용 순서
export const CMS_ORDER = [
  "tethermax",
  "plusxplus",
  "ufo",
  "kickoff",
  "findnomusa",
  "fuleaf",
  "btbg",
  "cityhoppers",
  "chartin",
  "digital",
  "aware",
  "secondwhite",
  "invenconn",
  "ubiocean",
  "aliquorplus",
  "gradation",
  "beum",
  "metacharacter",
  "aniverything",
  "cellmybrain",
  "coreanacuration",
  "izeuvideo",
  "hyid",
  "njobs",
  "theleadlaw",
  "ahhaasset",
  "shortudy",
  "soom",
  "refeed",
  "thecimall",
  "nextchallenge",
  "thecigroup",
  "mitdembauhaus",
];
export const APP_ORDER = [
  "richgo",
  "drfull",
  "chartin",
  "plusxplus",
  "doosil",
  "metacharacter",
  "invenconn",
  "kickoff",
  "coreanacuration",
  "digital",
  "beum",
  "njobs",
  "ubiocean",
  "cellmybrain",
  "shortudy",
];
export const UIUX_ORDER = [
  "kia",
  "drfull",
  "ufo",
  "plusxplus",
  "richgo",
  "fuleaf",
  "findnomusa",
  "kickoff",
  "chartin",
  "taro",
  "doosil",
  "airkid",
  "btbg",
  "nineark",
  "designspace",
  "ubiocean",
  "hyid",
  "aliquorplus",
  "gradation",
  "cellmybrain",
  "contentsgarden",
  "izeuvideo",
  "njobs",
];
export const WEB_ORDER = [
  "kia",
  "drfull",
  "ufo",
  "kickoff",
  "tethermax",
  "fuleaf",
  "findnomusa",
  "taro",
  "airkid",
  "cityhoppers",
  "doosil",
  "designspace",
  "btbg",
  "nineark",
  "secondwhite",
  "digital",
  "aware",
  "chartin",
  "invenconn",
  "ubiocean",
  "aliquorplus",
  "gradation",
  "beum",
  "contentsgarden",
  "aniverything",
  "cellmybrain",
  "coreanacuration",
  "izeuvideo",
  "hyid",
  "njobs",
  "theleadlaw",
  "ahhaasset",
  "shortudy",
  "soom",
  "refeed",
  "thecimall",
  "nextchallenge",
  "thecigroup",
  "mitdembauhaus",
  "metacharacter",
];
