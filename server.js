const exrpess = require('express')
const expressGraphQL = require('express-graphql')

const port = process.env.port || 4000

var app = express()

app.use('/graphql', expressGraphQL({
  schema: schema,
  graphiql: true
}))


app.listen(port, () => {
  console.log('The graphql server is up in port : 4000')
})