/** @type {import('@docusaurus/types').DocusaurusConfig} */

/* Smart quotes via retext-smartypants */
const visit = require('unist-util-visit');
const retext = require('retext');
const retextSmartypants = require('retext-smartypants');

function remarkSmartypants(options) {
  const processor = retext().use(retextSmartypants, options);

  function transformer(tree) {
    visit(tree, 'text', node => {
      node.value = String(processor.processSync(node.value));
    });
  }

  return transformer;
}

module.exports = {
  title: 'ProtonAOSP',
  tagline: 'Minimal Android fork focused on design and performance',
  url: 'https://protonaosp.kdrag0n.dev',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'ProtonAOSP',
  projectName: 'ProtonAOSP',
  titleDelimiter: '·',
  themeConfig: {
    navbar: {
      title: 'ProtonAOSP',
      hideOnScroll: true,
      logo: {
        alt: 'ProtonAOSP Logo',
        src: 'img/logo-f5dcbe6746dca65150c4e76ee6c8fb9f6492ce98.svg',
      },
      items: [
        {
          to: 'overview',
          label: 'Overview',
          position: 'left',
        },
        {
          to: 'features',
          label: 'Features',
          position: 'left',
        },
        {
          to: 'screenshots',
          label: 'Screenshots',
          position: 'left',
        },
        {
          to: 'faq',
          label: 'FAQ',
          position: 'left',
        },
        {
          to: 'community',
          label: 'Community',
          position: 'left',
        },

        {
          to: 'install/web',
          label: 'Install',
          position: 'right',
        },
      ],
    },
    footer: {
      links: [
        {
          title: 'Discover',
          items: [
            {
              label: 'Overview',
              to: '/overview',
            },
            {
              label: 'Features',
              to: '/features',
            },
            {
              label: 'Screenshots',
              to: '/screenshots',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/ProtonAOSP',
            },
            {
              label: 'Telegram',
              href: 'https://t.me/protonaosp',
            },
            {
              label: 'Developer',
              href: 'https://kdrag0n.dev/',
            },
            {
              label: 'More',
              to: '/community',
            },
          ],
        },
        {
          title: 'Developers',
          items: [
            {
              label: 'Source code',
              to: '/developers/download',
            },
            {
              label: 'Build',
              to: '/developers/build',
            },
            {
              label: 'Contribute',
              to: '/developers/contribute',
            },
            {
              label: 'Technical details',
              to: '/developers/details/blur',
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
          showLastUpdateTime: true,
          remarkPlugins: [
            remarkSmartypants,
          ],
        },
        blog: false,
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
