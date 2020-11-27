(window.webpackJsonp=window.webpackJsonp||[]).push([[26],{142:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/rr2-f595b5b693895e21a2b04f8a31fae3a7.png"},198:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/aurora-cb6dd850ed09be16bd9267f2924275e8.png"},199:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/aurora1-6ecd579983e440d9d4c8756e6e9d8160.png"},82:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return s})),a.d(t,"rightToc",(function(){return b})),a.d(t,"StyledButton",(function(){return u})),a.d(t,"Quote",(function(){return p})),a.d(t,"default",(function(){return m}));var r=a(2),o=a(6),n=(a(0),a(123)),i=a(314),l=a(143),c={id:"notes_Aurora",title:"Aurora",sidebar_label:"Aurora",author:"Taieb"},s={unversionedId:"notes_Aurora",id:"notes_Aurora",isDocsHomePage:!1,title:"Aurora",description:"export const StyledButton = withStyles({",source:"@site/docs/notes_aurora.mdx",slug:"/notes_Aurora",permalink:"/FAQ/docs/notes_Aurora",version:"current",sidebar_label:"Aurora"},b=[{value:"I. Introduction",id:"i-introduction",children:[]},{value:"II. Aurora Cluster",id:"ii-aurora-cluster",children:[]},{value:"III. Aurora Security",id:"iii-aurora-security",children:[]},{value:"IV. Aurora serverless",id:"iv-aurora-serverless",children:[]},{value:"V. Aurora Global",id:"v-aurora-global",children:[]},{value:"VI. Aurora for SA",id:"vi-aurora-for-sa",children:[]},{value:"VII. Aurora Tips",id:"vii-aurora-tips",children:[]}],u=Object(l.a)({root:{background:"linear-gradient(315deg, #fc9842 0%, #fe5f75 74%)",borderRadius:7,border:0,color:"inherit",height:35,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"},label:{textTransform:"capitalize"}})(i.a),p=function(e){var t=e.children;e.color;return Object(n.b)("span",{style:{backgroundColor:"#5a5a5a",borderRadius:"7px",color:"#FF9900",padding:"0.3rem"}},t)},d={rightToc:b,StyledButton:u,Quote:p};function m(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(n.b)("wrapper",Object(r.a)({},d,i,{components:t,mdxType:"MDXLayout"}),Object(n.b)("h2",{id:"i-introduction"},"I. Introduction"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Aurora serverless provides a simple, cost-effective option for infrequent, intermittent or unpredictable workloads"),Object(n.b)("li",{parentName:"ol"},"Cloud-optimized and compatible with MySQL and PostgreSQL",Object(n.b)("ul",{parentName:"li"},Object(n.b)("li",{parentName:"ul"},"5x better perf than MySQL"),Object(n.b)("li",{parentName:"ul"},"3x better perf than PgSQL"),Object(n.b)("li",{parentName:"ul"},"+20% than RDS price"))),Object(n.b)("li",{parentName:"ol"},"Starts with 10 GB, auto scales in increments of 10 GB (min) up to 64 TB"),Object(n.b)("li",{parentName:"ol"},"Compute resources can scale up to 32vCPUs and 244 GB of memory"),Object(n.b)("li",{parentName:"ol"},Object(n.b)(p,{mdxType:"Quote"},"Auto backup is on by default")),Object(n.b)("li",{parentName:"ol"},Object(n.b)(p,{mdxType:"Quote"},"Auto patching is on by default")),Object(n.b)("li",{parentName:"ol"},Object(n.b)(p,{mdxType:"Quote"},"Fault-tolerant and self-healing"),"i.e. data blocks and disks are scanned and repaired automatically"),Object(n.b)("li",{parentName:"ol"},"Up to ",Object(n.b)(p,{mdxType:"Quote"},"15 replicas in Aurora"),", 5 in MySQL and 1 in PostgreSQL"),Object(n.b)("li",{parentName:"ol"},"Can share Aurora snapshots with other AWS accounts"),Object(n.b)("li",{parentName:"ol"},"Not open source")),Object(n.b)("h2",{id:"ii-aurora-cluster"},"II. Aurora Cluster"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"An Aurora DB cluster consists of one or more db instances and a cluster volume that manages the data for those db instances.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"An Aurora cluster volume is a virtual database storage volume that spans multiple AZs, each AZ having a copy of the cluster data.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"DB clusters"),Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},Object(n.b)(p,{mdxType:"Quote"},"Primary db instance"),"\u2014 Supports R/W, one primary instance per cluster"),Object(n.b)("li",{parentName:"ol"},Object(n.b)(p,{mdxType:"Quote"},"Aurora replica (up to 15)"),"1. Connects to the same storage volume as the primary db instance 2. Each Aurora db cluster can have up to 15 Aurora replicas in addition to the primary db instance. 3. Can offload read work from primary (master) 4. ",Object(n.b)(p,{mdxType:"Quote"},"Automated failover for master in less than 30s")))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Amazon Aurora automatically divides your database volume into 10GB segments spread across many disks. Each 10GB chunk of your database volume is replicated six ways, across three Availability Zones.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Two copies of your data is contained in each AZ")),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Min 3 AZ, so at least 6 copies of the data"),Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"4/6 copies needed for write"),Object(n.b)("li",{parentName:"ol"},"3/6 copies needed for reads"),Object(n.b)("li",{parentName:"ol"},"self-healing with P2P replication"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Aurora endpoints"),Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},Object(n.b)(p,{mdxType:"Quote"},"Cluster endpoint"),"\u2014 connects to the current primary db instance for a db cluster, ",Object(n.b)(p,{mdxType:"Quote"},"only endpoint that can perform write operations")),Object(n.b)("li",{parentName:"ol"},Object(n.b)(p,{mdxType:"Quote"},"Reader endpoint"),"1. Connects to one of available Aurora replicas for that DB cluster 2. Each Aurora db cluster has one reader endpoint 3. The reader endpoint provides load-balancing support for read-only connections to the db cluster 4. Can't use for writes"),Object(n.b)("li",{parentName:"ol"},Object(n.b)(p,{mdxType:"Quote"},"Instance endpoint"),"\u2014 connects to a particular instance in the cluster")))),Object(n.b)("p",null,Object(n.b)("img",{alt:"Aurora AWS",src:a(198).default})),Object(n.b)("h2",{id:"iii-aurora-security"},"III. Aurora Security"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Similar to RDS because uses the same engine"),Object(n.b)("li",{parentName:"ol"},"Encryption at rest using KMS"),Object(n.b)("li",{parentName:"ol"},"Automated backups, snapshots and replicas are also encrypted"),Object(n.b)("li",{parentName:"ol"},"Encryption in-flight using SSL/TLS"),Object(n.b)("li",{parentName:"ol"},"Option to authenticate using IAM"),Object(n.b)("li",{parentName:"ol"},"Cannot ssh into them")),Object(n.b)("h2",{id:"iv-aurora-serverless"},"IV. Aurora serverless"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"On-demand, autoscaling configuration for the MySQL-compatible and PostgreSQL-compatible editions of Amazon Aurora. An Aurora Serverless DB cluster automatically starts up, shuts down, and scales capacity up or down based on your application's needs."),Object(n.b)("li",{parentName:"ol"},Object(n.b)(p,{mdxType:"Quote"},"You can migrate regular Aurora to Aurora serverless")),Object(n.b)("li",{parentName:"ol"},Object(n.b)(p,{mdxType:"Quote"},"Good for infrequent, intermittent or unpredictable workloads.")),Object(n.b)("li",{parentName:"ol"},Object(n.b)(p,{mdxType:"Quote"},"No capacity planning needed.")),Object(n.b)("li",{parentName:"ol"},"Does not support fast failover but does support automatic multi-AZ failover i.e. Aurora will automatically recreate the DB instance in a different AZ."),Object(n.b)("li",{parentName:"ol"},Object(n.b)(p,{mdxType:"Quote"},"You can set min and max Aurora Capacity Unit (ACU)")),Object(n.b)("li",{parentName:"ol"},Object(n.b)(p,{mdxType:"Quote"},"Pay-per-second, can be more cost effective.")),Object(n.b)("li",{parentName:"ol"},"Only available for MySQL and Pgsql"),Object(n.b)("li",{parentName:"ol"},"Cannot access publicly, only through a VPC"),Object(n.b)("li",{parentName:"ol"},"Does not support",Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"Import/export from S3"),Object(n.b)("li",{parentName:"ol"},"Aurora Read Replicas"),Object(n.b)("li",{parentName:"ol"},"IAM database auth"),Object(n.b)("li",{parentName:"ol"},"Multi-master clusters"),Object(n.b)("li",{parentName:"ol"},"Restoring a snapshot from MySQL")))),Object(n.b)("p",null,Object(n.b)("img",{alt:"Aurora AWS",src:a(199).default})),Object(n.b)("h2",{id:"v-aurora-global"},"V. Aurora Global"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},Object(n.b)(p,{mdxType:"Quote"},"Aurora cross-region worldwide read replicas."),"1. ",Object(n.b)(p,{mdxType:"Quote"},"Useful for disaster recovery"),"2. Simple to put in place"),Object(n.b)("li",{parentName:"ol"},Object(n.b)("p",{parentName:"li"},"Aurora Global Database (recommended)"),Object(n.b)("ol",{parentName:"li"},Object(n.b)("li",{parentName:"ol"},"1 primary region (read/write)"),Object(n.b)("li",{parentName:"ol"},"Up to 5 secondary (read-only) regions, replication lag < 1s"),Object(n.b)("li",{parentName:"ol"},"Up to 15 read replicas per region"),Object(n.b)("li",{parentName:"ol"},"Promoting to another region can be done in <1 minute"),Object(n.b)("li",{parentName:"ol"},"You can assign promotion priority for each replica"))),Object(n.b)("li",{parentName:"ol"},Object(n.b)(p,{mdxType:"Quote"},"Aurora Global is NOT active-active or multi-master. Use DynamoDB global tables instead."))),Object(n.b)("h2",{id:"vi-aurora-for-sa"},"VI. Aurora for SA"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Operations: Less, auto scaling storage"),Object(n.b)("li",{parentName:"ol"},"Security: AWS responsible for OS security, we are responsible for setting up KMS, security groups, IAM policies and authorizing users in DB"),Object(n.b)("li",{parentName:"ol"},"Reliability: Multi-AZ, HA"),Object(n.b)("li",{parentName:"ol"},"Performance: 5x better than MySQL, up to 15 read replicas"),Object(n.b)("li",{parentName:"ol"},"Cost: Pay per hour based on EC2 and storage usage. Possibly less than EC2.")),Object(n.b)("h2",{id:"vii-aurora-tips"},"VII. Aurora Tips"),Object(n.b)("ol",null,Object(n.b)("li",{parentName:"ol"},"Super cost effective throughput (compared to DynamoDB)"),Object(n.b)("li",{parentName:"ol"},"Aurora Global = Replication and DR"),Object(n.b)("li",{parentName:"ol"},"Aurora Serverless = No hardware provisioning"),Object(n.b)("li",{parentName:"ol"},"Recovers almost instantaneously from crash"),Object(n.b)("li",{parentName:"ol"},"No free tier"),Object(n.b)("li",{parentName:"ol"},"No replication lag"),Object(n.b)("li",{parentName:"ol"},"You can setup replication between Aurora and external MySQL db"),Object(n.b)("li",{parentName:"ol"},"Cannot encrypt an existing unencrypted instance"),Object(n.b)("li",{parentName:"ol"},"Amazon Aurora Parallel Query refers to the ability to push down and distribute the computational load of a single query across thousands of CPUs in Aurora\u2019s storage layer"),Object(n.b)("li",{parentName:"ol"},"As well as providing scaling for reads, Aurora Replicas are also targets for multi-AZ. In this case the solutions architect can update the application to read from the Multi-AZ standby instance. (",Object(n.b)(p,{mdxType:"Quote"},"For Aurora, Multi AZ ~ Read Replicas"),")"),Object(n.b)("li",{parentName:"ol"},"If using a single Aurora (no multi-AZ, no read replicas), then in case of failure, Aurora will attempt to create a new DB Instance in the same Availability Zone as the original instance and is done on a best-effort basis.",Object(n.b)("img",{alt:"Read Replicas AWS",src:a(142).default}))),Object(n.b)(u,{href:"/docs/notes_rds",mdxType:"StyledButton"},"Back to RDS"))}m.isMDXComponent=!0}}]);