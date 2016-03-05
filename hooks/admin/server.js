var config = require("./config");



module.exports = function(strapi){
  console.log("React-admin config loaded");
  strapi.app.use(function*(next){
      if(this.originalUrl.indexOf("/api/admin-config") > -1)
        this.body = config;
      else {
        yield next;
      }
  })

}
