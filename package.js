Package.describe({
  summary: "Reaction COD - COD payments for Reaction Commerce",
  name: "gouthamve:reaction-cod",
  version: "1.2.0",
  git: "https://github.com/gouthamve/reaction-cod.git"
});

Package.onUse(function (api, where) {
  api.versionsFrom('METEOR@1.2');
  api.use("meteor-platform");
  api.use("coffeescript");
  api.use("less");
  api.use("reactioncommerce:core");
  api.use("ongoworks:google-spreadsheets");

  api.addFiles("server/register.coffee",["server"]); // register as a reaction package
  api.addFiles("server/methods.coffee",["server"]);

  api.addFiles([
    "common/collections.coffee",
    "common/routing.coffee"
    ],["client","server"]);

  api.addFiles([
    "client/templates/cod.html",
    "client/templates/cod.coffee",
    "client/templates/cart/checkout/payment/methods/cod/cod.html",
    "client/templates/cart/checkout/payment/methods/cod/cod.coffee"
    ],
    ["client"]);
});
