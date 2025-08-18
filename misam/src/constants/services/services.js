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
    img: A2P,
    icon: A2PIcon,
    link: "/a2p-messaging",
  },
  {
    title: "P2A SMS",
    description:
      "Enhance user interaction with P2A messaging! Enable interactive services like surveys and info retrieval.",
    img: P2A,
    icon: P2AIcon,
    link: "/p2a-messaging",
  },
  {
    title: "P2P SMS",
    description:
      "P2P SMS (Person-to-Person messaging) is a technology that allows individuals to send text messages directly to each other through your platform. This method of communication is used for a variety of purposes:",
    img: P2P,
    icon: P2PIcon,
    link: "/p2p-messaging",
  },
  {
    title: "SIP Trunking",
    description:
      "Efficient voice communication with SIP-Trunking! Reduce costs and improve flexibility.",
    img: SIP,
    icon: SIPIcon,
    link: "/sip-trunking",
  },
  {
    title: "Virtual Calling",
    description:
      "Expand possibilities with Virtual Calling! Conduct high-quality virtual meetings and webinars worldwide.",
    img: VirtualCall,
    icon: VirtualCallIcon,
    link: "/virtual-calling",
  },
  {
    title: "Communication APIs",
    description:
      "Integrate communication seamlessly with our API! Support messaging, voice, and video calls effortlessly, tailored to your business needs.",
    img: API,
    icon: APIIcon,
    link: "/communication-apis",
  },
];

export default services;
