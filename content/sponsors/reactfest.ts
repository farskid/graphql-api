import { Contact } from "../../server/schema/Contact";
import { ContactType } from "../../server/schema/types";

const sponsor: Contact = {
  name: "ReactFest",
  about: "A one day open-source ReactJS conference - festival",
  image: {
    url: "sponsors/react-fest.png",
  },
  social: {
    homepage: "https://reactfest.com/",
    youtube: "UCjO-zVjLvkrh8-DT9wZCHTQ",
    github: "ReactFest",
    twitter: "ReactFest",
  },
  location: {
    country: {
      name: "Great Britain",
      code: "GB",
    },
    city: "London",
  },
  type: [ContactType.SPONSOR],
};

export default sponsor;
