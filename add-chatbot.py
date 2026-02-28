#!/usr/bin/env python3
"""
Add AI chatbot widget to all HTML files in the demo suite.
"""

import os
from pathlib import Path

def add_chatbot_to_file(filepath):
    """Add chatbot widget to an HTML file if it doesn't already exist."""
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
        
        # Check if chatbot already exists
        if 'fc-chatbot-widget' in content:
            print(f"✓ {filepath} - chatbot already present")
            return False
        
        # Read chatbot widget HTML
        with open('chatbot-widget.html', 'r', encoding='utf-8') as f:
            chatbot_html = f.read()
        
        # Add before </body> tag
        if '</body>' in content:
            content = content.replace('</body>', chatbot_html + '\n</body>')
            print(f"✓ {filepath} - added chatbot")
        else:
            print(f"✗ {filepath} - no </body> found")
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
    exclude_patterns = ['node_modules', '.git', 'chatbot-widget.html', 'compliance-badges.html']
    html_files = [
        f for f in html_files 
        if not any(pattern in str(f) for pattern in exclude_patterns)
    ]
    
    print(f"Found {len(html_files)} HTML files\n")
    
    modified = 0
    for filepath in sorted(html_files):
        if add_chatbot_to_file(filepath):
            modified += 1
    
    print(f"\n✅ Modified {modified} files")
    print(f"ℹ️  {len(html_files) - modified} files unchanged")

if __name__ == '__main__':
    main()
