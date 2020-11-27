(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{123:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),o=a.n(n);function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function b(e,t){if(null==e)return{};var a,n,o=function(e,t){if(null==e)return{};var a,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(o[a]=e[a])}return o}var c=o.a.createContext({}),s=function(e){var t=o.a.useContext(c),a=t;return e&&(a="function"==typeof e?e(t):r(r({},t),e)),a},p=function(e){var t=s(e.components);return o.a.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,i=e.originalType,l=e.parentName,c=b(e,["components","mdxType","originalType","parentName"]),p=s(a),d=n,u=p["".concat(l,".").concat(d)]||p[d]||m[d]||i;return a?o.a.createElement(u,r(r({ref:t},c),{},{components:a})):o.a.createElement(u,r({ref:t},c))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=a.length,l=new Array(i);l[0]=d;var r={};for(var b in t)hasOwnProperty.call(t,b)&&(r[b]=t[b]);r.originalType=e,r.mdxType="string"==typeof e?e:n,l[1]=r;for(var c=2;c<i;c++)l[c]=a[c];return o.a.createElement.apply(null,l)}return o.a.createElement.apply(null,a)}d.displayName="MDXCreateElement"},217:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/pricestrg-e6cfd433dc11b0cb70917098745bd548.png"},218:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/EFS-8365350b0c89d0be8631b8ac68e056aa.png"},98:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return l})),a.d(t,"metadata",(function(){return r})),a.d(t,"rightToc",(function(){return b})),a.d(t,"Highlight",(function(){return c})),a.d(t,"Quote",(function(){return s})),a.d(t,"default",(function(){return m}));var n=a(2),o=a(6),i=(a(0),a(123)),l={id:"notes_ebs_efs",title:"EBS & EFS",sidebar_label:"EBS & EFS"},r={unversionedId:"notes_ebs_efs",id:"notes_ebs_efs",isDocsHomePage:!1,title:"EBS & EFS",description:"export const Highlight = ({ children, color }) => (",source:"@site/docs/notes_ebs_efs.mdx",slug:"/notes_ebs_efs",permalink:"/FAQ/docs/notes_ebs_efs",version:"current",sidebar_label:"EBS & EFS",sidebar:"someSidebar",previous:{title:"ELB",permalink:"/FAQ/docs/notes_elb"},next:{title:"FSx",permalink:"/FAQ/docs/notes_fsx"}},b=[{value:"I. Introduction",id:"i-introduction",children:[]},{value:"II. Types of EBS",id:"ii-types-of-ebs",children:[]},{value:"III. EBS Snapshots",id:"iii-ebs-snapshots",children:[]},{value:"IV. EBS Migration",id:"iv-ebs-migration",children:[]},{value:"V. EBS Encryption",id:"v-ebs-encryption",children:[]},{value:"VI. Instance Store",id:"vi-instance-store",children:[]},{value:"VII. EBS RAID",id:"vii-ebs-raid",children:[]},{value:"VIII. EFS",id:"viii-efs",children:[]},{value:"X. EFS Tips",id:"x-efs-tips",children:[]},{value:"XI. EBS Tips",id:"xi-ebs-tips",children:[]}],c=function(e){var t=e.children;e.color;return Object(i.b)("span",{style:{backgroundColor:"#FF9900",borderRadius:"5px",color:"#fff",padding:"0.1rem"}},t)},s=function(e){var t=e.children;e.color;return Object(i.b)("span",{style:{backgroundColor:"#5a5a5a",borderRadius:"7px",color:"#FF9900",padding:"0.3rem"}},t)},p={rightToc:b,Highlight:c,Quote:s};function m(e){var t=e.components,l=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(n.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(i.b)("h2",{id:"i-introduction"},"I. Introduction"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"Elastic Block Storage (EBS) is a network drive that you can attach to your instances while they run. It allows your instance to persist data."),Object(i.b)("li",{parentName:"ol"},"Well suited for use as the primary storage for file systems, databases, or for any application that requires fine granular updates and access to raw, unformatted, block level storage."),Object(i.b)("li",{parentName:"ol"},"You can mount multiple volumes on the same EC2 instance and vice versa (multi-attach)."),Object(i.b)("li",{parentName:"ol"},"Termination protection is turned off by default and must be enabled manually."),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"It's locked to an AZ."),"6. In the same AZ, you can detach from one EC2 and attach to another. To move a volume, you need to snapshot it."),Object(i.b)("li",{parentName:"ol"},"Have a provisioned capacity (GB, IOPS)."),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Only GP2 and IO1 can be chosen while launching an instance."))),Object(i.b)("h2",{id:"ii-types-of-ebs"},"II. Types of EBS"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"GP2 \u2014 General Purpose SSD"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"General purpose SSD volume that balances price (cheap) and performance"),Object(i.b)("li",{parentName:"ol"},"Recommended for most workloads"),Object(i.b)("li",{parentName:"ol"},"System boot volumes"),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Virtual desktops, low latency interactive apps"),"    5. Development and test environments"),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Size: 1GB - 16TB")),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"3 IOPS per GB, maxes out at 16,000")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"IO1 and IO2 \u2014 Provisioned IOPS SSD"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"High perf SSD for low latency and critical apps/db (IOPS > 16,000)"),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Size: 4 GB - 16TB")),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"10 IOPS per GB")),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Good for large scale db where low latency might be required")),Object(i.b)("li",{parentName:"ol"},"Min: 100, Max: 64000 (nitro instances) OR 32000 (regular instances)"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"ST1 \u2014 Throughput optimized HDD"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Low cost HDD for frequent (sequential) reads")),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"NOT good for random reads")),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Used in data warehousing, log processing, MapReduce, streaming workloads")),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Cannot be a boot volume")),Object(i.b)("li",{parentName:"ol"},"Size: 500GB - 16TB"),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Max IOPS is 500")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"SC1 \u2014  Cold HDD"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Lowest cost for infrequent reads")),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Good for database and backups (store and forget)")),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Cannot be a boot volume")),Object(i.b)("li",{parentName:"ol"},"Size: 500GB - 16TB"),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Max IOPS is 250")),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Max throughput of 250MB/s, can burst")),Object(i.b)("li",{parentName:"ol"},"Attaching both ST1 and SC1 is not supported at this time ")))),Object(i.b)("p",null,Object(i.b)("img",{alt:"Price Strg",src:a(217).default})),Object(i.b)("h2",{id:"iii-ebs-snapshots"},"III. EBS Snapshots"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Incremental - only backup changed blocks.")),Object(i.b)("li",{parentName:"ol"},"Backups use IO so do it during downtime e.g. 2am-3am"),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Snapshots are stored in S3 but you can't directly see it, only available through EC2 API.")),Object(i.b)("li",{parentName:"ol"},"Each snapshot is given a unique identifier, and customers can create volumes based on any of their existing snapshots."),Object(i.b)("li",{parentName:"ol"},"Not necessary to detach volume during snapshot but recommended."),Object(i.b)("li",{parentName:"ol"},"Max 100,000 snapshots."),Object(i.b)("li",{parentName:"ol"},"Can copy snapshots across AZ or region."),Object(i.b)("li",{parentName:"ol"},"Can make AMI from snapshot"),Object(i.b)("li",{parentName:"ol"},"EBS volumes restored by snapshots need to be pre-warmed (using fio or dd commands)."),Object(i.b)("li",{parentName:"ol"},"Snapshots can be automated using Amazon Data Lifecycle Manager (DLM)."),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Snapshots occur async and do not interfere with the normal functioning of EBS."))),Object(i.b)("h2",{id:"iv-ebs-migration"},"IV. EBS Migration"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"EBS volumes are locked to a specific AZ."),Object(i.b)("li",{parentName:"ol"},"To migrate it to a different AZ (or region):",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Snapshot the volume"),Object(i.b)("li",{parentName:"ol"},"Copy the volume to a different region"),Object(i.b)("li",{parentName:"ol"},"Create a volume from the snapshot in the AZ of your choice")))),Object(i.b)("h2",{id:"v-ebs-encryption"},"V. EBS Encryption"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Creating an encrypted EBS enables"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Data at rest encryption for the EBS")),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"All the data in flight moving between the instance and volume is encrypted")),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"All snapshots are encrypted")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Encryption and decryption is handled by KMS (w/ AES 256). ")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"It has a minimal impact on latency.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Snapshots of encrypted volumes are encrypted.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"You can have encrypted an unencrypted EBS volumes attached at the same time.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"All EBS volume types support encryption and all instance families now support encryption too.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Supports encryption of boot volumes as well (GP2, IO1, IO2)."))),Object(i.b)("h2",{id:"vi-instance-store"},"VI. Instance Store"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},'Some instances do not come with root EBS volumes but an "Instance Store".')),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Instance stores are ",Object(i.b)(c,{mdxType:"Highlight"},"ephemeral")," storages and physically attached to machine, unlike EBS which is a network drive.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"When using an Instance store-backed root volume, any data on the instance store volumes persists as long as the instance is running, but this data is deleted when the instance is terminated (",Object(i.b)(c,{mdxType:"Highlight"},"instance store-backed instances do not support the ",Object(i.b)("inlineCode",{parentName:"p"},"Stop")," action"),") or if it fails (such as if an underlying drive has issues).")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The pros are"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Very high IOPS (>100,000)"),Object(i.b)("li",{parentName:"ol"},"Good for buffer/cache/scratch data"),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Data survives reboot")),Object(i.b)("li",{parentName:"ol"},"Disk size is up to 7.5TB"),Object(i.b)("li",{parentName:"ol"},"Block storage (just like EBS)"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"The cons are"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"The data is lost on stop or terminate"),Object(i.b)("li",{parentName:"ol"},"Cannot be resized"),Object(i.b)("li",{parentName:"ol"},"Backups are manual")))),Object(i.b)("h2",{id:"vii-ebs-raid"},"VII. EBS RAID"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"EBS is somewhat already redundant (replicated within AZ) but RAID can be helpful if you want to"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Increase IOPS to 100,000"),Object(i.b)("li",{parentName:"ol"},"Mirror EBS volumes"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"RAID is possible as long as your OS supports it (Mac, Windows). Some RAID options are"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"RAID 0"),Object(i.b)("li",{parentName:"ol"},"RAID 1"),Object(i.b)("li",{parentName:"ol"},"RAID 5 (not recommended)"),Object(i.b)("li",{parentName:"ol"},"RAID 6 (not recommended)"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"RAID 0 (Series)"),"1. Combining two or more volumes and getting the total disk space and IO 2. If one disk fails, all data is gone 3. Useful when high IOPS is needed but not fault-tolerance OR when a database has it already built-in 4. This allows us to have a very big disk with lot of IOPS 5. For instance, two 500 GB EBS instances with 4,000 PIOPS would combine to become a 1,000 GB RAID 0 array with 8,000 PIOPS and 1000 MB/s throughput"),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"RAID 1 (Parallel)"),"1. Data is written to all underlying EBS volumes (mirror) 2. This increases fault tolerance 3. Low network throughput because of multiple writes 4. For instance, two 500 GB EBS instances with 4,000 PIOPS would combine to become a 500 GB RAID 1 array with 4,000 PIOPS and 500 MB/s throughput")),Object(i.b)("h2",{id:"viii-efs"},"VIII. EFS"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Elastic File System (EFS) is a managed network storage.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"It can applied to multiple EC2 instances across AZs.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Highly available, scalable and expensive (3x of GP2) but pay per use")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"It uses standard NFSv4.1 protocol.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Cannot be mounted on Windows instances.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Used in web apps, CMS etc.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Encryption at rest using KMS and in-flight with HTTPS"),". No effect on throughput."),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"POSIX file system that has a standard file API.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"File system scales automatically, pay per use so no capacity planning.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"You can control who can administer your file system using IAM. You can control access to files and directories with ",Object(i.b)(c,{mdxType:"Highlight"},"POSIX-compliant user and group-level permissions"),". POSIX permissions allows you to restrict access from hosts by user and group. EFS Security Groups act as a firewall, and the rules you add define the traffic flow.")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Scale"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Can support 1000s of concurrent NFS clients, 10GB/s throughput."),Object(i.b)("li",{parentName:"ol"},"Can automatically grow to petabyte-scale file system."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Performance mode (set at EFS creation time)"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"General purpose (default): For latency-sensitive use cases")),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Max IO: Higher latency and throughput, highly parallel (big data, media processing)")))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Storage Tiers"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Standard:")," For frequently accessed files"),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Infrequent Access (EFS-IA):")," Cheap to store but pay-per-retrieval")),Object(i.b)("h2",Object(n.a)({parentName:"li"},{id:"ix-ebs-vs-efs"}),"IX. EBS vs EFS")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"EBS volumes"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"can be attached to only one instance at a time")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"are locked at AZ level")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"16TB for one volume")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"provide lowest latency to parent EC2")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"common types include GP2, IO1")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"pay structure is up front")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"used for boot volumes")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"Offer durable snapshots for backups")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"To migrate an EBS volume across AZ"),Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Take a snapshot"),Object(i.b)("li",{parentName:"ol"},"Restore the snapshot to another AZ"))),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Root EBS volumes of instances get terminated by default"),"if the EC2 instance gets terminated (you can disable it though)."))),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"EFS volumes")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"can be mounted to 1000s of instances across AZs")),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"only available for Linux instances"),"3. costlier than EBS, EFS-IA is cheaper though"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"billed only for usage")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"unlimited size")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"not used for boot volumes")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"EFS-EFS replication through DataSync")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("p",{parentName:"li"},"can be integrated with on-prem"))),Object(i.b)("p",null,Object(i.b)("img",{alt:"EFS AWS ",src:a(218).default})),Object(i.b)("h2",{id:"x-efs-tips"},"X. EFS Tips"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"EFS provides shared access to data using a traditional file sharing permissions model and hierarchy directory structure via NFS protocol. S3 is more about object storage that is massively scalable, durable and low-cost."),Object(i.b)("li",{parentName:"ol"},"EFS can share data across 1000s of machines."),Object(i.b)("li",{parentName:"ol"},"Compatible with all AMIs."),Object(i.b)("li",{parentName:"ol"},"You can securely sync data between NFS-EFS or EFS-EFS through AWS DataSync over DirectConnect or AWS VPN (= VPG + Customer Gateway)."),Object(i.b)("li",{parentName:"ol"},"You can save costs by moving data to EFS IA using a lifecycle policy. If you further disable IA, no new files will be moved but all existing files will stay there."),Object(i.b)("li",{parentName:"ol"},"Files smaller than 128KB are not eligible for EFS IA."),Object(i.b)("li",{parentName:"ol"},"Supports multi-AZ."),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"You can create backups using AWS Backup."),"9. Provisioned Throughput enables EFS customers to provision their system's throughput independent of the data they need. In this mode, you are billed separately for throughput and storage."),Object(i.b)("li",{parentName:"ol"},"You can grow or shrink the throughput whenever you want."),Object(i.b)("li",{parentName:"ol"},"You control which EC2 instances can access VPC using VPC security group rules."),Object(i.b)("li",{parentName:"ol"},"EFS Access Points provide a IAM-enabled API of accessing your file system."),Object(i.b)("li",{parentName:"ol"},"You can concurrently access EFS from on-prem datacenters as well as EC2 instances in the cloud."),Object(i.b)("li",{parentName:"ol"},"The file names do not need to be globally unique."),Object(i.b)("li",{parentName:"ol"},"EFS can be integrated with ECS and EKS."),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"Does NOT work for windows"))),Object(i.b)("h2",{id:"xi-ebs-tips"},"XI. EBS Tips"),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"EBS Standard has been renamed to EBS Magnetic Volumes (to avoid confusion with GP2)."),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"If EBS is attached to an EC2 instance and if it's stopped, you still have to pay for EBS.")),Object(i.b)("li",{parentName:"ol"},"ST1 and SC1 process IOs in chunks of 1 MBs. They won't perform well on random small IO situations e.g. database."),Object(i.b)("li",{parentName:"ol"},"You can stripe multiple volumes together to achieve up to 80k IOPS or 2.3GB/s when attached to a larger EC2 instance. However, performance for ST1 and SC1 scales linearly with volume size so there may not be as much of a benefit to stripe these volumes together."),Object(i.b)("li",{parentName:"ol"},"You will be billed for provisioned IOPS even in a detached state. It is recommended to create a snapshot when a volume is not in use to reduce costs."),Object(i.b)("li",{parentName:"ol"},'You can detach an EBS volume from an instance explicitly or by terminating the instance. However, if the instance is running, you must first "unmount" the volume.'),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"If the EBS volume is the root device of an instance, you must stop the instance before detaching the volume.")),Object(i.b)("li",{parentName:"ol"},"You only need the most recent snapshot to create the full volume because snapshots are incremental."),Object(i.b)("li",{parentName:"ol"},"You cannot use a block device mapping to specify a snapshot, EFS volume or S3 bucket."),Object(i.b)("li",{parentName:"ol"},"An EC2 status check on an EBS volume is showing as ",Object(i.b)("inlineCode",{parentName:"li"},"insufficient-data")," \u2192 The checks may still be in progress on the volume."),Object(i.b)("li",{parentName:"ol"},Object(i.b)(c,{mdxType:"Highlight"},"The volume does not need a certain amount of data on it to be checked properly.")),Object(i.b)("li",{parentName:"ol"},"Want to attach EBS volume to EC2 instance inside CloudFormation \u2192 ",Object(i.b)(c,{mdxType:"Highlight"},"specify both EC2 and EBS logical IDs.")),Object(i.b)("li",{parentName:"ol"},"Tips for improving performance",Object(i.b)("ol",{parentName:"li"},Object(i.b)("li",{parentName:"ol"},"Use EBS-optimized instances"),Object(i.b)("li",{parentName:"ol"},"Understand your workload"),Object(i.b)("li",{parentName:"ol"},"Use a modern linux kernel"),Object(i.b)("li",{parentName:"ol"},"Track performance using CloudWatch"),Object(i.b)("li",{parentName:"ol"},"Use RAID 0 to maximize utilization of instance resources")))))}m.isMDXComponent=!0}}]);