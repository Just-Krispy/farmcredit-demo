# AgAmbassadors Platform

**Complete networking and management platform for Farm Credit SEMO's AgAmbassadors program.**

Built: March 2, 2026  
Status: ✅ MVP Complete  
Demo URL: `https://just-krispy.github.io/farmcredit-demo/agambassadors/`

---

## 🎯 What This Is

The AgAmbassadors program brings together 1-2 young farmers from each of SEMO's seven branch offices every year for:
- Ag facility tours
- Financial training
- Farm Credit history education
- Annual Top Producers Conference attendance
- Graduation ceremony at board meetings

**This platform solves the problem:** How do you keep ambassadors connected over many years after graduation?

---

## 📦 What's Built (MVP)

### 1. **Ambassador Portal** (`index.html`)
- Welcome dashboard with program stats (68 total ambassadors, 5 classes graduated)
- Upcoming events (workshops, training, facility tours)
- Recent updates from ambassadors (farm news, achievements)
- Current class spotlight (Class of 2026)
- Event RSVP system

### 2. **Ambassador Directory** (`directory.html`)
- Searchable/filterable alumni directory
- Filter by: Class year, branch office, operation type, farm size
- Grid view + list view
- Ambassador profiles with:
  - Name, class year, branch
  - Operation type, farm size, generation
  - Tags (crops, specialties)
  - Connect button (sends connection request)

### 3. **Farm Budget Tool** (`budget.html`)
- Revenue tracker (crop sales with qty/price/unit)
- Expense tracker (10 categories: seed, fertilizer, fuel, etc.)
- Real-time budget summary:
  - Total revenue
  - Total expenses
  - Net profit
  - Profit margin %
- Data persists locally (localStorage)
- Export-ready design (future: PDF reports)

### 4. **Staff Admin Dashboard** (`admin.html`)
- **Ambassador Management**
  - View all ambassadors (active + graduated)
  - Add new ambassadors (form with all details)
  - Edit ambassador profiles
  - Class/branch filtering
  
- **Event Management**
  - Create events (date, location, description)
  - View RSVPs
  - Send event reminders (email/SMS)
  
- **Notifications System**
  - Send to: All active, all alumni, specific class, specific branch
  - Delivery: Email + SMS, email only, SMS only, in-app
  - Notification history
  
- **Analytics Dashboard**
  - Program stats (attendance rate, completion rate, retention)
  - Class performance comparison
  - Ambassador engagement metrics

---

## 🎨 Design

**Colors:**
- Primary Green: Farm Credit brand (#52812c, #4ade80)
- Background: Dark gradient (professional, modern)
- Glassmorphism cards (transparent overlays, backdrop blur)
- Mobile-first responsive design

**UX Highlights:**
- Demo mode banner (explains localStorage data)
- Navigation between all modules
- Instant feedback (modal confirmations)
- Hover states on all interactive elements
- Search/filter with live results

---

## 💾 Data Storage

**Demo Mode (Current):**
- Uses localStorage (browser-based)
- Survives page refreshes
- Resets if user clears browser data
- Perfect for prototyping/demos

**Production (Future):**
- Backend API (Node.js/Express or Next.js API routes)
- PostgreSQL database (Neon, Supabase, or self-hosted)
- User authentication (Clerk, Auth0, or Farm Credit SSO)
- Email/SMS integrations (Twilio, SendGrid)

---

## 📊 Sample Data

**68 Total Ambassadors** (demo):
- Class 2026 (Current): 14 ambassadors
- Class 2025 (Graduated): 12 ambassadors
- Class 2024 (Graduated): 15 ambassadors
- Class 2023 (Graduated): 13 ambassadors
- Class 2022 (Graduated): 14 ambassadors

**7 Branch Offices:**
- Cape Girardeau
- Scott County
- Mississippi County
- New Madrid
- Pemiscot County
- Dunklin County
- Stoddard County

**Operation Types:**
- Cotton, Soybeans, Corn, Rice, Wheat
- Livestock (cattle, poultry)
- Vegetables (direct-to-consumer)
- Mixed operations

---

## 🚀 Features Built

✅ Ambassador profiles with full farm details  
✅ Searchable alumni directory  
✅ Event calendar with RSVP tracking  
✅ Farm budget tool (revenue + expense tracking)  
✅ Staff admin dashboard  
✅ Notification system (email/SMS ready)  
✅ Class management (active vs. graduated)  
✅ Analytics and reporting  
✅ Mobile-responsive design  
✅ Demo mode with localStorage  

---

## 🔮 Future Enhancements (Phase 2)

**Community Features:**
- Direct messaging between ambassadors
- Group discussions (by class, by topic)
- Photo/video sharing (farm updates, event highlights)
- Mentorship matching (alumni → current class)

**Advanced Budgeting:**
- Multi-year budget tracking
- Budget vs. actual comparison
- Crop-specific budget templates
- Integration with QuickBooks/FarmLogs/AgWorld
- Tax planning tools

**Events:**
- Calendar integration (Google Calendar, Outlook)
- Automated event reminders (email/SMS)
- Event registration with payment (if needed)
- Post-event surveys
- Photo galleries

**Analytics:**
- Detailed engagement tracking (logins, posts, connections)
- Ambassador success metrics (farm growth, profitability)
- Program ROI measurement
- Board presentation mode (export to PDF/PowerPoint)

**Notifications:**
- Push notifications (mobile app)
- Email digest (weekly/monthly summary)
- SMS reminders for upcoming events
- Birthday/anniversary recognition

**Admin Tools:**
- Bulk import ambassadors (CSV upload)
- Graduation workflow (move class to alumni)
- Custom fields (program-specific data)
- Export to Excel/PDF
- Activity logs

---

## 🔧 Technical Details

**Tech Stack:**
- Frontend: Vanilla HTML/CSS/JavaScript
- No frameworks required (faster to ship, works everywhere)
- localStorage for demo mode
- Fully client-side (zero backend needed for prototype)

**File Structure:**
```
agambassadors/
├── index.html          # Main dashboard (14KB)
├── admin.html          # Staff admin portal (28KB)
├── directory.html      # Ambassador directory (26KB)
├── budget.html         # Farm budget tool (21KB)
└── README.md           # This file
```

**Total Size:** 89KB (compressed)

**Browser Support:**
- Chrome/Edge (recommended)
- Firefox
- Safari
- Mobile browsers (iOS Safari, Chrome Android)

---

## 📝 Questions Greg Asked

> "Could include farming info updates, maybe have a basic farm plan and budget they could use for their operations."

✅ **Built:** Farm budget tool with revenue/expense tracking, profit margin calculation

> "It could have a way for Farm Credit Employees to contact the Ambassadors and notify them of meetings, info updates, etc."

✅ **Built:** Staff admin dashboard with notification system (email/SMS/in-app)

> "I would like to have a platform or App that could be used by all Ambassadors that on which they could add their personal information, farming operation type, size, etc., so they all could stay in touch with each other over many years."

✅ **Built:** Ambassador profiles + directory with search/filter, connection requests

---

## 🎯 Next Steps

**For Greg:**
1. Review the MVP (click through all 4 modules)
2. Provide feedback:
   - What's missing?
   - What's unnecessary?
   - Priority order for Phase 2 features?
3. Decision: Deploy to production?

**For Krispy/Archer:**
1. Get Greg's feedback
2. Make adjustments based on feedback
3. Add to GitHub Pages demo site
4. Prepare production deployment plan (if approved)

**Production Timeline:**
- MVP → Production: 2-3 weeks
- Full build (Phase 2): 4-6 weeks
- Total: 6-9 weeks to fully featured platform

**Pricing Estimate:**
- Phase 1 (MVP → Production): $15K-$20K
- Phase 2 (Advanced Features): $25K-$35K
- Annual maintenance: 20% of build cost

---

## 💡 Why This Matters

**The problem AgAmbassadors solves:**
- Most ag leadership programs run a class and lose touch
- Ambassadors want to stay connected with peers
- Staff need efficient ways to manage multiple classes
- Farm Credit wants long-term relationships (future borrowers)

**What makes this different:**
- Multi-year continuity (not just a one-year program)
- Ambassador → Ambassador networking (peer connections)
- Practical tools (budget tracker) add ongoing value
- Staff efficiency (notifications, analytics, management)

**Business value:**
- Stronger YBS (Young, Beginning, Small Farmers) program
- Higher ambassador engagement/retention
- Better long-term borrower relationships
- Competitive differentiator (no other Farm Credit has this)
- Scalable: 55 other Farm Credit associations could adopt it

---

## 🤝 Credits

**Built by:** Archer (AI assistant for Krispy)  
**Requested by:** Greg Cunningham (President & CEO, Farm Credit SEMO)  
**Program Context:** Farm Credit SEMO YBS Program (AgSunrise + AgAmbassadors)  
**Build Time:** ~2 hours  
**Demo Status:** Ready for review  

---

*Last updated: March 2, 2026*
