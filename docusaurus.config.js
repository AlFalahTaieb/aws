module.exports = {
  title: 'AWS SAA-C02 Ressources',
  tagline: 'The tagline of my site',
  url: 'https://AlFalahTaieb.github.com',
  baseUrl: '/FAQ/',
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  onBrokenLinks:'ignore',
  organizationName: 'AlFalahTaieb', // Usually your GitHub org/user name.
  projectName: 'aws', // Usually your repo name.
  themeConfig: {
    hideableSidebar: true,
    prism: {
      theme: require("./src/internals/prism-dracula"),
    },
    navbar: {
      title: 'AWS SAA-C02 Ressources',
      // href: '/docs',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.svg',
        srcDark: 'img/logodark.svg',
        href: 'docs/start',
        target: '_self',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        // {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://alfelah.com',
          label: 'Taieb',
          position: 'right',
        },
      ],
    },
    // footer: {
    //   style: 'dark',
    //   // links: [
    //   //   {
    //   //     title: 'Docs',
    //   //     items: [
    //   //       {
    //   //         label: 'Style Guide',
    //   //         to: 'docs/',
    //   //       },
    //   //       {
    //   //         label: 'Second Doc',
    //   //         to: 'docs/ec2/',
    //   //       },
    //   //     ],
    //   //   },
    //   //   {
    //   //     title: 'Community',
    //   //     items: [
    //   //       {
    //   //         label: 'Stack Overflow',
    //   //         href: 'https://stackoverflow.com/questions/tagged/docusaurus',
    //   //       },
    //   //       {
    //   //         label: 'Discord',
    //   //         href: 'https://discordapp.com/invite/docusaurus',
    //   //       },
    //   //       {
    //   //         label: 'Twitter',
    //   //         href: 'https://twitter.com/docusaurus',
    //   //       },
    //   //     ],
    //   //   },
    //   //   {
    //   //     title: 'More',
    //   //     items: [
    //   //       {
    //   //         label: 'Blog',
    //   //         to: 'blog',
    //   //       },
    //   //       {
    //   //         label: 'GitHub',
    //   //         href: 'https://github.com/facebook/docusaurus',
    //   //       },
    //   //     ],
    //   //   },
    //   // ],
    //   copyright: `${new Date().getFullYear()} Built with a lot of love ❤️`,
    // },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          // Please change this to your repo.
          // editUrl:
          //   'https://github.com/facebook/docusaurus/edit/master/website/',
        },
        blog: {
          path: './blog',
          showReadingTime: true,
          // Please change this to your repo.
          // editUrl:
          //   'https://faqaws.com',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
