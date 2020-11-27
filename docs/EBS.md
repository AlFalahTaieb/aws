---
id: ebs
title:   Amazon EBS FAQs
sidebar_label:  Amazon EBS FAQs
---

## Q: What happens to my data when an Amazon EC2 instance terminates?

Unlike the data stored on a local instance store (which persists only as long as that instance is alive), data stored on an Amazon EBS volume can persist independently of the life of the instance. Therefore, we recommend that you use the local instance store only for temporary data. For data requiring a higher level of durability, we recommend using Amazon EBS volumes or backing up the data to Amazon S3. If you are using an Amazon EBS volume as a root partition, set the Delete on termination flag to "No" if you want your Amazon EBS volume to persist outside the life of the instance.

## Q: What kind of performance can I expect from Amazon EBS volumes?

Amazon EBS provides five volume types: Provisioned IOPS SSD (io2 and io1), General Purpose SSD (gp2), Throughput Optimized HDD (st1) and Cold HDD (sc1). These volume types differ in performance characteristics and price, allowing you to tailor your storage performance and cost to the needs of your applications. The average latency between EC2 instances and EBS is single digit milliseconds.

## Q: What is Amazon EBS encryption?

Amazon EBS encryption offers seamless encryption of EBS data volumes, boot volumes and snapshots, eliminating the need to build and maintain a secure key management infrastructure. EBS encryption enables data at rest security by encrypting your data using Amazon-managed keys, or keys you create and manage using the AWS Key Management Service (KMS). The encryption occurs on the servers that host EC2 instances, providing encryption of data as it moves between EC2 instances and EBS storage.

## Q: What is the AWS Key Management Service (KMS)?

AWS KMS is a managed service that makes it easy for you to create 3and control the encryption keys used to encrypt your data. AWS Key Management Service is integrated with other AWS services including Amazon EBS, Amazon S3, and Amazon Redshift, to make it simple to encrypt your data with encryption keys that you manage. AWS Key Management Service is also integrated with AWS CloudTrail to provide you with logs of all key usage to help meet your regulatory and compliance needs. To learn more about KMS, visit the AWS Key Management Service product page.

## Q: Why should I use EBS encryption?

You can use Amazon EBS encryption to meet security and encryption compliance requirements for data at rest encryption in the cloud. Pairing encryption with existing IAM access control policies improves your company’s defense-in-depth strategy.

## Q: How are my Amazon EBS encryption keys managed?

Amazon EBS encryption handles key management for you. Each newly created volume gets a unique 256-bit AES key; Volumes created from the encrypted snapshots share the key. These keys are protected by our own key management infrastructure, which implements strong logical and physical security controls to prevent unauthorized access. Your data and associated keys are encrypted using the industry-standard AES-256 algorithm

## Q: Can I launch an encrypted EBS instance from an unencrypted AMI?

Yes

## Q: Can I share encrypted snapshots and AMIs with other accounts?

Yes

