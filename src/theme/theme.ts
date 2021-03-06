import { extendTheme } from '@chakra-ui/react'


const theme = extendTheme({
    fonts: {
        heading: 'Dosis',
        body: 'Lato',
    },
    textStyles: {
        heading: {
            fontSize: '5xl',
            fontFamily: 'Dosis',
            fontStyle: 'normal',
            fontWeight: '400',
        },
        body: {
            fontSize: '5xl',
            fontFamily: 'Lato',
            fontStyle: 'normal',
            fontWeight: '400',
        },
    },

    // Other foundational style overrides go here
    components: {
        // Button: {
        //     baseStyle: {
        //         borderRadius: '100px',
        //         variant: 'outline',
        //         boxShadow: 'base',
        //         bgColor: '#F8F8F8',
        //         color: 'white',
        //         _hover: {
        //             color: '#000000',
        //             bg: '#F8F8F8',
        //             borderColor: '#211E61',
        //         },
        //         mt: 5,
        //         height: '60px',
        //         width: '25%',
        //     },
        // },
        Text: {
            baseStyle: {
                color: '#211E61',
                textStyle: 'body',
                mb: '1%',
                mt: '7%',
            },
        },
    },
})

export default theme