# Problem Statement: PS-MBH-03

## 📌 Problem Overview
- **Problem Code**: `PS-MBH-03`
- **Title**: Digital Vector Ecology & Zoonotic Disease Early-Warning Dashboard
- **Theme**: MedTech / BioTech / HealthTech
- **Track / Project Type**: Software Track (GIS Mapping / Predictive Analytics Web Portal)
- **Organized By**: E-Cell RKMVCC — PARAMPARA 1.0

---

## 🔍 Detailed Problem Description
Outbreaks of vector-borne and zoonotic diseases (e.g., Dengue, Malaria, Chikungunya, Scrub Typhus, and Leptospirosis) are closely tied to the biological life cycles of vectors like Aedes/Anopheles mosquitoes, ticks, and rodent hosts. Current municipal control measures are largely reactive—spraying insecticides only after human infection clusters are reported. There is a lack of predictive software integrating vector breeding biology, larval density metrics, host mammal populations, and ambient weather parameters to intervene before outbreaks occur.

---

## 🎯 Key Objectives & Expectations
1. **Multi-Factor Outbreak Prediction Engine**: Combine meteorological data (rainfall, humidity, temperature), GIS spatial layers (water logging, vegetation index), larval density indices (House Index, Container Index), and host animal telemetry.
2. **Biological Vector Lifecycle Modeling**: Model vector reproduction cycles and incubation delay (Degree-Day models) to forecast outbreak spikes 2-4 weeks in advance.
3. **Interactive Municipal GIS Risk Map**: Provide municipal health officers with high-resolution ward-level outbreak risk maps (Red/Yellow/Green zones).
4. **Targeted Vector Control Advisory**: Automatically recommend proactive intervention measures (anti-larval spraying, stagnant water treatment, public health alerts) prior to human case surges.

---

## 🛠️ Suggested Technical Stack
- **GIS & Remote Sensing**: GeoPandas, Shapely, Leaflet.js / Mapbox GL JS, OpenStreetMap / Sentinel-2 water logging indices.
- **AI/ML & Epidemiological Modeling**: Python (Statsmodels, PyTorch / TensorFlow, SEIR/Vector compartmental models, XGBoost).
- **Backend & APIs**: Python (FastAPI / Django), PostgreSQL + PostGIS spatial extension.
- **Frontend Web Portal**: React, Tailwind CSS / Vanilla CSS, Recharts for predictive epidemical curves.

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
When preparing your solution PPT for `PS-MBH-03`, include the following slides:

1. **Title Slide**: `PS-MBH-03`, Project Title, Team Name, and Team Members.
2. **Problem Analysis**: Reactive municipal vector control, delay in intervention, rising burden of Dengue/Malaria.
3. **Epidemiological & AI Predictive Model**: Vector lifecycle integration with satellite weather and larval density metrics.
4. **GIS Spatial Risk Dashboard UI**: Ward-level risk heatmap and early warning notification workflow.
5. **Proactive Intervention Engine**: Targeted spraying route optimization and resource allocation for civic bodies.
6. **Public Health Impact**: Reduction in human infection rates, cost savings for health departments, urban disease resilience.
