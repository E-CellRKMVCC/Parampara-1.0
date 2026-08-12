# Problem Statement: PS-AFR-01

## 📌 Problem Overview
- **Problem Code**: `PS-AFR-01`
- **Title**: AI-Driven Multi-Modal Satellite Analytics for Crop Mapping, Moisture Stress, and Irrigation Advisories
- **Theme**: Agriculture, FoodTech & Rural Development
- **Track / Project Type**: Software Track (Geospatial AI / Machine Learning Engine & Dashboard)
- **Organized By**: E-Cell RKMVCC — PARAMPARA 1.0

---

## 🔍 Detailed Problem Description
Agricultural monitoring across large command areas is heavily impeded during cloud-heavy monsoon seasons, making traditional single-source optical satellite data unreliable. Furthermore, existing systems treat crop classification and moisture stress as isolated metrics without accounting for stage-wise crop phenology or translating water deficits into actionable field-level irrigation guidance. The lack of integrated, all-weather, near-real-time satellite analytics leads to avoidable irrigation losses, delayed drought detection, and unverified crop damage assessments in government schemes.

---

## 🎯 Key Objectives & Expectations
1. **Multi-Modal Data Integration**: Fuse optical satellite imagery with Synthetic Aperture Radar (SAR / Sentinel-1) data to overcome cloud-cover limitations during monsoon seasons.
2. **Phenology-Aware Crop Mapping**: Account for stage-wise crop phenology in crop classification models rather than static single-date snapshots.
3. **Moisture Deficit to Irrigation Advisory**: Convert raw vegetation indices (NDVI, NDWI) and soil moisture metrics into actionable, field-level irrigation volume recommendations for farmers.
4. **Drought & Damage Assessment**: Provide near-real-time automated anomaly detection for early drought alerts and crop loss verification for insurance schemes.

---

## 🛠️ Suggested Technical Stack
- **Geospatial & Satellite Processing**: Google Earth Engine (GEE), QGIS, GDAL, Rasterio, Sentinel-1/2 APIs, Planet API.
- **Machine Learning & Computer Vision**: PyTorch / TensorFlow, Convolutional Neural Networks (CNNs), Random Forest for SAR-Optical fusion.
- **Backend & API**: Python (FastAPI / Flask / GeoDjango), Celery for asynchronous processing.
- **Frontend / Dashboard**: React / Vite, Leaflet.js / Mapbox GL JS / OpenLayers for interactive geospatial map visualization.

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
When preparing your solution PPT for `PS-AFR-01`, include the following slides:

1. **Title Slide**: `PS-AFR-01`, Project Title, Team Name, and Team Members.
2. **Problem Context & Industry Gap**: Cloud interference in optical satellite data, lack of phenology-aware moisture analytics.
3. **Proposed AI/ML Architecture**: Multi-modal fusion pipeline (Optical + SAR) and decision engine framework.
4. **Actionable Irrigation Advisory Engine**: How water deficits translate into field-level guidance for farmers.
5. **Dashboard Mockups & Map UI**: Interface design showing interactive geospatial layers and alert triggers.
6. **Feasibility, Scalability & Impact**: Cloud computing costs, resolution constraints, and benefits to agricultural schemes.
