(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"Quote",(function(){return s})),n.d(t,"default",(function(){return p}));var r=n(2),a=n(6),o=(n(0),n(123)),l=(n(129),n(130),{id:"notes_hpc",title:"HPC",author:"Taieb"}),c={unversionedId:"notes_hpc",id:"notes_hpc",isDocsHomePage:!1,title:"HPC",description:"export const Quote = ({ children, color }) => (",source:"@site/docs/notes_hpc.mdx",slug:"/notes_hpc",permalink:"/FAQ/docs/notes_hpc",version:"current",sidebar:"someSidebar",previous:{title:"Disaster Recovery",permalink:"/FAQ/docs/notes_dr"},next:{title:"Five Pillars",permalink:"/FAQ/docs/notes_fp"}},i=[{value:"High Performance Computing",id:"high-performance-computing",children:[]}],s=function(e){var t=e.children;e.color;return Object(o.b)("span",{style:{backgroundColor:"#5a5a5a",borderRadius:"8px",color:"#FF9900",padding:"0.21rem"}},t)},b={rightToc:i,Quote:s};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},b,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"high-performance-computing"},"High Performance Computing"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To transfer data, you can use"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Direct Connect \u2014 GB/s connection to transfer to cloud over a private secure network"),Object(o.b)("li",{parentName:"ol"},"Snowball and Snowmobile \u2014 transfer PB/EB scale data"),Object(o.b)("li",{parentName:"ol"},"DataSync \u2014 Install agent on prem to move data to S3, EFS, FSx"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Compute"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"CPU and GPU optimized"),Object(o.b)("li",{parentName:"ol"},"Spot instances / Spot fleets for cost savings + Auto scaling"),Object(o.b)("li",{parentName:"ol"},"Cluster placement group for max network performance"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"EC2 enhanced networking (ENA or SR-IOV)")),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Very high network throughput"),Object(o.b)("li",{parentName:"ol"},"Available on Windows"),Object(o.b)("li",{parentName:"ol"},"Low inter-instance latency"),Object(o.b)("li",{parentName:"ol"},"Higher bandwidth, higher PPS (packets per second), lower latency"),Object(o.b)("li",{parentName:"ol"},"Can be done via Intel 82599 VF (legacy, 10Gbps) or ENA (new, 100Gbps)"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Elastic Fabric Adapter (EFA)")),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Improved ENA for HPC, ",Object(o.b)("strong",{parentName:"li"},"only works for linux")),Object(o.b)("li",{parentName:"ol"},"EFA devices provide all ENA devices functionalities plus a new OS bypass hardware interface that allows user-space applications to communicate directly with the hardware-provided reliable transport functionality."),Object(o.b)("li",{parentName:"ol"},"Great for inter-node communications, tightly coupled workloads"),Object(o.b)("li",{parentName:"ol"},"Leverages ",Object(o.b)("strong",{parentName:"li"},"Message Passing Interface")," (MPI) which can bypass underlying OS calls to improve latency"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Storage"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Instance-attached storage"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"EBS can scale up to 64000 IOPS with IO1 provisioned IOPS"),Object(o.b)("li",{parentName:"ol"},"Instance store: scale to millions of IOPS, linked to EC2 memory, low latency"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Network storage"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"S3"),Object(o.b)("li",{parentName:"ol"},"EFS"),Object(o.b)("li",{parentName:"ol"},"FSx for Lustre",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"HPC-optimized distributed file system"),Object(o.b)("li",{parentName:"ol"},"Millions of IOPS"),Object(o.b)("li",{parentName:"ol"},"Backed by S3"))))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Automation and orchestration"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"AWS Batch: Supports multi-node parallel jobs over EC2s, schedule jobs and launch easily."),Object(o.b)("li",{parentName:"ol"},"AWS Parallel Cluster",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Open source cluster management tool to deploy HPC on AWS"),Object(o.b)("li",{parentName:"ol"},"Configure with text files"),Object(o.b)("li",{parentName:"ol"},"Automate creation of VPC, subnet, cluster type etc")))))))}p.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return p})),n.d(t,"b",(function(){return d}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),b=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},p=function(e){var t=b(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=b(n),m=r,d=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?a.a.createElement(d,c(c({ref:t},s),{},{components:n})):a.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,l=new Array(o);l[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:r,l[1]=c;for(var s=2;s<o;s++)l[s]=n[s];return a.a.createElement.apply(null,l)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},124:function(e,t,n){"use strict";function r(e){var t,n,a="";if("string"==typeof e||"number"==typeof e)a+=e;else if("object"==typeof e)if(Array.isArray(e))for(t=0;t<e.length;t++)e[t]&&(n=r(e[t]))&&(a&&(a+=" "),a+=n);else for(t in e)e[t]&&(a&&(a+=" "),a+=t);return a}t.a=function(){for(var e,t,n=0,a="";n<arguments.length;)(e=arguments[n++])&&(t=r(e))&&(a&&(a+=" "),a+=t);return a}},126:function(e,t,n){"use strict";var r=n(0);const a=Object(r.createContext)(void 0);t.a=a},127:function(e,t,n){"use strict";var r=n(0),a=n(126);t.a=function(){const e=Object(r.useContext)(a.a);if(null==e)throw new Error("`useUserPreferencesContext` is used outside of `Layout` Component.");return e}},129:function(e,t,n){"use strict";var r=n(0),a=n.n(r),o=n(127),l=n(124),c=n(47),i=n.n(c);const s=37,b=39;t.a=function(e){const{block:t,children:n,defaultValue:c,values:p,groupId:u}=e,{tabGroupChoices:m,setTabGroupChoices:d}=Object(o.a)(),[f,O]=Object(r.useState)(c),[j,y]=Object(r.useState)(!1);if(null!=u){const e=m[u];null!=e&&e!==f&&p.some((t=>t.value===e))&&O(e)}const N=e=>{O(e),null!=u&&d(u,e)},h=[],g=e=>{e.metaKey||e.altKey||e.ctrlKey||y(!0)},v=()=>{y(!1)};return Object(r.useEffect)((()=>{window.addEventListener("keydown",g),window.addEventListener("mousedown",v)}),[]),a.a.createElement("div",null,a.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:Object(l.a)("tabs",{"tabs--block":t})},p.map((({value:e,label:t})=>a.a.createElement("li",{role:"tab",tabIndex:0,"aria-selected":f===e,className:Object(l.a)("tabs__item",i.a.tabItem,{"tabs__item--active":f===e}),style:j?{}:{outline:"none"},key:e,ref:e=>h.push(e),onKeyDown:e=>{((e,t,n)=>{switch(n.keyCode){case b:((e,t)=>{const n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()})(e,t);break;case s:((e,t)=>{const n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()})(e,t)}})(h,e.target,e),g(e)},onFocus:()=>N(e),onClick:()=>{N(e),y(!1)},onPointerDown:()=>y(!1)},t)))),a.a.createElement("div",{role:"tabpanel",className:"margin-vert--md"},r.Children.toArray(n).filter((e=>e.props.value===f))[0]))}},130:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement("div",null,e.children)}}}]);