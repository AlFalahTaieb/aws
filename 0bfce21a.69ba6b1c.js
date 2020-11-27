(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{123:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return y}));var a=t(0),r=t.n(a);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=r.a.createContext({}),m=function(e){var n=r.a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},p=function(e){var n=m(e.components);return r.a.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return r.a.createElement(r.a.Fragment,{},n)}},l=r.a.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),p=m(t),l=a,y=p["".concat(i,".").concat(l)]||p[l]||d[l]||o;return t?r.a.createElement(y,s(s({ref:n},u),{},{components:t})):r.a.createElement(y,s({ref:n},u))}));function y(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=l;var s={};for(var c in n)hasOwnProperty.call(n,c)&&(s[c]=n[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<o;u++)i[u]=t[u];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,t)}l.displayName="MDXCreateElement"},58:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return i})),t.d(n,"metadata",(function(){return s})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return m}));var a=t(2),r=t(6),o=(t(0),t(123)),i={id:"ebs",title:"Amazon EBS FAQs",sidebar_label:"Amazon EBS FAQs"},s={unversionedId:"ebs",id:"ebs",isDocsHomePage:!1,title:"Amazon EBS FAQs",description:"Q: What happens to my data when an Amazon EC2 instance terminates?",source:"@site/docs/EBS.md",slug:"/ebs",permalink:"/aws/docs/ebs",version:"current",sidebar_label:"Amazon EBS FAQs"},c=[{value:"Q: What happens to my data when an Amazon EC2 instance terminates?",id:"q-what-happens-to-my-data-when-an-amazon-ec2-instance-terminates",children:[]},{value:"Q: What kind of performance can I expect from Amazon EBS volumes?",id:"q-what-kind-of-performance-can-i-expect-from-amazon-ebs-volumes",children:[]},{value:"Q: What is Amazon EBS encryption?",id:"q-what-is-amazon-ebs-encryption",children:[]},{value:"Q: What is the AWS Key Management Service (KMS)?",id:"q-what-is-the-aws-key-management-service-kms",children:[]},{value:"Q: Why should I use EBS encryption?",id:"q-why-should-i-use-ebs-encryption",children:[]},{value:"Q: How are my Amazon EBS encryption keys managed?",id:"q-how-are-my-amazon-ebs-encryption-keys-managed",children:[]},{value:"Q: Can I launch an encrypted EBS instance from an unencrypted AMI?",id:"q-can-i-launch-an-encrypted-ebs-instance-from-an-unencrypted-ami",children:[]},{value:"Q: Can I share encrypted snapshots and AMIs with other accounts?",id:"q-can-i-share-encrypted-snapshots-and-amis-with-other-accounts",children:[]}],u={rightToc:c};function m(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},u,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("h2",{id:"q-what-happens-to-my-data-when-an-amazon-ec2-instance-terminates"},"Q: What happens to my data when an Amazon EC2 instance terminates?"),Object(o.b)("p",null,'Unlike the data stored on a local instance store (which persists only as long as that instance is alive), data stored on an Amazon EBS volume can persist independently of the life of the instance. Therefore, we recommend that you use the local instance store only for temporary data. For data requiring a higher level of durability, we recommend using Amazon EBS volumes or backing up the data to Amazon S3. If you are using an Amazon EBS volume as a root partition, set the Delete on termination flag to "No" if you want your Amazon EBS volume to persist outside the life of the instance.'),Object(o.b)("h2",{id:"q-what-kind-of-performance-can-i-expect-from-amazon-ebs-volumes"},"Q: What kind of performance can I expect from Amazon EBS volumes?"),Object(o.b)("p",null,"Amazon EBS provides five volume types: Provisioned IOPS SSD (io2 and io1), General Purpose SSD (gp2), Throughput Optimized HDD (st1) and Cold HDD (sc1). These volume types differ in performance characteristics and price, allowing you to tailor your storage performance and cost to the needs of your applications. The average latency between EC2 instances and EBS is single digit milliseconds."),Object(o.b)("h2",{id:"q-what-is-amazon-ebs-encryption"},"Q: What is Amazon EBS encryption?"),Object(o.b)("p",null,"Amazon EBS encryption offers seamless encryption of EBS data volumes, boot volumes and snapshots, eliminating the need to build and maintain a secure key management infrastructure. EBS encryption enables data at rest security by encrypting your data using Amazon-managed keys, or keys you create and manage using the AWS Key Management Service (KMS). The encryption occurs on the servers that host EC2 instances, providing encryption of data as it moves between EC2 instances and EBS storage."),Object(o.b)("h2",{id:"q-what-is-the-aws-key-management-service-kms"},"Q: What is the AWS Key Management Service (KMS)?"),Object(o.b)("p",null,"AWS KMS is a managed service that makes it easy for you to create 3and control the encryption keys used to encrypt your data. AWS Key Management Service is integrated with other AWS services including Amazon EBS, Amazon S3, and Amazon Redshift, to make it simple to encrypt your data with encryption keys that you manage. AWS Key Management Service is also integrated with AWS CloudTrail to provide you with logs of all key usage to help meet your regulatory and compliance needs. To learn more about KMS, visit the AWS Key Management Service product page."),Object(o.b)("h2",{id:"q-why-should-i-use-ebs-encryption"},"Q: Why should I use EBS encryption?"),Object(o.b)("p",null,"You can use Amazon EBS encryption to meet security and encryption compliance requirements for data at rest encryption in the cloud. Pairing encryption with existing IAM access control policies improves your company\u2019s defense-in-depth strategy."),Object(o.b)("h2",{id:"q-how-are-my-amazon-ebs-encryption-keys-managed"},"Q: How are my Amazon EBS encryption keys managed?"),Object(o.b)("p",null,"Amazon EBS encryption handles key management for you. Each newly created volume gets a unique 256-bit AES key; Volumes created from the encrypted snapshots share the key. These keys are protected by our own key management infrastructure, which implements strong logical and physical security controls to prevent unauthorized access. Your data and associated keys are encrypted using the industry-standard AES-256 algorithm"),Object(o.b)("h2",{id:"q-can-i-launch-an-encrypted-ebs-instance-from-an-unencrypted-ami"},"Q: Can I launch an encrypted EBS instance from an unencrypted AMI?"),Object(o.b)("p",null,"Yes"),Object(o.b)("h2",{id:"q-can-i-share-encrypted-snapshots-and-amis-with-other-accounts"},"Q: Can I share encrypted snapshots and AMIs with other accounts?"),Object(o.b)("p",null,"Yes"))}m.isMDXComponent=!0}}]);