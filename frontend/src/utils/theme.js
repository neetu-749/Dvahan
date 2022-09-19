import { grey, deepOrange } from '@mui/material/colors';

const theme = {
    palette: {
        black: {
            main: grey[900],
        },
        neetu: {
            light: '#002984',
            main: '#ffff',
            dark: '#303f9f',
            contrastText: '#000',
          },
        orange: {
            main: deepOrange[500],
            light: deepOrange[100]

        },
        lightOrange: {
            main: deepOrange[400]
        },
        superLightOrange: {
            main: deepOrange[200]
        },
        lightGrey: {
            main: grey[100]
        }
    },
    fontFamily: 'Poppins'
};

export default theme;