// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");

var userSchema = {
  title: "user schema",
  version: 0,
  type: "object",
  properties: {
    id: {
      type: "string",
      primary: true
    },
    first_name: {
      type: "string"
    },
    last_name: {
      type: "string"
    },
    username: {
      type: "string"
    },
    is_bot: {
      type: "boolean"
    },
    language_code: {
      type: "string"
    },
    created_at: {
      type: "number"
    },
    updated_at: {
      type: "number"
    },
    version: {
      type: "number",
      default: 0
    }
  }
};

function onCreate(d) {
  var now = Date.now();
  d.created_at = now;
  d.updated_at = now;
  return /* () */0;
}

function onUpdate(d) {
  var now = Date.now();
  d.updated_at = now;
  var ver = d.version + 1 | 0;
  d.version = ver;
  return /* () */0;
}

function createUser(db, cb) {
  db.collection({
          name: "user",
          schema: userSchema
        }).then((function (col) {
          col.preInsert((function ($$document) {
                    return onCreate($$document);
                  }), false).preSave((function ($$document) {
                  return onUpdate($$document);
                }), false);
          Curry._1(cb, col);
          return Promise.resolve(/* () */0);
        }));
  return /* () */0;
}

function upsertObj(col, user) {
  col.updateOne({
        id: user.id
      }, user, {
        upsert: true
      }, (function (err) {
          if (err == null) {
            console.log("Error occured during upsert:");
            console.log(err);
            return /* () */0;
          } else {
            return 0;
          }
        }));
  return /* () */0;
}

exports.userSchema = userSchema;
exports.onCreate = onCreate;
exports.onUpdate = onUpdate;
exports.createUser = createUser;
exports.upsertObj = upsertObj;
/* No side effect */
