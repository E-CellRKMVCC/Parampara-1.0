# Problem Statement: PS-AFR-02

## 📌 Problem Overview
- **Problem Code**: `PS-AFR-02`
- **Title**: Micro-Cold Storage Monitoring & IoT-Based Post-Harvest Logistics Network
- **Theme**: Agriculture, FoodTech & Rural Development
- **Track / Project Type**: Hardware Edition Track (IoT Sensors + Embedded Firmware + Cloud Dashboard)
- **Organized By**: E-Cell RKMVCC — PARAMPARA 1.0

---

## 🔍 Detailed Problem Description
India experiences significant post-harvest losses in fruits, vegetables, and dairy due to an inadequate cold chain infrastructure during the "first mile" transit from farm gates to regional markets. Small farmers cannot afford large-scale refrigeration, while existing micro-cold rooms and solar-powered cooling units often suffer from unmonitored temperature/humidity fluctuations, power cutouts, and inefficient logistics scheduling, leading to premature food spoilage.

---

## 🎯 Key Objectives & Expectations
1. **Low-Cost IoT Sensor Nodes**: Design multi-sensor nodes for real-time telemetry (Temperature, Humidity, Ethylene/Gas levels, Door-open sensors, Power status).
2. **Cold Chain Transit Tracking**: Implement GPS-tracked telemetry during farm-to-market transit in refrigerated or micro-cooling vehicles.
3. **Automated Spoilage Warning System**: Predict shelf-life deterioration using temperature-time integral (TTI) algorithms and alert operators via SMS/Push notifications.
4. **Logistics Optimization Engine**: Schedule pickup routes and prioritize distribution based on product perishability and cold room storage levels.

---

## 🛠️ Suggested Technical Stack
- **Hardware & Embedded Firmware**: ESP32 / Arduino / Raspberry Pi, DHT22 / BME280 sensors, MQ gas sensors, SIM800L / NB-IoT / LoRaWAN modules.
- **IoT & Protocols**: MQTT / CoAP / HTTP REST APIs, AWS IoT Core or ThingsBoard.
- **Cloud Backend**: Node.js / Python FastAPI, PostgreSQL / TimescaleDB for time-series sensor data.
- **Frontend & Driver App**: React / React Native dashboard for facility managers and transport logistics dispatchers.

---

## 📋 Submission Details & Event Timeline

> [!IMPORTANT]
> **SUBMISSION FORMAT REQUIREMENT:**
> For your submission in **PARAMPARA 1.0**, you are required to submit **ONLY a Solution Presentation Deck (PPT / PDF format)**. No hardware hardware prototypes or source code repository submission is required at the initial phase.

### Key Dates:
- **Registration Closes**: August 20
- **Final Submission Deadline**: **August 21**
- **Pitching Presentation & Final Evaluation**: **August 22**

---

## 📊 Recommended PPT Presentation Structure
When preparing your solution PPT for `PS-AFR-02`, include the following slides:

1. **Title Slide**: `PS-AFR-02`, Project Title, Team Name, and Team Members.
2. **Problem Breakdown**: First-mile post-harvest losses, lack of IoT tracking in micro-cold storage.
3. **Hardware Architecture & Sensor Diagram**: Sensor selection, microcontroller setup, connectivity (LoRa/Cellular).
4. **Cloud Telemetry & Shelf-Life Prediction Engine**: Algorithm for spoilage warnings and logistics dispatch.
5. **Dashboard & Alert UI Mockups**: Monitoring interface for micro-cold room owners and logistics drivers.
6. **Cost Analysis & ROI**: Hardware unit economics, energy efficiency, and post-harvest wastage reduction.
