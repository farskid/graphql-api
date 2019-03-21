import { Contact } from "../../server/schema/Contact";
import { ContactType } from "../../server/schema/types";

const sponsor: Contact = {
  name: "Netum",
  about: "To create new, you have to understand old",
  image: {
    url: "sponsors/netum.svg",
  },
  social: {
    homepage: "https://www.netum.fi/",
    facebook: "",
    linkedin: "",
    instagram: "",
    twitter: "netumoy",
  },
  location: {
    country: {
      name: "Finland",
      code: "FI",
    },
    city: "Helsinki",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
