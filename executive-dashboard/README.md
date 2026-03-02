# Executive Dashboard — Farm Credit SEMO

**Greg's Personal Command Center**

Built: March 2, 2026  
Status: Prototype (customizable based on Greg's feedback)  
Demo URL: `https://just-krispy.github.io/farmcredit-demo/executive-dashboard/`

---

## 🎯 Purpose

**Give Greg everything he needs to know in 5 minutes** every morning.

No tab-switching. No email digging. No waiting for reports. Just open one URL and know:
- Portfolio health
- Market conditions (commodities, rates)
- Weather outlook (affects borrower operations)
- Today's schedule
- What needs his attention

---

## ✨ Current Features (Prototype)

**Key Metrics (Top):**
- Loan portfolio volume ($485M)
- Delinquency rate (2.1%)
- New applications this week (14)
- YBS progress (34% / 40% target)

**Commodity Prices:**
- Corn, soybeans, cotton, wheat
- Live prices (would be real-time in production)
- Daily change + impact summary

**Weather Intel:**
- SEMO region forecast
- Planting window status
- Soil moisture

**Interest Rates:**
- Fed Funds, Prime, 10-Year Treasury
- Impact on loan pricing

**Calendar:**
- Today's schedule
- Meeting titles + descriptions

**Action Items:**
- Things needing Greg's approval
- Checkboxes (mark as done)
- Deadlines

**Ag News:**
- Auto-curated headlines
- Click to read full article

**Dark Mode:**
- Toggle in top-right
- Persists across sessions

---

## 🔮 Planned Features (Based on Greg's Input)

**Data Integration:**
- Live commodity prices (CME Group API)
- Real weather data (NOAA API)
- Actual calendar sync (Google/Outlook)
- Email summary (flagged/important)
- Portfolio data (from loan system)

**Alerts:**
- Delinquency threshold warnings
- Commodity price swings
- Weather alerts (frost, flood)
- Action items due today

**AI Insights:**
- "Cotton up 2.8% — your Scott County borrowers are happy today"
- "Delinquency improved — nice trend this quarter"
- "Weather looks good for planting — expect more loan draws"

**Customization:**
- Drag-and-drop widgets
- Add/remove sections
- Seasonal layouts (planting vs. harvest)

**Export:**
- Board presentation mode (PDF)
- Email digest (daily summary)
- Screenshot for sharing

---

## 📊 What Makes This Different

**Other dashboards:**
- Generic (designed for everyone)
- Data overload (100 metrics, 90 irrelevant)
- Ugly (enterprise software from 2005)
- Slow (3 different systems, 10 logins)

**This dashboard:**
- Built for ONE person (Greg)
- Shows ONLY what matters to him
- Beautiful (Apple-inspired, Farm Credit branded)
- Fast (one URL, zero logins in demo mode)

---

## 🛠️ Technical Specs

**Current (Prototype):**
- Pure HTML/CSS/JavaScript
- Sample data (static)
- localStorage for dark mode
- No backend required

**Production (If We Build It):**
- Next.js (React framework)
- Live APIs (commodities, weather, news)
- Database (store preferences, action items)
- Auth (password-protected)
- Hosting (Vercel, $20-$50/mo)

**Build Time:**
- Prototype: 2 hours (done!)
- Production MVP: 1 week
- Full features: 3-4 weeks

**Cost:**
- Build: $3K-$5K (one-time)
- Hosting: $20-$50/month
- APIs: Free tier works (or $50-$100/mo for premium data)
- Maintenance: ~2 hours/month

---

## 📝 Customization Questions for Greg

See `QUESTIONS-FOR-GREG.md` for full list.

**Key questions:**
1. What metrics do you check EVERY morning?
2. Mobile or desktop?
3. Email digest or dashboard only?
4. Which commodities matter most?
5. What's the "killer feature" that makes this indispensable?

---

## 🎨 Design Notes

**Branding:**
- Farm Credit green (#52812c, #345220, #8bc34a)
- Inter font (Apple aesthetic)
- Light background, white cards
- Subtle shadows (depth without darkness)

**Dark Mode:**
- Full theme (cards, tables, sections)
- Respects system preference
- Persists via localStorage

**Mobile-Responsive:**
- 2-column grid on desktop
- Single column on mobile
- Touch-friendly (44px min targets)

**Apple-Inspired:**
- Clean, minimal
- Breathing room (generous padding)
- Smooth animations
- No clutter

---

## 🚀 Next Steps

**Waiting on Greg:**
1. Review prototype
2. Answer customization questions
3. Decide: build full version or iterate prototype?

**If Greg says "build it":**
1. Week 1: Connect live APIs (commodities, weather)
2. Week 2: Calendar + email integration
3. Week 3: Portfolio data (if accessible)
4. Week 4: Polish + deploy

**If Greg says "not now":**
- Keep prototype available for future
- Focus on AgAmbassadors first
- Come back to this later

---

## 💡 Future Expansion Ideas

**Phase 2 Features:**
- Voice briefing ("Alexa, give me my Farm Credit briefing")
- Mobile app (native iOS/Android)
- Board presentation mode (auto-generate slides)
- Predictive analytics (which borrowers might struggle)
- Opportunity alerts (land sales, equipment deals)

**Multi-User:**
- CFO dashboard (financial metrics)
- VP Lending dashboard (pipeline, conversions)
- Staff dashboard (task list, borrower updates)

**White-Label:**
- Sell to other Farm Credit associations
- "$5K setup + $200/mo" per association
- 55 associations = $132K annual recurring revenue

---

## 📞 Contact

**Questions for Greg?**
- Discord: Tag @Archer in #g
- Or respond to QUESTIONS-FOR-GREG.md

**Ready to build?**
- Say "let's do it"
- We'll start this week

---

**Built with care by Archer** 🦞  
For: Greg Cunningham, President & CEO, Farm Credit SEMO  
Date: March 2, 2026
