(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{123:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),r=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var b=r.a.createContext({}),s=function(e){var t=r.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return r.a.createElement(b.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,o=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),p=s(a),m=n,O=p["".concat(o,".").concat(m)]||p[m]||u[m]||i;return a?r.a.createElement(O,l(l({ref:t},b),{},{components:a})):r.a.createElement(O,l({ref:t},b))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,o=new Array(i);o[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:n,o[1]=l;for(var b=2;b<i;b++)o[b]=a[b];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},124:function(e,t,a){"use strict";function n(e){var t,a,r="";if("string"==typeof e||"number"==typeof e)r+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(a=n(e[t]))&&(r&&(r+=" "),r+=a);else for(t in e)e[t]&&(r&&(r+=" "),r+=t);return r}t.a=function(){for(var e,t,a=0,r="";a<arguments.length;)(e=arguments[a++])&&(t=n(e))&&(r&&(r+=" "),r+=t);return r}},126:function(e,t,a){"use strict";var n=a(0);const r=Object(n.createContext)(void 0);t.a=r},127:function(e,t,a){"use strict";var n=a(0),r=a(126);t.a=function(){const e=Object(n.useContext)(r.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},129:function(e,t,a){"use strict";var n=a(0),r=a.n(n),i=a(127),o=a(124),l=a(47),c=a.n(l);const b=37,s=39;t.a=function(e){const{block:t,children:a,defaultValue:l,values:p,groupId:u}=e,{tabGroupChoices:m,setTabGroupChoices:O}=Object(i.a)(),[d,j]=Object(n.useState)(l),[f,N]=Object(n.useState)(!1);if(null!=u){const e=m[u];null!=e&&e!==d&&p.some((t=>t.value===e))&&j(e)}const g=e=>{j(e),null!=u&&O(u,e)},v=[],y=e=>{e.metaKey||e.altKey||e.ctrlKey||N(!0)},h=()=>{N(!1)};return Object(n.useEffect)((()=>{window.addEventListener("keydown",y),window.addEventListener("mousedown",h)}),[]),r.a.createElement("div",null,r.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(o.a)("tabs",{"tabs--block":t})},p.map((({value:e,label:t})=>r.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":d===e,className:Object(o.a)("tabs__item",c.a.tabItem,{"tabs__item--active":d===e}),style:f?{}:{outline:"none"},key:e,ref:e=>v.push(e),onKeyDown:e=>{((e,t,a)=>{switch(a.keyCode){case s:((e,t)=>{const a=e.indexOf(t)+1;e[a]?e[a].focus():e[0].focus()})(e,t);break;case b:((e,t)=>{const a=e.indexOf(t)-1;e[a]?e[a].focus():e[e.length-1].focus()})(e,t)}})(v,e.target,e),y(e)},onFocus:()=>g(e),onClick:()=>{g(e),N(!1)},onPointerDown:()=>N(!1)},t)))),r.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},n.Children.toArray(a).filter((e=>e.props.value===d))[0]))}},130:function(e,t,a){"use strict";var n=a(0),r=a.n(n);t.a=function(e){return r.a.createElement("div",null,e.children)}},172:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dr1-b653ee0d053388a9f1a14d3779118293.png"},173:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dr2-ac8b9682ab559a75b222bf4827f89a99.png"},174:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dr3-115ee7e21805c4e924ff033ef7bca449.png"},175:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/dr4-788d6a2b1c32f41d55b7a51c55b1ccaf.png"},55:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return o})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return c})),a.d(t,"Quote",(function(){return b})),a.d(t,"default",(function(){return p}));var n=a(2),r=a(6),i=(a(0),a(123)),o=(a(129),a(130),{id:"notes_dr",title:"Disaster Recovery",author:"Taieb"}),l={unversionedId:"notes_dr",id:"notes_dr",isDocsHomePage:!1,title:"Disaster Recovery",description:"export const Quote = ({ children, color }) => (",source:"@site/docs/notes_dr.mdx",slug:"/notes_dr",permalink:"/FAQ/docs/notes_dr",version:"current",sidebar:"someSidebar",previous:{title:"Other Services",permalink:"/FAQ/docs/notes_os"},next:{title:"HPC",permalink:"/FAQ/docs/notes_hpc"}},c=[{value:"I. Introduction",id:"i-introduction",children:[]},{value:"II. DR Strategies",id:"ii-dr-strategies",children:[]},{value:"III. DR Tips",id:"iii-dr-tips",children:[]},{value:"IV. Database Migration Service (DMS)",id:"iv-database-migration-service-dms",children:[]},{value:"V. On-premise strategy with AWS",id:"v-on-premise-strategy-with-aws",children:[]},{value:"VI. Data transfer scenarios",id:"vi-data-transfer-scenarios",children:[]}],b=function(e){var t=e.children;e.color;return Object(i.b)("span",{style:{backgroundColor:"#5a5a5a",borderRadius:"8px",color:"#FF9900",padding:"0.21rem"}},t)},s={rightToc:c,Quote:b};function p(e){var t=e.components,o=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},s,o,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"i-introduction"},"I. Introduction"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Any event that has a negative impact on a company's business continuity or finances is a disaster.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Disaster Recovery (DR) is about preparing and recovering from it.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Kinds of DR"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"On premise \u2192 traditional, very expensive"),Object(i.b)("li",{parentName:"ol"},"On premise \u2192 AWS cloud hybrid recovery"),Object(i.b)("li",{parentName:"ol"},"Full cloud \u2192 AWS region A to B"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Recovery Point Objective (RPO) vs Recovery Time Objective (RTO)"))),Object(i.b)("p",null,Object(i.b)("img",{alt:"Disaster Recovery AWS",src:a(172).default})),Object(i.b)("h2",{id:"ii-dr-strategies"},"II. DR Strategies"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Backup and restore",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"High RPO and RTO \u2192 hours"),Object(i.b)("li",{parentName:"ol"},"No managing infra"),Object(i.b)("li",{parentName:"ol"},"Just restore from most recent point in time"),Object(i.b)("li",{parentName:"ol"},"Keep snapshots of EBS volumes, RDS, S3 (or Glacier)")))),Object(i.b)("p",null,Object(i.b)("img",{alt:"Disaster Recovery AWS",src:a(173).default})),Object(i.b)("ol",{start:2},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Pilot light"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"RPO and RTO \u2192 10s of minutes"),Object(i.b)("li",{parentName:"ol"},"A small flame that\u2019s always on can quickly ignite the entire furnace to heat up a house"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Most critical core elements are running")),Object(i.b)("li",{parentName:"ol"},"When the time comes, you can rapidly provision a full-scale production app"),Object(i.b)("li",{parentName:"ol"},"It is an Active/Passive failover configuration"),Object(i.b)("li",{parentName:"ol"},"Restore happens through EBS snapshots and AMIs"),Object(i.b)("li",{parentName:"ol"},"Lower RTO/RPO than backup because your app will always running"),Object(i.b)("li",{parentName:"ol"},"Faster than backup because critical systems are already up"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Full-working low-capacity (warm) standby"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"RPO and RTO \u2192 minutes"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Scaled-down version of a fully functional system is always running")),Object(i.b)("li",{parentName:"ol"},"Another example of Active/Passive failover configuration"),Object(i.b)("li",{parentName:"ol"},"Servers can be left running on minimum and ",Object(i.b)("strong",{parentName:"li"},"smallest EC2s")),Object(i.b)("li",{parentName:"ol"},"Upon disaster, we can scale it to production load by increasing instances"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Multi-site Active-Active"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Very low RTO (minutes or seconds)"),Object(i.b)("li",{parentName:"ol"},"Most expensive"),Object(i.b)("li",{parentName:"ol"},"Full production scale is running on one AWS region and on premise"),Object(i.b)("li",{parentName:"ol"},"You can just change DNS and be good to go in case of failover")))),Object(i.b)("p",null,Object(i.b)("img",{alt:"Disaster Recovery AWS",src:a(174).default})),Object(i.b)("h2",{id:"iii-dr-tips"},"III. DR Tips"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Backup"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"EBS snapshots, RDS automated backups"),Object(i.b)("li",{parentName:"ol"},"Regular pushes to S3, S3 IA, Glacier (with lifecycle policy)"),Object(i.b)("li",{parentName:"ol"},"From on-prem: Snowball or Storage Gateway"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"HA"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Use Route53 to migrate from one region to another"),Object(i.b)("li",{parentName:"ol"},"RDS multi AZ, ElastiCache multi-AZ, EFS"),Object(i.b)("li",{parentName:"ol"},"Site to site VPN as a recovery from Direct Connect"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Replication"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"RDS replication (cross-region), AWS Aurora + Global Database"),Object(i.b)("li",{parentName:"ol"},"Database replication from on-prem to RDS"),Object(i.b)("li",{parentName:"ol"},"Storage Gateway"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Automation"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"CloudFormation, Beanstalk to re-create full env"),Object(i.b)("li",{parentName:"ol"},"Recover/Reboot EC2 with CloudWatch alarms"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Chaos engineering "))),Object(i.b)("h2",{id:"iv-database-migration-service-dms"},"IV. Database Migration Service (DMS)"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Quickly and securely migrate db to AWS, resilient, self-healing")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The source db remains available 100% during migration")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Supports both homogenous and heterogenous migrations"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Oracle to Oracle"),Object(i.b)("li",{parentName:"ol"},"Oracle to Pgsql"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Continuous data replication using CDC")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You must create an EC2 instance to perform replication tasks")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"If your source and target databases are different, then you need to use Schema Conversion Tool (SCT)"))),Object(i.b)("p",null,Object(i.b)("img",{alt:"Disaster Recovery AWS",src:a(175).default})),Object(i.b)("h2",{id:"v-on-premise-strategy-with-aws"},"V. On-premise strategy with AWS"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Ability to download AMI in .iso format. This can then loaded on popular VM softwares including VMWare, HyperV etc")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You can also migrate existing applications to EC2 and create a DR strategy for on-prem VMs.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You can also export back from EC2 to on-prem VM.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"AWS Application Discovery Service"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Gather info about your on-prem servers to plan a migration"),Object(i.b)("li",{parentName:"ol"},"Server utilization and dependency mapping"),Object(i.b)("li",{parentName:"ol"},"Track with AWS migration hub"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"AWS Server Migration Service (SMS) \u2014 Incremental replication of on-premise live servers to AWS"))),Object(i.b)("h2",{id:"vi-data-transfer-scenarios"},"VI. Data transfer scenarios"),Object(i.b)("p",null,"Scenario: Transferring 200TB of data to cloud over 100Mbps connection"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Over the internet (Site-to-site VPN) \u2014 immediate to setup but will take 185 days!"),Object(i.b)("li",{parentName:"ol"},"Over direct connect (1Gbps) \u2014 long setup time (1 month), 18.5 days"),Object(i.b)("li",{parentName:"ol"},"Snowball \u2014 1 week end-to-end transfer")))}p.isMDXComponent=!0}}]);