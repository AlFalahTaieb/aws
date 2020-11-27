export default {
  "title": "AWS SAA-C02 Ressources",
  "tagline": "The tagline of my site",
  "url": "https://AlFalahTaieb.github.com",
  "baseUrl": "/FAQ/",
  "onBrokenLinks": "ignore",
  "favicon": "img/favicon.ico",
  "organizationName": "AlFalahTaieb",
  "projectName": "aws",
  "themeConfig": {
    "hideableSidebar": true,
    "prism": {
      "theme": {
        "plain": {
          "color": "#f8f8f2",
          "backgroundColor": "#262833"
        },
        "styles": [
          {
            "types": [
              "prolog",
              "constant",
              "boolean",
              "builtin"
            ],
            "style": {
              "color": "#bd93f9"
            }
          },
          {
            "types": [
              "inserted",
              "function"
            ],
            "style": {
              "color": "#8be9fd"
            }
          },
          {
            "types": [
              "dataType"
            ],
            "style": {
              "color": "#8be9fd",
              "fontStyle": "italic"
            }
          },
          {
            "types": [
              "deleted"
            ],
            "style": {
              "color": "#ff5555"
            }
          },
          {
            "types": [
              "changed"
            ],
            "style": {
              "color": "#ffb86c"
            }
          },
          {
            "types": [
              "punctuation",
              "symbol"
            ],
            "style": {
              "color": "#f8f8f2"
            }
          },
          {
            "types": [
              "string",
              "char",
              "tag",
              "selector"
            ],
            "style": {
              "color": "#f1fa8c"
            }
          },
          {
            "types": [
              "keyword",
              "variable",
              "operator"
            ],
            "style": {
              "color": "#ff79c6"
            }
          },
          {
            "types": [
              "number"
            ],
            "style": {
              "color": "#50fa7b"
            }
          },
          {
            "types": [
              "comment"
            ],
            "style": {
              "color": "#6272a4"
            }
          },
          {
            "types": [
              "attr-name"
            ],
            "style": {
              "color": "rgb(241, 250, 140)"
            }
          }
        ]
      }
    },
    "navbar": {
      "title": "AWS SAA-C02 Ressources",
      "logo": {
        "alt": "My Site Logo",
        "src": "img/logo.svg",
        "srcDark": "img/logodark.svg",
        "href": "docs/start",
        "target": "_self"
      },
      "items": [
        {
          "to": "docs/",
          "activeBasePath": "docs",
          "label": "Docs",
          "position": "left"
        },
        {
          "href": "https://alfelah.com",
          "label": "Taieb",
          "position": "right"
        }
      ],
      "hideOnScroll": false
    },
    "colorMode": {
      "defaultMode": "light",
      "disableSwitch": false,
      "respectPrefersColorScheme": false,
      "switchConfig": {
        "darkIcon": "🌜",
        "darkIconStyle": {},
        "lightIcon": "🌞",
        "lightIconStyle": {}
      }
    },
    "metadatas": []
  },
  "presets": [
    [
      "@docusaurus/preset-classic",
      {
        "docs": {
          "sidebarPath": "/home/taieb/Bureau/aws/sidebars.js"
        },
        "blog": {
          "path": "./blog",
          "showReadingTime": true
        },
        "theme": {
          "customCss": "/home/taieb/Bureau/aws/src/css/custom.css"
        }
      }
    ]
  ],
  "onDuplicateRoutes": "warn",
  "customFields": {},
  "plugins": [],
  "themes": [],
  "titleDelimiter": "|"
};