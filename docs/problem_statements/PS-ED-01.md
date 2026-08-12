# Problem Statement: PS-ED-01

## 📌 Problem Overview
- **Problem Code**: `PS-ED-01`
- **Title**: Secure & Tamper-Proof Question Paper Leakage Prevention System
- **Theme**: Smart Education
- **Track / Project Type**: Hybrid (Hardware + Software) or Software-Only
- **Organized By**: E-Cell RKMVCC — PARAMPARA 1.0

---

## 🔍 Detailed Problem Description
Question paper leaks before or during high-stakes competitive and university examinations undermine educational integrity, cause massive financial losses, and distress millions of students. Traditional distribution models rely heavily on physical logistics, manual handling, and static storage, creating multiple vulnerable attack vectors at printing presses, transit hubs, and institutional vaults. Existing digital methods often lack end-to-end cryptographic protection or dynamic access controls right up to the minute the exam begins.

---

## 🎯 Key Objectives & Expectations
1. **End-to-End Encrypted Question Bank**: Store and transmit exam papers in AES-256 / RSA encrypted envelopes unlocked only via multi-party time-locked cryptographic keys.
2. **Just-In-Time Decryption & Dynamic Watermarking**: Decrypt paper at the exam center center minutes before start time with unique student-specific steganographic watermarks to trace photography leaks.
3. **Tamper-Proof Storage Vault**: (Hardware/Software Hybrid) Smart IoT lock box or TPM-backed secure hardware enclave at exam centers requiring biometrics + multi-custodian keys.
4. **Audit Trail & Anomaly Detection**: Log every access attempt on an immutable log ledger with automated anomaly detection for unauthorized decryption attempts.

---

## 🛠️ Suggested Technical Stack
- **Cryptography & Security**: OpenSSL, Shamir's Secret Sharing (SSS), Time-Lock Cryptography, Steganography libraries.
- **Hardware Integration (Hybrid option)**: Raspberry Pi / ESP32 smart lock boxes, TPM 2.0 modules, Solenoid locks, Fingerprint sensors.
- **Backend Infrastructure**: Python (FastAPI) / Node.js, WebSockets, PostgreSQL with audit logging.
- **Client App**: Desktop / Web application with secure browser kiosk mode (Electron / Tauri / Native).

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
When preparing your solution PPT for `PS-ED-01`, include the following slides:

1. **Title Slide**: `PS-ED-01`, Project Title, Team Name, and Team Members.
2. **Problem Analysis**: Examination leak vectors (printing, transit, physical vaults), impact on integrity.
3. **Cryptographic System Design**: Multi-party key splitting, time-locked envelopes, steganographic watermarking.
4. **Hardware/Software Vault Design**: Smart lock box mechanisms and kiosk decryption interface.
5. **Leak Traceability & Security Audit**: Forensic identification of physical paper photography leaks.
6. **Feasibility & Institutional Adoption**: Cost per examination center, deployment logistics, and exam board scalability.
