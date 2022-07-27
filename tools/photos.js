const verticalHeight = ({ name, width }) => {
  return {
    // 'xs': width,
    xs: 130,
    sm: 130,
    md: 130,
    lg: 130,
    xl: 130,
  }[name]
}

const verticalWidth = ({ name, width }) => {
  return {
    // 'xs': width,
    xs: 240,
    sm: 288,
    md: 238,
    lg: 238,
    xl: 288,
  }[name]
}

const getFormatFromBreakpoint = (formats, breakpoint) => {
  return {
    xs: formats?.thumbnail,
    sm: formats?.thumbnail,
    md: formats?.medium,
    lg: formats?.large,
    xl: formats?.large,
  }[breakpoint]?.url
}



export { verticalWidth, verticalHeight, getFormatFromBreakpoint }
