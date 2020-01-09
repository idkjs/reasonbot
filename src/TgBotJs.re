type telegramBotApi;

type botConfig = {
  polling: Js.undefined(bool),
  webhook: Js.undefined(int),
};

[@bs.obj]
external createBotConfig:
  (~polling: bool=?, ~webhook: int=?, unit) => botConfig =
  "";

[@bs.new] [@bs.module]
external createTelegramBot: (string, botConfig) => telegramBotApi =
  "node-telegram-bot-api";

[@bs.send.pipe: telegramBotApi]
external on: (string, 'a => unit) => telegramBotApi = "on";

type keyboardMarkupKey = {
  text: string,
  switch_inline_query_current_chat: Js.undefined(string),
  callback_data: Js.undefined(string),
};

[@bs.send.pipe: telegramBotApi]
external sendMessage: (float, string, 'a) => telegramBotApi = "sendMessage";
/* https://core.telegram.org/bots/api#user
   https://github.com/sergeysova/telegram-typings/blob/6ab52ba83c17d53947ba8bd667db8f617b6dd32e/javascript/index.d.ts#L172
   */
module User = {
  type t = {
    /**
   * Unique identifier for this user or bot
   */
    id: float,
    /**
   * True, if this user is a bot
   */
    is_bot: bool,
    /**
   * User‘s or bot’s first name
   */
    first_name: string,
    /**
   * User‘s or bot’s last name
   */
    last_name: option(string),
    /**
   * User‘s or bot’s username
   */
    username: option(string),
    /**
   * IETF language tag of the user's language
   * @see https://en.wikipedia.org/wiki/IETF_language_tag
   */
    language_code: option(string),
  };
};
type message = {
  message_id: float,
  text: Js.undefined(string),
  date: float,
  chat: {.},
  from: User.t,
  // from: {. id: int},
  // from: {. id: float},
  entities: array({.}),
};
