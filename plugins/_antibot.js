export async function before(m, { conn, isAdmin, isBotAdmin }) {
    if (!m.isGroup) return;
    let chat = global.db.data.chats[m.chat]
    let delet = m.key.participant
    let bang = m.key.id
    let bot = global.db.data.settings[this.user.jid] || {}
    if (m.fromMe) return true;

    if (m.id.startsWith('3EB0') && m.id.length === 22) {
        let chat = global.db.data.chats[m.chat];

        if (chat.antiBot) {
         //   await conn.reply(m.chat, "     ͞ ͟͞ ͟yumekobot🌸 ͟͞ ͞   \n╚▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬ִ▭࣪▬▭╝\n\𝚂𝚘𝚢 𝚈𝚞𝚖𝚎𝚔𝚘-𝙱𝚘𝚝-𝙼𝙳 𝚕𝚊 𝙼𝚎𝚓𝚘𝚛 𝙱𝚘𝚝 𝙳𝚎 𝚆𝚑𝚊𝚝𝚜𝙰𝚙𝚙🌸!!\n𝐸𝑠𝑡𝑒 𝑔𝑟𝑢𝑝𝑜 𝑛𝑜 𝑡𝑒 𝑛𝑒𝑐𝑒𝑠𝑖𝑡𝑎, 𝑎𝑑𝑖𝑜𝑠𝑖𝑡𝑜 𝑏𝑜𝑡 𝑑𝑒 𝑠𝑒𝑔𝑢𝑛𝑑𝑎.", null, rcanal);

            if (isBotAdmin) {
await conn.sendMessage(m.chat, { delete: { remoteJid: m.chat, fromMe: false, id: bang, participant: delet }})
await conn.groupParticipantsUpdate(m.chat, [m.sender], 'remove')
            }
        }
    }
}
