import fetch from 'node-fetch'

let handler  = async (m, { conn, usedPrefix, command }) => {

let grupos = `*Hola!, te invito a unirte a los grupos oficiales de del Bot para convivir con la comunidad :D* 🍂

1- 🌹𝑦𝑢𝑚𝑒𝑘𝑜-𝐵𝑜𝑡🌸 
*✰* ${grupo}

2- 🌹𝑦𝑢𝑚𝑒𝑘𝑜-𝐵𝑜𝑡🌸
*✰* ${grupo2}

➠ Enlace anulado? entre aquí! 

♡ Canal :
✰ ${channel}`

await conn.sendFile(m.chat, imagen3, "yaemori.jpg", grupos, fkontak, null, rcanal)

await m.react(emojis)

}
handler.help = ['grupos']
handler.tags = ['main']
handler.command = ['grupos', 'vegrupos', 'gruposai']
export default handler
