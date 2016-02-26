'use strict';

process.chdir(__dirname);

var strapi = require("strapi");
var fixtures = require('./loadFixtures');

var nwb = require("./hooks/nwb");
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

    nwb(strapi);
  });
});
