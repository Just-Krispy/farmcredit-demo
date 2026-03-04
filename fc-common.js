/* ============================================
   Farm Credit — Shared Dark Mode Toggle + AgBot
   Include on ALL pages: <script src="/fc-common.js"></script>
   ============================================ */

(function() {
  'use strict';

  // ── Dark Mode Toggle ──────────────────────────

  // Apply saved preference immediately (before DOM ready)
  var savedMode = localStorage.getItem('fc-dark-mode');
  var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (savedMode === 'true' || (!savedMode && prefersDark)) {
    document.documentElement.classList.add('dark-mode');
    document.body && document.body.classList.add('dark-mode');
  }

  function initDarkMode() {
    // Apply to body (documentElement may have been set above before body existed)
    if (savedMode === 'true' || (!savedMode && prefersDark)) {
      document.body.classList.add('dark-mode');
    }

    // Skip if page already has its own toggle
    if (document.getElementById('dark-mode-toggle') || document.getElementById('fc-dark-toggle')) return;

    var isDark = document.body.classList.contains('dark-mode');

    // Create toggle button
    var btn = document.createElement('button');
    btn.id = 'fc-dark-toggle';
    btn.setAttribute('aria-label', 'Toggle dark mode');
    btn.textContent = isDark ? '\u2600\uFE0F' : '\uD83C\uDF19';
    document.body.appendChild(btn);

    btn.addEventListener('click', function() {
      document.body.classList.toggle('dark-mode');
      var nowDark = document.body.classList.contains('dark-mode');
      localStorage.setItem('fc-dark-mode', nowDark);
      btn.textContent = nowDark ? '\u2600\uFE0F' : '\uD83C\uDF19';
    });
  }

  // ── AgBot Chatbot Widget ──────────────────────

  function initAgBot() {
    // Skip if page already has its own chatbot
    if (document.getElementById('fc-chat-button')) return;

    // Chatbot HTML
    var chatHTML = ''
      + '<button id="fc-chat-button" aria-label="Open Farm Credit AI Assistant">'
      +   '<svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">'
      +     '<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>'
      +   '</svg>'
      + '</button>'
      + '<div id="fc-chat-modal" role="dialog" aria-labelledby="fc-chat-title" aria-modal="true">'
      +   '<div style="background:linear-gradient(135deg,#345220,#52812c);color:white;padding:16px 20px;display:flex;align-items:center;justify-content:space-between">'
      +     '<div style="display:flex;align-items:center;gap:12px">'
      +       '<div style="width:40px;height:40px;background:white;border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:20px">\uD83E\uDD16</div>'
      +       '<div>'
      +         '<div id="fc-chat-title" style="font-weight:700;font-size:16px">Farm Credit AI Assistant</div>'
      +         '<div style="font-size:12px;opacity:0.9">Online \u00B7 Ready to help</div>'
      +       '</div>'
      +     '</div>'
      +     '<button id="fc-chat-close" aria-label="Close chat" style="background:none;border:none;color:white;font-size:24px;cursor:pointer;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:background 0.2s">\u00D7</button>'
      +   '</div>'
      +   '<div id="fc-chat-messages">'
      +     '<div class="fc-chat-message-bot">'
      +       '<div style="background:white;padding:12px 16px;border-radius:12px 12px 12px 4px;box-shadow:0 1px 3px rgba(0,0,0,0.1)">'
      +         '<div style="font-size:14px;line-height:1.5">'
      +           '\uD83D\uDC4B Hi! I\'m your Farm Credit AI Assistant. I can help you with:<br><br>'
      +           '\u2022 <strong>Patronage</strong> - Check your dividend estimates<br>'
      +           '\u2022 <strong>Loans</strong> - Application status & requirements<br>'
      +           '\u2022 <strong>AgSunrise</strong> - Young farmer programs<br>'
      +           '\u2022 <strong>Account</strong> - General questions<br><br>'
      +           'What can I help you with today?'
      +         '</div>'
      +       '</div>'
      +       '<div style="font-size:11px;color:#9ca3af;margin-top:4px;padding-left:4px">Just now</div>'
      +     '</div>'
      +   '</div>'
      +   '<div style="padding:16px;background:white;border-top:1px solid #e5e7eb">'
      +     '<div style="display:flex;gap:8px">'
      +       '<input id="fc-chat-input" type="text" placeholder="Type your message..." aria-label="Chat message" style="flex:1;padding:12px 16px;border:1px solid #d1d5db;border-radius:8px;font-size:14px;outline:none;font-family:inherit" />'
      +       '<button id="fc-chat-send" aria-label="Send message" style="background:linear-gradient(135deg,#345220,#52812c);color:white;border:none;width:44px;height:44px;border-radius:8px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:opacity 0.2s">'
      +         '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>'
      +       '</button>'
      +     '</div>'
      +     '<div id="fc-quick-actions" style="display:flex;gap:8px;margin-top:12px;flex-wrap:wrap">'
      +       '<button class="fc-quick-btn" data-message="What is my patronage dividend?">\uD83D\uDCB0 Patronage</button>'
      +       '<button class="fc-quick-btn" data-message="Check my loan application status">\uD83D\uDCCB Loan Status</button>'
      +       '<button class="fc-quick-btn" data-message="Tell me about AgSunrise">\uD83C\uDF31 AgSunrise</button>'
      +       '<button class="fc-quick-btn" data-message="I need help with my account">\u2753 Help</button>'
      +     '</div>'
      +   '</div>'
      + '</div>';

    var container = document.createElement('div');
    container.innerHTML = chatHTML;
    while (container.firstChild) {
      document.body.appendChild(container.firstChild);
    }

    // Chat logic
    var chatOpen = false;
    var chatButton = document.getElementById('fc-chat-button');
    var chatModal = document.getElementById('fc-chat-modal');
    var chatClose = document.getElementById('fc-chat-close');
    var chatInput = document.getElementById('fc-chat-input');
    var chatSend = document.getElementById('fc-chat-send');
    var chatMessages = document.getElementById('fc-chat-messages');

    var responses = {
      patronage: 'Your estimated 2024 patronage dividend is <strong>$3,250</strong> based on your current loan balance. This is part of our record <strong>$9.1M distribution</strong>! \uD83D\uDCB0',
      loan: 'Your loan application <strong>#AG2024-0157</strong> is currently in <strong>Underwriting Review</strong>. Expected decision within 5-7 business days. \uD83D\uDCCB',
      agsunrise: '<strong>AgSunrise</strong> is our young & beginning farmer program! It includes:<br>\u2022 Reduced interest rates<br>\u2022 Flexible terms<br>\u2022 Mentorship matching<br>\u2022 Free financial education \uD83C\uDF31',
      help: 'I can help with:<br>\u2022 Account questions<br>\u2022 Payment schedules<br>\u2022 Document uploads<br>\u2022 Contact info updates<br><br>Or call us at <strong>(877) 730-7327</strong>. \u2753',
      default: 'Thanks for your question! For specific account details, please call us at <strong>(877) 730-7327</strong> or email <strong>support@farmcreditsemo.com</strong>. \uD83D\uDE0A'
    };

    function toggleChat() {
      chatOpen = !chatOpen;
      chatModal.style.display = chatOpen ? 'flex' : 'none';
      if (chatOpen) chatInput.focus();
    }

    function addMessage(text, isUser) {
      var div = document.createElement('div');
      div.className = isUser ? 'fc-chat-message-user' : 'fc-chat-message-bot';
      var time = new Date().toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' });
      if (isUser) {
        div.innerHTML = '<div>' + text + '</div><div style="font-size:11px;color:#9ca3af;margin-top:4px;padding-right:4px">' + time + '</div>';
      } else {
        div.innerHTML = '<div style="background:white;padding:12px 16px;border-radius:12px 12px 12px 4px;box-shadow:0 1px 3px rgba(0,0,0,0.1)"><div style="font-size:14px;line-height:1.5">' + text + '</div></div><div style="font-size:11px;color:#9ca3af;margin-top:4px;padding-left:4px">' + time + '</div>';
      }
      chatMessages.appendChild(div);
      chatMessages.scrollTop = chatMessages.scrollHeight;
    }

    function getResponse(msg) {
      msg = msg.toLowerCase();
      if (msg.match(/patronage|dividend|refund/)) return responses.patronage;
      if (msg.match(/loan|application|status/)) return responses.loan;
      if (msg.match(/agsunrise|young farmer|beginning/)) return responses.agsunrise;
      if (msg.match(/help|support|account/)) return responses.help;
      return responses.default;
    }

    function sendMessage() {
      var message = chatInput.value.trim();
      if (!message) return;
      addMessage(message, true);
      chatInput.value = '';
      // Typing indicator
      var typing = document.createElement('div');
      typing.className = 'fc-chat-message-bot';
      typing.id = 'fc-typing-indicator';
      typing.innerHTML = '<div class="fc-typing"><span></span><span></span><span></span></div>';
      chatMessages.appendChild(typing);
      chatMessages.scrollTop = chatMessages.scrollHeight;
      setTimeout(function() {
        var t = document.getElementById('fc-typing-indicator');
        if (t) t.remove();
        addMessage(getResponse(message), false);
      }, 800 + Math.random() * 400);
    }

    chatButton.addEventListener('click', toggleChat);
    chatClose.addEventListener('click', toggleChat);
    chatSend.addEventListener('click', sendMessage);
    chatInput.addEventListener('keypress', function(e) { if (e.key === 'Enter') sendMessage(); });

    document.querySelectorAll('.fc-quick-btn').forEach(function(btn) {
      btn.addEventListener('click', function() {
        chatInput.value = btn.getAttribute('data-message');
        sendMessage();
      });
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape' && chatOpen) toggleChat();
    });
  }

  // ── Initialize on DOM Ready ───────────────────

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', function() { initDarkMode(); initAgBot(); });
  } else {
    initDarkMode();
    initAgBot();
  }

})();
