import { createTheme } from "@mui/material/styles"
import { yellow, pink } from "@mui/material/colors"
import { ptBR as ptB_datagrid } from "@mui/x-data-grid/locales"
import { ptBR as ptB_datapicker } from "@mui/x-date-PickersLayout/locales"
// import { ptBR as ptB_datapicker } from "@mui/x-date-pickers/locales"

const theme = createTheme({
    palette: {
        mode: 'dark',       // Vamos usar o modo escuro
        primary: {          // Cor Primária
            main: yellow[500]
        },
        secondary: {        // Cor Secundária
            main: pink[500]
        }
    },
    typography: {
        h1: {
            fontSize: '30pt',
            fontWeight: 'bold'
        }
    }
}, ptB_datagrid, ptB_datapicker)

export default theme