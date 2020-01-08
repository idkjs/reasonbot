/* if getting token from process##env use bs-dotenv */
Dotenv.config();
let token = Js.Dict.get(Node.Process.process##env, "TOKEN")->Belt.Option.getExn;
// let _ = Js.log2("token", token);
/* https://dev.to/johnridesabike/optional-chaining-in-reason-1im6 */
type unreliableToken = {doesTokenExist: option(doesTokenExist)}
and doesTokenExist = {orThis: option(string)};

let everythingExists = {doesTokenExist: Some({orThis: Some(token)})};
let everythingExistsNone = {doesTokenExist: Some({orThis: None})};
let doesntExist = {doesTokenExist: None};

let result =
  switch (everythingExists) {
  | {doesTokenExist: None}
  | {doesTokenExist: Some({orThis: None})} => None
  | {doesTokenExist: Some({orThis: Some(x)})} => Some(x)
  };
Js.log(result)
