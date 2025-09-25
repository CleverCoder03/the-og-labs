export const services = [
  {
    id: 1,
    title: "Precision targeting at scale",
    desc: "Programmatic Advertising & SEM",
    bgCoverImg: "/service-bg-cover-1.png",
    serviceImg: "/spring.png",
  },
  {
    id: 2,
    title: "Data-backed storytelling that converts",
    desc: "Content & Creative",
    bgCoverImg: "/service-bg-cover-2.png",
    serviceImg: "/knot3.png",
  },
  {
    id: 3,
    title: "Build brands that dominate",
    desc: "Brand Strategy & Positioning",
    bgCoverImg: "/service-bg-cover-3.png",
    serviceImg: "/round_tube.png",
  },
  {
    id: 4,
    title: "Engagement engineered for growth",
    desc: "Social Media & Performance Marketing",
    bgCoverImg: "/service-bg-cover-4.png",
    serviceImg: "/anim93.png",
  },
];

export const clients = [
  {
    id: 1,
    name: "Lisa Thompson",
    desg: "VP Technology at Cloud Scale",
    image: "/lisa.jpg",
    mesg: "“OG Labs delivered AI-powered results that transformed our campaigns and bottom line.”",
  },
  {
    id: 2,
    name: "Amara Collins",
    desg: "Cloud Scale",
    image: "/lisa.jpg",
    mesg: "“Thanks to OG Labs, our customer engagement skyrocketed with data-driven precision and impact.",
  },
  {
    id: 3,
    name: "Kai Sterling",
    desg: "Cloud Scale",
    image: "/lisa.jpg",
    mesg: "“OG Labs helped us unlock smarter marketing strategies that directly boosted revenue and ROI.”",
  },
  {
    id: 4,
    name: "Lena Harper",
    desg: "Cloud Scale",
    image: "/lisa.jpg",
    mesg: "“Partnering with OG Labs brought clarity, speed, and AI innovation to our entire growth process.”",
  },
];

export const blogs = [
  {
    id: 1,
    title: "The Future of AI in Marketing",
    src: "/insight-1.png",
    date: "August 28, 2025 • 6 min read",
    h: "30vw",
  },
  {
    id: 2,
    title: "5 Proven Strategies to Boost Brand Engagement",
    src: "/insight-2.png",
    date: "September 2, 2025 • 4 min read",
    h: "20vw",
  },
  {
    id: 3,
    title: "Why Storytelling is the Heart of Modern Advertising",
    src: "/insight-3.png",
    date: "September 5, 2025 • 5 min read",
    h: "24vw",
  },
];


const caseStudiesData = [
  {
    id: 1,
    title: "Driving 150% Lead Growth for a SaaS Company",
    heroImage: "", 
    companyName: "Elevate Apparel",
    briefDesc:
      "Boosted brand awareness and drove a 45% sales increase through targeted campaigns.",
    src: "/round_tube.png",

    background: {
      headline: "Background",
      text: "Our client, a mid-sized SaaS company providing project management tools, wanted to scale their user acquisition. Despite having strong features, their existing campaigns were underperforming with high costs per lead.",
      image: "/about-1.png",
    },
    challenge: {
      headline: "The Challenge",
      points: [
        { id: 1, text: "Low conversion rates (less than 1%)" },
        { id: 2, text: "Poor audience segmentation" },
        { id: 3, text: "Lack of personalization in email campaigns" },
        { id: 4, text: "High customer acquisition cost (CAC)" },
      ],
    },
    approach: {
      headline: "Our Approach",
      introText: "We implemented a data-driven AI marketing strategy:",
      steps: [
        {
          id: 1,
          title: "AI-Powered Audience Optimization",
          description:
            "Used predictive analytics to identify high-intent leads.",
        },
        {
          id: 2,
          title: "Personalized Email Campaigns",
          description: "Designed AI-driven content based on user behavior.",
        },
        {
          id: 3,
          title: "Smart Ad Optimization",
          description:
            "Deployed real-time adjustments to allocate budgets dynamically.",
        },
        {
          id: 4,
          title: "Chatbot Integration",
          description: "Improved user qualification through conversational AI.",
        },
      ],
    },
    results: {
      headline: "Results",
      metrics: [
        { id: 1, description: "150% increase in qualified leads" },
        { id: 2, description: "37% drop in CAC" },
        { id: 3, description: "3.5x ROAS (Return on Ad Spend)" },
        { id: 4, description: "Email open rates improved from 18% &rarr; 42%" },
      ],
    },
  },
  {
    id: 2,
    title: "Revolutionizing Lead Generation for a Tech Innovator",
    heroImage: "",
    companyName: "NovaTech",
    briefDesc:
      "Achieved 3x lead generation with data-driven digital marketing strategies.",
    src: "/knot3.png",

    background: {
      headline: "Background",
      text: "NovaTech, a leading B2B tech firm, struggled with converting website visitors into qualified leads. Their existing strategy lacked cohesive follow-ups and precise targeting, leading to missed opportunities and a stagnant sales pipeline.",
      image: "/about-1.png",
    },
    challenge: {
      headline: "The Challenge",
      points: [
        { id: 1, text: "Low conversion rate from MQL to SQL" },
        { id: 2, text: "Inconsistent lead nurturing" },
        { id: 3, text: "High bounce rate on landing pages" },
        { id: 4, text: "Manual and inefficient lead scoring" },
      ],
    },
    approach: {
      headline: "Our Approach",
      introText:
        "We implemented a robust lead generation and nurturing framework:",
      steps: [
        {
          id: 1,
          title: "CRM Integration & Automation",
          description:
            "Seamlessly connected marketing efforts to sales pipeline with automated workflows.",
        },
        {
          id: 2,
          title: "Content Gating & Personalization",
          description:
            "Offered targeted content behind forms to capture quality leads.",
        },
        {
          id: 3,
          title: "Multi-Touch Nurturing Sequences",
          description:
            "Developed tailored email and ad sequences based on user engagement.",
        },
        {
          id: 4,
          title: "Predictive Lead Scoring",
          description:
            "Used machine learning to prioritize leads with the highest conversion potential.",
        },
      ],
    },
    results: {
      headline: "Results",
      metrics: [
        { id: 1, description: "300% increase in qualified leads" },
        { id: 2, description: "50% reduction in lead acquisition cost" },
        { id: 3, description: "2.8x improvement in MQL-to-SQL conversion" },
        {
          id: 4,
          description: "Engagement with nurture emails increased by 75%",
        },
      ],
    },
  },
  {
    id: 3,
    title: "Boosting Online Engagement for GreenGlow Skincare",
    heroImage: "",
    companyName: "GreenGlow Skincare",
    briefDesc:
      "Increased online engagement by 60% with creative social media storytelling.",
    src: "/anim93.png",

    background: {
      headline: "Background",
      text: "GreenGlow Skincare, a natural and organic brand, aimed to expand its digital footprint and build a stronger community around its values. Their existing social media presence was sporadic and lacked a consistent brand voice, limiting their reach.",
      image: "/about-1.png",
    },
    challenge: {
      headline: "The Challenge",
      points: [
        { id: 1, text: "Low social media engagement rates" },
        { id: 2, text: "Limited organic reach and followers" },
        { id: 3, text: "Lack of user-generated content" },
        { id: 4, text: "Difficulty standing out in a crowded market" },
      ],
    },
    approach: {
      headline: "Our Approach",
      introText:
        "We crafted a comprehensive social media and content strategy:",
      steps: [
        {
          id: 1,
          title: "Brand Storytelling & Content Pillars",
          description:
            "Developed captivating narratives around natural ingredients and ethical sourcing.",
        },
        {
          id: 2,
          title: "Influencer Collaboration Program",
          description:
            "Partnered with relevant micro-influencers for authentic product endorsements.",
        },
        {
          id: 3,
          title: "Interactive Social Campaigns",
          description:
            "Launched polls, Q&As, and contests to encourage community participation.",
        },
        {
          id: 4,
          title: "Visual Content Optimization",
          description:
            "Created high-quality, aesthetically pleasing imagery and video for all platforms.",
        },
      ],
    },
    results: {
      headline: "Results",
      metrics: [
        {
          id: 1,
          description: "60% increase in overall social media engagement",
        },
        {
          id: 2,
          description: "40% growth in follower count across key platforms",
        },
        {
          id: 3,
          description: "Generated 200+ pieces of user-generated content",
        },
        {
          id: 4,
          description: "25% uplift in website traffic from social channels",
        },
      ],
    },
  },
  {
    id: 4,
    title: "Accelerating Customer Acquisition for UrbanEats",
    heroImage: "",
    companyName: "UrbanEats",
    briefDesc: "Grew customer base by 35% using AI-powered ad campaigns.",
    src: "/spring.png",

    background: {
      headline: "Background",
      text: "UrbanEats, a fast-growing food delivery service, faced stiff competition in crowded urban markets. They needed to acquire new customers efficiently while retaining existing ones, all while optimizing their ad spend for maximum ROI.",
      image: "/about-1.png",
    },
    challenge: {
      headline: "The Challenge",
      points: [
        { id: 1, text: "High competition in the food delivery market" },
        { id: 2, text: "Inefficient ad spend with diminishing returns" },
        { id: 3, text: "Difficulty targeting specific customer segments" },
        {
          id: 4,
          text: "Limited customer loyalty in a convenience-driven industry",
        },
      ],
    },
    approach: {
      headline: "Our Approach",
      introText:
        "We designed and executed AI-powered advertising and loyalty strategies:",
      steps: [
        {
          id: 1,
          title: "Hyper-Local AI Ad Targeting",
          description:
            "Utilized geo-fencing and demographic data for precision ad delivery.",
        },
        {
          id: 2,
          title: "Dynamic Creative Optimization",
          description:
            "A/B tested ad creatives automatically to maximize conversion rates.",
        },
        {
          id: 3,
          title: "Predictive Customer Lifetime Value (CLV)",
          description:
            "Identified high-value customers to focus retention efforts.",
        },
        {
          id: 4,
          title: "Personalized Offer Engine",
          description:
            "Delivered customized promotions based on past order history and preferences.",
        },
      ],
    },
    results: {
      headline: "Results",
      metrics: [
        { id: 1, description: "35% growth in active customer base" },
        { id: 2, description: "20% reduction in customer acquisition cost" },
        { id: 3, description: "15% increase in average order value" },
        {
          id: 4,
          description:
            "Customer retention rate improved by 10% within 6 months",
        },
      ],
    },
  },
];

export default caseStudiesData;
