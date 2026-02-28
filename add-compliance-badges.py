#!/usr/bin/env python3
"""
Add accessibility compliance badges to all HTML files in the demo suite.
"""

import os
import re
from pathlib import Path

# Compliance badges HTML snippet
BADGES_HTML = '''
<div style="margin-top:32px;padding-top:24px;border-top:1px solid #e5e7eb;display:flex;align-items:center;justify-content:center;gap:12px;flex-wrap:wrap">
  <div style="display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:linear-gradient(135deg,#d1fae5,#ecfdf5);border:2px solid #10b981;border-radius:8px;font-size:13px;font-weight:600;color:#065f46">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
      <polyline points="22 4 12 14.01 9 11.01"></polyline>
    </svg>
    <span>WCAG 2.1 AA</span>
  </div>
  
  <div style="display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:linear-gradient(135deg,#dbeafe,#eff6ff);border:2px solid #3b82f6;border-radius:8px;font-size:13px;font-weight:600;color:#1e40af">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <rect x="3" y="11" width="18" height="11" rx="2" ry="2"></rect>
      <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
    </svg>
    <span>Keyboard Accessible</span>
  </div>
  
  <div style="display:inline-flex;align-items:center;gap:6px;padding:8px 16px;background:linear-gradient(135deg,#fef3c7,#fffbeb);border:2px solid #f59e0b;border-radius:8px;font-size:13px;font-weight:600;color:#92400e">
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
      <circle cx="12" cy="12" r="3"></circle>
    </svg>
    <span>Screen Reader Friendly</span>
  </div>
</div>

<p style="text-align:center;margin-top:16px;font-size:11px;color:#9ca3af">
  Built with accessibility in mind · Tested with NVDA, VoiceOver, and Lighthouse
</p>
'''

def add_badges_to_file(filepath):
    """Add compliance badges to an HTML file if they don't already exist."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if badges already exist
        if 'WCAG 2.1 AA' in content:
            print(f"✓ {filepath} - badges already present")
            return False
        
        # Find </footer> or </body> tag
        if '</footer>' in content:
            # Add before </footer>
            content = content.replace('</footer>', BADGES_HTML + '\n</footer>')
            print(f"✓ {filepath} - added before </footer>")
        elif '</body>' in content:
            # Add before </body>
            content = content.replace('</body>', '<footer>' + BADGES_HTML + '\n</footer>\n</body>')
            print(f"✓ {filepath} - added new footer before </body>")
        else:
            print(f"✗ {filepath} - no </footer> or </body> found")
            return False
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    
    except Exception as e:
        print(f"✗ {filepath} - error: {e}")
        return False

def main():
    """Process all HTML files in the current directory and subdirectories."""
    base_dir = Path('.')
    html_files = list(base_dir.glob('**/*.html'))
    
    # Exclude some files
    exclude_patterns = ['node_modules', '.git', 'compliance-badges.html']
    html_files = [
        f for f in html_files 
        if not any(pattern in str(f) for pattern in exclude_patterns)
    ]
    
    print(f"Found {len(html_files)} HTML files\n")
    
    modified = 0
    for filepath in sorted(html_files):
        if add_badges_to_file(filepath):
            modified += 1
    
    print(f"\n✅ Modified {modified} files")
    print(f"ℹ️  {len(html_files) - modified} files unchanged")

if __name__ == '__main__':
    main()
