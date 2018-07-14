export interface IThemeInterface {
  font: {
    family: string
    weight: {
      bold: number
      normal: number
    }
  }
  spacing: {
    half: string
    single: string
    double: string
  }
}

export const theme: IThemeInterface = {
  font: {
    family: "'Helvetica Neue', sans-serif",
    weight: {
      bold: 500,
      normal: 300
    }
  },
  spacing: {
    half: '0.5em',
    single: '1em',
    double: '2em'
  }
}
