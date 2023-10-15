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

  Mutation: {
    deleteGame(_, args) {
      return (_db.games = _db.games.filter((g) => g.id != args.id));
    },

    addGame(_, args) {
      console.log("args::", args);
      const newGame = {
        ...args.inp,
        id: Math.floor(Math.random() * 10000).toString(),
      };
      _db.games.push(newGame);
      return newGame;
    },

    updateGame(_, args) {
      console.log("args::", args);
      const updatedProperties = args.inp;
      for (let i = 0; i < _db.games.length; i++) {
        if (args.id === _db.games[i].id) {
          console.log("Game found at index: ", i);
          for (let property in updatedProperties) {
            if (property in _db.games[i]) {
              _db.games[i][property] = updatedProperties[property];
            }
          }
          return _db.games[i];
        } else {
          console.log("Game not found, id of game: ", args.id);
        }
      }
      return null;
    },
  },
};
