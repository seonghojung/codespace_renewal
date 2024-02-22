import { StaticImageData } from "next/image";
import small from "../public/images/projectComponents/mb1_square_thumbnail.webp";
import medium from "../public/images/projectComponents/mb2_rectangle_thumbnail.webp";
import large from "../public/images/projectComponents/mb3_rectangle_thumbnail.webp";
import largePc from "../public/images/projectComponents/pc3_rectangle_thumbnail_1280.webp";

export interface ProjectProps {
  isMainPortfolio: boolean; // 대표 포트폴리오 여부
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
          "Ensuring the product's visuals are well-suited for the digital environment",
          "Anytime, anywhere on your phone",
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
          "**A plant community where we grow together Plant Doctor",
          "Expanding beyond a simple community to encompass O2O integration",
          "Ensuring accurate weather information is delivered to the customers",
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
        titles: ["Ways to enjoy coffee experience", "Website that offers various entertainment options", "A CMS that allows access to customer data"],
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
          "Enhancing visibility through various color choices",
          "Prioritizing on data protection even for the deleted messages",
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
          "Highlighting participating users and achieving goals for a visible rewards system.",
          "System for comprehensive customer management",
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
          "A space where diverse magazines and stories can coexist",
          "To enable expansion with more services",
        ],
        descriptions: [
          "Fuleaf is a comprehensive plant platform starting with a fast and accurate plant search platform that provides information for anyone curious about plant care. It expands into a B2B, B2C integrated plant platform where various plant-related products can be purchased.",
          "Beyond searching for a plant encyclopedia, Fuleaf goes further by collaborating with affiliated writers to share content in a magazine format. The design and planning were centered around allowing users to subscribe and continuously enjoy their plant life, and development was carried out based on this concept.",
          "To create a community and market within the platform, catering to plant enthusiasts, we comprehensively reviewed various IA scenarios in different situations on the information-providing platform. This approach ensures that when development continues in the future, diverse sub-objects can be seamlessly integrated to make the product even more robust.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Richgo
    {
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
          "Planning and developing for both resident and investor perspectives",
          "Simple presentation of diverse information for easy comprehension at a glance",
        ],
        descriptions: [
          "Richgo is a comprehensive real estate platform that provides regional real estate information based information on actual residents, actual transactions, and commercial area analysis. It assists both customers aiming to invest in real estate and those targeting residential properties, enabling them to explore real estate tailored to their individual situations.",
          "While many real estate platforms primarily focus on investment, Richgo places a stronger emphasis on the resident's perspective. It is designed to provide a comprehensive view of the surrounding environment, including nearby schools, amenities, medical facilities, and other practical factors that residents consider when living in a particular area.",
          "Presenting data visually for readers to comprehend can be difficult. In this project, special attention was given to design elements and focal points on each page, utilizing infographics to make data more accessible and easily understandable for readers.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Kick-off
    {
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
          "Quickest MVP service created for fast-paced market",
          "A visual identity design made with consideration for IP business",
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
          "Focusing on core colors to achieve professionalism",
          "Developed with consideration of various scenarios and circumstances",
        ],
        descriptions: [
          "Chart-in is a music community platform service for everyone who loves music and wants to discover new playlists. It features a community where individuals can promote themselves, listen to and evaluate trending music, and receive feedback from other users.",
          "UI features core colors that reflects a dark background resembling the environment where music creators concentrate on their work. Through the overall atmosphere and visual balance, users are encouraged to engage more professionally on Chart-in, fostering a sense of expertise",
          "Chart-in is a platform where users can upload their music, receive evaluations, and potentially lead to actual debut stages. It goes beyond just sharing one's work; it is a comprehensive platform where music is evaluated and made public. The development environment was built to facilitate smooth interaction throughout this process.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // MarkHoly
    {
      size: "medium",
      isMainPortfolio: true,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "MarkHoly",
      description: "CTA-centered Responsive Website with Detailed Product Information",
      categories: ["UI/UX", "Web", "Product"],
      date: "Dec, 2023",
      // TODO: images
      details: {
        titles: [
          "MarkHoly, Korean Traditional Drink (Makgeolli) for foreigners",
          "Ensuring various posture of the character are captured in different resolutions",
          "Energetic and dynamic layout composition",
        ],
        descriptions: [
          "MarkHoly is a brand created by Mark Holy who has a high affection for Korean culture. The brand name also sounds similar to Makgeolli which greatly represents brand’s identity. Unlike traditional Makgeolli, the brand aims to showcase a trendy branding of Makgeolli on the web, effectively communicating with customers.",
          "The essence of MarkHoly lies in the character's appearance and actions. Occasionally, there may be cases where the images are cropped or appears differently when exposed to different devices. In this development and design, efforts were made to ensure the entire landing page are presented uniformly across various device environments.",
          "descriptMarkHoly aims beyond selling Makgeolli and envisions business expansion into the IP category. The look and feel composition, showcasing various postures and styles of the character, and presenting the products were crucial. In this web design, we emphasized the fine-tuning of the overall composition and section structure for each scroll to effectively capture the essence of the brand in the layout.ion3",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Find Nomusa
    {
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
          "Empowering labor attorneys to clearly present themselves and clients to clearly express themselves",
          "Developed monitoring system to accurately track the progress of clients’ task",
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
          "Showcasing different angles of the product with each scroll",
          "The core of the brand identity is well integrated into the GUI",
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
          "To make various tags appear simple and easy to understand",
          "From web browsers to mobile applications",
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
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 3.3 DESIGN SPACE
    {
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
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Nine Ark
    {
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
      // TODO: details
      details: {
        titles: [
          "Clearly showcase the intentions and directions of the production company",
          "Nine Ark, where diverse members with unique characteristics gather",
          "To ensure real-time news is effectively communicated to the viewers",
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
          "Displaying variety of vehicles in simplified manner",
          "A system that consistently manages inquiries and services",
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
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // Aware
    {
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
          "제품의 비주얼이 디지털 환경에서 잘 보일 수 있도록",
          "언제 어디서나모바일로 간편하게 방문",
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
        titles: ["함께 키우는 식물 커뮤니티 풀박사", "단순한 커뮤니티를 넘어 O2O까지 확장이 되도록", "정확한 날씨 정보가 고객에게 전달 될 수 있도록"],
        descriptions: [
          "풀박사는 기존에 플랫폼들과 달리 혼자 키우는 식물을 넘어서 사람들끼리 같은 지역 날씨 환경 아래 자신들의 식물을 공유하고 정보를 탐색하는 식물 커뮤니티 플랫폼입니다. 기존 식물 플랫폼의 비즈니스 구조를 이해하고 현 시장에 알맞는 비즈니스 구조를 함께 설계를 하였고 이에 따른 베타 서비스 디자인, 기획, 개발을 진행하였습니다.",
          "풀박사는 식물을 키우는 정보를 교류하는 것을 넘어 더 잘 키우기 위해서 접하는 판매 제품 및 지역별 날씨를 제안하고 더 좋은 정보를 만날 수 있는 O2O 영역까지의 확장을 고려하며 디자인 및 기획 설계를 진행하였습니다.",
          "이번 개발의 핵심은 모두가 다른 지역에 거주하면서 각자 위치의 날씨 정보를 정확하게 제공 받는 것이었습니다. 개발 요소 중 날씨가 딜레이 & 오차 없이 일정한 서비스를 제공하여 편의성, 재방문률을 높일 수 있는 개발 요소의 최적화를 목표로 진행하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // ufo
    {
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
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // +X+
    {
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
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // tethermax
    {
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
          "달성 목표와 리워드 참여 유저가 잘 보일 수 있도록",
          "전체 고객관리가 체계적으로 이뤄질 수 있는 관리 시스템 구축",
        ],
        descriptions: [
          "테더맥스는 많은 사람들이 수시로 거래되는 가상화폐 거래 시 발생하는 수수료를 리워드 형식으로 제공하는 플랫폼입니다. 많은 고객들이 거래를 하는데 있어서 더 좋은 정보를 얻고 리워드 편익을 온전히 느낄 수 있도록 제작되었습니다.",
          "거래 수수료는 한명이 아닌 다수가 참여를 했을 때 더 많은 혜택을 줄 수 있다는 장점이 존재를 합니다. 이번 디자인의 와우 포인트는 여러 유저들이 신뢰할 수 있고 더 많은 혜택을 여러 사람들과 적극적으로 참여할 수 있도록 정보를 보여주는 편의성에 집중하여 제작되었습니다.",
          "어떤 유저가 거래소를 선택을 하였고, 결제를 진행 하는 것에 대해 인증을 하고 리워드가 지급이 되었는지 관리자 시점에서 정확하게 고객의 행동을 분석하고 비즈니스 편익을 이어갈 수 있도록 프론트와 백앤드 개발과 동시에 유지보수 개념의 관리 기능까지 고려하여 제작하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // fuleaf
    // TODO: 썸네일이미지
    {
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
        titles: ["누구나 식물이 쉽게 식물 정보 플랫폼 플립", "다양한 매거진과 이야기 거리가 공존할 수 있도록", "더 많은 서비스로 확장할 수 있도록"],
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
          "거주자 관점, 투자자 관점 양쪽을 고려한 기획 설계",
          "다양한 정보가 복잡하지 않게 한눈에 보일 수 있도록",
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
          "가장 빠르게 만들어진 MVP 서비스",
          "IP사업까지 고려하여 제작된 비주얼 아이덴티티 디자인",
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
        titles: ["글로벌 뮤직 포트폴리오 플랫폼 차트인", "더욱 전문적일 수 있도록 핵심 컬러에만 집중", "여러 경우의 수를 파악하며 진행 된 개발 환경"],
        descriptions: [
          "차트인은 음악을 좋아하는 사람, 음악을 찾고 싶은 사람 모두가 즐길 수 있는 음악 커뮤니티 플랫폼 서비스입니다. 다수의 사람들이 자신을 PR하고 더 나아가 현재 트랜드로 자리잡고 있는 음악 등을 함께 듣고 평가하고 평가를 받을 수 있는 서비스의 특징을 담고 있습니다.",
          "음악을 만드는 사람들이 방 안에서 자신의 음악에 집중하며 마주하는 컬러처럼 어두운 다크 배경에 핵심적인 컬러가 UI에 작용할 수 있도록 제작되었습니다. 전체적인 분위기나 비주얼 벨런스를 통해 고객이 더욱 차트인에서 활동하며 전문성을 키울 수 있도록 하였습니다.",
          "차트인은 음악을 올리고 평가를 받아 실제로 데뷔 무대까지 이어질 수 있는 플랫폼으로 단순히 자신의 작업물을 올리는 것에 그치는 것이 아닌 실제로 평가를 받아 사람들에게 공개가 되는 종합 플랫폼의 모습을 띄고 있습니다. 이러한 과정이 원활하게 상호작용 될 수 있도록 개발 환경을 구축, 제작 되었습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 마크홀리
    {
      size: "medium",
      isMainPortfolio: true,
      videoSrc: "thumbnail_medium_fake.mp4",
      image: {
        src: medium,
        src1280: medium,
      },
      title: "마크홀리",
      description: "제품의 상세 내용을 확인할 수 있는 CTA 중심 반응형 웹",
      categories: ["UI/UX", "Web", "Product"],
      date: "Dec, 2023",
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 구해줘 노무사
    {
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
          "노무사는 더욱 자신을 명확하게 알리고 고객은 더욱 자신을 명확하게 말하도록",
          "자신의 진행 상황을 정확하게 체크할 수 있도록 모니터링 시스템 개발",
        ],
        descriptions: [
          "구해줘 노무사는 노무사와 고객사 모두가 노무에 대한 업무를 온라인에서 진행할 수 있는 노무 종합 O2O 플랫폼입니다. 다양한 법적인 문제부터 빠르게 체크하며 진행되어야 하는 노무의 특성이 온라인에서 제약 없이 서비스 진행이 될 수 있도록 제작되었습니다.",
          "노무사는 자신들의 포트폴리오와 고객 상담 등을 자유롭게 받으며 업무에 플러스가 될 수 있도록 제작을 하였고 더불어 고객들은 자신의 상황을 빠르게 여러 노무사들에게 상담 받을 수 있도록 전체 상황을 고려한 기획, 설계, 디자인에 초점을 맞춰 진행하였습니다.",
          "구해줘 노무사는 상담을 진행하는 노무사, 파트너 둘 다 자신이 어디까지 진행을 하고 있고 어떤 상담 등을 진행하고 있는지 서비스 운영 관리와 별도로 개별 모니터링 시스템이 필요한 플랫폼입니다. O2O를 경험하는 모든 고객들이 자신의 서비스 상황을 정확하게 인지하고 빠르게 다음 서비스로 이어갈 수 있도록 최적화된 개발 환경을 구축하였습니다.",
        ],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // airkid
    {
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
      // TODO: details
      details: {
        titles: [
          "제품을 온라인에서 자유롭게 확인할 수 있는 PDP 반응형 웹사이트",
          "스크롤마다 제품의 다각도 모습이 잘 전달될 수 있도록",
          "브랜드 아이덴티티의 핵심이 GUI에 잘 녹아들 수 있게",
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
          "다양한 태그가 복잡하게 보이지 않고 이해되기 쉽도록",
          "웹 브라우저부터 모바일 애플리케이션까지",
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
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 3.3 DESIGN SPACE
    {
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
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 나인아크
    {
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
          "다양한 크루가 모인 나인아크 각자의 개성 또한 뚜렷하게",
          "실시간 뉴스가 보는 이들에게 잘 전달될 수 있도록",
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
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 세컨드 화이트
    {
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
      // TODO: details
      details: {
        titles: ["title1", "title2", "title3"],
        descriptions: ["description1", "description2", "description3"],
        images: ["이미지 경로_01", "이미지 경로_02"],
      },
    },
    // 어웨어
    {
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
