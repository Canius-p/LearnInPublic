import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';
import { title } from 'process';
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
  }),
});

//GraphQL schema for the root query
const RootQuery = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: {
    book: {
      type: BookType,
      args: { id: { type: GraphQLString } },
      resolve(parent, args) {
        //fetching data from db
        return { id: args.id, title: 'Book' };
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
