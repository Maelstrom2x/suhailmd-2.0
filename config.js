Hiconst fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "false" || "mongodb+srv://Asim:<Asim>@cluster0.cifk0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "false" || "mongodb+srv://Asim:<Asim>@cluster0.cifk0.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/suhailmd-2.0";
global.gurl  =process.env.GURL  || "https://www.instagram.com/memes_ministry69?igsh=ZjNraGw3OWd6NW50";
global.website=process.env.GURL || "https://www.instagram.com/memes_ministry69?igsh=ZjNraGw3OWd6NW50" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.imgur.com/a8a6QxV.jpeg" || "https://i.imgur.com/a8a6QxV.jpeg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© ASIM_MUNIR" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "false" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.imgur.com/a8a6QxV.jpeg" // "image" // set Image/video urls here
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


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_07_08_11_03_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICA5NCxcbiAgICAgICAgMjQwLFxuICAgICAgICA4MSxcbiAgICAgICAgNDAsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMjUyLFxuICAgICAgICAyLFxuICAgICAgICAxMDgsXG4gICAgICAgIDksXG4gICAgICAgIDk1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDk3LFxuICAgICAgICAzMCxcbiAgICAgICAgMjcsXG4gICAgICAgIDIwMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMTcwLFxuICAgICAgICAxMDYsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTgwLFxuICAgICAgICA4MyxcbiAgICAgICAgNjEsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTgxLFxuICAgICAgICAyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDMwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE2OCxcbiAgICAgICAgMjQyLFxuICAgICAgICA0NixcbiAgICAgICAgMjU1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNzAsXG4gICAgICAgIDI0MixcbiAgICAgICAgMjI4LFxuICAgICAgICA1MixcbiAgICAgICAgMTY1LFxuICAgICAgICAxNzcsXG4gICAgICAgIDM5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTM1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDgwLFxuICAgICAgICAyNyxcbiAgICAgICAgMjEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMzAsXG4gICAgICAgIDMsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTYxLFxuICAgICAgICAyOSxcbiAgICAgICAgMTUwLFxuICAgICAgICAxNixcbiAgICAgICAgMjE2LFxuICAgICAgICA1NSxcbiAgICAgICAgMTk2LFxuICAgICAgICA3OVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJwYWlyaW5nRXBoZW1lcmFsS2V5UGFpclwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMzIsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjMwLFxuICAgICAgICAxNyxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTI2LFxuICAgICAgICAyMDksXG4gICAgICAgIDI5LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyLFxuICAgICAgICA3MCxcbiAgICAgICAgNjcsXG4gICAgICAgIDIyMSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxMTgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTksXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTg1LFxuICAgICAgICAxOTgsXG4gICAgICAgIDIwNCxcbiAgICAgICAgMTM1LFxuICAgICAgICAyNDUsXG4gICAgICAgIDEwNixcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTcxLFxuICAgICAgICA1NixcbiAgICAgICAgMTcsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTM4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDg5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDIxMyxcbiAgICAgICAgOTMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgOTMsXG4gICAgICAgIDM3LFxuICAgICAgICAxNTEsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjI1LFxuICAgICAgICA0NCxcbiAgICAgICAgMzAsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTc0LFxuICAgICAgICA3NyxcbiAgICAgICAgMTE3LFxuICAgICAgICAzOSxcbiAgICAgICAgMzcsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMjIsXG4gICAgICAgIDExOSxcbiAgICAgICAgMTI1LFxuICAgICAgICAzNyxcbiAgICAgICAgMjEwLFxuICAgICAgICAyMTUsXG4gICAgICAgIDQ4XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4MCxcbiAgICAgICAgMTA2LFxuICAgICAgICA2NSxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTYxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgODIsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMzYsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjIzLFxuICAgICAgICAzNyxcbiAgICAgICAgMTUyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDE2LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTM0LFxuICAgICAgICA0NixcbiAgICAgICAgMjI3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTQwLFxuICAgICAgICAxMTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgNyxcbiAgICAgICAgMTgzLFxuICAgICAgICA0NCxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjIxLFxuICAgICAgICAyMTQsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjM1LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDUyLFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxMSxcbiAgICAgICAgMTIwLFxuICAgICAgICA5NixcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNDUsXG4gICAgICAgIDM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYyLFxuICAgICAgICA3MyxcbiAgICAgICAgMTM4LFxuICAgICAgICA4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDMsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzIsXG4gICAgICAgIDU0LFxuICAgICAgICA5MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTIsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTQ2LFxuICAgICAgICAgIDEzMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMTcwLFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDI0MCxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTg5LFxuICAgICAgICAgIDEwMyxcbiAgICAgICAgICAxMDIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMTQsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDEyN1xuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDIyLFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAxOTIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMjgsXG4gICAgICAgICAgNjIsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMjQ3LFxuICAgICAgICAgIDE2LFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAxMTksXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgNDIsXG4gICAgICAgICAgMjI2LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAyNDksXG4gICAgICAgICAgMTc4LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDI1NCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjMwLFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAxMDdcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDMsXG4gICAgICAgIDgsXG4gICAgICAgIDIzLFxuICAgICAgICA1NSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE3LFxuICAgICAgICAyMjEsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTM3LFxuICAgICAgICAxMzUsXG4gICAgICAgIDkzLFxuICAgICAgICAyMDIsXG4gICAgICAgIDMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTk3LFxuICAgICAgICA4MCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAxMDcsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTkxLFxuICAgICAgICA1MSxcbiAgICAgICAgNTQsXG4gICAgICAgIDkwLFxuICAgICAgICAyMDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTEsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTUwLFxuICAgICAgICAyMTgsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjA2LFxuICAgICAgICAxMzUsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAyNCxcbiAgICAgICAgMTQ2LFxuICAgICAgICA5NSxcbiAgICAgICAgMixcbiAgICAgICAgMzgsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA3MyxcbiAgICAgICAgMTUzLFxuICAgICAgICAyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDk2LFxuICAgICAgICA5MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyMzYsXG4gICAgICAgIDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDEzMixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCI1NnpwWmJoeW5adHRHV3AvUlZ1QzZXRE5QZWhiZ0ZpZnJreklvb3JHa1ZBPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXSxcbiAgXCJuZXh0UHJlS2V5SWRcIjogMzEsXG4gIFwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWRcIjogMzEsXG4gIFwiYWNjb3VudFN5bmNDb3VudGVyXCI6IDAsXG4gIFwiYWNjb3VudFNldHRpbmdzXCI6IHtcbiAgICBcInVuYXJjaGl2ZUNoYXRzXCI6IGZhbHNlXG4gIH0sXG4gIFwiZGV2aWNlSWRcIjogXCJTY21GV1ZmSlRlU3hrd05BMHpKT3JBXCIsXG4gIFwicGhvbmVJZFwiOiBcIjM4ZjNjMTUxLWM2OWUtNDY0OC04MWI3LWQwMWIyNTQ5MjY4M1wiLFxuICBcImlkZW50aXR5SWRcIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMzQsXG4gICAgICAxMDQsXG4gICAgICAxMDMsXG4gICAgICAxNjIsXG4gICAgICAyMjksXG4gICAgICAyNDYsXG4gICAgICAyMjAsXG4gICAgICAyMTMsXG4gICAgICAxNjYsXG4gICAgICAyMzIsXG4gICAgICA1MSxcbiAgICAgIDE3OSxcbiAgICAgIDIwMSxcbiAgICAgIDE2NSxcbiAgICAgIDIyOSxcbiAgICAgIDczLFxuICAgICAgMTg2LFxuICAgICAgNTIsXG4gICAgICAzOSxcbiAgICAgIDE4MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxNjAsXG4gICAgICAxOTEsXG4gICAgICA4OCxcbiAgICAgIDIyNyxcbiAgICAgIDEwNixcbiAgICAgIDIwNyxcbiAgICAgIDExNyxcbiAgICAgIDQ1LFxuICAgICAgNDEsXG4gICAgICAxMTIsXG4gICAgICA1NCxcbiAgICAgIDIyNixcbiAgICAgIDU3LFxuICAgICAgMjE2LFxuICAgICAgMjE1LFxuICAgICAgNTUsXG4gICAgICAyMTEsXG4gICAgICAxMzQsXG4gICAgICA2OSxcbiAgICAgIDIyNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0R1RLVlNZQ1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiOTIzMzQ1MDgzNTY2OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCI2Mzg2MjQwNTYwMzM4MToxMEBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNJS0Z0NmtFRVBEQ25Ma0dHQUVnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIms4U3NXMDVVRmROU2dmanJHWDF4QzNwamFQQy9GL080cDNoV0M5TXJJeGM9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwibllZQUVlNzdmWkNSSE9xL3JjT2NZMjFNbVBSRFEwdDJUUXlxWmJ1MWF3U0VLQ2kxTTg2Vkh6bUxvbFYzYms5MUFqY0gvRmExdEZ1dEZQYVRpZTVHQmc9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwibThxZ0cra2hrSGJOYlVYNWIzd1VWRVRmeXpiTXRPdThEOTk1RU5hRzB6RE5sVCtDL1BjZk4vWG1zMHlsZmZLL3VDbDlwYmw3WXFjOFI3d2lQRnB1RHc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiOTIzMzQ1MDgzNTY2OjEwQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTQ3LFxuICAgICAgICAgIDE5NixcbiAgICAgICAgICAxNzIsXG4gICAgICAgICAgOTEsXG4gICAgICAgICAgNzgsXG4gICAgICAgICAgODQsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDgyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAyNDgsXG4gICAgICAgICAgMjM1LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTIyLFxuICAgICAgICAgIDk5LFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEyMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDYxNzcxNixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQU9kblwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBT2RuLmpzb24iOiAie1wia2V5RGF0YVwiOlwiVEdRRU9salcvNzJDV3F4U2tUUm02cWxTc3NuODJTVkdxVC9CME9FMGEwbz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoxMTYwNjI2ODE1LFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMCwxXX0sXCJ0aW1lc3RhbXBcIjpcIjBcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "|Follow memes_ministry69|" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "PROPERTY OF",
  packname: process.env.PACK_NAME || "ASIM MUNEER",
  botname : process.env.BOT_NAME  || "BLACK_VIGO",
  ownername:process.env.OWNER_NAME|| "GENERAL",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "public",
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
