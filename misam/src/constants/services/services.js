import {
  A2P,
  API,
  P2A,
  P2P,
  SIP,
  VirtualCall,
  A2PIcon,
  APIIcon,
  P2AIcon,
  P2PIcon,
  SIPIcon,
  VirtualCallIcon,
} from "../../shared";
const services = [
  {
    title: "A2P SMS",
    description:
      "Empower your app with A2P messaging! Reach users directly with high-delivery messaging for marketing, notifications, and more.",
    whatIs: {
      title: "What is A2P SMS?",
      text: "A2P SMS (Application-to-Person messaging) is a technology that allows you to send text messages directly from your applications or systems to customers. This method of communication is used for a variety of purposes:",
      list: [
        "Confirmations and Notifications: Instant notifications for registration, purchase, or order status changes.",
        "Real-Time Alerts: Important information such as bank transactions, schedule changes, and delivery updates.",
        "Reminders: Reminders for upcoming appointments, scheduled events, or bill payments.",
        "Promotions and Offers: Informing customers about special deals, discounts, and promotions.",
      ],
    },
    benefits: [
      "High Delivery Speed: Messages are delivered almost instantly, ensuring timely communication with customers.",
      "High Open Rate: Over 90% of SMS messages are opened and read within minutes of receipt.",
      "Personalized Messaging: The ability to create personalized messages to enhance customer interaction.",
      "Wide Reach: Reach customers regardless of their location or the device they use.",
      "Cost-Effectiveness: An optimal solution for both mass messaging and individual notifications.",
    ],
    whyChoose: [
      "Reliability and Security: Guaranteed message delivery and protection of customer data.",
      "Scalability: Ability to send messages from single units to millions without compromising service quality.",
      "Easy Integration: Seamless connection of our service to your existing systems via a user-friendly API.",
      "Analytics and Reporting: Detailed statistics and analytics on message delivery and open rates to optimize marketing campaigns.",
    ],
    cta: "Discover the power of A2P SMS and start enhancing your customer communication today!",
    img: A2P,
    icon: A2PIcon,
    link: "/a2p-messaging",
  },
  {
    title: "P2A SMS",
    description:
      "Enhance user interaction with P2A messaging! Enable interactive services like surveys and info retrieval.",
    whatIs: {
      title: "What is P2A SMS?",
      text: "P2A SMS (Person-to-Application messaging) is a technology that allows customers to send text messages directly to your business applications or systems. This method of communication is used for a variety of purposes:",
      list: [
        "Customer Support: Customers can initiate support requests and inquiries via SMS.",
        "Feedback and Surveys: Collect valuable feedback and conduct surveys through simple text messages.",
        "Reservations and Bookings: Allow customers to make reservations or bookings by sending an SMS.",
        "Opt-ins and Subscriptions: Enable customers to opt-in for newsletters, updates, and services.",
      ],
    },
    benefits: [
      "Improved Customer Engagement: Facilitate easy and direct communication between customers and your business.",
      "High Convenience: Customers can reach out to your business anytime, anywhere, using their mobile devices.",
      "Automated Responses: Set up automated responses to handle common inquiries, improving efficiency.",
      "Enhanced Data Collection: Gather actionable insights from customer interactions and feedback.",
      "Cost-Effective Solution: Reduce the need for extensive customer support infrastructure by leveraging automated SMS interactions.",
    ],
    whyChoose: [
      "Reliability and Security: Ensure secure and reliable reception of customer messages.",
      "Scalability: Handle increasing volumes of incoming messages without compromising service quality.",
      "Easy Integration: Seamlessly integrate our service with your existing systems through a user-friendly API.",
      "Analytics and Reporting: Access detailed analytics on message volume, response rates, and customer interactions to optimize your communication strategies.",
    ],
    cta: "Discover the power of P2A SMS and start enhancing your customer communication today!",
    img: P2A,
    icon: P2AIcon,
    link: "/p2a-messaging",
  },
  {
    title: "P2P SMS",
    description:
      "P2P SMS (Person-to-Person messaging) is a technology that allows individuals to send text messages directly to each other through your platform. This method of communication is used for a variety of purposes:",
    whatIs: {
      title: "What is P2P SMS?",
      text: "P2P SMS (Person-to-Person messaging) is a technology that allows individuals to send text messages directly to each other through your platform. This method of communication is used for a variety of purposes:",
      list: [
        "Social Interaction: Enable users to connect and communicate with each other easily.",
        "Customer Service: Facilitate direct communication between customers and support representatives.",
        "Marketplace Transactions: Allow buyers and sellers to communicate directly for inquiries and negotiations..",
        "Event Coordination: Help users coordinate and organize events through direct messaging.",
      ],
    },
    benefits: [
      "Enhanced User Experience: Provide a smooth and intuitive communication channel for your users.",
      "Instant Connectivity: Ensure messages are delivered quickly and reliably, fostering real-time interaction.",
      "High Engagement Rates: Encourage user participation and interaction through familiar and accessible SMS.",
      "Scalability: Support a growing number of users and messages without compromising performance.",
      "Cost-Effective: Utilize an affordable communication solution that leverages existing mobile networks.",
    ],
    whyChoose: [
      "Reliability and Security: Ensure secure and dependable message delivery between users.",
      "Scalability: Handle a large volume of messages and users efficiently.",
      "Easy Integration: Seamlessly integrate our service with your platform using a straightforward API.",
      "Analytics and Reporting: Access detailed analytics on message volumes, response times, and user engagement to optimize your service.",
    ],
    cta: "Discover the power of P2P SMS and start enhancing your customer communication today!",
    img: P2P,
    icon: P2PIcon,
    link: "/p2p-messaging",
  },
  {
    title: "SIP Trunking",
    description:
      "Efficient voice communication with SIP-Trunking! Reduce costs and improve flexibility.",
    whatIs: {
      title: "What is SIP Trunking?",
      text: "SIP Trunking is a telecommunications protocol that allows you to connect multiple voice channels to a single SIP server or gateway. It is used for various purposes, including:",
      list: [
        "Voice over IP (VoIP): Facilitate voice communication over the internet.",
        "Telephony: Enable voice communication between devices and users.",
        "Teleconferencing: Facilitate remote meetings and conferences.",
        "Voice Messaging: Enable voice messaging and voice calls.",
      ],
    },
    benefits: [
      "Cost-Effective: Utilize an affordable communication solution that leverages existing mobile networks.",
      "Scalability: Handle a large volume of voice calls and users efficiently.",
      "Easy Integration: Seamlessly integrate our service with your platform using a straightforward API.",
      "Reliability and Security: Ensure secure and dependable voice delivery between users.",
    ],
    whyChoose: [
      "Reliability and Security: Ensure secure and dependable voice delivery between users.",
      "Scalability: Handle a large volume of voice calls and users efficiently.",
      "Easy Integration: Seamlessly integrate our service with your platform using a straightforward API.",
      "Cost-Effective: Utilize an affordable communication solution that leverages existing mobile networks.",
    ],
    cta: "Discover the power of SIP Trunking and start enhancing your voice communication today!",
    img: SIP,
    icon: SIPIcon,
    link: "/sip-trunking",
  },
  {
    title: "Virtual Calling",
    description:
      "Expand possibilities with Virtual Calling! Conduct high-quality virtual meetings and webinars worldwide.",
    whatIs: {
      title: "What is Virtual Calling?",
      text: "Virtual Calling is a virtual meeting platform that allows you to conduct online meetings and webinars from anywhere in the world. It is used for various purposes, including:",
      list: [
        "Remote Meetings: Facilitate remote meetings and conferences.",
        "Virtual Meetings: Enable virtual meetings and conferences.",
        "Webinars: Conduct virtual webinars and seminars.",
        "Online Meetings: Facilitate online meetings and conferences.",
      ],
    },
    benefits: [
      "Cost-Effective: Utilize an affordable communication solution that leverages existing mobile networks.",
      "Scalability: Handle a large volume of virtual meetings and users efficiently.",
      "Easy Integration: Seamlessly integrate our service with your platform using a straightforward API.",
      "Reliability and Security: Ensure secure and dependable virtual meeting delivery between users.",
    ],
    whyChoose: [
      "Reliability and Security: Ensure secure and dependable virtual meeting delivery between users.",
      "Scalability: Handle a large volume of virtual meetings and users efficiently.",
      "Easy Integration: Seamlessly integrate our service with your platform using a straightforward API.",
      "Cost-Effective: Utilize an affordable communication solution that leverages existing mobile networks.",
    ],
    cta: "Discover the power of Virtual Calling and start enhancing your virtual communication today!",
    img: VirtualCall,
    icon: VirtualCallIcon,
    link: "/virtual-calling",
  },
  {
    title: "Communication APIs",
    description:
      "Integrate communication seamlessly with our API! Support messaging, voice, and video calls effortlessly, tailored to your business needs.",
    whatIs: {
      title: "What are Communication APIs?",
      text: "Communication APIs (Application Programming Interfaces) are software libraries or frameworks that allow you to connect and communicate with various communication services, such as:",
      list: [
        "SMS: Facilitate text messaging and SMS services.",
        "Voice: Enable voice communication and voice services.",
        "Video: Facilitate video communication and video services.",
        "Messaging: Enable messaging and messaging services.",
      ],
    },
    benefits: [
      "Cost-Effective: Utilize an affordable communication solution that leverages existing mobile networks.",
      "Scalability: Handle a large volume of voice calls and users efficiently.",
      "Easy Integration: Seamlessly integrate our service with your platform using a straightforward API.",
      "Reliability and Security: Ensure secure and dependable voice delivery between users.",
    ],
    whyChoose: [
      "Reliability and Security: Ensure secure and dependable voice delivery between users.",
      "Scalability: Handle a large volume of voice calls and users efficiently.",
      "Easy Integration: Seamlessly integrate our service with your platform using a straightforward API.",
      "Cost-Effective: Utilize an affordable communication solution that leverages existing mobile networks.",
    ],
    cta: "Discover the power of Communication APIs and start enhancing your communication today!",
    img: API,
    icon: APIIcon,
    link: "/communication-apis",
  },
];

export default services;
