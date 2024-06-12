
          _id: ID
          username: String
          email: String
          password: String
        savedCars: [Car]
        }
  

        type Car{
        _id: ID
        carMake: String
        carModel:String
        carYear: String
        carType: String
        Image: String
        
        }
  type Query {
    
  users: [User]
    user(username: String!): User

  }
    type Auth{
      token:ID!
      user: User
  
      
      }`;

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
