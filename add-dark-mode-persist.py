#!/usr/bin/env python3
"""
Add dark mode persistence to all HTML pages (except index.html which has the toggle).
"""

import os
from pathlib import Path

def add_dark_mode_to_file(filepath):
    """Add dark mode persistence snippet to an HTML file."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Skip if already has dark mode persistence
        if 'fc-dark-mode' in content and 'dark-mode-persist' not in content:
            print(f"✓ {filepath} - already has dark mode")
            return False
        
        if 'DARK MODE PERSISTENCE SNIPPET' in content:
            print(f"✓ {filepath} - already updated")
            return False
        
        # Read dark mode snippet
        with open('dark-mode-persist.html', 'r', encoding='utf-8') as f:
            dark_mode_snippet = f.read()
        
        # Add before </head> tag
        if '</head>' in content:
            content = content.replace('</head>', dark_mode_snippet + '\n</head>')
            print(f"✓ {filepath} - added dark mode persistence")
        else:
            print(f"✗ {filepath} - no </head> found")
            return False
        
        with open(filepath, 'w', encoding='utf-8') as f:
            f.write(content)
        
        return True
    
    except Exception as e:
        print(f"✗ {filepath} - error: {e}")
        return False

def main():
    """Process all HTML files except index.html."""
    base_dir = Path('.')
    html_files = list(base_dir.glob('**/*.html'))
    
    # Exclude files
    exclude_patterns = [
        'node_modules', 
        '.git', 
        'index.html',  # Skip home page (already has toggle)
        'dark-mode-persist.html',
        'chatbot-widget.html',
        'compliance-badges.html'
    ]
    
    html_files = [
        f for f in html_files 
        if not any(pattern in str(f) for pattern in exclude_patterns)
    ]
    
    # But keep youth-programs/index.html and other subdir index.html files
    html_files = [f for f in html_files if str(f) != 'index.html']
    
    print(f"Found {len(html_files)} HTML files to update\n")
    
    modified = 0
    for filepath in sorted(html_files):
        if add_dark_mode_to_file(filepath):
            modified += 1
    
    print(f"\n✅ Modified {modified} files")
    print(f"ℹ️  {len(html_files) - modified} files unchanged")
    print(f"\n💡 Dark mode toggle stays on home page only")
    print(f"💡 All pages now check localStorage and apply dark mode automatically")

if __name__ == '__main__':
    main()
