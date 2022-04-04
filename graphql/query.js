import gql from 'graphql-tag'
export const allEventQuery = gql`
  query {
    experiences {
      data {
        id
        attributes {
          topic
          title
          experienceType
          duration
          price
          transportation
          description
          stars
          handifriendly
        }
      }
    }
  }
`
