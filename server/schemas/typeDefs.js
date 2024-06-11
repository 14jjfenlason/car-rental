const typeDefs = ` 
type User {
          _id: ID
          username: String
          email: String
          password: String
          reservations: []
       }

  
  type Query {
    User: User
  }


    type Auth{
      token:ID
      user: User    
      }
      `







module.exports = typeDefs;
