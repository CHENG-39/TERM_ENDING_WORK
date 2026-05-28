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
  
  // 插入到列表最前面
  messageList.insertBefore(li, messageList.firstChild);
}

// 安全函数：防止 XSS 攻击，转义特殊字符
function escapeHtml(text) {
  const div = document.createElement('div');
  div.textContent = text;
  return div.innerHTML;
}
