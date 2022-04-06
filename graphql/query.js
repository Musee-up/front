import gql from 'graphql-tag'
const allEventQuery = gql`
  query {
    experiences {
      data {
        id
        attributes {
          title
          duration
          price
          transportation
          description
          stars
          handifriendly
          groupSize
          themes {
            data {
              attributes {
                name
              }
            }
          }
          languages {
            data {
              attributes {
                value
              }
            }
          }
        }
      }
    }
  }
`
const eventQuery = gql`
  query experience($id: ID!) {
    experience(id: $id) {
      data {
        attributes {
          title
          duration
          price
          transportation
          description
          stars
          groupSize
          handifriendly
          themes {
            data {
              attributes {
                name
              }
            }
          }
          languages {
            data {
              attributes {
                value
              }
            }
          }
          photos {
            data {
              attributes {
                previewUrl
                url
              }
            }
          }
        }
      }
    }
  }
`

export { eventQuery, allEventQuery }
