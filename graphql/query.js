import gql from 'graphql-tag'
const allEventQuery = gql`
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
const eventQuery = gql`
  query experience($id: ID!) {
    experience(id: $id) {
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

export { eventQuery, allEventQuery }
