/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'ProtonAOSP',
  tagline: 'A better operating system for your phone, based on Android',
  url: 'https://protonaosp.kdrag0n.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ProtonAOSP',
  projectName: 'ProtonAOSP',
  themeConfig: {
    navbar: {
      title: 'ProtonAOSP',
      logo: {
        alt: 'ProtonAOSP Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'discover/overview',
          position: 'left',
          label: 'Overview',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/facebook/docusaurus',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Info',
          items: [
            {
              label: 'Overview',
              to: '/overview',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Telegram',
              href: 'https://t.me/protonaosp',
            },
            {
              label: 'Developer',
              href: 'https://kdrag0n.dev/',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/ProtonAOSP',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://kdrag0n.dev/">Danny Lin (kdrag0n)</a><br><span class="footer__link-item">Android is a trademark of Google LLC.</span>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/nightOwlLight'),
      darkTheme: require('prism-react-renderer/themes/oceanicNext'),
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          routeBasePath: '/',
          sidebarPath: require.resolve('./sidebars.js'),
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
