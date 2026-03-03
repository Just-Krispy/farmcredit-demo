# Dark Mode Persistence - Implementation Status

**Goal:** Dark mode toggle on home page only, selection persists across all pages

---

## ✅ COMPLETED:

### 1. intelligence.html
- ✅ Dark mode CSS added
- ✅ localStorage check script added
- ✅ No toggle button (inherits from home page setting)
- **Status:** READY TO TEST

---

## 🔄 REMAINING (19 pages):

### Member Tools:
1. patronage/index.html
2. cashflow/index.html
3. health-score.html
4. agsunrise/index.html
5. agsunrise/status.html

### AgSunrise Platform:
6. agsunrise-platform/index.html
7. agsunrise-platform/dashboard/index.html
8. agsunrise-platform/education/index.html
9. agsunrise-platform/mentorship/index.html

### Staff Tools:
10. agsunrise/admin.html
11. reminders/index.html
12. intelligence-dashboard/index.html

### Sales Resources:
13. roi/index.html
14. compare/index.html
15. phase2/index.html
16. proposal/index.html
17. proposal/email.html

### Communications:
18. emails/index.html

### New:
19. youth-programs/index.html

---

## 📋 NEXT STEPS:

**Option A: Batch Update (FAST)**
Run `bash apply-dark-mode.sh` to update all 19 remaining pages in <1 second

**Option B: Manual Update (SAFE)**
Update each page individually using Edit commands (takes 30-40 minutes)

---

## 🧪 TEST PLAN:

1. Open `index.html` in browser
2. Click dark mode toggle (moon icon, top-right)
3. Verify page turns dark ✅
4. Click "Farm Intelligence Dashboard" card
5. Verify Intelligence page loads dark ✅
6. Navigate to other pages
7. Verify all pages auto-apply dark mode ✅
8. Go back to home, toggle dark mode OFF
9. Navigate to other pages
10. Verify all pages return to light mode ✅

---

## 📦 WHAT GETS ADDED:

Each page gets ~20 lines added before `</head>`:

```html
<!-- DARK MODE PERSISTENCE -->
<style>
body.dark-mode{background:#0f1419;color:#e4e6eb}
/* ...15 more lines of CSS... */
</style>
<script>
(function(){const d=localStorage.getItem('fc-dark-mode');if(d==='true')document.body.classList.add('dark-mode')})();
</script>
```

**Size impact:** ~600 bytes per page (negligible)

---

## ✅ READY TO DEPLOY

Krispy - approve running `bash apply-dark-mode.sh` to update all 19 remaining pages?
