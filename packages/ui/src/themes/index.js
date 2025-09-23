
import { createTheme } from '@mui/material/styles'

// assets
import colors from '@/assets/scss/_themes-vars.module.scss'

// project imports
import componentStyleOverrides from './compStyleOverride'
import themePalette from './palette'
import themeTypography from './typography'

/**
 * Represent theme style and structure as per Material-UI
 * @param {JsonObject} customization customization parameter object
 */

export const theme = (customization) => {
    const color = colors

    // Always use dark theme now
    const themeOption = {
        colors: color,
        heading: color.darkTextTitle,
        paper: color.darkPaper,
        backgroundDefault: color.darkBackground,
        background: color.darkPaper,
        darkTextPrimary: color.darkTextPrimary,
        darkTextSecondary: color.darkTextSecondary,
        textDark: color.darkTextTitle,
        menuSelected: color.primaryMain,
        menuSelectedBack: color.darkLevel1,
        divider: color.darkLevel1,
        customization: { ...customization, isDarkMode: true }
    }

    const themeOptions = {
        direction: 'ltr',
        palette: themePalette(themeOption),
        mixins: {
            toolbar: {
                minHeight: '48px',
                padding: '16px',
                '@media (min-width: 600px)': {
                    minHeight: '48px'
                }
            }
        },
        typography: themeTypography(themeOption)
    }

    const themes = createTheme(themeOptions)
    themes.components = componentStyleOverrides(themeOption)

    return themes
}

export default theme
