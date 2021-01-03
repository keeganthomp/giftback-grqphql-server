const { gql } = require('apollo-server')

const typeDefs = gql`
  type Query {
    donationCenters(
      categories: [String]
      city: String
      state: String
      zip: String
    ): [DonationCenter]
  }

  type DonationCenter {
    name: String
    city: String
    state: String
    zip: String
    phone_number: String
    contact_name: String
    email: String
    instagram: String
    website: String
    categories: [String]
  }
`

module.exports = typeDefs
