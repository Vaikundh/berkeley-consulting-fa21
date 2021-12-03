import { extendTheme, theme as base} from "@chakra-ui/react"

const theme = extendTheme({
    colors: {
        brand: {
            50: '#303052',
            100: '#211E61',
            200: '#788390',
        }
    }, 
    fonts: {
        heading: `P052, ${base.fonts.heading}`,
        body: `P052, ${base.fonts.body}`,
    },
})

export default theme;