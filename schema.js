const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
  GraphQLList,
  GraphQLNonNull
} = require('graphql')

// Hardcoded data
const customers = [{
  id: '1',
  name: 'Alan',
  email: 'alan@gmail.com',
  age: 22
}, {
  id: '2',
  name: 'Aleena',
  email: 'aleena@gmail.com',
  age: 17
}, {

  id: '3',
  name: 'james',
  email: 'james@gmail.com',
  age: 25
}]

// Customer Type
const CustomerType = new GraphQLObjectType({
  name: 'customer',
  fields: () => ({
    id: {
      type: GraphQLString
    },
    name: {
      type: GraphQLString
    },
    email: {
      type: GraphQLString
    },
    age: {
      type: GraphQLInt
    }
  })
})


// Root Query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    customer: {
      type: CustomerType, // above
      args: {
        id: {
          GraphQLString
        },
        resolve(parentValue, args) { // returning data
          for (let i = 0; i < customers.length; i++) {
            if (customers[i].id == args.id) {
              return customers[i]
            }
          }
        }
      }
    }
  }
})

module.exports = new GraphQLSchema({
  query: RootQuery
})