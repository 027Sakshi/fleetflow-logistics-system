# 🚛 FleetFlow

## Modular Fleet & Logistics Management System

FleetFlow is a centralized, rule-based digital platform designed to
replace inefficient manual fleet logbooks with an intelligent, modular
fleet and logistics management system.\
Built for hackathon submission, FleetFlow focuses on automation,
compliance validation, operational optimization, and financial
analytics.

------------------------------------------------------------------------

# 🎯 Problem Statement

Many small and mid-sized fleet operators still rely on manual logbooks
and fragmented tools to manage:

-   Vehicle lifecycle and maintenance
-   Driver compliance and safety
-   Trip dispatching
-   Fuel and operational cost tracking
-   Financial performance analysis

This leads to: - Overloaded vehicles - Expired driver licenses -
Untracked maintenance costs - Poor visibility into ROI - Operational
inefficiencies

FleetFlow solves these challenges through structured automation and
rule-based validation.

------------------------------------------------------------------------

# 🚀 Solution Overview

FleetFlow provides:

✔ Role-Based Access Control (RBAC)\
✔ Intelligent Dispatch Validation (Cargo ≤ Capacity)\
✔ License Expiry Blocking\
✔ Automated Maintenance Status Updates\
✔ Fuel & Expense Logging\
✔ Operational Analytics & ROI Calculation

------------------------------------------------------------------------

# 🏗️ System Architecture

## Frontend

-   Next.js 14 (App Router)
-   TypeScript
-   Tailwind CSS

## Backend

-   Next.js API Routes
-   SQLite (sql.js)
-   JWT Authentication
-   bcrypt password hashing

## Database

Relational schema linking: - Vehicles - Drivers - Trips - Maintenance
Logs - Fuel Logs - Users (Role-based)

------------------------------------------------------------------------

# 👥 Target Users

  Role                Responsibilities
  ------------------- -----------------------------------------
  Fleet Manager       Oversees vehicle lifecycle & scheduling
  Dispatcher          Creates and assigns trips
  Safety Officer      Monitors driver compliance
  Financial Analyst   Tracks fuel, maintenance & ROI

------------------------------------------------------------------------

# 📦 Core Modules

## 1️⃣ Authentication & RBAC

-   Secure login
-   Role-based page access
-   JWT session management

## 2️⃣ Command Center Dashboard

-   Active Fleet Count
-   Maintenance Alerts
-   Fleet Utilization Rate
-   Pending Cargo

## 3️⃣ Vehicle Registry

-   CRUD operations
-   Capacity tracking
-   Status toggle (Available / On Trip / In Shop)

## 4️⃣ Trip Dispatcher

-   Assign vehicle + driver
-   Cargo validation logic
-   Lifecycle: Draft → Dispatched → Completed

## 5️⃣ Maintenance Logs

-   Auto-switch vehicle to "In Shop"
-   Remove from dispatch pool

## 6️⃣ Fuel & Expense Logging

-   Liters
-   Cost
-   Date
-   Cost per vehicle tracking

## 7️⃣ Driver Management

-   License expiry tracking
-   Status (On Duty / Off Duty / Suspended)

## 8️⃣ Analytics

-   Fuel efficiency (km/L)
-   Total operational cost
-   Vehicle ROI calculation

------------------------------------------------------------------------

# 🔁 Workflow Example

1.  Add Vehicle (500kg capacity)
2.  Add Driver (valid license)
3.  Dispatch Trip (450kg)
4.  Validation: 450 \< 500 ✔
5.  Mark trip completed
6.  Log fuel
7.  System updates analytics automatically

------------------------------------------------------------------------

# 📊 Business Impact

FleetFlow enables:

-   100% prevention of overloaded dispatches
-   Compliance blocking for expired licenses
-   Real-time maintenance visibility
-   Transparent fuel tracking
-   ROI-driven fleet decision making

------------------------------------------------------------------------

# 🛠️ Installation & Local Setup

``` bash
npm install
npx ts-node scripts/init-db.ts
npm run dev
```

Open: http://localhost:3000

------------------------------------------------------------------------

# 🌐 Deployment

Recommended deployment platform: Vercel (Seamless Next.js hosting)

------------------------------------------------------------------------

# 🧠 Innovation & Differentiation

Unlike traditional fleet tools, FleetFlow:

-   Enforces operational rules before errors occur
-   Links financial metrics directly to asset lifecycle
-   Provides modular expansion capability
-   Combines compliance + dispatch + finance into one system

------------------------------------------------------------------------

# 👩‍💻 Team Members

1.  **Sakshi Giglani**
    LinkedIn: https://www.linkedin.com/in/sakshi-giglani/

2.  **Venisha P Champaneri**\
    LinkedIn: https://www.linkedin.com/in/venisha-p-champaneri-8618b83a2/

3.  **Khushi Patel**\
    LinkedIn: https://www.linkedin.com/in/khushi-patel-9a6583381/

4.  **Jesika Solanki**\
    LinkedIn: https://www.linkedin.com/in/jesika-solanki-5ab7843a2/

------------------------------------------------------------------------

# 🏁 Hackathon Submission Highlights

✔ Complete end-to-end working system\
✔ Clean modular architecture\
✔ Real-time validation logic\
✔ Scalable database structure\
✔ Production-ready frontend\
✔ Secure authentication

------------------------------------------------------------------------

# 📌 Future Enhancements

-   Predictive maintenance (AI-based)
-   Live fleet GPS integration
-   Real-time alerts system
-   Multi-organization support
-   Mobile dispatcher interface

------------------------------------------------------------------------

# 📄 License

This project is developed for hackathon demonstration purposes.

------------------------------------------------------------------------

# 🚛 FleetFlow

Building Smarter Logistics Through Intelligent Automation.
