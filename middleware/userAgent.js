const userAgent = (context) => {
  const userAgent = process.server
    ? context.req.headers['user-agent']
    : navigator.userAgent
  context.isMobile = /mobile/i.test(userAgent)
}

export default userAgent
