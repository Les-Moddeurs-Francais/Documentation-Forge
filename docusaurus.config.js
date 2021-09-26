const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Les Moddeurs Francais',
  tagline: '¯\\_(ツ)_/¯',
  url: 'https://forge-doc.lesmoddeursfrancais.fr',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  baseUrlIssueBanner : false,
  favicon: 'img/favicon.ico',
  organizationName: 'Les-Moddeurs-Francais', // Usually your GitHub org/user name.
  projectName: 'forge-doc', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Les Moddeurs Francais',
      logo: {
        alt: 'LMF Logo Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Documentation',
        },
        {to: '/faq/intro', label: 'FAQ', position: 'left'},
        {to: '/blog', label: 'News', position: 'left'},
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
            {
              label: 'FAQ',
              to: '/faq/intro',
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
              to: '/blog',
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
  },
  i18n: {
    defaultLocale: 'fr',
    locales: ['fr'],  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          editUrl:
              'https://github.com/Les-Moddeurs-Francais/Forge-Doc/edit/master',
          showLastUpdateAuthor: true,
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
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
      '@docusaurus/plugin-content-docs',
      {
        id: 'faq',
        path: 'faq',
        routeBasePath: 'faq',
        sidebarPath: require.resolve('./sidebars.js'),
      },
    ],
  ],
};
