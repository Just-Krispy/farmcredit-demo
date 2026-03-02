// MAX ENHANCEMENTS - Farm Credit Demo Suite
// Features: Animated Stats, Dark Mode, Quick Search, Keyboard Shortcuts

(function() {
  'use strict';
  
  // ========== ANIMATED COUNTER ==========
  function animateCounter(element) {
    const target = parseFloat(element.getAttribute('data-target'));
    const prefix = element.getAttribute('data-prefix') || '';
    const suffix = element.getAttribute('data-suffix') || '';
    const duration = 2000; // 2 seconds
    const startTime = Date.now();
    
    function update() {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function (ease-out)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const current = Math.floor(target * easeOut);
      
      // Format number
      let displayValue = current.toLocaleString();
      
      // Special formatting
      if (suffix === 'M' || suffix === 'K') {
        const divisor = suffix === 'M' ? 1000000 : 1000;
        displayValue = (current / divisor).toFixed(1);
      }
      
      element.textContent = prefix + displayValue + suffix;
      
      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }
    
    update();
  }
  
  // Animate all counters on page load
  document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.stat-item .val[data-target]');
    setTimeout(() => {
      counters.forEach(animateCounter);
    }, 300); // Delay for page fade-in
  });
  
  // ========== DARK MODE ==========
  const darkModeToggle = document.getElementById('dark-mode-toggle');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const savedMode = localStorage.getItem('fc-dark-mode');
  
  // Initialize dark mode
  if (savedMode === 'true' || (!savedMode && prefersDark)) {
    document.body.classList.add('dark-mode');
  }
  
  if (darkModeToggle) {
    darkModeToggle.addEventListener('click', () => {
      document.body.classList.toggle('dark-mode');
      const isDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('fc-dark-mode', isDark);
      
      // Update icon
      const icon = darkModeToggle.querySelector('svg path');
      if (isDark) {
        icon.setAttribute('d', 'M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z');
      } else {
        icon.setAttribute('d', 'M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z');
      }
    });
  }
  
  // ========== QUICK SEARCH ==========
  const demos = [
    { title: 'Farm Intelligence Dashboard', url: 'intelligence.html', desc: 'AI-powered portfolio risk management' },
    { title: 'Patronage Dividend Tracker', url: 'patronage/index.html', desc: 'Real-time dividend estimates' },
    { title: 'AgSunrise Digital Application', url: 'agsunrise/index.html', desc: 'Young & beginning farmer program' },
    { title: 'AgSunrise Platform', url: 'agsunrise-platform/index.html', desc: 'Complete young farmer platform' },
    { title: 'Cash Flow Simulator', url: 'cashflow/index.html', desc: 'Interactive financial modeling' },
    { title: 'Payment Reminder System', url: 'reminders/index.html', desc: 'Automated SMS & email reminders' },
    { title: 'Application Status Tracker', url: 'agsunrise/status.html', desc: 'Check application status' },
    { title: 'AgSunrise Staff Admin', url: 'agsunrise/admin.html', desc: 'Review applications' },
    { title: 'Farm Financial Health Score', url: 'health-score.html', desc: '0-100 financial health score' },
    { title: 'Branded Email Templates', url: 'emails/index.html', desc: '5 auto-sent email examples' },
    { title: 'ROI Calculator', url: 'roi/index.html', desc: 'Calculate exact ROI' },
    { title: 'Platform Comparison', url: 'compare/index.html', desc: 'vs. AgLender, FCS Financial' },
    { title: 'Phase 2 Roadmap', url: 'phase2/index.html', desc: 'Future expansion features' },
    { title: 'Full Proposal', url: 'proposal/index.html', desc: 'Complete pricing & timeline' }
  ];
  
  // Create search modal
  const searchModal = document.createElement('div');
  searchModal.id = 'quick-search-modal';
  searchModal.setAttribute('role', 'dialog');
  searchModal.setAttribute('aria-label', 'Quick search');
  searchModal.innerHTML = `
    <div id="quick-search-content">
      <input 
        type="text" 
        id="quick-search-input" 
        placeholder="Search demos... (try 'patronage' or 'AI')" 
        aria-label="Search demos"
        autocomplete="off"
      />
      <div id="quick-search-results"></div>
    </div>
  `;
  document.body.appendChild(searchModal);
  
  const searchInput = document.getElementById('quick-search-input');
  const searchResults = document.getElementById('quick-search-results');
  let selectedIndex = -1;
  
  function showSearch() {
    searchModal.classList.add('active');
    searchInput.value = '';
    searchInput.focus();
    showAllResults();
  }
  
  function hideSearch() {
    searchModal.classList.remove('active');
    selectedIndex = -1;
  }
  
  function showAllResults() {
    searchResults.innerHTML = demos.map((demo, idx) => `
      <div class="search-result" data-url="${demo.url}" data-index="${idx}">
        <div class="search-result-title">${demo.title}</div>
        <div class="search-result-desc">${demo.desc}</div>
      </div>
    `).join('');
    
    attachResultClickHandlers();
  }
  
  function search(query) {
    if (!query) {
      showAllResults();
      return;
    }
    
    const filtered = demos.filter(demo => 
      demo.title.toLowerCase().includes(query.toLowerCase()) ||
      demo.desc.toLowerCase().includes(query.toLowerCase())
    );
    
    searchResults.innerHTML = filtered.length > 0 
      ? filtered.map((demo, idx) => `
          <div class="search-result" data-url="${demo.url}" data-index="${idx}">
            <div class="search-result-title">${demo.title}</div>
            <div class="search-result-desc">${demo.desc}</div>
          </div>
        `).join('')
      : '<div style="padding:20px;text-align:center;color:#999">No results found</div>';
    
    attachResultClickHandlers();
  }
  
  function attachResultClickHandlers() {
    document.querySelectorAll('.search-result').forEach(result => {
      result.addEventListener('click', () => {
        window.location.href = result.getAttribute('data-url');
      });
    });
  }
  
  // Search input
  if (searchInput) {
    searchInput.addEventListener('input', (e) => {
      search(e.target.value);
      selectedIndex = -1;
    });
    
    searchInput.addEventListener('keydown', (e) => {
      const results = searchResults.querySelectorAll('.search-result');
      
      if (e.key === 'ArrowDown') {
        e.preventDefault();
        selectedIndex = Math.min(selectedIndex + 1, results.length - 1);
        updateSelection(results);
      } else if (e.key === 'ArrowUp') {
        e.preventDefault();
        selectedIndex = Math.max(selectedIndex - 1, -1);
        updateSelection(results);
      } else if (e.key === 'Enter' && selectedIndex >= 0) {
        e.preventDefault();
        results[selectedIndex].click();
      }
    });
  }
  
  function updateSelection(results) {
    results.forEach((result, idx) => {
      if (idx === selectedIndex) {
        result.style.background = document.body.classList.contains('dark-mode') ? '#2d3748' : '#f3f4f6';
        result.scrollIntoView({ block: 'nearest' });
      } else {
        result.style.background = '';
      }
    });
  }
  
  // Close search on outside click or Escape
  searchModal.addEventListener('click', (e) => {
    if (e.target === searchModal) hideSearch();
  });
  
  // ========== KEYBOARD SHORTCUTS ==========
  document.addEventListener('keydown', (e) => {
    // Cmd/Ctrl + K = Quick Search
    if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
      e.preventDefault();
      showSearch();
    }
    
    // Escape = Close search
    if (e.key === 'Escape' && searchModal.classList.contains('active')) {
      hideSearch();
    }
    
    // Cmd/Ctrl + D = Toggle dark mode
    if ((e.metaKey || e.ctrlKey) && e.key === 'd') {
      e.preventDefault();
      if (darkModeToggle) darkModeToggle.click();
    }
  });
  
  // Show keyboard hint on page load (fades out after 3 seconds)
  const showKeyboardHint = () => {
    const hint = document.createElement('div');
    hint.style.cssText = 'position:fixed;bottom:100px;left:50%;transform:translateX(-50%);background:rgba(0,0,0,0.8);color:white;padding:12px 20px;border-radius:8px;font-size:14px;z-index:9997;animation:fadeInOut 3s ease-in-out forwards;pointer-events:none';
    hint.innerHTML = 'Press <kbd style="background:rgba(255,255,255,0.2);padding:2px 6px;border-radius:4px;font-family:monospace">⌘K</kbd> to search';
    document.body.appendChild(hint);
    
    setTimeout(() => hint.remove(), 3000);
  };
  
  // Add fadeInOut animation
  const style = document.createElement('style');
  style.textContent = `
    @keyframes fadeInOut {
      0%, 100% { opacity: 0; transform: translateX(-50%) translateY(10px); }
      10%, 90% { opacity: 1; transform: translateX(-50%) translateY(0); }
    }
  `;
  document.head.appendChild(style);
  
  // Show hint after 2 seconds
  setTimeout(showKeyboardHint, 2000);
  
})();
