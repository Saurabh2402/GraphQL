export const typeDefs = `#graphql

type Game{
 id:ID!
 title:String!
 platform:[String!]!
 reviews: [Review!]
}

type Author{
 id:ID!
 rating:Int!
 verified:Boolean!
 reviews: [Review!]

}

type Review{
 id:ID!
 rating:Int!
 content:String!
 author: Author!
 game:Game!
}

type Query{
    games:[Game]
    game(id:ID!): Game

    reviews:[Review]
    review(id:ID!): Review

    authors:[Author]
    author(id:ID!):Author

}

input AddGameInput{
    title:String!
    platform:[String!]!
}

input UpdateGameInput{
    title:String
    platform:[String!]
}

type Mutation{
    deleteGame(id:ID!):[Game]

    addGame(inp:AddGameInput!):Game

    updateGame(id:ID!,inp:UpdateGameInput!):Game
}
`;
