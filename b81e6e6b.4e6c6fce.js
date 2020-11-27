(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{106:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return s})),n.d(t,"Quote",(function(){return l})),n.d(t,"default",(function(){return u}));var a=n(2),o=n(6),r=(n(0),n(123)),i={id:"notes_ecs",title:"ECS",author:"Taieb"},c={unversionedId:"notes_ecs",id:"notes_ecs",isDocsHomePage:!1,title:"ECS",description:"export const Quote = ({ children, color }) => (",source:"@site/docs/notes_ecs.mdx",slug:"/notes_ecs",permalink:"/FAQ/docs/notes_ecs",version:"current",sidebar:"someSidebar",previous:{title:"VPC",permalink:"/FAQ/docs/notes_vpc"},next:{title:"CloudFormation",permalink:"/FAQ/docs/notes_cfm"}},s=[{value:"I. Introduction",id:"i-introduction",children:[]},{value:"II. Fargate",id:"ii-fargate",children:[]},{value:"III. EKS",id:"iii-eks",children:[]},{value:"IV. ECS Tips",id:"iv-ecs-tips",children:[]}],l=function(e){var t=e.children;e.color;return Object(r.b)("span",{style:{backgroundColor:"#5a5a5a",borderRadius:"8px",color:"#FF9900",padding:"0.21rem"}},t)},b={rightToc:s,Quote:l};function u(e){var t=e.components,i=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},b,i,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",{id:"i-introduction"},"I. Introduction"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"It is a container orchestration service, helps run docker containers on EC2 machines."),Object(r.b)("li",{parentName:"ol"},"ECS inlcudes",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"ECS core: running ECS on user-provisioned EC2 instances"),Object(r.b)("li",{parentName:"ol"},"Fargate: running ECS tasks on AWS-provisioned compute (serverless)"),Object(r.b)("li",{parentName:"ol"},"EKS: running on ECS on AWS-provisioned k8s"),Object(r.b)("li",{parentName:"ol"},"ECR: container registry"))),Object(r.b)("li",{parentName:"ol"},"IAM security and roles are at the ",Object(r.b)(l,{mdxType:"Quote"},"ECS task level.")),Object(r.b)("li",{parentName:"ol"},"Direct integration with ALBs, auto scaling capability."),Object(r.b)("li",{parentName:"ol"},"To start, you create a ECS cluster (set of EC2 instances), then define ECS service and finally the ECS tasks (individual containers).")),Object(r.b)(l,{mdxType:"Quote"},"Tasks allow you to define a set of containers that you would like to be placed together (or part of the same placement decision), their properties, and how they may be linked."),Object(r.b)("p",null,"Tasks include all the information that Amazon ECS needs to make the placement decision."),Object(r.b)("p",null,"To launch a single container, your task Definition should only include one container definition."),Object(r.b)("p",null,"When you run tasks using ECS, you place them in a cluster i.e. a logical grouping of resources. "),Object(r.b)("p",null,"Clusters are region-bound. "),Object(r.b)("p",null,"When using Fargate, ECS manages your cluster resources. When using EC2, you manage the group of containers."),Object(r.b)("p",null,"Before you delete a cluster, you must delete the services and de-register the container instances inside that cluster."),Object(r.b)("p",null,"ECS Task (IAM) Role \u2014 to make sure each task has right roles to perform the needed actions. "),Object(r.b)(l,{mdxType:"Quote"},"You first need to create an IAM role for your task"),", using the 'Amazon EC2 Container Service Task Role\u2019 service role and attaching a policy with the required permissions.",Object(r.b)("p",null,"When you create a new task definition or a task definition revision you can then specify a role by selecting it form the \u2019Task Role\u2019 drop-down or using the ",Object(r.b)("inlineCode",{parentName:"p"},"taskRoleArn")," field in the JSON format."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"1 Task Defn = 1 IAM Role")),Object(r.b)(l,{mdxType:"Quote"},"You can only apply one IAM role to a Task Definition so you must create a separate Task Definition. "),Object(r.b)("p",null,"A Task Definition is required to run Docker containers in Amazon ECS and you can specify the IAM role (Task Role) that the task should use for permissions."),Object(r.b)("p",null,Object(r.b)("img",{alt:"ECS AWS",src:n(243).default})),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},"ALB integration",Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)(l,{mdxType:"Quote"},"Direct port-mapping possible")),Object(r.b)("li",{parentName:"ol"},"Run multiple instances of the same app on the same EC2 ")))),Object(r.b)("p",null,Object(r.b)("img",{alt:"ECS AWS",src:n(244).default})),Object(r.b)("ol",{start:7},Object(r.b)("li",{parentName:"ol"},"ECS setup \u2014 config file ")),Object(r.b)("p",null,Object(r.b)("img",{alt:"ECS AWS",src:n(245).default})),Object(r.b)("ol",{start:8},Object(r.b)("li",{parentName:"ol"},"ECR \u2014 fully integrated with IAM and ECS ")),Object(r.b)("p",null,Object(r.b)("img",{alt:"ECS AWS",src:n(246).default})),Object(r.b)("p",null,Object(r.b)("img",{alt:"ECS AWS",src:n(247).default})),Object(r.b)("p",null,Object(r.b)("img",{alt:"ECS AWS",src:n(248).default})),Object(r.b)("h2",{id:"ii-fargate"},"II. Fargate"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"In general, we have to create our own EC2 instances to launch ECS. If need to scale, manually add more EC2s so we are managing infra on our own."),Object(r.b)("li",{parentName:"ol"},Object(r.b)(l,{mdxType:"Quote"},"Fargate does all the above \u2014 serverless, no more EC2!")),Object(r.b)("li",{parentName:"ol"},"Fargate requires you to specify CPU and memory at task level. Task storage is ephemeral."),Object(r.b)("li",{parentName:"ol"},Object(r.b)(l,{mdxType:"Quote"},"With Fargate, you pay for the vCPU and memory resources that your containerized app requests. The resources are calculated right from the time the container image is pulled till the ECS task terminates.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)(l,{mdxType:"Quote"},"Sends log to CloudWatch."))),Object(r.b)("h2",{id:"iii-eks"},"III. EKS"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},"ECS = AWS way, EKS = k8s way for managing containers."),Object(r.b)("li",{parentName:"ol"},"Great way to migrate to AWS if running k8s already elsewhere.")),Object(r.b)("h2",{id:"iv-ecs-tips"},"IV. ECS Tips"),Object(r.b)("ol",null,Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Must choose the launch type at the time of creation e.g. EC2")),Object(r.b)("li",{parentName:"ol"},Object(r.b)(l,{mdxType:"Quote"},"The ECS container agent is included in the Amazon ECS-optimized AMI"),"and can also be installed on any EC2 instance that supports the ECS specification."),Object(r.b)("li",{parentName:"ol"},Object(r.b)(l,{mdxType:"Quote"},"You need to verify that the installed agent is running and that the IAM instance profile has the necessary permissions applied.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"There is no additional charge for Amazon ECS. You pay for AWS resources (e.g. EC2 instances or EBS volumes) you create to store and run your application.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"You can scale your application up and down by changing the number of containers you want the service to run.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},'You can perform batch jobs by running Amazon ECS "Run task" to run one or more tasks once.')),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"ECS provides Blox, a collection of open source projects for container management and orchestration.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"ECS is PCI and HIPAA approved. Monthly uptime of 99.99%.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Amazon ECS schedules containers for execution on customer-controlled Amazon EC2 instances or with AWS Fargate and builds on the same isolation controls and compliance that are available for EC2 customers. ",Object(r.b)(l,{mdxType:"Quote"},"Your compute instances are located in a Virtual Private Cloud (VPC) with an IP range that you specify."),",You decide which instances are exposed to the Internet and which remain private."),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Your EC2 instances use an IAM role to access the ECS service. As an Amazon EC2 customer, you have root access to the operating system of your container instances."),Object(r.b)("li",{parentName:"ol"},"Your ECS tasks use an IAM role to access services and resources."),Object(r.b)("li",{parentName:"ol"},"Security Groups and networks ACLs allow you to control inbound and outbound network access to and from your instances."))),Object(r.b)("li",{parentName:"ol"},Object(r.b)(l,{mdxType:"Quote"},"Troubleshooting steps for containers include"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},"Verify that the Docker daemon is running on the container instance"),Object(r.b)("li",{parentName:"ol"},"Verify that the Docker Container daemon is running on the container instance"),Object(r.b)("li",{parentName:"ol"},"Verify that the container agent is running on the container instance"),Object(r.b)("li",{parentName:"ol"},Object(r.b)("strong",{parentName:"li"},"Verify that the IAM instance profile has the necessary permissions")))),Object(r.b)("li",{parentName:"ol"},Object(r.b)(l,{mdxType:"Quote"},"Deployment strategies"),Object(r.b)("ol",{parentName:"li"},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Rolling update"),"\u2014 replace current running version with latest.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},Object(r.b)("strong",{parentName:"p"},"Blue/Green"),"\u2014 Verify the new deployment before sending production traffic to it"))))))}u.isMDXComponent=!0},123:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),o=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=o.a.createContext({}),b=function(e){var t=o.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},u=function(e){var t=b(e.components);return o.a.createElement(l.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},d=o.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=b(n),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||r;return n?o.a.createElement(m,c(c({ref:t},l),{},{components:n})):o.a.createElement(m,c({ref:t},l))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=d;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var l=2;l<r;l++)i[l]=n[l];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},243:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ecs1-3816d5851bc45dc20aae86a48a773bd5.png"},244:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ecs2-a396cc24868d68900eadf0ad8798ea5a.png"},245:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ecs3-b44afbda35d360b76aa6f180568e3898.png"},246:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ecs4-fd5b9d238eeca6d622d09801a438c97b.png"},247:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ecs5-fd5b9d238eeca6d622d09801a438c97b.png"},248:function(e,t,n){"use strict";n.r(t),t.default=n.p+"assets/images/ecs6-2c103d7a55a4d50aa1b48490a494104f.png"}}]);