// Generated by BUCKLESCRIPT, PLEASE EDIT WITH CARE
'use strict';

var Curry = require("bs-platform/lib/js/curry.js");
var NodeTelegramBotApi = require("node-telegram-bot-api");

(( require('dotenv').config() ));

var token = (process.env.TOKEN);

function createBot($staropt$star, cb) {
  var polling = $staropt$star !== undefined ? $staropt$star : true;
  return Curry._1(cb, new NodeTelegramBotApi(token, polling ? ({
                      polling: true
                    }) : ({
                      webhook: 9000
                    })));
}

function init(fn) {
  return createBot(undefined, (function (bot) {
                return bot.on("message", Curry._1(fn, /* Message */0)).on("callback_query", Curry._1(fn, /* CallbackQuery */1)).on("inline_query", Curry._1(fn, /* InlineQuery */2)).on("chosen_inline_result", Curry._1(fn, /* ChosenInlineResult */3));
              }));
}

var port = 9000;

exports.token = token;
exports.port = port;
exports.createBot = createBot;
exports.init = init;
/*  Not a pure module */
