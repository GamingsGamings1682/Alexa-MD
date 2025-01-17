const {
  bot,
  commands,
  sendMenu,
  isPublic,
} = require("../lib/");

bot(
  {
    pattern: "menu",
    fromMe: isPublic,
    type: "info",
  },
  async (message) => {
    await sendMenu(message);
  }
);

bot(
  {
    pattern: "king",
    fromMe: isPublic,
    dontAddCommandList: true,
  },
  async (message, match) => {
    var a='',n=1;
    commands.map(async (command) => { if (command.dontAddCommandList === false && command.pattern !== undefined) { a += `${n++}. ${command.pattern.toString().match(/(\W*)([A-Za-z0-9_ğüşiö ç]*)/)[2].trim()}\n${command.desc}\n\n`};});
    await message.reply(a);
  }
);
