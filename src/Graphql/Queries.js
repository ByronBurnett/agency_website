import { GraphQLClient, gql } from "graphql-request";

export const graphcms = new GraphQLClient(process.env.REACT_APP_API);

const category = `
  id,
  name,
  slug
`;

const comment = `
id,
name,
email,
comment

`;

const post = `
id,
title,
slug,
updatedAt
createdAt
coverPhoto {
url
}
content {
html
}
author{
bio
id 
name
photo {
url 
}

}

`;

export const QUERY_POSTS = gql`
  query MyQuery {
  posts {
    id
    title
    slug
    updatedAt
    createdAt
    category {
    name
    slug
    id
  }
    coverPhoto {
      url
    }
    author {
      bio
      id
      name
      photo {
        url
      }
    }
    content {
      html
    }
  }
  

  }
`;

export const QUERY_SLUG_CATEGORIES = gql`
  query GetCategories {
    categories {
      name
      slug
    }
  }
`;

export const QUERY_BY_CATEGORY = gql`
  query MyQuery( $slug: String!) {
  posts(where: {category_some: {slug: $slug }}) {
    author {
      bio
      name
      id
      photo {
        url
      }
    }
    category {
      name
      id
      slug
    }
    createdAt
    slug
    title
    coverPhoto {
      url
    }
    content {
html
}
}

}
`

export const QUERY_ONE_POST = gql`
  query GetOnePost( $slug: String!) {
  posts(where:{slug: $slug }) {
    author {
      bio
      name
      id
      photo {
        url
      }
    }
    category {
      name
      id
      slug
    }
    createdAt
    slug
    title
    coverPhoto {
      url
    }
    content {
html
}
comment{
  id
name
email
comment
}
}

}
`

export const QUERY_RECENT_POST = gql`
query MyQuery {
  posts(
    orderBy: createdAt_ASC
    last: 3
  ) {
    title
    coverPhoto {
      url
    }
    createdAt
    slug
  }
}   

`;


export const QUERY_SIMILAR_POSTS = gql`
query MyQuery($slug: String!, $categories: [String!]) {
  posts(
    where: {slug_not: $slug, AND: {category_some: {slug_in: $categories}}}
    last: 3
  ) {
    title
    coverPhoto {
      url
    }
    createdAt
    slug
  }
}
`;

