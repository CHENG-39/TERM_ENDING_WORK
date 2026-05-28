document.addEventListener('DOMContentLoaded', () => {
  /* 留言板逻辑 (仅在 contact.html 页面生效)
     功能：提交表单 -> 保存至 localStorage -> 渲染到列表
  */
  const messageForm = document.getElementById('message-form');
  const messageList = document.getElementById('message-list');

  // 如果当前页面没有留言板表单，则不执行后续代码
  if (messageForm && messageList) {
    
    // 页面加载时，从 localStorage 读取并显示旧留言
    loadMessages();

    messageForm.addEventListener('submit', function(e) {
      e.preventDefault(); // 阻止表单默认提交刷新页面的行为

      // 获取输入框的值
      const nameInput = document.getElementById('visitor-name');
      const contentInput = document.getElementById('visitor-content');
      
      const name = nameInput.value.trim();
      const content = contentInput.value.trim();

      if (name === '' || content === '') {
        alert('请填写完整的姓名和留言内容哦！');
        return;
      }

      // 创建留言对象
      const newMessage = {
        id: Date.now(), // 用时间戳做唯一 ID
        name: name,
        content: content,
        date: new Date().toLocaleDateString() // 获取当前日期
      };

      // 获取现有留言，追加新留言，再存回去
      const messages = getMessagesFromStorage();
      messages.push(newMessage);
      localStorage.setItem('nanchang_messages', JSON.stringify(messages));

      // 重新渲染列表
      renderMessage(newMessage);

      // 清空表单
      nameInput.value = '';
      contentInput.value = '';
      alert('留言成功！感谢您的分享。');
    });
  }
});

// 辅助函数：从 localStorage 获取留言数组
function getMessagesFromStorage() {
  const stored = localStorage.getItem('nanchang_messages');
  return stored ? JSON.parse(stored) : [];
}

// 辅助函数：加载所有留言
function loadMessages() {
  const messages = getMessagesFromStorage();
  // 倒序排列，最新的在最前面
  messages.reverse().forEach(msg => renderMessage(msg));
}

// 辅助函数：将单条留言渲染到 HTML 列表中
function renderMessage(msg) {
  const messageList = document.getElementById('message-list');
  
  const li = document.createElement('li');
  li.className = 'message-item';
  // 内部结构：姓名 + 日期 + 内容
  li.innerHTML = `
    <div class="message-header">
      <strong class="visitor-name">${escapeHtml(msg.name)}</strong>
      <span class="message-date">${msg.date}</span>
    </div>
    <p class="message-content">${escapeHtml(msg.content)}</p>
  `;

  // 添加删除按钮（每条留言右侧）
  const header = li.querySelector('.message-header');
  const delBtn = document.createElement('button');
  delBtn.className = 'delete-btn';
  delBtn.type = 'button';
  delBtn.setAttribute('aria-label', '删除留言');
  delBtn.title = '删除';
  delBtn.innerHTML = `
    <svg class="icon-trash" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M3 6h18" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M8 6l1-2h6l1 2" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M10 11v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M14 11v6" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M5 6l1 14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2l1-14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
    </svg>
  `;
  delBtn.addEventListener('click', function() {
    if (!confirm('确定要删除这条留言吗？')) return;
    deleteMessage(msg.id);
    li.remove();
  });
  header.appendChild(delBtn);

  // 插入到列表最前面
  messageList.insertBefore(li, messageList.firstChild);
}

// 删除指定 ID 的留言（更新 localStorage）
function deleteMessage(id) {
  const messages = getMessagesFromStorage();
  const filtered = messages.filter(m => m.id !== id);
  localStorage.setItem('nanchang_messages', JSON.stringify(filtered));
}

// 安全函数：防止 XSS 攻击，转义特殊字符 (答辩时可提一句为了安全性)
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}

// 点击显示南昌话卡片（无翻转效果，替换为背景/内容切换）
document.addEventListener('DOMContentLoaded', () => {
  const dialectCards = Array.from(document.querySelectorAll('.dialect-card'));
  if (!dialectCards.length) return;

  dialectCards.forEach(card => {
    // 提升可访问性
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.style.userSelect = 'none';

    card.addEventListener('click', () => {
      // 点击时关闭其他已展开项，保持页面整洁
      dialectCards.forEach(c => { if (c !== card) c.classList.remove('revealed'); });
      card.classList.toggle('revealed');
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        dialectCards.forEach(c => { if (c !== card) c.classList.remove('revealed'); });
        card.classList.toggle('revealed');
      }
    });
  });
});
