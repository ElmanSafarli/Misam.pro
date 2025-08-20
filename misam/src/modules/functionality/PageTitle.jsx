import { useEffect } from "react";

const SEO = ({ title, description }) => {
  useEffect(() => {
    if (title) {
      document.title = title;
    }

    if (description) {
      let descTag = document.querySelector("meta[name='description']");
      if (descTag) {
        descTag.setAttribute("content", description);
      } else {
        descTag = document.createElement("meta");
        descTag.setAttribute("name", "description");
        descTag.setAttribute("content", description);
        document.head.appendChild(descTag);
      }
    }
  }, [title, description]);

  return null;
};

export default SEO;
