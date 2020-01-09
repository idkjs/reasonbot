type createConfigType = {
  .
  "name": string,
  "adapter": Js.undefined(string),
  "password": Js.undefined(string),
  "multiInstance": Js.undefined(bool)
};

type rxDatabase;

[@bs.obj]
external createConfig :
  (
    ~name: string,
    ~adapter: string=?,
    ~password: string=?,
    ~multiInstance: bool=?,
    unit
  ) =>
  createConfigType =
  "";

[@bs.module "rxdb"]
external create_ : createConfigType => Js.Promise.t(rxDatabase) = "create";

[%%raw "require('rxdb').plugin(require('pouchdb-adapter-memory'))"];

let create = (~name) => create_(createConfig(~name, ~adapter="memory", ()));

type rxCollection;

[@bs.send]
external collection : (rxDatabase, 'a) => Js.Promise.t(rxCollection) = "collection";

[@bs.send.pipe : rxCollection]
external preInsert :
  ([@bs.this] ((rxCollection, 'a) => unit), bool) => rxCollection =
  "preInsert";

[@bs.send.pipe : rxCollection]
external preSave :
  ([@bs.this] ((rxCollection, 'a) => unit), bool) => rxCollection =
  "preSave";

[@bs.send.pipe : rxCollection]
external updateOne : ('a, 'b, 'c, 'd => unit) => rxCollection = "updateOne";
