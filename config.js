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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_19_14_11_05_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMzEsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTgwLFxuICAgICAgICA1MCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDU4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDIsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTk0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgOTEsXG4gICAgICAgIDE0OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDI3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDcxLFxuICAgICAgICAyNDcsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTkzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgODlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTY5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDI1LFxuICAgICAgICA0NixcbiAgICAgICAgMTYxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDExMCxcbiAgICAgICAgMzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgOTUsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMjUwLFxuICAgICAgICA4MyxcbiAgICAgICAgMTk2LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNzksXG4gICAgICAgIDQ3LFxuICAgICAgICA0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0NyxcbiAgICAgICAgNTksXG4gICAgICAgIDE4NSxcbiAgICAgICAgNSxcbiAgICAgICAgMTI3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMyxcbiAgICAgICAgMTY1LFxuICAgICAgICA4NyxcbiAgICAgICAgMjMyLFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDksXG4gICAgICAgIDQsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMjUyLFxuICAgICAgICA4OCxcbiAgICAgICAgMTcwLFxuICAgICAgICA3MixcbiAgICAgICAgMTA4LFxuICAgICAgICAxNzMsXG4gICAgICAgIDExLFxuICAgICAgICA0NCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzUsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTQyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDM0LFxuICAgICAgICA0NixcbiAgICAgICAgMTUyLFxuICAgICAgICA1NSxcbiAgICAgICAgMzAsXG4gICAgICAgIDEzNyxcbiAgICAgICAgNjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM2LFxuICAgICAgICAxNjksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTQ2LFxuICAgICAgICAxNzEsXG4gICAgICAgIDg1LFxuICAgICAgICA1MCxcbiAgICAgICAgMjUxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDY2LFxuICAgICAgICAyNTQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAyMCxcbiAgICAgICAgNzcsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMTUsXG4gICAgICAgIDc2LFxuICAgICAgICAxODQsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTczLFxuICAgICAgICA1MSxcbiAgICAgICAgMjUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTY4LFxuICAgICAgICA1OSxcbiAgICAgICAgMTM5LFxuICAgICAgICA2NVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjI0LFxuICAgICAgICAzNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDU0LFxuICAgICAgICAyMTQsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTU2LFxuICAgICAgICA0MixcbiAgICAgICAgMTE4LFxuICAgICAgICAxMzMsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQwLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTMwLFxuICAgICAgICA2OSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNzUsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMTgxLFxuICAgICAgICAxMzgsXG4gICAgICAgIDE2MixcbiAgICAgICAgMTU3LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwNixcbiAgICAgICAgNjksXG4gICAgICAgIDkyLFxuICAgICAgICAxNzksXG4gICAgICAgIDE0OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTA4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIyMyxcbiAgICAgICAgMjM0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgNCxcbiAgICAgICAgMjIxLFxuICAgICAgICA4OCxcbiAgICAgICAgMjUzLFxuICAgICAgICAxODksXG4gICAgICAgIDIxMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE1NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDUsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0OCxcbiAgICAgICAgMjAzLFxuICAgICAgICA5MyxcbiAgICAgICAgMTg3LFxuICAgICAgICAxOTksXG4gICAgICAgIDg3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjIxLFxuICAgICAgICA3MixcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MSxcbiAgICAgICAgMjQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMzAsXG4gICAgICAgIDEyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgMjE4LFxuICAgICAgICAgIDMxLFxuICAgICAgICAgIDgxLFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDMzLFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAyNDUsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDExMixcbiAgICAgICAgICA1MCxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIxOSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMjUwLFxuICAgICAgICAgIDg4XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDU0LFxuICAgICAgICAgIDEzNixcbiAgICAgICAgICAyMzUsXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDE5LFxuICAgICAgICAgIDI1NSxcbiAgICAgICAgICA1NSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxMzIsXG4gICAgICAgICAgOTQsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDEyNCxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDI0OCxcbiAgICAgICAgICAxODYsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgNjZcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MCxcbiAgICAgICAgMTksXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAzMixcbiAgICAgICAgMTQzLFxuICAgICAgICA2NCxcbiAgICAgICAgNjEsXG4gICAgICAgIDgzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTY1LFxuICAgICAgICAyMzUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjQ5LFxuICAgICAgICAxNzgsXG4gICAgICAgIDEzMixcbiAgICAgICAgNDksXG4gICAgICAgIDc3LFxuICAgICAgICA5OSxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMTksXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNDQsXG4gICAgICAgIDU4LFxuICAgICAgICA3OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDc1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDgxLFxuICAgICAgICAyNDEsXG4gICAgICAgIDkyLFxuICAgICAgICAyMixcbiAgICAgICAgMTQsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMTA5LFxuICAgICAgICA4MyxcbiAgICAgICAgMTA5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMixcbiAgICAgICAgMjA4LFxuICAgICAgICA0MCxcbiAgICAgICAgMSxcbiAgICAgICAgNTcsXG4gICAgICAgIDIwMCxcbiAgICAgICAgMzQsXG4gICAgICAgIDI2LFxuICAgICAgICA2MyxcbiAgICAgICAgMTY3LFxuICAgICAgICAxNjQsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTEsXG4gICAgICAgIDIzMCxcbiAgICAgICAgNDYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNDcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTgwLFxuICAgICAgICAxNjMsXG4gICAgICAgIDUsXG4gICAgICAgIDFcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzNSxcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJMSDVaNHlLWnpUL2dhOG93Q0FjcWlLcjltT0E0eW1iYzRtenQ1eC9CTDdjPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjIzNDcwMzQxNjkyNjlAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJmcm9tTWVcIjogdHJ1ZSxcbiAgICAgICAgXCJpZFwiOiBcIjY4QTM1NTMxNTk0MzA0NDA3NDRBRDk2OUEyMUQ1RUZBXCJcbiAgICAgIH0sXG4gICAgICBcIm1lc3NhZ2VUaW1lc3RhbXBcIjogMTczMDgzNDA3NFxuICAgIH1cbiAgXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJweF8zcDJKdVNoV2tpYmt3NEhoalVBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjQxNzQ1MjhjLTMyNmQtNGRhYS04ZWI5LWFlYTc4MjU1OTE5MVwiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMjYsXG4gICAgICAyMjUsXG4gICAgICAzMixcbiAgICAgIDE4NCxcbiAgICAgIDEyLFxuICAgICAgMjE1LFxuICAgICAgMjMwLFxuICAgICAgMTgyLFxuICAgICAgODcsXG4gICAgICAyNDIsXG4gICAgICAyMDgsXG4gICAgICAyNDIsXG4gICAgICA5NSxcbiAgICAgIDI0OSxcbiAgICAgIDIzMSxcbiAgICAgIDU5LFxuICAgICAgOTQsXG4gICAgICA5LFxuICAgICAgMjQyLFxuICAgICAgOTNcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTY4LFxuICAgICAgMjE2LFxuICAgICAgNzgsXG4gICAgICAxNDYsXG4gICAgICAxNDMsXG4gICAgICAyMzYsXG4gICAgICA5OSxcbiAgICAgIDc5LFxuICAgICAgMTYyLFxuICAgICAgNjksXG4gICAgICAxNixcbiAgICAgIDM0LFxuICAgICAgODMsXG4gICAgICAxMixcbiAgICAgIDEwOCxcbiAgICAgIDE5NSxcbiAgICAgIDkxLFxuICAgICAgMjQ3LFxuICAgICAgMTE4LFxuICAgICAgMjMwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjk0Rlg3RVQ3XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDM0MTY5MjY5OjE3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI0OTk2Mzg1Nzg3NTAyOToxN0BsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPenNzcVlHRUkzZHFia0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIkhhaHd4VzVxUVRsWUhIMlloUlVEaTN3M251NUszRjNUUHBqREhzV1FCVDQ9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiSkhPd0dUbWdqZVRxdlhtY1VxUEp1UkNsMzVIbDU0cDVVc2hsWkp2YVF3UzFINkkzcmx5clhLUXpTR09HeTBFYy9TMDFMQUtiUklGckVieW9Wa1YrQ1E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiNkV0ODhpSFVUenBOcGpSQ1ZBRjZrK09zL09kVnF5RE1CT1NOVmVDOUlGY2F3RzVsL29JRDQyczJIdHVrc1YyOVhtQ0dCamloZElMb2NxMGVwMXpYRGc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAzNDE2OTI2OToxN0BzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDI5LFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICAxMTIsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgNjUsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMzksXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE1OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNzQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICA2MixcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgNSxcbiAgICAgICAgICA2MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMwODM0MDY2XG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LXVuZGVmaW5lZC5qc29uIjoge30KfQ=="  // PUT your SESSION_ID 


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
