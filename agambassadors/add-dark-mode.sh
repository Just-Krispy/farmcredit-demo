#!/bin/bash
# Quick script to add dark mode to remaining AgAmbassadors modules

DARK_MODE_STYLES='
    /* Dark Mode */
    body.dark-mode{background:#0f1419;color:#e4e6eb}
    body.dark-mode header{background:linear-gradient(135deg,#1a2b1a 0%,#2d4a2d 60%,#3a5a3a 100%)}
    body.dark-mode nav{background:#1a1f2e;border-bottom-color:#2d3748}
    body.dark-mode .logo{color:#8bc34a}
    body.dark-mode .nav-links a{color:#9ca3af}
    body.dark-mode .nav-links a:hover{color:#8bc34a}
    body.dark-mode .stat-card,body.dark-mode .section,body.dark-mode .card,body.dark-mode .search-filter-section,body.dark-mode .ambassador-card,body.dark-mode .list-item,body.dark-mode .modal-content{background:#1a1f2e;border-color:#2d3748;box-shadow:0 2px 8px rgba(0,0,0,.4)}
    body.dark-mode .stat-value{color:#8bc34a}
    body.dark-mode .stat-label,body.dark-mode .card-meta,body.dark-mode .card-details,body.dark-mode .detail-label,body.dark-mode .search-result-desc,body.dark-mode .results-count{color:#9ca3af}
    body.dark-mode h1,body.dark-mode h2,body.dark-mode h3,body.dark-mode .card-info h3,body.dark-mode .detail-value,body.dark-mode .search-result-title{color:#e4e6eb}
    body.dark-mode .section-header,body.dark-mode th{border-bottom-color:#2d3748}
    body.dark-mode td{border-bottom-color:#2d3748}
    body.dark-mode tr:hover{background:rgba(255,255,255,.02)}
    body.dark-mode .tag,.badge{background:rgba(139,195,74,.2);color:#8bc34a}
    body.dark-mode .btn-secondary,.view-btn{background:#2d3748;color:#e4e6eb;border-color:#3f4a5f}
    body.dark-mode .btn-secondary:hover,.view-btn:hover{background:#3f4a5f}
    body.dark-mode input,body.dark-mode select,body.dark-mode textarea{background:#2d3748;color:#e4e6eb;border-color:#3f4a5f}
    body.dark-mode #dark-mode-toggle{background:rgba(0,0,0,0.3);border-color:rgba(255,255,255,0.2)}'

DARK_MODE_BUTTON='
    <!-- Dark Mode Toggle -->
    <button id="dark-mode-toggle" aria-label="Toggle dark mode" style="position:absolute;top:20px;right:20px;background:rgba(255,255,255,0.15);border:2px solid rgba(255,255,255,0.3);color:white;width:40px;height:40px;border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.3s;backdrop-filter:blur(10px);z-index:100">
      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
      </svg>
    </button>'

DARK_MODE_JS='
    // Dark Mode Toggle
    const darkModeToggle = document.getElementById("dark-mode-toggle");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const savedMode = localStorage.getItem("fc-dark-mode");
    
    if (savedMode === "true" || (!savedMode && prefersDark)) {
      document.body.classList.add("dark-mode");
      updateDarkModeIcon(true);
    }
    
    if (darkModeToggle) {
      darkModeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");
        localStorage.setItem("fc-dark-mode", isDark);
        updateDarkModeIcon(isDark);
      });
    }
    
    function updateDarkModeIcon(isDark) {
      const icon = darkModeToggle.querySelector("svg path");
      if (isDark) {
        icon.setAttribute("d", "M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z");
      } else {
        icon.setAttribute("d", "M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z");
      }
    }'

echo "Adding dark mode to AgAmbassadors modules..."
echo ""

for file in directory.html admin.html budget.html; do
    if [ ! -f "$file" ]; then
        echo "⏭️  Skipping $file (not found)"
        continue
    fi
    
    echo "Processing $file..."
    
    # Backup
    cp "$file" "$file.backup"
    
    # Add dark mode styles before </style>
    if ! grep -q "Dark Mode" "$file"; then
        sed -i.tmp "/<\/style>/i\\$DARK_MODE_STYLES" "$file"
        echo "  ✅ Dark mode styles added"
    else
        echo "  ⏭️  Dark mode styles already present"
    fi
    
    # Add dark mode button after <header> opening
    if ! grep -q "dark-mode-toggle" "$file"; then
        # This is tricky with sed, so using a Python one-liner instead
        python3 << 'PYTHON'
import sys
with open("'$file'", 'r') as f:
    content = f.read()
# Insert button before </header>
content = content.replace('</header>', '''$DARK_MODE_BUTTON
  </header>''')
with open("'$file'", 'w') as f:
    f.write(content)
PYTHON
        echo "  ✅ Dark mode toggle button added"
    else
        echo "  ⏭️  Dark mode toggle already present"
    fi
    
    # Add dark mode JavaScript before </script>
    if ! grep -q "updateDarkModeIcon" "$file"; then
        sed -i.tmp "/<script>/a\\$DARK_MODE_JS\\n" "$file"
        echo "  ✅ Dark mode JavaScript added"
    else
        echo "  ⏭️  Dark mode JavaScript already present"
    fi
    
    # Clean up temp files
    rm -f "$file.tmp"
    
    echo "  ✅ $file complete"
    echo ""
done

echo "========================================="
echo "Dark mode added to all modules!"
echo "========================================="
echo ""
echo "Backups saved with .backup extension"
echo "Test by opening each file in a browser"
echo ""
