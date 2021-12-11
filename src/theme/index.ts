import { extendTheme } from '@chakra-ui/react'


const overrides = {

  // Other foundational style overrides go here
  components: {
    Button: {
      baseStyles: {
        borderRadius: "100px",
        variant: "outline",
        boxShadow: "base",
        bgColor: "#211E61",
        color: "white",
        _hover: {
            color: '#000000',
            bg: '#F8F8F8',
            borderColor: '#211E61',
        },
        mt: 5,
        height: "60px",
        width: "35%",
      }
    },
    Text: {
      baseStyles: {
        color: "#211E61",
        fontSize: "5xl",
        fontFamily: "P052",
        fontStyle: "normal",
        fontWeight: "bold",
        mb: "12%",
        mt: "7%",
      }
    }
  },
}

export default extendTheme(overrides)