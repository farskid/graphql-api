import { Contact } from "../../server/schema/Contact";
import { ContactType } from "../../server/schema/types";

const sponsor: Contact = {
  name: "Koodia Suomesta",
  about:
    "Finnish code is known for its superior quality. Now it can be easily recognized.",
  image: {
    url: "sponsors/koodiasuomesta.svg",
  },
  social: {
    homepage: "https://koodiasuomesta.fi/en/",
    facebook: "",
    instagram: "",
    twitter: "koodiasuomesta",
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
