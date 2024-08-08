import { GraphQLClient, gql } from "graphql-request";


export const graphcms = new GraphQLClient(process.env.REACT_APP_API, {
    headers: {
        authorization: `Bearer ${process.env.REACT_APP_TOKEN}`
    }
});

const obj = `

$name: String!,
$email: String!,
$comment: String!,
$slug: String!,

`

const data = `
name: $name, 
email: $email, 
comment: $comment,
post: {
connect: {slug: $slug}
}

`


export const CREATE_COMMENT = gql`
mutation CreateComment($name: String!, $email: String!, $comment: String!, $slug: String!) {
      createComment(data: {name: $name, email: $email, comment: $comment, post: {connect: {slug: $slug}}}) { id }
    }
   

`
