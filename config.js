const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© SuhailTechInfo" 


global.devs = "2348142778000" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349012500275";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '3'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 2 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "composing" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "true"
global.readmessage = process.env.READ_MESSAGE || "true"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,2349012500275";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_09_12_11_06_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAyMzgsXG4gICAgICAgIDY5LFxuICAgICAgICA0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEyOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDkyLFxuICAgICAgICAxMTIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgODksXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTk4LFxuICAgICAgICA1MCxcbiAgICAgICAgMTksXG4gICAgICAgIDIxOCxcbiAgICAgICAgMTE0LFxuICAgICAgICA3OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDk4LFxuICAgICAgICAxNDUsXG4gICAgICAgIDE2MixcbiAgICAgICAgNzMsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTE2LFxuICAgICAgICAyNTMsXG4gICAgICAgIDg1XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg0LFxuICAgICAgICA1OSxcbiAgICAgICAgMTA1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDIwMCxcbiAgICAgICAgNyxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMyxcbiAgICAgICAgMjU0LFxuICAgICAgICAxNzQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMjksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMjA2LFxuICAgICAgICAyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgOSxcbiAgICAgICAgMTU4LFxuICAgICAgICAyNTEsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQxLFxuICAgICAgICA3NyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxMzcsXG4gICAgICAgIDU4LFxuICAgICAgICAxNTgsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE4LFxuICAgICAgICAxMTVcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDQwLFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzLFxuICAgICAgICAxOSxcbiAgICAgICAgMjMyLFxuICAgICAgICA4OSxcbiAgICAgICAgNTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgNjksXG4gICAgICAgIDcwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTk5LFxuICAgICAgICAzNCxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTksXG4gICAgICAgIDIyNixcbiAgICAgICAgOTIsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQwLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE3LFxuICAgICAgICAyNDksXG4gICAgICAgIDI1MCxcbiAgICAgICAgNzAsXG4gICAgICAgIDMwLFxuICAgICAgICAyOCxcbiAgICAgICAgMjIwLFxuICAgICAgICAyNDAsXG4gICAgICAgIDQxLFxuICAgICAgICAzLFxuICAgICAgICAxMjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxNTksXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMzQsXG4gICAgICAgIDI1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyNTUsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTcsXG4gICAgICAgIDE2NyxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTM4LFxuICAgICAgICAxODIsXG4gICAgICAgIDAsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxODMsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0MCxcbiAgICAgICAgMTE1LFxuICAgICAgICAxOTUsXG4gICAgICAgIDIyNyxcbiAgICAgICAgODIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTc4LFxuICAgICAgICAyMjMsXG4gICAgICAgIDk3LFxuICAgICAgICA5NyxcbiAgICAgICAgMSxcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjMsXG4gICAgICAgIDEzLFxuICAgICAgICA0MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE4LFxuICAgICAgICA2OSxcbiAgICAgICAgMTc3LFxuICAgICAgICAyNDMsXG4gICAgICAgIDg0LFxuICAgICAgICAxLFxuICAgICAgICA1MCxcbiAgICAgICAgODEsXG4gICAgICAgIDQ2LFxuICAgICAgICA4MyxcbiAgICAgICAgMSxcbiAgICAgICAgMjksXG4gICAgICAgIDUyLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgODAsXG4gICAgICAgIDQ1LFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNCxcbiAgICAgICAgNSxcbiAgICAgICAgMTQyLFxuICAgICAgICAzNyxcbiAgICAgICAgNjEsXG4gICAgICAgIDE0LFxuICAgICAgICAyNDMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMjAsXG4gICAgICAgIDcwLFxuICAgICAgICAyMCxcbiAgICAgICAgODgsXG4gICAgICAgIDE1NixcbiAgICAgICAgMjU1LFxuICAgICAgICA2MyxcbiAgICAgICAgMTk5LFxuICAgICAgICA4MCxcbiAgICAgICAgMTkzLFxuICAgICAgICAyLFxuICAgICAgICAxOTcsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTMxLFxuICAgICAgICAxNzIsXG4gICAgICAgIDk1LFxuICAgICAgICA0NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjQxLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEzLFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTAsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTg4LFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDEyMSxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAzNixcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNjUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAyMDAsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxNTYsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAyMzcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDQ5XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTE1LFxuICAgICAgICA0NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3NyxcbiAgICAgICAgMTIsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTksXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjMsXG4gICAgICAgIDk2LFxuICAgICAgICAxNixcbiAgICAgICAgMTk1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTc2LFxuICAgICAgICA0MCxcbiAgICAgICAgMTYzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNzcsXG4gICAgICAgIDIzMCxcbiAgICAgICAgMjM0LFxuICAgICAgICA1MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDczLFxuICAgICAgICAyMDAsXG4gICAgICAgIDE5NixcbiAgICAgICAgMTYxLFxuICAgICAgICA3MyxcbiAgICAgICAgMTI5LFxuICAgICAgICAxNTEsXG4gICAgICAgIDExMSxcbiAgICAgICAgMjE1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjU1LFxuICAgICAgICA4NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOCxcbiAgICAgICAgNTksXG4gICAgICAgIDg1LFxuICAgICAgICA0NCxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIzNixcbiAgICAgICAgNzcsXG4gICAgICAgIDI4LFxuICAgICAgICAxMDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5NixcbiAgICAgICAgMjEzLFxuICAgICAgICAyMjUsXG4gICAgICAgIDE2NixcbiAgICAgICAgOTUsXG4gICAgICAgIDEzLFxuICAgICAgICAyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxNTIsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMTg4LFxuICAgICAgICA0OSxcbiAgICAgICAgMTMxXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJzcFdwSzhkSTBFeG41ZXVHZDRGOVdCWVRPMnROWjJLWHB1am9jb2htckFJPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCIxNE1aSmFFeFJ2YXZxLVdBZXRDZEN3XCIsXG4gIFwicGhvbmVJZFwiOiBcImFkNzFmYjM0LTk4MGUtNDU5MC1hMmVkLWI3NWJhMGM2NmM4YVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxOTcsXG4gICAgICAxMzYsXG4gICAgICAyMTIsXG4gICAgICAxMTksXG4gICAgICAxMjAsXG4gICAgICA4MixcbiAgICAgIDM5LFxuICAgICAgNzgsXG4gICAgICAxNzksXG4gICAgICA3MixcbiAgICAgIDE5NSxcbiAgICAgIDI1MCxcbiAgICAgIDEwOCxcbiAgICAgIDIzMSxcbiAgICAgIDgwLFxuICAgICAgNDAsXG4gICAgICAxNjksXG4gICAgICA3MSxcbiAgICAgIDE4NyxcbiAgICAgIDI1MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA2NixcbiAgICAgIDE5OSxcbiAgICAgIDc1LFxuICAgICAgMTY4LFxuICAgICAgMjMzLFxuICAgICAgMjE1LFxuICAgICAgMTQ2LFxuICAgICAgMjcsXG4gICAgICAxNTgsXG4gICAgICA5MixcbiAgICAgIDEzLFxuICAgICAgODksXG4gICAgICAyNDcsXG4gICAgICAxODMsXG4gICAgICAxODgsXG4gICAgICAyMzgsXG4gICAgICAxODksXG4gICAgICAxMjYsXG4gICAgICA4OSxcbiAgICAgIDIzMFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI1VDZHSEJZTVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0OTAxMjUwMDI3NToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcInByb2Zlc3NvciBPZ2J1amlcIixcbiAgICBcImxpZFwiOiBcIjE0MDg4Mzk4NzAxNzc5MDoyN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNMTE1sWWtERU9ybHJMa0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcImZ5bnBXa3ZReXpwMTJZSC9vWWU2bmUxd2xzVGNEL1h1K3pLcXhNRml3RW89XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwidHo0QjZXNnpuSklXTmtWWUJNZWZ6dnUvKzFJRGdHY3JQUkRFaStxdVFJQ0g3TGM2a21mZ2RCL3RjVjhJUWhTMEhrRGJtVzhpaXh6NWZ0MitIRkE4QkE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiS2V0a0t0M1J4N0pBK2F5cWRTVmlMTnI5Vks3UGNRTzloY2FtUE9tdXhId2VIZlhpZXlxRlBWRktOUkpmWWg2RWJ3L1ZrdVZIZzMvT25XbnJ3TkVCaHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0OTAxMjUwMDI3NToyN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMjE3LFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNTUsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTUwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMjQ1LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTkyLFxuICAgICAgICAgIDc0XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzA4ODQzMzVcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-MD-V2",
  ownername:process.env.OWNER_NAME|| "₿SCORPIO₿",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
  LANG: ( process.env.THEME ||  "GOJO"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
