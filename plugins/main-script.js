import moment from 'moment-timezone'
import fetch from 'node-fetch'

let handler = async (m, { conn, args }) => {
let res = await fetch('https://github.com/Aqua200/Yumeko.1/tree/main')
let json = await res.json()
try {
let txt = `*乂  S C R I P T  -  M A I N  乂*\n\n`
    txt += `✩  *Nombre🌸* : ${json.name}\n`
    txt += `✩  *Visitas🌸* : ${json.watchers_count}\n`
    txt += `✩  *Peso🌸* : ${(json.size / 1024).toFixed(2)} MB\n`
    txt += `✩  *Actualizada🍓* : ${moment(json.updated_at).format('DD/MM/YY - HH:mm:ss')}\n`
    txt += `✩  *Url❤️* : ${json.html_url}\n`
    txt += `✩  *Forks🌹* : ${json.forks_count}\n`
    txt += `✩  *Stars⭐* : ${json.stargazers_count}\n\n`
    txt += `> *${dev}*`

await conn.sendMessage(m.chat, {text: txt, contextInfo: { forwardingScore: 999, isForwarded: true, forwardedNewsletterMessageInfo: { newsletterName: '𝒀𝒖𝒎𝒆𝒌𝒐𝑩𝒐𝒕-𝑫𝒎🌸', newsletterJid: "120363276986902836@newsletter", }, externalAdReply: { title: packname, body: dev, thumbnailUrl: 'https://qu.ax/DhraC.jpg', sourceUrl: yt, mediaType: 1, renderLargerThumbnail: true }}}, {quoted: fkontak})

} catch {
await m.react(error)
}}
handler.help = ['script']
handler.tags = ['main']
handler.command = ['script', 'sc']
handler.register = true 
export default handler
