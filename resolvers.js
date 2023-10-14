import _db from "./_db.js";

export const resolvers = {
  Query: {
    games() {
      return _db.games;
    },
    authors() {
      return _db.authors;
    },
    reviews() {
      return _db.reviews;
    },

    game(_, args) {
      const id = args.id;
      return _db.games.find((game) => id === game.id);
    },

    author(_, args) {
      const id = args.id;
      return _db.authors.find((author) => id === author.id);
    },

    review(_, args) {
      const id = args.id;
      return _db.reviews.find((review) => id === review.id);
    },
  },
};
