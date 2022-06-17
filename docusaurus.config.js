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
  tagline: 'Minimal Android fork for design and performance',
  url: 'https://protonaosp.org',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.png',
  organizationName: 'ProtonAOSP',
  projectName: 'ProtonAOSP',
  titleDelimiter: '·',
  themeConfig: {
    navbar: {
      title: 'ProtonAOSP',
      hideOnScroll: true,
      logo: {
        alt: 'ProtonAOSP Logo',
        src: 'img/logo-light.svg',
        srcDark: 'img/logo-dark.svg',
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
            {
              label: 'FAQ',
              to: '/faq',
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
              to: '/performance',
            },
          ],
        },
        {
          title: 'Resources',
          items: [
            {
              label: 'Donate',
              to: '/donate',
            },
            {
              label: 'Terms of service',
              href: 'https://kdrag0n.dev/terms-of-service',
            },
            {
              label: 'Privacy policy',
              href: 'https://kdrag0n.dev/privacy-policy',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} <a href="https://kdrag0n.dev/">Danny Lin (kdrag0n)</a><br><span style="color:var(--ifm-footer-link-color);display:inline-block;padding-top:1em">Android is a trademark of Google LLC.</span><br><span style="color:var(--ifm-footer-link-color)">ProtonAOSP is not affiliated with Proton AG.</span>`,
    },
    prism: {
      theme: require('prism-react-renderer/themes/nightOwlLight'),
      darkTheme: require('prism-react-renderer/themes/oceanicNext'),
    },
    colorMode: {
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'release_12.4.0-test1',
      content: '<a href="/versions/12.4.0?utm_source=docs-banner&utm_campaign=12.4.0-banner">ProtonAOSP 12.4.0 is now available in early access!</a>',
    },
    algolia: process.env.ALGOLIA_API_KEY && {
      appId: process.env.ALGOLIA_APP_ID,
      apiKey: process.env.ALGOLIA_API_KEY,
      indexName: process.env.ALGOLIA_INDEX_NAME,
    },
    goatcounter: process.env.GOATCOUNTER_CODE && {
      code: process.env.GOATCOUNTER_CODE,
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
  scripts: process.env.SA_DOMAIN !== undefined ? [
    {
      src: `https://${process.env.SA_DOMAIN}/latest.js`,
      async: true,
      defer: true,
      'data-skip-dnt': 'true',
    }
  ] : undefined,
  plugins: process.env.GOATCOUNTER_CODE !== undefined ? [
    'docusaurus-plugin-goatcounter',
  ] : undefined,
};
