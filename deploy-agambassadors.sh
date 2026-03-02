#!/bin/bash
#
# Deploy AgAmbassadors to GitHub Pages
#

set -e

cd ~/.openclaw/workspace/farmcredit-demo

echo "Adding new files..."
git add agambassadors/
git add index.html
git add AGAMBASSADORS-SUMMARY.md

echo ""
echo "Committing..."
git commit -m "Add AgAmbassadors platform - complete networking & budget tool for YBS program"

echo ""
echo "Pushing to GitHub..."
git push origin main

echo ""
echo "========================================="
echo "✅ DEPLOYMENT COMPLETE"
echo "========================================="
echo ""
echo "Live URLs:"
echo ""
echo "Main demo suite:"
echo "https://just-krispy.github.io/farmcredit-demo/"
echo ""
echo "AgAmbassadors platform:"
echo "https://just-krispy.github.io/farmcredit-demo/agambassadors/"
echo ""
echo "Share this with Greg (works on mobile):"
echo "https://just-krispy.github.io/farmcredit-demo/agambassadors/"
echo ""
