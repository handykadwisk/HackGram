import {gql} from '@apollo/client'

export const GET_POSTS = gql`
  query Posts {
  posts {
    _id
    content
    tags
    imgUrl
    authorId
    author {
      _id
      username
      email
      name
    }
    createdAt
    updatedAt
  }
}
`