# Problem Statement: PS-BC-01

## 📌 Problem Overview
- **Problem Code**: `PS-BC-01`
- **Title**: Secure Encrypted Closed-Group Communication Platform for Defence Personnel over Public Mobile Networks
- **Theme**: Blockchain & Cybersecurity
- **Track / Project Type**: Software Track (Android/iOS Mobile Client + Encrypted Server Backend)
- **Organized By**: E-Cell RKMVCC — PARAMPARA 1.0

---

## 🔍 Detailed Problem Description
Military personnel and their families routinely communicate using commercial messaging platforms over public cellular and Wi-Fi networks. Commercial communication channels pose severe operational security (OPSEC) risks due to data harvesting, server vulnerabilities, location tracking, and lack of sovereign cryptographic control. Commercial platforms are prone to interception or targeted exploitation by adversary signal intelligence agencies.

---

## 🎯 Key Objectives & Expectations
1. **End-to-End Sovereign Cryptography**: Implement military-grade encryption protocols (Signal Protocol, Double Ratchet, Post-Quantum Cryptography algorithms like Kyber/Dilithium) under full sovereign key management.
2. **Anti-Metadata & Location Disguise**: Obfuscate packet timing, message metadata, IP endpoints, and geolocation traces to prevent traffic analysis by adversary SIGINT.
3. **Zero-Trust Client Security**: Include ephemeral self-destructing messages, screenshot/screen recording blocking, remote wipe, and tamper detection on mobile devices.
4. **Closed-Group Sovereign Server Architecture**: Deploy containerized air-gapped or self-hosted relay servers with zero plain-text storage.

---

## 🛠️ Suggested Technical Stack
- **Cryptography Libraries**: Libsodium, Signal Protocol C/Java SDK, OpenQuantumSafe (OQS).
- **Mobile Clients**: Native Android (Kotlin) / iOS (Swift) or Flutter with strict hardware-backed keystore integration (Android KeyStore / iOS Secure Enclave).
- **Backend Architecture**: Go / Rust for low-latency encrypted message routing, WebSockets / gRPC.
- **Database / Storage**: SQLite with SQLCipher (encrypted local database on device).

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
When preparing your solution PPT for `PS-BC-01`, include the following slides:

1. **Title Slide**: `PS-BC-01`, Project Title, Team Name, and Team Members.
2. **OPSEC Risk & Vulnerability Analysis**: Commercial app vulnerabilities, SIGINT exploitation vectors.
3. **Cryptographic Architecture**: End-to-end ratchet protocol, post-quantum readiness, sovereign key exchange.
4. **Mobile Client Hardening**: Hardware keystore, anti-screenshot, memory wiping, metadata obfuscation.
5. **System Architecture Diagram**: Zero-knowledge relay server architecture over public cellular networks.
6. **Defence Operational Readiness**: Deployment feasibility on defence intranets / public networks, compliance with military OPSEC guidelines.
