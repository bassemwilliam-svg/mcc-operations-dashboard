**Software Maintenance & Version Control Document**

MCC VR CCTV Training System

Project: MCC - VR-Based CCTV Operator Training Platform

|  |  |
| --- | --- |
| **Document Version** | 2.1 |
| **Last Updated** | February 12, 2026 |
| **Project Kickoff** | March 1, 2026 |
| **Classification** | Technical - Maintenance |

**Change Log**

| **Version** | **Date** | **Changes** |
| --- | --- | --- |
| 2.1 | Feb 12, 2026 | Updated to 8 training devices + 1 supervisor; added HTC Vive standard warranty (1-year included); clarified extended warranty as optional |
| 2.0 | Feb 11, 2026 | Updated for 9 devices; added comprehensive hardware warranties |
| 1.1 | Feb 3, 2026 | Added Software Licensing & Renewal section |
| 1.0 | Jan 14, 2026 | Initial document release |

1. Executive Summary

This document establishes comprehensive software maintenance, version control, and licensing management procedures for the MCC VR CCTV Training System. It covers 8 training workstations plus 1 supervisor station (9 total endpoints) operating Windows 10/11 with HTC Vive Focus Vision headsets, EmotiBit biometric sensors, and custom VR training applications.

**Key Objectives:**

* Maintain system stability through controlled update deployment
* Ensure license compliance and avoid service interruptions
* Track software versions and compatibility matrices
* Document rollback and recovery procedures
* Manage annual licensing budgets and renewal schedules

2. Software & Hardware Licensing Management

2.1 License & Warranty Inventory Overview

All software components and hardware require active licenses and warranties for legal operation, support access, and replacement services. This section documents license types, warranty coverage, costs, renewal dates, and procurement procedures.

| **Component** | **License Type** | **Quantity** | **Annual Cost** | **Renewal Date** |
| --- | --- | --- | --- | --- |
| **MCC Training Software** | OEM Perpetual | 9 | Included w/ PC | N/A (Perpetual) |
| **Windows 10/11 Pro** | OEM Perpetual | 9 | Included w/ PC | N/A (Perpetual) |
| **Visual Studio Community** | Free | 3 (Dev team) | $0 | N/A |
| **Proxmox VE Enterprise** | Per-Socket Subscription | 2 sockets | $1,600 | February 28, 2027 |
| **HTC Vive Standard Warranty** | 1-Year Limited | 8 units | Included | February 28, 2027 |
| **HTC Vive Extended Warranty (OPTIONAL)** | Annual Vive Care | 8 units | $1,440 | February 28, 2027 |
| **PC Hardware Warranty** | 3-Year On-Site | 9 PCs | Included | February 28, 2029 |
| **Server Hardware Warranty** | 3-Year Pro Support | 2 servers | Included | February 28, 2029 |
| **Network Equipment Warranty** | Lifetime Limited | 3 switches | Included | Lifetime (Ubiquiti/Netgear) |
| **UPS System Warranty** | 3-Year | 1 unit | Included | February 28, 2029 |
| **Total Annual Licensing Cost (Required):** | | | **$1,600** | |
| **With Optional Extended Warranty:** | | | **$3,040** | |

2.2 VR Headset Warranty Coverage

All HTC Vive Focus Vision headsets include a standard 1-year manufacturer warranty. An optional extended warranty (Vive Care) provides additional coverage and benefits.

2.2.1 Standard Warranty (Included)

* **Coverage:** 1-Year Limited Manufacturer Warranty
* **Quantity:** 8 headsets
* **Cost:** Included with purchase
* **Start Date:** March 1, 2026
* **End Date:** February 28, 2027
* **Covers:** Manufacturing defects, hardware malfunctions
* **Service:** Return-to-depot repair or replacement
* **Shipping:** Customer pays shipping to HTC; HTC pays return shipping

2.2.2 Extended Warranty - Vive Care (OPTIONAL)

* **Coverage:** Vive Care Extended Warranty
* **Annual Cost:** $180 per unit × 8 = $1,440/year
* **Start Date:** March 1, 2026 (if purchased)
* **First Renewal:** February 28, 2027

**Additional Benefits:**

* Advanced replacement service (2-day shipping)
* Coverage for display issues (dead pixels, burn-in)
* Tracking sensor failures
* Controller malfunctions
* Priority technical support

**Exclusions (Both Standard and Extended):**

* Physical damage (drops, impacts)
* Water damage
* Normal wear and tear (foam degradation, strap stretching)

**Recommendation:** The extended warranty is optional but recommended for training environments with heavy daily use. Advanced replacement minimizes downtime, and priority support ensures rapid issue resolution during critical training periods.

2.3 Annual Renewal Calendar

| **Month** | **Renewal Item** | **Cost** | **Action Required** |
| --- | --- | --- | --- |
| **February 2027** | Proxmox VE Enterprise Subscription (Required) | $1,600 | By Jan 31, 2027 |
| **February 2027** | HTC Vive Extended Warranty - Vive Care (Optional) | $1,440 | By Jan 31, 2027 |
| **February 2027** | HTC Vive Standard Warranty Expiration (8 units) | Included | Decision needed |
| **February 2029** | Hardware Warranty Expiration (PCs, Servers, UPS) | TBD | Review in 2028 |

**Note:** All 8 VR headsets include 1-year standard warranty at no cost. Extended Vive Care warranty ($1,440/year) is optional and can be purchased before standard warranty expiration on February 28, 2027.