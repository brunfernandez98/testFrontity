import { Settings } from "frontity/types";
import WpSource from "@frontity/wp-source/types";
import Theme from "@frontity/mars-theme-typescript/types";

const settings: Settings<Theme | WpSource> = {
  name: "testfrontity",
  state: {
    frontity: {
      url: "http://35.227.29.89",
      title: "Test Frontity Blog",
      description: "WordPress installation for Frontity development",
    },
  },
  packages: [
    {
      name: "@frontity/mars-theme-typescript",
      state: {
        theme: {
          menu: [
            ["Home", "/"],
            ["Libro", "/libros/"],
          
           
          ],
          featured: {
            showOnList: false,
            showOnPost: false,
          },
        },
      },
    },
    {
      name: "@frontity/wp-source",
      state: {
        source: {
          url: "https://34.142.120.15",
          postTypes: [
            {
              type: "libro",
              endpoint: "libro",
              archive: "/libros",
            },
          ],
        },
      },
    },
    "@frontity/tiny-router",
    "@frontity/html2react",
  ],
};

export default settings;
