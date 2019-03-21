import { Contact } from "../../server/schema/Contact";
import { ContactType } from "../../server/schema/types";
import Keyword from "../../server/schema/keywords";

const person: Contact = {
  name: "Sara Vieira",
  about:
    "Front-End Developer at @YLDio, open sorcerer, maker of useless modules, Blogger, Drummer and horror movie fan girl.",
  image: {
    url: "people/sara.jpg",
  },
  social: {
    homepage: "https://iamsaravieira.com/",
    twitter: "NikkitaFTW",
    github: "SaraVieira",
    linkedin: "saravieira1",
  },
  location: {
    country: {
      name: "Portugal",
      code: "PT",
    },
    city: "",
  },
  keywords: [Keyword.REACT, Keyword.TESTING],
  type: [ContactType.SPEAKER],
};

export default person;
