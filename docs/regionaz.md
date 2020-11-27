---
id: raz
title:   Regions & AZ
sidebar_label:  Regions & AZ
---

1. AWS has regions all around the world. A region is a cluster of AZs.
2. Each region has multiple availability zones (AZ), ranging from a minimum of 2 to a maximum of 6 e.g. `us-east-1a`, `us-east-1b`, `ap-southeast-2a` etc.
3. **Each AZ is one or more data center with redundant power, networking and connectivity**
4. Each AZ is geographically separated for disaster recovery but they are still connected with ultra-low latency networks.
5. AZs are connected with high speed private link.
6. Each AZ runs on its own physically distinct, independent infrastructure and is engineered to be highly reliable. 
7. Common points of failure like generators and cooling equipments are not shared across AZs. 
8. **Most AWS services are region-scoped i.e. you provision and pay for services by region.**
9. Very few services are inherently multi-region e.g. Aurora Global, DynamoDB Global

