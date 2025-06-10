const handler = async (m, { conn }) => {
  await conn.sendMessage(m.chat, {
    text: 'Silakan pilih menu yang tersedia:',
    buttons: [
      {
        buttonId: 'type 1',
        buttonText: {
          displayText: 'ALL MENU'
        },
        nativeFlowInfo: {
          name: 'single_select',
          paramsJson: JSON.stringify({
            title: 'ALL MENU',
            sections: [
              {
                title: 'MENU PERTAMA',
                highlight_label: 'Favorit',
                rows: [
                  {
                    title: 'TAMPILKAN SEMUA GROUP',
                    id: 'groups'
                  }
                ]
              },
              {
                title: 'MENU KEDUA',
                highlight_label: 'Favorit',
                rows: [
                  {
                    title: 'TAMPILKAN SEMUA KONTAK',
                    id: 'menu'
                  }
                ]
              }
            ]
          })
        }
      }
    ],
    headerType: 2
  }, { quoted: m });
};

handler.command = ['btn']
handler.tags = ['tools']
handler.help = ['btn']
handler.owner = true

module.exports = handler