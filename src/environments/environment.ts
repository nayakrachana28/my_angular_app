// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //cartapi:"http://localhost:3000/cart",
  //userapi:"http://localhost:3000/users",
  //adminapi:"http://localhost:3000/admin"

  postapi:"https://heroku-json-server-fakedb-ls.herokuapp.com/posts",
  cartapi:"https://heroku-json-server-fakedb-ls.herokuapp.com/cart",
  userapi:"https://heroku-json-server-fakedb-ls.herokuapp.com/users",
  //userapi:"https://localhost:7218/api/Registrations",
  adminapi:"https://heroku-json-server-fakedb-ls.herokuapp.com/admin"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
