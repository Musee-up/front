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
          location
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

export { languagesQuery, themesQuery, eventQuery, allEventQuery }
