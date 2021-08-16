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
          label: 'Doumentation',
        },
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
          title: 'Documentation',
          items: [
            {
              label: 'Introduction',
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
            'https://github.com/Les-Moddeurs-Francais/Forge-Doc/blob/master',
        },
        blog: {
          showReadingTime: false,
          // Please change this to your repo.
          editUrl:
            'https://github.com/Les-Moddeurs-Francais/Forge-Doc/blob/master',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
