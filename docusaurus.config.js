const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Documentation Forge',
  tagline: '¯\\_(ツ)_/¯',
  url: 'https://www.forge-doc.lesmoddeursfrancais.fr',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  baseUrlIssueBanner : false,
  favicon: 'img/favicon.ico',
  organizationName: 'Les-Moddeurs-Francais',
  projectName: 'forge-doc',
  themeConfig: {
    navbar: {
      title: 'Les Moddeurs Francais',
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
          href: 'https://github.com/Les-Moddeurs-Francais/Forge-Doc',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentations',
          items: [
            {
              label: 'Forge',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Communauté',
          items: [
            {
              label: 'Discord',
              href: 'https://discord.lesmoddeursfrancais.fr/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/lesmoddeursfr',
            },
            {
              label: 'Trello',
              href: 'https://trello.com/lesmoddeursfrancais',
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
              href: 'https://github.com/Les-Moddeurs-Francais/Forge-Doc',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} - Les Moddeurs Francais`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: ['java'],
    },
    metadata : [
      {
        name: 'og:site_name',
        content: 'Les Moddeurs Francais'
      },
      {
        name: 'keywords',
        content: 'Forge, Modding, Minecraft, Développement, Mods, Programmation'
      },
      {
        name: 'og:type',
        content: 'website'
      },
      {
        name: 'og:image',
        content: 'https://cdn.lesmoddeursfrancais.fr/logo-256x256.png'
      },
      {
        name: 'og:image:width',
        content: '256'
      },
      {
        name: 'og:image:height',
        content: '256'
      }
    ],
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
              'https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master',
          showLastUpdateAuthor: true,
        },
        blog: {
          blogTitle: 'News',
          blogDescription: 'Les dernières news concernant le projet MinecraftForge',
          path: 'news',
          routeBasePath: 'news',
          showReadingTime: false,
          editUrl:
              'https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master',
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
    ],
  ],
};
