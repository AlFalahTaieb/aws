(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{142:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/rr2-f595b5b693895e21a2b04f8a31fae3a7.png"},184:function(e,a,t){"use strict";t.r(a),a.default=t.p+"assets/images/rr1-1b92395fd00dd0e88410f58ff6c7361f.png"},72:function(e,a,t){"use strict";t.r(a),t.d(a,"frontMatter",(function(){return l})),t.d(a,"metadata",(function(){return s})),t.d(a,"rightToc",(function(){return p})),t.d(a,"StyledButton",(function(){return b})),t.d(a,"default",(function(){return u}));var r=t(2),n=t(6),i=(t(0),t(123)),o=t(314),c=t(143),l={id:"notes_rr",title:"Read Replicas",sidebar_label:"Read Replicas",author:"Taieb"},s={unversionedId:"notes_rr",id:"notes_rr",isDocsHomePage:!1,title:"Read Replicas",description:"export const StyledButton = withStyles({",source:"@site/docs/notes_rr.mdx",slug:"/notes_rr",permalink:"/FAQ/docs/notes_rr",version:"current",sidebar_label:"Read Replicas"},p=[],b=Object(c.a)({root:{background:"linear-gradient(315deg, #fc9842 0%, #fe5f75 74%)",borderRadius:7,border:0,color:"inherit",height:35,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"},label:{textTransform:"capitalize"}})(o.a),d={rightToc:p,StyledButton:b};function u(e){var a=e.components,o=Object(n.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},d,o,{components:a,mdxType:"MDXLayout"}),Object(i.b)("ol",null,Object(i.b)("li",{parentName:"ol"},"They allow you to have read-only copy of your production database for read-heavy apps (eg Wikipedia)"),Object(i.b)("li",{parentName:"ol"},"This is achieved using ",Object(i.b)("strong",{parentName:"li"},"async")," replication from the primary RDS instance to the read replica"),Object(i.b)("li",{parentName:"ol"},"Used for scaling, not for disaster recovery"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Must have automatic backups turned on in order to deploy a read replica")),Object(i.b)("li",{parentName:"ol"},"You can have up to ",Object(i.b)("strong",{parentName:"li"},"5 read replica copies")," of any database"),Object(i.b)("li",{parentName:"ol"},"You can have read replicas of read replicas (except Pgsql, Oracle and SQL Server)"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"Each read replica will have its own DNS endpoint")),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"They can be cross-AZ and cross-region")),Object(i.b)("li",{parentName:"ol"},"If the master and Read Replica are in different regions, you encrypt using the encryption key for that region."),Object(i.b)("li",{parentName:"ol"},"They can be promoted to master (breaks replication)"),Object(i.b)("li",{parentName:"ol"},"Not available for SQL Server instances"),Object(i.b)("li",{parentName:"ol"},Object(i.b)("strong",{parentName:"li"},"If you want the read replica to be HA itself, create a read replica as a multi-AZ DB instance.")),Object(i.b)("li",{parentName:"ol"},'You can track how far behind a replica is from master using CloudWatch\'s "Replica Lag" feature'),Object(i.b)("li",{parentName:"ol"},"A read replica will stay active even if the master is deleted"),Object(i.b)("li",{parentName:"ol"},"No extra charge for replication within same AZ"),Object(i.b)("li",{parentName:"ol"},"Pgsql requires physical replication. MySQL and MariaDB do logical replication."),Object(i.b)("li",{parentName:"ol"},"They are ",Object(i.b)("em",{parentName:"li"},"eventually")," consistent"),Object(i.b)("li",{parentName:"ol"},"You can ElastiCache in conjunction with read replicas")),Object(i.b)("p",null,Object(i.b)("img",{alt:"Read Replicas AWS",src:t(184).default}),"\n",Object(i.b)("img",{alt:"Read Replicas AWS",src:t(142).default})),Object(i.b)(b,{href:"/docs/notes_rds",mdxType:"StyledButton"},"Back to RDS"))}u.isMDXComponent=!0}}]);