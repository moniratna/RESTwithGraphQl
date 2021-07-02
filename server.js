const express = require('express');
const expressGraphQL = require('express-graphql').graphqlHTTP;
const {GraphQLSchema,
    GraphQLObjectType} = require('graphql');

const app = express();

const schema = new GraphQLSchema({})

app.use('/graphql', expressGraphQL({
    graphiql: true
}))
app.listen(5000., ()=> console.log('server running'));
