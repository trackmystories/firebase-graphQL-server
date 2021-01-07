const { gql } = require('apollo-server-express');

const typeDefs = gql`


  type Property {
    id : ID!
    cursor: String
    title_en: String
    bedroom : String
    property_type : String
    bathroom : String
    community: String
    sub_community: String
    city : String
    completion_status : String
    price: Int
    size : String
    size_units : String
    reference_number : String
    geopoints : String
    price_currency : String
    description_en : String
    private_amenities : String
    permit_no : String
    status : String
    offering_type: String
    rental_period : String
    listing_ref: String
    photo : [Photo]
    agent : Agent
    favAdded : Boolean!
    }

    type Photo {
     id : ID!
     url: String
     }

   type Agent {
     name  : String
     license_no  : String
     id  : String
     phone : String
     email : String
    }


   type PropertyConnection {
     cursor : String!
     properties: [Property!]!
     hasMore: Boolean!
    }


   type PrimeStay {
      Images : [String]
      Price : String
      Bedrooms : String
      Bathroom : String
      Property_Status : String
      Property_Size_Unit : String
      Property_Size : String
      Listing_Agent : String
      Listing_Agent_Phone : String
      Rent_Frequency : String
      Property_Type : String
      City : String
      Locality : String
      Sub_Locality : String
      Property_Description : String
      Furnished: String
      Listing_Agent_Email : String
      Permit_Number : String
      Property_Ref_No : String
      Property_Title : String
      Tower_Name : String
      features :[String]
      geopoints : [String]
   }


    type User {
      uid : ID!
      email: String!
      name: String!
    }


    type AuthPayload {
     user: User!
   }


  type Mutation {
    signupWithEmail(email: String!, password: String!, name: String!): AuthPayload!
    loginWithEmail(email: String!, password: String!): AuthPayload!
    handleForgotPassword(email: String!): AuthPayload!
    handleDeleteProfile(email: String!, name: String!, uid: String!): AuthPayload!
    handleLogout(email: String!, name: String!, uid: String): AuthPayload!
    }

  type Query {
    me : User
    primestay : PrimeStay
    allProperties ( pageSize: Int after: String ) : PropertyConnection!
    properties(offset: Int!, limit: Int!): PropertyConnection!
    property(id: ID!): Property
    propertiesOffplan( pageSize: Int after: String ) : PropertyConnection!
    villa( pageSize: Int after: String ) : PropertyConnection!
    townhouse( pageSize: Int after: String ) : PropertyConnection!
    apartment( pageSize: Int after: String ) : PropertyConnection!
    hotelApartment( pageSize: Int after: String ) : PropertyConnection!
    penthouse( pageSize: Int after: String ) : PropertyConnection!
    office( pageSize: Int after: String ) : PropertyConnection!
    rs( pageSize: Int after: String ) : PropertyConnection!
    rr( pageSize: Int after: String ) : PropertyConnection!
    cr( pageSize: Int after: String ) : PropertyConnection!
    cs( pageSize: Int after: String ) : PropertyConnection!
  }
`;


module.exports = typeDefs;
