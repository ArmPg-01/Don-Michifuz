const linkRegex = /chat.whatsapp.com\/([0-9A-Za-z]{20,24})( [0-9]{1,3})?/i
let handler = async (m, { conn, text, usedPrefix, command, participants, groupMetadata }) => {
const grupo = grupo1
const grupo2 = grupo2
let users = m.sender.split`@`[0]
let [_, code] = grupo.match(linkRegex) || []
let [_2, code2] = grupo2.match(linkRegex) || []
if ( users == 593993684821 || users == 593968585383 || users == 593959425714 || users == 573238484181 || users == 584125778026 || users == 5492266466080 || users == 50689823726 || users == 573136855110 || users == 5214531173598 ) try {
//if ( users == 593993684821 || users == 593968585383) try {
if (!text) return m.reply(`*Falta Texto*`) 
let res = await conn.groupAcceptInvite(code)
let res2 = await conn.groupAcceptInvite(code2)
await conn.sendMessage(res, { text: text + ( users == 5215527305507 ? '\n\n_atte. Armando' : '' || users == 5215527305507 ? '\n\n_atte. Arm' : '' || users == 5215649348945 ? '\n\n_atte. Armando' : '' || users == 5215649348945 ? '\n\n_atte. Armando' : '' || users == 5215533545291 ? '\n\n_atte. Don Michifuz' : '' || users == 5215533545291 ? '\n\n_atte. Don Michifuz' : '' || users == 5215533545291 ? '\n\n_atte. Don Michifuz' : '' || users == 5215527305507 ? '\n\n_atte. Don Michifuz' : '' || users == 5215527305507 ? '\n\n_atte. Don Michifuz' : '' ), mentions: (await conn.groupMetadata(`${res}`)).participants.map(v => v.id) }, { quoted: fkontak })
await delay(3 * 3000)
await conn.sendMessage(res2, { text: text + ( users == 5215527305507 ? '\n\n_atte. Armando' : '' || users == 5215527305507 ? '\n\n_atte. Arm' : '' || users == 5215649348945 ? '\n\n_atte. Armando' : '' || users == 5215649348945 ? '\n\n_atte. Armando' : '' || users == 5215533545291 ? '\n\n_atte. Don Michifuz' : '' || users == 5215533545291 ? '\n\n_atte. Don Michifuz' : '' || users == 5215533545291 ? '\n\n_atte. Don Michifuz' : '' || users == 5215527305507 ? '\n\n_atte. Don Michifuz' : '' || users == 5215527305507 ? '\n\n_atte. Don Michifuz' : '' ), mentions: (await conn.groupMetadata(`${res2}`)).participants.map(v => v.id) }, { quoted: fkontak })
await m.reply(`✅ *MENSAJE ENVIADO CON ÉXITO* `)

} catch (e) {
await conn.sendButton(m.chat, `\n${wm}`, lenguajeGB['smsMalError3']() + '#report ' + usedPrefix + command, null, [[lenguajeGB.smsMensError1(), `#reporte ${lenguajeGB['smsMensError2']()} *${usedPrefix + command}*`]], m)
console.log(`❗❗ ${lenguajeGB['smsMensError2']()} ${usedPrefix + command} ❗❗`)
console.log(e)
} else {
await m.reply('```USTED NO TIENE AUTORIZACIÓN PARA USAR ESTE COMANDO.```')}
}
handler.command = ['mensajeoficial']
handler.owner = true
export default handler

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms))
