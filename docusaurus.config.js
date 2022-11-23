const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');
const versions = require('./versions.json');

function getNextVersionName() {
  const expectedPrefix = '1.';

  const lastReleasedVersion = versions[0];
  if (!lastReleasedVersion.includes(expectedPrefix)) {
    throw new Error(
        'Erreur ! La dernière version ne respecte pas le pattern',
    );
  }
  const version = parseInt(lastReleasedVersion.replace(expectedPrefix, ''), 10);
  return `${expectedPrefix}${version + 1}`;
}

module.exports = {
  title: 'Documentation Forge',
  url: 'https://forge-doc.lesmoddeursfrancais.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  baseUrlIssueBanner : false,
  favicon: 'img/favicon.ico',
  themeConfig: {
    docs :{
      sidebar:{
        autoCollapseCategories : true,
      }
    },
    navbar: {
      title: 'Documentation Forge',
      logo: {
        alt: 'LMF Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/news', label: 'News', position: 'left'},
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          href: 'https://github.com/Les-Moddeurs-Francais/Documentation-Forge',
          position: 'right',
          className: 'header-github-link',
          'aria-label': 'GitHub repository',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Liens connexes',
          items: [
            {
              label: 'Téléchargement de Minecraft Forge',
              href: 'https://files.minecraftforge.net',
            },
            {
              label: 'Forum de  Minecraft Forge',
              href: 'https://minecraftforge.net',
            },
          ],
        },
        {
          title: 'Communauté',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.lesmoddeursfrancais.com/',
            },
          ],
        },
        {
          title: 'En plus',
          items: [
            {
              label: 'News',
              to: '/news',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/Les-Moddeurs-Francais/Documentation-Forge',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/lesmoddeursfr',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} - <a href="https://www.lesmoddeursfrancais.com">Les Moddeurs Francais</a>`,
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['java'],
    },
    metadata : [
      {
        name: 'keywords',
        content: 'Forge, Modding, Minecraft, Développement, Mods, Programmation'
      },
      {
        name: 'google-site-verification',
        content: 'QBxA6M1SV1YsdK02eCEPEPYkdGa84Hr35oFj-o8gcJg'
      },
      {
        name: 'twitter:card',
        content: 'summary',
      },
      {
        name: 'twitter:site',
        content: '@lesmoddeursfr',
      }
    ],
    algolia: {

      appId: 'BR2QYUV5GS',

      apiKey: '9f64b631b5fe2ec0a5b57cfdb1fd5e3c',

      indexName: 'forge-lesmoddeursfrancais',

    },
    image: 'img/icons/icon-128x128.png',
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
              'https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master',
          showLastUpdateAuthor: true,
          lastVersion: 'current',
          versions: {
            current: {
              label: `${getNextVersionName()}`,
            },
          },
        },
        blog: {
          blogTitle: 'News',
          blogDescription: 'Les dernières news concernant le projet MinecraftForge',
          path: 'news',
          blogSidebarTitle: 'Dernières news',
          routeBasePath: 'news',
          showReadingTime: false,
          feedOptions: {
            type: 'all',
          },
          editUrl:
              'https://github.com/Les-Moddeurs-Francais/Documentation-Forge/edit/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-pwa',
      {
        offlineModeActivationStrategies: [
          'appInstalled',
          'standalone',
          'queryString',
        ],
        pwaHead: [
          {
            tagName: 'link',
            rel: 'icon',
            href: 'img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'manifest',
            href: 'manifest.json',
          },
          {
            tagName: 'meta',
            name: 'theme-color',
            content: 'rgb(36, 37, 38)',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-capable',
            content: 'yes',
          },
          {
            tagName: 'meta',
            name: 'apple-mobile-web-app-status-bar-style',
            content: '#000',
          },
          {
            tagName: 'link',
            rel: 'apple-touch-icon',
            href: 'img/logo.png',
          },
          {
            tagName: 'link',
            rel: 'mask-icon',
            href: 'img/logo',
            color: 'rgb(116, 120, 124)',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileImage',
            content: 'img/logo.png',
          },
          {
            tagName: 'meta',
            name: 'msapplication-TileColor',
            content: '#000',
          },
        ],
      },
    ]
  ],
};
