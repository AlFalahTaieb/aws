(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{123:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return u}));var n=a(0),i=a.n(n);function c(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){c(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},c=Object.keys(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(n=0;n<c.length;n++)a=c[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var s=i.a.createContext({}),b=function(e){var t=i.a.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},p=function(e){var t=b(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},m=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,c=e.originalType,r=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=b(a),m=n,u=p["".concat(r,".").concat(m)]||p[m]||h[m]||c;return a?i.a.createElement(u,o(o({ref:t},s),{},{components:a})):i.a.createElement(u,o({ref:t},s))}));function u(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var c=a.length,r=new Array(c);r[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o.mdxType="string"==typeof e?e:n,r[1]=o;for(var s=2;s<c;s++)r[s]=a[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"},200:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/asg-12cf4ea61cebec01ac60f8c2a76a5a57.png"},201:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/asg1-025f60bc2089de416e24a87a12a98205.png"},83:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return o})),a.d(t,"rightToc",(function(){return l})),a.d(t,"Highlight",(function(){return s})),a.d(t,"Quote",(function(){return b})),a.d(t,"default",(function(){return h}));var n=a(2),i=a(6),c=(a(0),a(123)),r={id:"notes_asg",title:"ASG",sidebar_label:"ASG"},o={unversionedId:"notes_asg",id:"notes_asg",isDocsHomePage:!1,title:"ASG",description:"export const Highlight = ({ children, color }) => (",source:"@site/docs/notes_asg.mdx",slug:"/notes_asg",permalink:"/FAQ/docs/notes_asg",version:"current",sidebar_label:"ASG",sidebar:"someSidebar",previous:{title:"EC2",permalink:"/FAQ/docs/notes_ec2"},next:{title:"ELB",permalink:"/FAQ/docs/notes_elb"}},l=[{value:"I. Introduction",id:"i-introduction",children:[]},{value:"II. Scaling Policies",id:"ii-scaling-policies",children:[]},{value:"III. Health checks",id:"iii-health-checks",children:[]},{value:"IV. ASG Tips",id:"iv-asg-tips",children:[]}],s=function(e){var t=e.children;e.color;return Object(c.b)("span",{style:{backgroundColor:"#FF9900",borderRadius:"5px",color:"#fff",padding:"0.1rem"}},t)},b=function(e){var t=e.children;e.color;return Object(c.b)("span",{style:{backgroundColor:"#5a5a5a",borderRadius:"7px",color:"#FF9900",padding:"0.3rem"}},t)},p={rightToc:l,Highlight:s,Quote:b};function h(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(c.b)("wrapper",Object(n.a)({},p,r,{components:t,mdxType:"MDXLayout"}),Object(c.b)("h2",{id:"i-introduction"},"I. Introduction"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Auto Scaling Groups (ASG) can manage resources with user traffic.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"The goal of ASG is:"),Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"Scale out (add instances)"),Object(c.b)("li",{parentName:"ol"},"Scale in (remove instances)"),Object(c.b)("li",{parentName:"ol"},"Ensure there's a min/max for both ends"),Object(c.b)("li",{parentName:"ol"},"Automatically register instances to ELB"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"All ASGs have a ",Object(c.b)("strong",{parentName:"p"},"launch config")," (old) or a ",Object(c.b)("strong",{parentName:"p"},"launch template")," (new)"),Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"A launch configuration"),Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"AMI + Instant Type"),Object(c.b)("li",{parentName:"ol"},"EC2 user data"),Object(c.b)("li",{parentName:"ol"},"EBS volumes"),Object(c.b)("li",{parentName:"ol"},"Security Groups"),Object(c.b)("li",{parentName:"ol"},"SSH Key Pair"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Min/Max size, initial capacity")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Network + Subnet information")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Load balancer information")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Scaling policies")))),Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"It is possible to scale ASG based on CloudWatch alarms.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"It is now possible to define ",Object(c.b)("strong",{parentName:"p"},"better")," auto scaling rules that are directly managed by EC2"),Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"Target average CPU usage"),Object(c.b)("li",{parentName:"ol"},"Number of request on ELB per instance"),Object(c.b)("li",{parentName:"ol"},"Average network in/out"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"We can also scale based on custom metric e.g. number of connected users"),Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"Send custom metric from app on EC2 to CloudWatch (",Object(c.b)("inlineCode",{parentName:"li"},"PutMetric")," API)"),Object(c.b)("li",{parentName:"ol"},"Create CloudWatch alarm to react to low/high values"),Object(c.b)("li",{parentName:"ol"},"Use the alarm as scaling policy for ASG"))),Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"ASG will automatically create a new instance when an existing instance is down or unhealthy (+ terminate the unhealthy instance)."))),Object(c.b)("h2",{id:"ii-scaling-policies"},"II. Scaling Policies"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"Target-tracking scaling"),"1. Most simple and easy set up e.g. I want average ASG CPU to stay around 50% 2. Increase or decrease the current capacity of the group based on a target value for a specific metric. 3. This is similar to the way that your thermostat maintains the temperature of your home. 4. If you are scaling based on a utilization metric that increases or decreases proportionally to the number of instances in an Auto Scaling group, then it is recommended that you use target tracking scaling policies. Otherwise, it is better to use step scaling policies instead."),Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"Step scaling"),"1. When a CloudWatch alarm is triggered (CPU > 70%) \u2192 add 2 units 2. Increase or decrease the current capacity of the group **based on a set** of scaling adjustments, known as step adjustments, that vary based on the size of the alarm breach."),Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"Simple scaling"),"1. Increase or decrease the current capacity of the group based on a **single** scaling adjustment."),Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"Scheduled scaling"),"1. Anticipate a scaling event based on historical data e.g. add 2 units on Fridays"),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Scaling cool-downs"),Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"The cool-down period helps ensure that the ASG doesn't launch or terminate before the previous scaling activity takes place."),Object(c.b)("li",{parentName:"ol"},"In addition to default cooldowns, we can create cooldowns that apply to a specific simple scaling policy. This would override the default cooldown period."),Object(c.b)("li",{parentName:"ol"},"If the default cooldown period of 300s is too long, you can reduce costs by applying a scaling-specific period of 180 seconds to the scale-in policy."),Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"If your app is scaling up and down multiple times each hour, modify the ASG cool-down timers and CloudWatch alarm periods that trigger the scaling."))))),Object(c.b)("h2",{id:"iii-health-checks"},"III. Health checks"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"If using an ELB, it is best to enable ELB health checks as otherwise EC2 status checks may show an instance as being healthy that the ELB has determined is unhealthy. In this case the instance will be removed from service by the ELB but will not be terminated by Auto Scaling Group.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"ASG uses EC2 health checks by default. It can also use ELB health checks and custom health checks. ELB health checks are in addition to the EC2 status checks.")),Object(c.b)("li",{parentName:"ol"},"If any ASG health check returns an unhealthy status then the instance will be terminated."),Object(c.b)("li",{parentName:"ol"},"When a ELB marks an instance as unhealthy, it reports it as ",Object(c.b)("inlineCode",{parentName:"li"},"OutOfService")),Object(c.b)("li",{parentName:"ol"},"A healthy instance enters the ",Object(c.b)("inlineCode",{parentName:"li"},"InService")," state."),Object(c.b)("li",{parentName:"ol"},"If an instance is marked as unhealthy, it will be scheduled for replacement."),Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"If connection draining is enabled, ASG waits for in-flight requests to complete or timeout before terminating instances.")),Object(c.b)("li",{parentName:"ol"},"The health check grace period allows a period of time for a new instance to warm up before performing a health check (300 seconds by default)."),Object(c.b)("li",{parentName:"ol"},"An instance is deemed unhealthy if there's a hardware impairment or it does not pass ELB health check. You can customize the health checks, pause and resume them."),Object(c.b)("li",{parentName:"ol"},"When ELB notices that the instance is unhealthy, it will stop routing requests to it. However, prior to discovering that the instance is unhealthy, ",Object(c.b)(s,{mdxType:"Highlight"},"some requests to that instance will fail"),"."),Object(c.b)("li",{parentName:"ol"},"If any health check returns an unhealthy status the instance will be terminated. ",Object(c.b)(s,{mdxType:"Highlight"},"For the ",Object(c.b)("inlineCode",{parentName:"li"},"impaired")," status, the ASG will wait a few minutes to see if the instance recovers before taking action. If the ",Object(c.b)("inlineCode",{parentName:"li"},"impaired")," status persists \u2192 termination occurs."))),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"EC2 health check"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"ELB health check"),Object(c.b)("th",Object(n.a)({parentName:"tr"},{align:null}),"ASG health check"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"1. Automated built-in checks for hardware and software."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1. ELB checks health of registered instances using default ELB check or one configured by user e.g. ASG check."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"1. All instances start with healthy. An unhealthy status can come from EC2 default, ELB or custom health check.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"2. Cannot be deleted or disabled."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2. You'd need a port, protocol (HTTP, HTTPS, TCP, SSL) and a ping path."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"2. If the ASG has ELB attached, ",Object(c.b)(s,{mdxType:"Highlight"},"it would consider both EC2 default and ELB health checks."))),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"3. Performed every minute."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3. NLB can use either an active or passive health check."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}),"3. As soon as an instance is deemed unhealthy, ASG would launch a replacement.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),"4. System checks require AWS involvement whereas Instance checks can be resolved by the user."),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null})),Object(c.b)("td",Object(n.a)({parentName:"tr"},{align:null}))))),Object(c.b)("h2",{id:"iv-asg-tips"},"IV. ASG Tips"),Object(c.b)("ol",null,Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"ASG default termination policy (balance instances across AZs)"),Object(c.b)("ol",{parentName:"li"},Object(c.b)("li",{parentName:"ol"},"Find the AZ with most number of instances"),Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"Delete the one with oldest launch config")))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"ASG provides several lifecycle hooks to define custom actions"))),Object(c.b)("p",null,Object(c.b)("img",{alt:"AWS ASG",src:a(200).default})),Object(c.b)("ol",{start:3},Object(c.b)("li",{parentName:"ol"},Object(c.b)(b,{mdxType:"Quote"},"Launch template vs Launch config")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Both allow defining AMI, instance type, SG and other usual EC2 parameters")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Launch config is legacy and must be re-created every time")),Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"Launch template is newer and recommended. It allows versioning and provision on-demand + spot as well as T2 burst instances.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"ASG and ELB work hand-in-hand"))),Object(c.b)("p",null,Object(c.b)("img",{alt:"AWS ASG",src:a(201).default})),Object(c.b)("ol",{start:5},Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Fleet management")," \u2014  Automatically replace unhealthy instances and maintains your fleet at a desired capacity.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Dynamic scaling")," \u2014 Automatically increase or decrease capacity based on load or other metrics e.g. add a new instance when the CPU spikes above 80%.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},Object(c.b)("strong",{parentName:"p"},"Target tracking")," \u2014 Set target for a metric you want to track and ASG will adjust the instance count automatically.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"If you delete an ASG, all its running instances will be terminated.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"You can configure SNS to receive notifications whenever ASG grows or shrinks.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Launch configuration is a template that an EC2 ASG uses to launch EC2 instances. It contains information including AMI, instance type, key pair and security groups.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"When you create an EC2 scaling group, you MUST specify a launch configuration.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"You can't modify a launch configuration after creating it.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"ASG can span across AZs but not regions.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"You can use AWS CodeDeploy or CloudFormation to orchestrate code changes to multiple instances in your ASG.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Data is NOT copied automatically to a newly created instance in ASG.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Lifecycle hooks let you take action before an instance goes in service or before it gets terminates e.g. ",Object(c.b)(s,{mdxType:"Highlight"},"you could use a terminate hook to write fleet log to S3 when an instance goes out of service."))),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"You don't have to use ELB to use ASG! You can use EC2 health check to identify and replace unhealthy instances.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"When an ",Object(c.b)("inlineCode",{parentName:"p"},"impaired")," instance fails a health check, Amazon EC2 Auto Scaling automatically terminates it and replaces it with a new one. If you\u2019re using an Elastic Load Balancing load balancer, Amazon EC2 Auto Scaling gracefully detaches the impaired instance from the load balancer before provisioning a new one and attaching it to the load balancer. This is all done automatically, so you don\u2019t need to respond manually when an instance needs replacing.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"The turnaround time is within minutes. The majority of replacements happen within less than 5 minutes, and on average it is significantly less than 5 minutes. It depends on a variety of factors, including how long it takes to boot up the AMI of your instance.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"If you are not using ELB, you can re-route requests using Route 53 or a reverse proxy.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"You can configure ASG to mix and match EC2 instance types (Spot, RI)"),". You can also customize number of CPUs, RAM etc."),Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"You can specify which subnets Auto Scaling will launch new instances into. ASG will always aim to keep your instances balanced across AZs.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"You can attach already-running EC2 instances to your ASG but make sure you don't exceed the upper cap of the ASG.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"Make sure to add ALL subnets to ASG while in VPC. ASG cannot do that automatically.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)(s,{mdxType:"Highlight"},"Instances showing `OutOfService` from ELB? Health check configuration not properly defined.")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Prevent ASG from scaling temporarily?")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Place the EC2 instance that is experiencing issues into the ",Object(c.b)("inlineCode",{parentName:"p"},"Standby")," state")),Object(c.b)("li",{parentName:"ol"},Object(c.b)("p",{parentName:"li"},"Suspend the scaling processes responsible for launching new instances"))))}h.isMDXComponent=!0}}]);