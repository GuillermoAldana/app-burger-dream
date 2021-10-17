import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter"
import "@fontsource/battambang"
import "@fontsource/open-sans/700.css"
const Theme = extendTheme({
  fonts: {
    heading: "Battambang",
    body: "Inter",
  },
})
export default Theme;