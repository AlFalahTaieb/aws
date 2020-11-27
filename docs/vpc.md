---
id: vpc
title: Amazon VPC FAQs
sidebar_label: Amazon VPC FAQs
---


## Q. What is Amazon Virtual Private Cloud?

Amazon VPC lets you provision a logically isolated section of the Amazon Web Services (AWS) cloud where you can launch AWS resources in a virtual network that you define. You have complete control over your virtual networking environment, including selection of your own IP address ranges, creation of subnets, and configuration of route tables and network gateways. You can also create a hardware Virtual Private Network (VPN) connection between your corporate datacenter and your VPC and leverage the AWS cloud as an extension of your corporate datacenter.

You can easily customize the network configuration for your Amazon VPC. For example, you can create a public-facing subnet for your web servers that have access to the Internet, and place your backend systems such as databases or application servers in a private-facing subnet with no Internet access. You can leverage multiple layers of security, including security groups and network access control lists, to help control access to Amazon EC2 instances in each subnet.

## Q. What are the components of Amazon VPC?

Amazon VPC comprises a variety of objects that will be familiar to customers with existing networks:

  * A Virtual Private Cloud: A logically isolated virtual network in the AWS cloud. You define a VPC’s IP address space from ranges you select.
  * Subnet: A segment of a VPC’s IP address range where you can place groups of isolated resources.
  * Internet Gateway: The Amazon VPC side of a connection to the public Internet.
  * NAT Gateway: A highly available, managed Network Address Translation (NAT) service for your resources in a private subnet to access the Internet.
  * Virtual private gateway: The Amazon VPC side of a VPN connection.
  * Peering Connection: A peering connection enables you to route traffic via private IP addresses between two peered VPCs.
  * VPC Endpoints: Enables private connectivity to services hosted in AWS, from within your VPC without using an Internet Gateway, VPN, Network Address Translation (NAT) devices, or firewall proxies.
  * Egress-only Internet Gateway: A stateful gateway to provide egress only access for IPv6 traffic from the VPC to the Internet.

##  Q: Why should I use Amazon VPC? 

Amazon VPC enables you to build a virtual network in the AWS cloud - no VPNs, hardware, or physical datacenters required. You can define your own network space, and control how your network and the Amazon EC2 resources inside your network are exposed to the Internet. You can also leverage the enhanced security options in Amazon VPC to provide more granular access to and from the Amazon EC2 instances in your virtual network. 

## Q. What are the different types of VPC endpoints available on Amazon VPC? 

VPC endpoints enable you to privately connect your VPC to services hosted onAWS without requiring an Internet gateway, a NAT device, VPN, or firewallproxies. Endpoints are horizontally scalable and highly available virtualdevices that allow communication between instances in your VPC and AWSservices. Amazon VPC offers two different types of endpoints: gateway typeendpoints and interface type endpoints.
 
<strong>Gateway type endpoints </strong>are available only for AWS services including S3 and DynamoDB. These endpoints will add an entry to your route table you selected and route the traffic to the supported services through Amazon’s private network.
 
<strong>Interface type endpoints </strong>provide private connectivity to services powered by PrivateLink, being AWS services, your own services or SaaS solutions, and supports connectivity over Direct Connect. More AWS and SaaS solutions will be supported by these endpoints in the future. Please refer to VPC Pricing for the price of interface type endpoints.
  

## Q. What IP address ranges are assigned to a default Amazon VPC?

Default VPCs are assigned a CIDR range of 172.31.0.0/16. Default subnets within a default VPC are assigned /20 netblocks within the VPC CIDR range. 

## Q. How large of a VPC can I create?

Currently, Amazon VPC **supports five (5)** IP address ranges, one (1) primary and four (4) secondary for IPv4. Each of these ranges can be between /28 (in CIDR notation) and /16 in size. The IP address ranges of your VPC should not overlap with the IP address ranges of your existing network.

For IPv6, the VPC is a fixed size of /56 (in CIDR notation). A VPC can have both IPv4 and IPv6 CIDR blocks associated to it.

## Q. How many subnets can I create per VPC?

Currently you can create **200 subnets per VPC**. If you would like to create more, please submit a case at the support center.

## Q. What are the differences between security groups in a VPC and network ACLs in a VPC?

Security groups in a VPC specify which traffic is allowed to or from an Amazon EC2 instance. Network ACLs operate at the subnet level and evaluate traffic entering and exiting a subnet. Network ACLs can be used to set both Allow and Deny rules. Network ACLs do not filter traffic between instances in the same subnet. In addition, network ACLs perform stateless filtering while security groups perform stateful filtering.

## Q. Can Amazon EC2 instances within a VPC in one region communicate with Amazon EC2 instances within a VPC in another region?

**Yes**. Instances in one region can communicate with each other using Inter-Region VPC Peering, public IP addresses, NAT gateway, NAT instances, VPN Connections or Direct Connect connections.


## Q. How are IAM accounts impacted by default VPC?

If your AWS account has a default VPC, any IAM accounts associated with your AWS account use the same default VPC as your AWS account.

## Q. Can I have more than two network interfaces attached to my EC2 instance?

The total number of network interfaces that can be attached to an EC2 instance depends on the instance type.



## Q. Can I attach a network interface in one Availability Zone to an instance in another Availability Zone?

Network interfaces can only be attached to instances residing in the same Availability Zone.

## Q. Can I attach a network interface in one VPC to an instance in another VPC?

Network interfaces can only be attached to instances in the same VPC as the interface.

## Q. Can I create a peering connection to a VPC in a different region?

Yes. Peering connections can be created with VPCs in different regions. Inter-region VPC peering is available globally in all commercial regions (excluding China).

## Q. Can I peer two VPCs with matching IP address ranges?

No. Peered VPCs must have non-overlapping IP ranges.

## Q. What is ClassicLink?

Amazon Virtual Private Cloud (VPC) ClassicLink allows EC2 instances in the EC2-Classic platform to communicate with instances in a VPC using private IP addresses. To use ClassicLink, enable it for a VPC in your account, and associate a Security Group from that VPC with an instance in EC2-Classic. All the rules of your VPC Security Group will apply to communications between instances in EC2-Classic and instances in the VPC. 

## Q. How do I use ClassicLink?

In order to use ClassicLink, you first need to enable at least one VPC in your account for ClassicLink. Then you associate a Security Group from the VPC with the desired EC2-Classic instance. The EC2-Classic instance is now linked to the VPC and is a member of the selected Security Group in the VPC. Your EC2-Classic instance cannot be linked to more than one VPC at the same time.

## Q. Are there any VPCs for which I cannot enable ClassicLink?

**Yes**. ClassicLink **cannot** be enabled for a VPC that has a **Classless Inter-Domain Routing (CIDR)** that is **within the 10.0.0.0/8** range, with the exception of *10.0.0.0/16 *and *10.1.0.0/16*. In addition, ClassicLink cannot be enabled for any VPC that has a route table entry pointing to the 10.0.0.0/8 CIDR space to a target other than "local".

##  Q. What is AWS PrivateLink?

AWS PrivateLink enables customers to access services hosted on AWS in a highly available and scalable manner, while keeping all the network traffic within the AWS network. Service users can use this to privately access services powered by PrivateLink from their Amazon Virtual Private Cloud (VPC) or their on-premises, without using public IPs, and without requiring the traffic to traverse across the Internet. Service owners can register their Network Load Balancers to PrivateLink services and provide the services to other AWS customers.

## Q. Which services are currently available on AWS PrivateLink?

The following AWS services support this feature: Amazon Elastic Compute Cloud (EC2), Elastic Load Balancing (ELB), Kinesis Streams, Service Catalog, EC2 Systems Manager, Amazon SNS, and AWS DataSync.

## Q. What CloudWatch metrics are available for the interface-based VPC endpoint?

Currently, no CloudWatch metric is available for the interface-based VPC endpoint.

## Q. How many VPCs, subnets, Elastic IP addresses, and internet gateways can I create?

You can have:

 * Five Amazon VPCs per AWS account per region
 * Two hundred subnets per Amazon VPC
 * Five Amazon VPC Elastic IP addresses per AWS account perregion
 * One internet gateway per Amazon VPC

