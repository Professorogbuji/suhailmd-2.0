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


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347034169269";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "false" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com/" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_17_40_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxNDksXG4gICAgICAgIDEyNixcbiAgICAgICAgNDMsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyMDAsXG4gICAgICAgIDg1LFxuICAgICAgICAxNTUsXG4gICAgICAgIDk1LFxuICAgICAgICAyMTksXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjksXG4gICAgICAgIDI5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMTcsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMjgsXG4gICAgICAgIDQxLFxuICAgICAgICA1NCxcbiAgICAgICAgNDIsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTgsXG4gICAgICAgIDIxOCxcbiAgICAgICAgNzMsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMixcbiAgICAgICAgNjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDQwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjU1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMTk0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDExMyxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMjEsXG4gICAgICAgIDgyLFxuICAgICAgICA3NSxcbiAgICAgICAgMTI5LFxuICAgICAgICA3NixcbiAgICAgICAgMjM1LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTEsXG4gICAgICAgIDIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDk2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTUwLFxuICAgICAgICAzNSxcbiAgICAgICAgMzEsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0OCxcbiAgICAgICAgOTksXG4gICAgICAgIDc1LFxuICAgICAgICAxMjUsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTU1LFxuICAgICAgICA2MSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzAsXG4gICAgICAgIDI0LFxuICAgICAgICAyNCxcbiAgICAgICAgMTU1LFxuICAgICAgICAxNTksXG4gICAgICAgIDIwMixcbiAgICAgICAgNjEsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMTIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgOTksXG4gICAgICAgIDc5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDc0LFxuICAgICAgICA1OSxcbiAgICAgICAgMjUyLFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICAxMDksXG4gICAgICAgIDIxMCxcbiAgICAgICAgNzYsXG4gICAgICAgIDEwM1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDksXG4gICAgICAgIDc5LFxuICAgICAgICA4NSxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4OCxcbiAgICAgICAgMTA3LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgODIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDcxLFxuICAgICAgICA0MixcbiAgICAgICAgMjQ1LFxuICAgICAgICAyNTUsXG4gICAgICAgIDEzMyxcbiAgICAgICAgMTExLFxuICAgICAgICA3NSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjYsXG4gICAgICAgIDU4LFxuICAgICAgICA4MixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMjQsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMjI5LFxuICAgICAgICAxMTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTUsXG4gICAgICAgIDczLFxuICAgICAgICAyNTEsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDE3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDY3LFxuICAgICAgICAyMTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxMDksXG4gICAgICAgIDM0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMjIyLFxuICAgICAgICA3MSxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMzYsXG4gICAgICAgIDMwLFxuICAgICAgICAxMDEsXG4gICAgICAgIDExNSxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTM4LFxuICAgICAgICA5MixcbiAgICAgICAgOTQsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTg5LFxuICAgICAgICA5NVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1OCxcbiAgICAgICAgNTAsXG4gICAgICAgIDIzLFxuICAgICAgICAxMjcsXG4gICAgICAgIDc5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDEyLFxuICAgICAgICAyNDYsXG4gICAgICAgIDYyLFxuICAgICAgICAyMDgsXG4gICAgICAgIDE1LFxuICAgICAgICAyNDAsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMjIxLFxuICAgICAgICAxNTIsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTIwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA1NCxcbiAgICAgICAgMjUsXG4gICAgICAgIDEwMCxcbiAgICAgICAgOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTExLFxuICAgICAgICA4NCxcbiAgICAgICAgMjE2LFxuICAgICAgICAzOSxcbiAgICAgICAgNDRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjA4LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMTcxLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgMjQzLFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDI0NCxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyNDQsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTk4LFxuICAgICAgICAgIDc3XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE0MixcbiAgICAgICAgICAyMzksXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDE2NixcbiAgICAgICAgICAyMjMsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjEyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMjM5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNTgsXG4gICAgICAgICAgMjM2LFxuICAgICAgICAgIDExOSxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgMTE4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM4LFxuICAgICAgICAxMzYsXG4gICAgICAgIDQsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgNyxcbiAgICAgICAgMjE5LFxuICAgICAgICAxMCxcbiAgICAgICAgMTM2LFxuICAgICAgICAxOTYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjU0LFxuICAgICAgICAyMyxcbiAgICAgICAgMjM1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMzUsXG4gICAgICAgIDYsXG4gICAgICAgIDQ4LFxuICAgICAgICA0MyxcbiAgICAgICAgMzcsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTE0LFxuICAgICAgICA1NCxcbiAgICAgICAgODEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTYwLFxuICAgICAgICAyMzYsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNTIsXG4gICAgICAgIDE3MixcbiAgICAgICAgMjA5LFxuICAgICAgICAyMzIsXG4gICAgICAgIDU2LFxuICAgICAgICAxNDYsXG4gICAgICAgIDU2LFxuICAgICAgICAxOTIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjUwLFxuICAgICAgICAxNjQsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA5NSxcbiAgICAgICAgMjUzLFxuICAgICAgICAxNjUsXG4gICAgICAgIDQ5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDYxLFxuICAgICAgICAxNSxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTU0LFxuICAgICAgICAxODUsXG4gICAgICAgIDkzLFxuICAgICAgICAxNDQsXG4gICAgICAgIDIxNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDEzNVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJVR0locjNuRkYwbjRCWXRwdXJuZ2FaNFpkY0l5SUI3Vi8vV1JiZ3Zjb3dzPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJIVk1nYlRTYlQ5RzJyQm1TdnpoRmlnXCIsXG4gIFwicGhvbmVJZFwiOiBcIjgzNzYxNDBmLTY3NzQtNDI5Ni1hZWYzLTdhYzBlMzNjYWY5YlwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyNDIsXG4gICAgICAyMDIsXG4gICAgICAyMzksXG4gICAgICAzMSxcbiAgICAgIDMyLFxuICAgICAgMjIwLFxuICAgICAgNjAsXG4gICAgICAxNjQsXG4gICAgICA0MCxcbiAgICAgIDE0MCxcbiAgICAgIDM3LFxuICAgICAgMjQsXG4gICAgICAxNDAsXG4gICAgICAxMjUsXG4gICAgICA1NSxcbiAgICAgIDEzOCxcbiAgICAgIDQ1LFxuICAgICAgMTEwLFxuICAgICAgMTQ1LFxuICAgICAgMTA4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE0OSxcbiAgICAgIDIzNCxcbiAgICAgIDEzMCxcbiAgICAgIDY2LFxuICAgICAgNTMsXG4gICAgICAyMjIsXG4gICAgICAyNDcsXG4gICAgICAxODIsXG4gICAgICAxODgsXG4gICAgICA3OSxcbiAgICAgIDI1NSxcbiAgICAgIDgyLFxuICAgICAgNTgsXG4gICAgICAyNDksXG4gICAgICAxMzIsXG4gICAgICAyMDEsXG4gICAgICAxMTQsXG4gICAgICA2OSxcbiAgICAgIDIzNSxcbiAgICAgIDIzN1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJaWkhGRVRYTlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0NzAzNDE2OTI2OToxM0BzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibGlkXCI6IFwiNDk5NjM4NTc4NzUwMjk6MTNAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT2pzc3FZR0VQcnFucmtHR0FFZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJIYWh3eFc1cVFUbFlISDJZaFJVRGkzdzNudTVLM0YzVFBwakRIc1dRQlQ0PVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIkJCTlBQdzg5MmkySktyamlueUVBdmZ4U2M5VVo5dUsyV1Z1YWtqT2tvMjJEbkZYb0trc2xNTnBPSTErNUdQazdXWXhleXRUUUd2ckpYZ0RNeGF1bUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInczUUNaZEZNS3JIbmR3NnlCbysrZjhYb0xseVRLZkFkK0EzazBuNTlXOHJ1MThpcCswNS9vVmdhUzJydlhsbU15S1lRaFBjait3MGZjMXlyWjNzUWpRPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDcwMzQxNjkyNjk6MTNAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNjgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxMTAsXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTMzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDMsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAxNTgsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDc0LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAzMCxcbiAgICAgICAgICAxOTcsXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDY1NTYxM1xufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS11bmRlZmluZWQuanNvbiI6IHt9Cn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



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
