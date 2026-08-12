# Problem Statement: PS-BC-02

## 📌 Problem Overview
- **Problem Code**: `PS-BC-02`
- **Title**: Blockchain-Based Immutable Provenance & Tracking System for Ordnance Ammunition & Military Supply Chains
- **Theme**: Blockchain & Cybersecurity
- **Track / Project Type**: Hybrid (Blockchain Distributed Ledger + Smart Contracts + Serialization Hardware)
- **Organized By**: E-Cell RKMVCC — PARAMPARA 1.0

---

## 🔍 Detailed Problem Description
Managing military logistics—specifically ammunition, missile components, weapons, and sensitive spare parts—requires absolute transparency, tamper-proof audit trails, and strict origin verification. Traditional centralized inventory databases in defence supply chains are susceptible to unauthorized database tampering, unauthorized batch swaps, counterfeit component insertion, and poor visibility during inter-depot transit in remote border sectors.

---

## 🎯 Key Objectives & Expectations
1. **Immutable Chain of Custody**: Record every transfer of ownership and location update on a permissioned distributed ledger (Hyperledger Fabric / Ethereum Enterprise).
2. **Physical Serialization Integration**: Interface smart contracts with physical hardware serialization (RFID tags, QR codes, cryptographically signed hardware seals).
3. **Smart Contract Automated Compliance**: Enforce automated verification of batch certifications, shelf-life expiration, and depot clearance rules prior to dispatch.
4. **Offline Transit & Border Synchronization**: Enable border depots and field units to log events offline and securely reconcile transactions upon reconnection.

---

## 🛠️ Suggested Technical Stack
- **Blockchain Ledger Framework**: Hyperledger Fabric / Polygon Supernets / Ethereum Private Network (Solidity smart contracts).
- **Hardware Integration**: RFID / NFC scanners, Barcode/QR serialization, Hardware Security Modules (HSM).
- **Backend & Middleware**: Node.js / Go SDK for Hyperledger, REST APIs.
- **Web & Mobile Portal**: React Dashboard for ordnance factory managers, Android App for field logistics officers.

---

## 📋 Submission Details & Event Timeline

> [!IMPORTANT]
> **SUBMISSION FORMAT REQUIREMENT:**
> For your submission in **PARAMPARA 1.0**, you are required to submit **ONLY a Solution Presentation Deck (PPT / PDF format)**. No source code repository submission is required at the initial phase.

### Key Dates:
- **Registration Closes**: August 20
- **Final Submission Deadline**: **August 21**
- **Pitching Presentation & Final Evaluation**: **August 22**

---

## 📊 Recommended PPT Presentation Structure
When preparing your solution PPT for `PS-BC-02`, include the following slides:

1. **Title Slide**: `PS-BC-02`, Project Title, Team Name, and Team Members.
2. **Problem Breakdown**: Flaws in centralized military inventory databases, counterfeiting risks, border logistics blind spots.
3. **Blockchain Architecture & Smart Contracts**: Permissioned ledger node layout, smart contract logic, chain of custody protocol.
4. **Hardware Serialization & Field Scanning**: RFID / QR serialization flow from ordinance factory to border depot.
5. **Offline Sync & Security Model**: Handling disconnected border environments, access control lists, encryption.
6. **Defense Logistics Impact**: Zero counterfeit insertion, audit transparency, supply chain operational security.
