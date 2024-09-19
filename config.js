// VIRUSI-MBAYA-MD 

const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "null";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "ngwathegang3@gmai.com";
global.location = "Kenya";
global.mongodb = process.env.MONGODB_URI || "mongodb+srv://giftedte:SER3spXjIJSOwrPT@cluster0.ni61idp.mongodb.net/?retryWrites=true&w=majority";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Nairobi";
global.github = process.env.GITHUB || "https://github.com/Vurusian/Virusi-Mbaya-Md";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029VafL5zUKbYMKza6vAv1V";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029VafL5zUKbYMKza6vAv1V";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://https://telegra.ph/file/7f03fb699a244da228740.jpg";
global.devs = "254748721079,254762016957,254728782591,254700505700";
global.sudo = process.env.SUDO || "254748721079";
global.owner = process.env.OWNER_NUMBER || "923288738955";
global.style = process.env.STYLE || "4";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "true";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/8aa6951466328563add47.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "2547xxxx";
global.read_status_from = process.env.READ_STATUS_FROM || "2547xxxx";

global.api_smd = "https://api-smd.onrender.com";
global.scan = "https://pearni-3db1e9057508.herokuapp.com";

global.SESSION_ID =
  process.env.SESSION_ID |Virusi;;;eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMk5hMWl0VTNScXRYenc1aFdSaFpqaVhpYnV4Z2hyWU1mTDlndFBlVTBFND0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiT2J0Vlh2K0ZTMTRvWWdXSTVGdjV4YjFwSkJhU2xiWThSVnRidFZ3Vi9CYz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrRElrQ2Q0d3dJVnBRZGhBTTZSRFdTRlBaRHY4NlRHM3kyMXRsM2s1VzJBPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJPVG1LV1ZCNjBRcGU1QVU5SE5zNGVlZDBCZ2E3Z1RmUVB5ZmUvSFVreGljPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IldCV1VoMmcxQVRySWR5TS9WN3RVYysrZnduMGxwTndibTlFK3hTNzgwa3c9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtlTlY0R1BvWW5sa1E2Vi9BUnNGSHNjSHZ4OFA2WXk1bUZtM29PMFc5eFU9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidU9UekFEQU1Ja3UzTEVTN3l1ZHhiYklaOUpXc1JHU244QkFsVzc5OEwyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoic3g4bjcrY0VUWVNEVWEyWFVSNlRCMFpTdHpkc0dJNDBXaWRpcm9FNWF6bz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IktLQUwvMHpZaU82MlV1QklZaG56TVdJa3pYU1RqRHFMVngyZUZNa3VRejVCeTI4MXpNK3BaRzIwak9WUGJuZUZkcWsyMFpzRmw4Y05leHVQbThWL2hRPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MzYsImFkdlNlY3JldEtleSI6Ink1dndiVjlyMi9RemRNWHVOaksvcFQvTXpGcjBxZUtFRFRYUXFxbXV2Kzg9IiwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzIjpbeyJrZXkiOnsicmVtb3RlSmlkIjoiMTY0Nzc5NDAyNjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiMjdGNjE2RjY3NjAwQzlCQzE3M0RGMTk4RkI3OTk2QzIifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjczODQ1NX0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTY0Nzc5NDAyNjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODhDN0QxMkExMkI3QkQ1MkI4NUQzRjlDMkMyQzc4QUEifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjczODQ1Nn0seyJrZXkiOnsicmVtb3RlSmlkIjoiMTY0Nzc5NDAyNjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiQzkyOEI3MDkyNUMzMzNDNUYyNTVFOEMyN0Q2NkNCNUUifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjczODQ1N30seyJrZXkiOnsicmVtb3RlSmlkIjoiMTY0Nzc5NDAyNjdAcy53aGF0c2FwcC5uZXQiLCJmcm9tTWUiOnRydWUsImlkIjoiODVCMjg3NkU0ODUwRDEwRjI3RTJBMEJCRUEwMUIzNjYifSwibWVzc2FnZVRpbWVzdGFtcCI6MTcyNjczODQ1N31dLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTeW5jQ291bnRlciI6MSwiYWNjb3VudFNldHRpbmdzIjp7InVuYXJjaGl2ZUNoYXRzIjpmYWxzZX0sImRldmljZUlkIjoiazVEX0c1N01RcmEta3ViblRPMi1IdyIsInBob25lSWQiOiI1ZjI1Y2I0OC00NTk4LTRjNjktOTI2MC0wYWZiMzI4YzFlZjUiLCJpZGVudGl0eUlkIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMkk2dWJsRVo4NW9SKzU0ZzNCb01GQVpiUXlzPSJ9LCJyZWdpc3RlcmVkIjp0cnVlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlAzajZRZ0M2NGRBLytaTUpzdlo4djBhdzB0VT0ifSwicmVnaXN0cmF0aW9uIjp7fSwicGFpcmluZ0NvZGUiOiI0SjNMOEg2SiIsIm1lIjp7ImlkIjoiMTY0Nzc5NDAyNjc6MUBzLndoYXRzYXBwLm5ldCIsIm5hbWUiOiJYRCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDS0cycXBJQ0VJZmdyN2NHR0FFZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoidHcyYnBjeHhRRm9sWXFDRVVLd1l6cnNaeWtHQy9CbWxrbWdsTHJ5WTlFTT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiTnp0L2RJdVZJbGo1bGRLWmJBcURNdHlHV0I3Slg5NDJ3WHJBbTBTUk9NS3BkQ1htOGpLUzM4OVk0WjVlOXFmMms2bHRsc2E3SUFjbkJKTGxmaHljRHc9PSIsImRldmljZVNpZ25hdHVyZSI6Ink0VENPOUM4Z04xa0dwT0ZvZ0tQeThFUlROWkZjSGp6K01OR3ZQVG1VOUdNT2ltME9ERWdGNWdPVURicHc3Y2hoN3oraXBVRXNFSUNJS1RHQTRwUmh3PT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiMTY0Nzc5NDAyNjc6MUBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJiY05tNlhNY1VCYUpXS2doRkNzR002N0djcEJndndacFpKb0pTNjhtUFJEIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzI2NzM4NDUyLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQUNEQyJ9|
module.exports = {
  menu: process.env.MENU || "2", /*Leave it in Default else bot will Crash*/
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "🦠AYYAN-ALI-XD🦠🦟",
  author: process.env.PACK_AUTHER || "AYYAN-ALI-XD",
  packname: process.env.PACK_NAME || "🦠",
  botname: process.env.BOT_NAME || "AYYAN-ALI-XD",
  ownername: process.env.OWNER_NAME || "AYYAN-ALI-XD",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "neLbXXrp8bSDcohnp1CW5UEa",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "VIRUSI").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
