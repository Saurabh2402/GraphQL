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

  Game: {
    reviews(parent) {
      return _db.reviews.filter((r) => r.game_id === parent.id);
    },
  },

  Author: {
    reviews(parent) {
      return _db.reviews.filter((r) => r.author_id === parent.id);
    },
  },

  Review: {
    game(parent) {
      return _db.games.find((g) => g.id === parent.game_id);
    },

    author(parent) {
      return _db.authors.find((a) => a.id === parent.author_id);
    },
  },
};
