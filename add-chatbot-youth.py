#!/usr/bin/env python3
"""Add chatbot widget to youth programs page"""

with open('chatbot-widget.html', 'r') as f:
    chatbot = f.read()

with open('youth-programs/index.html', 'r') as f:
    content = f.read()

if 'fc-chatbot-widget' not in content:
    content = content.replace('</body>', chatbot + '\n</body>')
    
    with open('youth-programs/index.html', 'w') as f:
        f.write(content)
    
    print("✅ Added chatbot to youth-programs/index.html")
else:
    print("ℹ️ Chatbot already present")
