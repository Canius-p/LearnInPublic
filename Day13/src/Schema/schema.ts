import { GraphQLObjectType, GraphQLString, GraphQLSchema } from 'graphql';
import { title } from 'process';

const books = [
  { title: 'book1', id: '1', genre: 'fiction', author: 'author1' },
  { title: 'book2', id: '2', genre: 'fiction', author: 'author2' },
  { title: 'book3', id: '3', genre: 'literature', author: 'author3' },
];

const authors = [
  { name: 'author1', id: '1', rating: '5' },
  { name: 'author2', id: '2', rating: '4' },
  { name: 'author3', id: '3', rating: '3' },
];
const BookType = new GraphQLObjectType({
  name: 'Book',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    title: {
      type: GraphQLString,
    },
    genre: {
      type: GraphQLString,
    },
    author: {
      type: GraphQLString,
    },
  }),
});

const AuthorType = new GraphQLObjectType({
  name: 'Author',
  fields: () => ({
    id: {
      type: GraphQLString,
    },
    name: {
      type: GraphQLString,
    },
    rating: {
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
      resolve(parent, { id }) {
        //fetching data from db
        books.filter(b => b.id === id);
      },
    },
    author: {
      type: AuthorType,
      args: { id: { type: GraphQLString } },
      resolve(parent, { id }) {
        //fetching data from db
        authors.filter(a => a.id === id);
      },
    },
  },
});

export default new GraphQLSchema({
  query: RootQuery,
});
