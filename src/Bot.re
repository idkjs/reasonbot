
Dotenv.config();

// let token: string =
//   Js.Dict.get(Node.Process.process##env, "TOKEN")->Belt.Option.getExn;
let token: string = Js.Dict.unsafeGet(Node.Process.process##env, "TOKEN");
let port = 9000;

let createBot = (~polling: bool=true, cb) =>
  TgBotJs.(
    (
      polling
        ? createBotConfig(~polling=true, ())
        : createBotConfig(~webhook=port, ())
    )
    |> createTelegramBot(token)
  )
  |> cb;

type messageType =
  | Message
  | CallbackQuery
  | InlineQuery
  | ChosenInlineResult;

let init = (fn: (messageType, 'a) => unit) =>
  createBot(bot =>
    TgBotJs.(
      bot
      |> on("message", fn(Message))
      |> on("callback_query", fn(CallbackQuery))
      |> on("inline_query", fn(InlineQuery))
      |> on("chosen_inline_result", fn(ChosenInlineResult))
    )
  );
