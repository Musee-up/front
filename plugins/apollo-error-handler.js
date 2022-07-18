export default ({ graphQLErrors, networkError, operation, forward }, _) => {
  console.log('Global error handler')
  console.log(graphQLErrors, networkError, operation, forward)
  return new Promise((resolve) => {
    resolve()
  })
}
