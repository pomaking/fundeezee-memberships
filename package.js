Package.describe({
  summary: "Fundeeze memberships",
  name: "fundeezee:memberships",
  version: "0.0.1",
  git: "https://github.com/ongoworks/reaction-helloworld.git"
});

Package.on_use(function (api, where) {
  api.versionsFrom('METEOR@1.0');
  api.use("meteor-platform@1.2.1");
  api.use("templating");
  api.use("coffeescript");
  api.use("less");
  api.use("reactioncommerce:core@0.4.1");

  api.addFiles("server/register.coffee",["server"]); // register as a reaction package
  
  api.addFiles("common/membershipSchema.js",["client","server"]);
  
  api.addFiles("common/routing.coffee",["client","server"]); // common routing

  api.addFiles([
    "client/templates/memberships/memberships.html",
    //"client/templates/helloworld/helloworld.coffee",
    //"client/templates/helloworld/helloworld.less",

    "client/templates/dashboard/widget/widget.html",
    "client/templates/dashboard/widget/widget.coffee",
    "client/templates/dashboard/widget/widget.less"
  ], ["client"]);
});
