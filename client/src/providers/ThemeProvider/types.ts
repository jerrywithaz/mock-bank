export type ThemeProviderProps = {
    children: React.ReactNode
}

declare module '@material-ui/core/styles/createMuiTheme' {

  interface Theme {
    appDrawer: {
      
    }
  }

  interface ThemeOptions {
    appDrawer?: {
      
    }
  }

}