'use strict';

var _ = require("lodash");

process.chdir(__dirname);

var strapi = require("strapi");
var fixtures = require('./loadFixtures');

var nwb = require("./hooks/nwb");
var reactAdmin = require("./hooks/admin/server");
var data = require("./fixtures");

strapi.start({}, function(error, strapi) {
  console.log("loading fixtures");

  fixtures({
    collections: strapi.orm.collections,
    fixtures: data
  }, function(error) {
    if(!error)
      console.log("fixtures loaded");
    else
      console.log("fixtures error", error);

    console.log(_.keys(strapi.orm.collections));

    reactAdmin(strapi);
    nwb(strapi);

  });
});


// import {GraphQLSchema, GraphQLObjectType, GraphQLNonNull} from "graphql";
//
// var {nodeInterface, nodeField} = nodeDefinitions(
//   (globalId) => {
//     var {type, id} = fromGlobalId(globalId);
//     if (type === 'Game') {
//       return getGame(id);
//     } else if (type === 'HidingSpot') {
//       return getHidingSpot(id);
//     } else {
//       return null;
//     }
//   },
//   (obj) => {
//     if (obj instanceof Game) {
//       return gameType;
//     } else if (obj instanceof HidingSpot)  {
//       return hidingSpotType;
//     } else {
//       return null;
//     }
//   }
// );
//
// var gameType = new GraphQLObjectType({
//   name: 'Game',
//   description: 'A treasure search game',
//   fields: () => ({
//     id: globalIdField('Game'),
//     hidingSpots: {
//       type: hidingSpotConnection,
//       description: 'Places where treasure might be hidden',
//       args: connectionArgs,
//       resolve: (game, args) => connectionFromArray(getHidingSpots(), args),
//     },
//     turnsRemaining: {
//       type: GraphQLInt,
//       description: 'The number of turns a player has left to find the treasure',
//       resolve: () => getTurnsRemaining(),
//     },
//   }),
//   interfaces: [nodeInterface],
// });
//
// var hidingSpotType = new GraphQLObjectType({
//   name: 'HidingSpot',
//   description: 'A place where you might find treasure',
//   fields: () => ({
//     id: globalIdField('HidingSpot'),
//     hasBeenChecked: {
//       type: GraphQLBoolean,
//       description: 'True if this spot has already been checked for treasure',
//       resolve: (hidingSpot) => hidingSpot.hasBeenChecked,
//     },
//     hasTreasure: {
//       type: GraphQLBoolean,
//       description: 'True if this hiding spot holds treasure',
//       resolve: (hidingSpot) => {
//         if (hidingSpot.hasBeenChecked) {
//           return hidingSpot.hasTreasure;
//         } else {
//           return null;  // Shh... it's a secret!
//         }
//       },
//     },
//   }),
//   interfaces: [nodeInterface],
// });
//
// var queryType = new GraphQLObjectType({
//   name: 'Query',
//   fields: () => ({
//     node: nodeField,
//     game: {
//       type: gameType,
//       resolve: () => getGame(),
//     },
//   }),
// });
//
//
// var CheckHidingSpotForTreasureMutation = mutationWithClientMutationId({
//   name: 'CheckHidingSpotForTreasure',
//   inputFields: {
//     id: { type: new GraphQLNonNull(GraphQLID) },
//   },
//   outputFields: {
//     hidingSpot: {
//       type: hidingSpotType,
//       resolve: ({localHidingSpotId}) => getHidingSpot(localHidingSpotId),
//     },
//     game: {
//       type: gameType,
//       resolve: () => getGame(),
//     },
//   },
//   mutateAndGetPayload: ({id}) => {
//     var localHidingSpotId = fromGlobalId(id).id;
//     checkHidingSpotForTreasure(localHidingSpotId);
//     return {localHidingSpotId};
//   },
// });
//
// var mutationType = new GraphQLObjectType({
//   name: 'Mutation',
//   fields: () => ({
//     checkHidingSpotForTreasure: CheckHidingSpotForTreasureMutation,
//   }),
// });
//
// export var Schema = new GraphQLSchema({
//   query: queryType,
//   mutation: mutationType
// });
//
//
//
//
