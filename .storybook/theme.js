import { create } from "@storybook/theming";
import Logo from "./lazy.svg";

export default create({
  base: "light",
  brandTitle: "Lazy Bastard",
  brandUrl: "https://github.com/marborkowski/lazy-bastard",
  brandImage: Logo,
});
