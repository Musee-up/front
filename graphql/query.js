import gql from 'graphql-tag'

const themesQuery = gql`
  query {
    themes {
      data {
        attributes {
          name
        }
      }
    }
  }
`

const languagesQuery = gql`
  query {
    languages {
      data {
        attributes {
          value
        }
      }
    }
  }
`
export { languagesQuery, themesQuery }
