const typeDefs = ` type User {
          _id: ID
          username: String
          email: String
          password: String
        savedCars: [Car]
        }
  
  type Query {
    User: User
  }


  }
    type Auth{
      token:ID
      user: User
  
      
      }`

     





module.exports = typeDefs;
