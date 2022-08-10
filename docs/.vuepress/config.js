// .vuepress/config.js
module.exports = {
    title: 'fyz-ui',
    base: '/fyz-ui/',
    themeConfig: {
        nav:[{
            text: 'Home', link: '/'
        },{
            text:"Github", link: 'https://github.com/ITFangyz/fyz-ui'
        },{
            text:"Npm", link: 'https://www.npmjs.com/package/fyz-ui'
        }

        ],
        sidebar: [
            '/',
            '/componentsDocs/card'
        ]
    }
  }