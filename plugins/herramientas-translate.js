import translate from '@vitalets/google-translate-api';
import fetch from 'node-fetch';
const handler = async (m, {args, usedPrefix, command}) => {
  const msg = `👑 *Uso correcto del comando ${usedPrefix + command} (idioma) (texto)*\n*Ejemplo:*\n*${usedPrefix + command} es Hello*\n\n*Conoce los idiomas admitidos en:*\n*- https://cloud.google.com/translate/docs/languages*`;
  if (!args || !args[0]) return m.reply(msg);
  let lang = args[0];
  let text = args.slice(1).join(' ');
  const defaultLang = 'es';
  if ((args[0] || '').length !== 2) {
    lang = defaultLang;
    text = args.join(' ');
  }
  if (!text && m.quoted && m.quoted.text) text = m.quoted.text;
  try {
    await m.react(rwait)
   /* conn.reply(m.chat, wait, m, {
    contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
    title: packname,
    body: wm,
    previewType: 0, thumbnail: icons,
    sourceUrl: redes }}}) */
    const result = await translate(`${text}`, {to: lang, autoCorrect: true});
   await conn.reply(m.chat, '*Traducción:* ' + result.text, m, fake);
   await m.react(done)
  } catch {
    try {
    await m.react(rwait)
   /* conn.reply(m.chat, wait, m, {
    contextInfo: { externalAdReply :{ mediaUrl: null, mediaType: 1, showAdAttribution: true,
    title: packname,
    body: wm,
    previewType: 0, thumbnail: icons,
    sourceUrl: redes }}}) */
      const lol = await fetch(`https://api.lolhuman.xyz/api/translate/auto/${lang}?apikey=${lolkeysapi}&text=${text}`);
      const loll = await lol.json();
      const result2 = loll.result.translated;
      await conn.reply(m.chat, '*Traducción:* ' + result2, m, fake);
      await m.react(done)
    } catch {
      await m.react(error)
      await conn.reply(m.chat, '✨️ *Ocurrió Un Error*', m, fake);
    }
  }
};
handler.help = ['trad']
handler.tags = ['tools']
handler.command = ['translate', 'traducir', 'trad'];
handler.register = true
export default handler;
