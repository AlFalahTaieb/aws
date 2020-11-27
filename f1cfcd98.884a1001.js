(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{117:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return i})),a.d(t,"metadata",(function(){return b})),a.d(t,"rightToc",(function(){return o})),a.d(t,"StyledButton",(function(){return u})),a.d(t,"default",(function(){return d}));var c=a(2),n=a(6),s=(a(0),a(123)),l=a(314),r=a(143),i={id:"notes_vpc_r1",title:"Creating a VPC",author:"Taieb"},b={unversionedId:"notes_vpc_r1",id:"notes_vpc_r1",isDocsHomePage:!1,title:"Creating a VPC",description:"export const StyledButton = withStyles({",source:"@site/docs/notes_vpc_r1.mdx",slug:"/notes_vpc_r1",permalink:"/FAQ/docs/notes_vpc_r1",version:"current"},o=[{value:"Creating a VPC",id:"creating-a-vpc",children:[{value:"Step 1: Create a VPC",id:"step-1-create-a-vpc",children:[]},{value:"Step 2: Add subnets",id:"step-2-add-subnets",children:[]},{value:"Step 3: Create EC2 and attach VPC to it",id:"step-3-create-ec2-and-attach-vpc-to-it",children:[]},{value:"Step 4: Create route table and associate it to subnet",id:"step-4-create-route-table-and-associate-it-to-subnet",children:[]},{value:"Step 5: Allow HTTP access with NACL",id:"step-5-allow-http-access-with-nacl",children:[]}]}],u=Object(r.a)({root:{background:"linear-gradient(315deg, #fc9842 0%, #fe5f75 74%)",borderRadius:7,border:0,color:"inherit",height:35,padding:"0 30px",boxShadow:"0 3px 5px 2px rgba(255, 105, 135, .3)"},label:{textTransform:"capitalize"}})(l.a),p={rightToc:o,StyledButton:u};function d(e){var t=e.components,l=Object(n.a)(e,["components"]);return Object(s.b)("wrapper",Object(c.a)({},p,l,{components:t,mdxType:"MDXLayout"}),Object(s.b)("h2",{id:"creating-a-vpc"},"Creating a VPC"),Object(s.b)("p",null,"Step-by-step instructions on creating a VPC."),Object(s.b)("h3",{id:"step-1-create-a-vpc"},"Step 1: Create a VPC"),Object(s.b)("p",null,Object(s.b)("img",{alt:"VPC AWS",src:a(292).default})),Object(s.b)("h3",{id:"step-2-add-subnets"},"Step 2: Add subnets"),Object(s.b)("p",null,"Two public and two private subnets across two AZs."),Object(s.b)("p",null,Object(s.b)("img",{alt:"VPC AWS",src:a(293).default})),Object(s.b)("h3",{id:"step-3-create-ec2-and-attach-vpc-to-it"},"Step 3: Create EC2 and attach VPC to it"),Object(s.b)("p",null,"Make sure to enable auto assign IPs for each public subnet before attaching them to EC2."),Object(s.b)("p",null,Object(s.b)("img",{alt:"VPC AWS",src:a(294).default})),Object(s.b)("p",null,Object(s.b)("img",{alt:"VPC AWS",src:a(295).default})),Object(s.b)("h3",{id:"step-4-create-route-table-and-associate-it-to-subnet"},"Step 4: Create route table and associate it to subnet"),Object(s.b)("p",null,"One each for public and private"),Object(s.b)("p",null,Object(s.b)("img",{alt:"VPC AWS",src:a(296).default})),Object(s.b)("p",null,Object(s.b)("img",{alt:"VPC AWS",src:a(297).default})),Object(s.b)("p",null,Object(s.b)("strong",{parentName:"p"},"Edit route for public route table to associate any request from 0.0.0.0 to igw")),Object(s.b)("p",null,Object(s.b)("img",{alt:"VPC AWS",src:a(298).default})),Object(s.b)("p",null,"Now you should be able to connect to the EC2 instance through SSH. "),Object(s.b)("p",null,"The public subnet is now also the ",Object(s.b)("strong",{parentName:"p"},"bastion host"),"."),Object(s.b)("h3",{id:"step-5-allow-http-access-with-nacl"},"Step 5: Allow HTTP access with NACL"),Object(s.b)("p",null,"Edit security group of EC2 (launch-wizard-xyz) to allow HTTP on port 80."),Object(s.b)("pre",null,Object(s.b)("code",Object(c.a)({parentName:"pre"},{className:"language-bash"}),'# Sample Apache server\nsudo su\nyum install httpd -y\nsystemctl enable httpd\nsystemctl start httpd\necho "hello world" > /var/www/html/index.html\n')),Object(s.b)("p",null,"This will display the page on EC2 URL."),Object(s.b)("p",null,"You can then explicitly deny it by setting a new inbound rule in NACL of the VPC."),Object(s.b)("p",null,Object(s.b)("img",{alt:"VPC AWS",src:a(299).default})),Object(s.b)("ol",null,Object(s.b)("li",{parentName:"ol"},"Rules are evaluated starting with the lowest numbered rule. As soon as a rule matches traffic, it's applied immediately regardless of any higher-numbered rule that may contradict it."),Object(s.b)("li",{parentName:"ol"},"In the above example, Rule 80 will be evaluated and then won't go further to Rule 100 or the default rule (*).")),Object(s.b)(u,{href:"/docs/notes_vpc",mdxType:"StyledButton"},"Back to VPC"))}d.isMDXComponent=!0},292:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/vpc25-4973ee518cfbf833db8764fbb997656c.png"},293:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/vpc26-8cb91d60c0447e87850afc6c1999c037.png"},294:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/vpc27-2ef632762b490576d59979b48faebf61.png"},295:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/vpc28-2ef7ed702300871e385edcb3e329fa8a.png"},296:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/vpc29-2d3576e7dbdaa2e26e103c3041ff8348.png"},297:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/vpc30-1a3c74b35bee156009fa096cf0728915.png"},298:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/vpc31-dd1322906fb6a660ee916675e0ccc83b.png"},299:function(e,t,a){"use strict";a.r(t),t.default=a.p+"assets/images/vpc32-0c74b3a21b43ea0c35d5f5a8a23845c3.png"}}]);