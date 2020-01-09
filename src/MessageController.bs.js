// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var User$Reasonbot = require("./User.bs.js");

var inline_keyboard = /* array */[
  /* array */[{
      text: "\xd8\xac\xd8\xb3\xd8\xaa\xd8\xac\xef\xbf\xbd\x88\xef\xbf\xbd\x8c \xd8\xa2\xef\xbf\xbd\x87\xef\xbf\xbd\x86\xda\xaf",
      switch_inline_query_current_chat: "",
      callback_data: undefined
    }],
  /* array */[{
      text: "\xd8\xa2\xef\xbf\xbd\x87\xef\xbf\xbd\x86\xda\xaf\xef\xbf\xbd\x87\xd8\xa7\xef\xbf\xbd\x8c \xd8\xac\xd8\xaf\xef\xbf\xbd\x8c\xd8\xaf",
      switch_inline_query_current_chat: undefined,
      callback_data: "song_latest"
    }],
  /* array */[{
      text: "\xd8\xa2\xef\xbf\xbd\x87\xef\xbf\xbd\x86\xda\xaf\xef\xbf\xbd\x87\xd8\xa7\xef\xbf\xbd\x8c \xd8\xa8\xd8\xb1\xd8\xaa\xd8\xb1",
      switch_inline_query_current_chat: undefined,
      callback_data: "song_top"
    }],
  /* array */[{
      text: "\xd8\xa2\xef\xbf\xbd\x84\xd8\xa8\xef\xbf\xbd\x88\xef\xbf\xbd\x85\xef\xbf\xbd\x87\xd8\xa7\xef\xbf\xbd\x8c \xd8\xac\xd8\xaf\xef\xbf\xbd\x8c\xd8\xaf",
      switch_inline_query_current_chat: undefined,
      callback_data: "album_latest"
    }],
  /* array */[{
      text: "\xd8\xa2\xef\xbf\xbd\x84\xd8\xa8\xef\xbf\xbd\x88\xef\xbf\xbd\x85\xef\xbf\xbd\x87\xd8\xa7\xef\xbf\xbd\x8c \xd8\xa8\xd8\xb1\xd8\xaa\xd8\xb1",
      switch_inline_query_current_chat: undefined,
      callback_data: "album_top"
    }]
];

var defaultKeys = {
  reply_markup: inline_keyboard
};

function sendDefaultKeys(bot, id) {
  bot.sendMessage(id, "\xef\xbf\xbd\x8c\xda\xa9\xef\xbf\xbd\x8c \xd8\xa7\xd8\xb2 \xda\xaf\xd8\xb2\xef\xbf\xbd\x8c\xef\xbf\xbd\x86\xef\xbf\xbd\x87 \xef\xbf\xbd\x87\xd8\xa7\xef\xbf\xbd\x8c \xd8\xb2\xef\xbf\xbd\x8c\xd8\xb1 \xd8\xb1\xd8\xa7 \xd8\xa7\xef\xbf\xbd\x86\xd8\xaa\xd8\xae\xd8\xa7\xd8\xa8 \xda\xa9\xef\xbf\xbd\x86\xef\xbf\xbd\x8c\xd8\xaf:", defaultKeys);
  return /* () */0;
}

function searchKey(msg) {
  return {
          reply_markup: /* array */[/* array */[{
                text: "\xd8\xac\xd8\xb3\xd8\xaa\xd8\xac\xef\xbf\xbd\x88",
                switch_inline_query_current_chat: msg,
                callback_data: undefined
              }]]
        };
}

function sendSearchKey(bot, id) {
  bot.sendMessage(id, "\xd8\xb1\xef\xbf\xbd\x88\xef\xbf\xbd\x8c \xd8\xaf\xda\xa9\xef\xbf\xbd\x85\xef\xbf\xbd\x87 \xd8\xb2\xef\xbf\xbd\x8c\xd8\xb1 \xda\xa9\xef\xbf\xbd\x84\xef\xbf\xbd\x8c\xda\xa9 \xda\xa9\xef\xbf\xbd\x86 \xef\xbf\xbd\x88 \xd8\xb5\xd8\xa8\xd8\xb1 \xda\xa9\xef\xbf\xbd\x86 \xd8\xaa\xd8\xa7 \xef\xbf\xbd\x86\xd8\xaa\xd8\xa7\xef\xbf\xbd\x8c\xd8\xac \xd8\xb1\xd8\xa7 \xd8\xa8\xd8\xa8\xef\xbf\xbd\x8c\xef\xbf\xbd\x86\xef\xbf\xbd\x8c:", searchKey);
  return /* () */0;
}

function handler(user, bot, msg) {
  var msgFromId = {
    id: msg.from.id
  };
  var match = msg.text;
  if (match !== undefined) {
    switch (match) {
      case "/menu" :
          return sendDefaultKeys(bot, msg.from.id);
      case "/start" :
          User$Reasonbot.upsertObj(user, msgFromId);
          return sendDefaultKeys(bot, msg.from.id);
      default:
        User$Reasonbot.upsertObj(user, msgFromId);
        return sendSearchKey(bot, msg.from.id);
    }
  } else {
    return /* () */0;
  }
}

exports.inline_keyboard = inline_keyboard;
exports.defaultKeys = defaultKeys;
exports.sendDefaultKeys = sendDefaultKeys;
exports.searchKey = searchKey;
exports.sendSearchKey = sendSearchKey;
exports.handler = handler;
/* No side effect */
