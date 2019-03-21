import { Contact } from "../../server/schema/Contact";
import { ContactType } from "../../server/schema/types";

const sponsor: Contact = {
  name: "Elisa",
  about: "Experiences and productivity",
  image: {
    url: "sponsors/elisa.svg",
  },
  social: {
    homepage: "https://elisa.fi/",
    facebook: "elisasuomi",
    github: "ElisaOyj",
    linkedin: "company/elisa",
    youtube: "user/elisa",
    instagram: "elisaoyj",
    twitter: "elisaoyj",
    pinterest: "elisaoyj",
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
