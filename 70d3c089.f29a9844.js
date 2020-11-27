(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{123:function(e,t,a){"use strict";a.d(t,"a",(function(){return s})),a.d(t,"b",(function(){return O}));var r=a(0),n=a.n(r);function o(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){o(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function c(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var b=n.a.createContext({}),p=function(e){var t=n.a.useContext(b),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return n.a.createElement(b.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},u=n.a.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,l=e.parentName,b=c(e,["components","mdxType","originalType","parentName"]),s=p(a),u=r,O=s["".concat(l,".").concat(u)]||s[u]||m[u]||o;return a?n.a.createElement(O,i(i({ref:t},b),{},{components:a})):n.a.createElement(O,i({ref:t},b))}));function O(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var b=2;b<o;b++)l[b]=a[b];return n.a.createElement.apply(null,l)}return n.a.createElement.apply(null,a)}u.displayName="MDXCreateElement"},202:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/kms1-fab048c3cfcb642b84da51c849941d00.png"},85:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return i})),a.d(t,"rightToc",(function(){return c})),a.d(t,"Quote",(function(){return b})),a.d(t,"default",(function(){return s}));var r=a(2),n=a(6),o=(a(0),a(123)),l={id:"notes_kms",title:"KMS",sidebar_label:"KMS",author:"Taieb"},i={unversionedId:"notes_kms",id:"notes_kms",isDocsHomePage:!1,title:"KMS",description:"export const Quote = ({ children, color }) => (",source:"@site/docs/notes_kms.mdx",slug:"/notes_kms",permalink:"/FAQ/docs/notes_kms",version:"current",sidebar_label:"KMS",sidebar:"someSidebar",previous:{title:"CloudTrail",permalink:"/FAQ/docs/notes_ct"},next:{title:"SSM",permalink:"/FAQ/docs/notes_ssm"}},c=[{value:"I. Encryption",id:"i-encryption",children:[]},{value:"II. KMS Overview",id:"ii-kms-overview",children:[]},{value:"III. KMS Policies",id:"iii-kms-policies",children:[]},{value:"IV. CloudHSM",id:"iv-cloudhsm",children:[]}],b=function(e){var t=e.children;e.color;return Object(o.b)("span",{style:{backgroundColor:"#5a5a5a",borderRadius:"8px",color:"#FF9900",padding:"0.21rem"}},t)},p={rightToc:c,Quote:b};function s(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"i-encryption"},"I. Encryption"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Encryption is required to safeguard against hackers.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"In-flight encryption protects against MITM attack.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"SSE: data is encrypted after being received by the server."),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"It is decrypted before being sent to the user"),Object(o.b)("li",{parentName:"ol"},"The encryption is managed through KMS"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Client encryption"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Data is encrypted by the client and never by the server"),Object(o.b)("li",{parentName:"ol"},"Data will be decrypted by the receiving client"),Object(o.b)("li",{parentName:"ol"},"The server should not be able to decrypt"),Object(o.b)("li",{parentName:"ol"},"Could leverage envelope encryption")))),Object(o.b)("h2",{id:"ii-kms-overview"},"II. KMS Overview"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Anytime you hear encryption for an AWS service, it's most likely KMS"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Easy way to control access to your data, AWS manages keys for us")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Fully integrated with IAM for auth"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Seamlessly integrated into EBS, S3, RDS, Redshift etc"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Can also use CLI or SDK")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Customer Master Key (CMK)")),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Symmetric (AES-256)")),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"First KMS offering, single key for both encryption and decryption"),Object(o.b)("li",{parentName:"ol"},"AWS services use this"),Object(o.b)("li",{parentName:"ol"},"Necessary for envelope encryption"),Object(o.b)("li",{parentName:"ol"},"You never get access to key unencrypted (must use KMS API)"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"Asymmetric (RSA & ECC key pairs)")),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Public (encrypt) and private (decrypt)"),Object(o.b)("li",{parentName:"ol"},"Public key is downloadable"),Object(o.b)("li",{parentName:"ol"},"Used when symmetric keys is unavailable i.e. cannot call KMS API"))))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Able to fully manage keys and policies"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Create"),Object(o.b)("li",{parentName:"ol"},"Rotation"),Object(o.b)("li",{parentName:"ol"},"Enable/Disable "),Object(o.b)("li",{parentName:"ol"},"Audit (with CloudTrail)"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Three types of CMK"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"AWS managed default CMK (free)"),Object(o.b)("li",{parentName:"ol"},"User-created: $1/month         "),Object(o.b)("li",{parentName:"ol"},"User-imported (must be 256-bit symmetric key): $1/month"),Object(o.b)("li",{parentName:"ol"},"pay for API call to KMS ($0.03/10000 calls)"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"The real value of KMS is that the user never sees the keys and can only call the APIs. Thus the keys always stay with AWS.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Never store secrets in plaintext. Encrypted secrets can be stored in code/env variables.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"KMS can only help in encrypting up to 4KB of data per call.")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"If data > 4KB, use envelope encryption")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"To give access to KMS to someone"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Make sure the key policy allows the user")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"Make sure the IAM policy allows the API calls")))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},Object(o.b)("strong",{parentName:"p"},"KMS keys are region bound!")," "))),Object(o.b)("p",null,Object(o.b)("img",{alt:"KMS AWS",src:a(202).default})),Object(o.b)("h2",{id:"iii-kms-policies"},"III. KMS Policies"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Control access to KMS keys, similar to S3 bucket policies")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"You cannot control access without them")),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Default KMS key policy"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Created if you don't provide a specific KMS key policy"),Object(o.b)("li",{parentName:"ol"},"Complete access to the key to the root user (= entire AWS account)"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Custom KMS key policy"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Define users, roles that can access the KMS key"),Object(o.b)("li",{parentName:"ol"},"Define who can administer the key"),Object(o.b)("li",{parentName:"ol"},"Useful for cross-account access of your KMS key"))),Object(o.b)("li",{parentName:"ol"},Object(o.b)("p",{parentName:"li"},"Copying snapshots across accounts"),Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Create snapshot, encrypted with your own CMK"),Object(o.b)("li",{parentName:"ol"},"Attach a policy allowing the target account to read"),Object(o.b)("li",{parentName:"ol"},"Share encrypted snapshot"),Object(o.b)("li",{parentName:"ol"},"(In target) create a copy of snapshot and encrypt using a KMS key in your account"),Object(o.b)("li",{parentName:"ol"},"Create a volume from the snapshot")))),Object(o.b)("h2",{id:"iv-cloudhsm"},"IV. CloudHSM"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Hardware appliance for keys"),Object(o.b)("li",{parentName:"ol"},"KMS \u2192 AWS manages the software for encryption"),Object(o.b)("li",{parentName:"ol"},"CloudHSM \u2192 AWS provisions encryption hardware"),Object(o.b)("li",{parentName:"ol"},"You manage your own encryption keys"),Object(o.b)("li",{parentName:"ol"},"HSM device is tamper resistant, FIPS 140-2 Level 3 compliance"),Object(o.b)("li",{parentName:"ol"},"HSM clusters are spread across multi-AZ (must setup yourself)"),Object(o.b)("li",{parentName:"ol"},"Supports both symmetric and asymmetric keys"),Object(o.b)("li",{parentName:"ol"},"No free tier available"),Object(o.b)("li",{parentName:"ol"},"Must use the CloudHSM client software"),Object(o.b)("li",{parentName:"ol"},"Supported by Redshift"),Object(o.b)("li",{parentName:"ol"},"Good option to use along side SSE-C encryption"),Object(o.b)("li",{parentName:"ol"},Object(o.b)("strong",{parentName:"li"},"If the HSM is zeroized and you did not have a copy of keys stored somewhere else, they are lost permanently. AWS cannot recover it."))))}s.isMDXComponent=!0}}]);