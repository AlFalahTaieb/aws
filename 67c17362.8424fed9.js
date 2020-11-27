(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{123:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return p}));var n=a(0),r=a.n(n);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=r.a.createContext({}),l=function(e){var t=r.a.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},d=function(e){var t=l(e.components);return r.a.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},h=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=l(a),h=n,p=d["".concat(i,".").concat(h)]||d[h]||m[h]||o;return a?r.a.createElement(p,s(s({ref:t},u),{},{components:a})):r.a.createElement(p,s({ref:t},u))}));function p(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=a[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,a)}h.displayName="MDXCreateElement"},84:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return c})),a.d(t,"default",(function(){return l}));var n=a(2),r=a(6),o=(a(0),a(123)),i={id:"route53",title:"Amazon Route53 FAQs",sidebar_label:"Amazon Route53 FAQs"},s={unversionedId:"route53",id:"route53",isDocsHomePage:!1,title:"Amazon Route53 FAQs",description:"Q. What is a Domain Name System (DNS) Service?",source:"@site/docs/route53.md",slug:"/route53",permalink:"/FAQ/docs/route53",version:"current",sidebar_label:"Amazon Route53 FAQs"},c=[{value:"Q. What is a Domain Name System (DNS) Service?",id:"q-what-is-a-domain-name-system-dns-service",children:[]},{value:"Q. What is Amazon Route 53?",id:"q-what-is-amazon-route-53",children:[]},{value:"Q. What can I do with Amazon Route 53?",id:"q-what-can-i-do-with-amazon-route-53",children:[]},{value:"Q. How does Amazon Route 53 provide high availability and low latency?",id:"q-how-does-amazon-route-53-provide-high-availability-and-low-latency",children:[]},{value:"Q. What are the DNS server names for the Amazon Route 53 service?",id:"q-what-are-the-dns-server-names-for-the-amazon-route-53-service",children:[]},{value:"Q. Which DNS record types does Amazon Route 53 support?",id:"q-which-dns-record-types-does-amazon-route-53-support",children:[]},{value:"Q. What is Amazon Route 53&#39;s Latency Based Routing (LBR) feature?",id:"q-what-is-amazon-route-53s-latency-based-routing-lbr-feature",children:[]}],u={rightToc:c};function l(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},u,a,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"q-what-is-a-domain-name-system-dns-service"},"Q. What is a Domain Name System (DNS) Service?"),Object(o.b)("p",null,"DNS is a globally distributed service that translates human readable names like ",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.example.com"}),"www.example.com")," into the numeric IP addresses like 192.0.2.1 that computers use to connect to each other. The Internet\u2019s DNS system works much like a phone book by managing the mapping between names and numbers. For DNS, the names are domain names (",Object(o.b)("a",Object(n.a)({parentName:"p"},{href:"http://www.example.com"}),"www.example.com"),') that are easy for people to remember and the numbers are IP addresses (192.0.2.1) that specify the location of computers on the Internet. DNS servers translate requests for names into IP addresses, controlling which server an end user will reach when they type a domain name into their web browser. These requests are called "queries."'),Object(o.b)("h2",{id:"q-what-is-amazon-route-53"},"Q. What is Amazon Route 53?"),Object(o.b)("p",null,"Amazon Route 53 provides highly available and scalable Domain Name System (DNS), domain name registration, and health-checking web services. It is designed to give developers and businesses an extremely reliable and cost effective way to route end users to Internet applications by translating names like example.com into the numeric IP addresses, such as 192.0.2.1, that computers use to connect to each other. You can combine your DNS with health-checking services to route traffic to healthy endpoints or to independently monitor and/or alarm on endpoints. You can also purchase and manage domain names such as example.com and automatically configure DNS settings for your domains. Route 53 effectively connects user requests to infrastructure running in AWS \u2013 such as Amazon EC2 instances, Elastic Load Balancing load balancers, or Amazon S3 buckets \u2013 and can also be used to route users to infrastructure outside of AWS."),Object(o.b)("h2",{id:"q-what-can-i-do-with-amazon-route-53"},"Q. What can I do with Amazon Route 53?"),Object(o.b)("p",null,"With Amazon Route 53, you can create and manage your public DNS records. Like a phone book, Route 53 lets you manage the IP addresses listed for your domain names in the Internet\u2019s DNS phone book. Route 53 also answers requests to translate specific domain names like into their corresponding IP addresses like 192.0.2.1. You can use Route 53 to create DNS records for a new domain or transfer DNS records for an existing domain. The simple, standards-based REST API for Route 53 allows you to easily create, update and manage DNS records. Route 53 additionally offers health checks to monitor the health and performance of your application as well as your web servers and other resources. You can also register new domain names or transfer in existing domain names to be managed by Route 53."),Object(o.b)("h2",{id:"q-how-does-amazon-route-53-provide-high-availability-and-low-latency"},"Q. How does Amazon Route 53 provide high availability and low latency?"),Object(o.b)("p",null,"Route 53 is built using AWS\u2019s highly available and reliable infrastructure. The globally distributed nature of our DNS servers helps ensure a consistent ability to route your end users to your application by circumventing any internet or network related issues. Route 53 is designed to provide the level of dependability required by important applications. Using a global anycast network of DNS servers around the world, Route 53 is designed to automatically answer queries from the optimal location depending on network conditions. As a result, the service offers low query latency for your end users."),Object(o.b)("h2",{id:"q-what-are-the-dns-server-names-for-the-amazon-route-53-service"},"Q. What are the DNS server names for the Amazon Route 53 service?"),Object(o.b)("p",null,"To provide you with a highly available service, each Amazon Route 53 hosted zone is served by its own set of virtual DNS servers. The DNS server names for each hosted zone are thus assigned by the system when that hosted zone is created."),Object(o.b)("h2",{id:"q-which-dns-record-types-does-amazon-route-53-support"},"Q. Which DNS record types does Amazon Route 53 support?"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"A (address record)"),Object(o.b)("li",{parentName:"ul"},"AAAA (IPv6 address record)"),Object(o.b)("li",{parentName:"ul"},"CNAME (canonical name record)"),Object(o.b)("li",{parentName:"ul"},"CAA (certification authority authorization)"),Object(o.b)("li",{parentName:"ul"},"MX (mail exchange record)"),Object(o.b)("li",{parentName:"ul"},"NAPTR (name authority pointer record)"),Object(o.b)("li",{parentName:"ul"},"NS (name server record)")),Object(o.b)("h2",{id:"q-what-is-amazon-route-53s-latency-based-routing-lbr-feature"},"Q. What is Amazon Route 53's Latency Based Routing (LBR) feature?"),Object(o.b)("p",null,"LBR (Latency Based Routing) is a new feature for Amazon Route 53 that helps you improve your application\u2019s performance for a global audience. You can run applications in multiple AWS regions and Amazon Route 53, using dozens of edge locations worldwide, will route end users to the AWS region that provides the lowest latency."))}l.isMDXComponent=!0}}]);