/* ============================================================
   MultimídiaLab — main.js
   ============================================================ */

// ── CURSOR ────────────────────────────────────────────────────────
(function initCursor() {
  const cur = document.getElementById('cur');
  const cur2 = document.getElementById('cur2');
  if (!cur || !cur2) return;
  let mx = 0, my = 0, rx = 0, ry = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX; my = e.clientY;
    cur.style.left = mx + 'px'; cur.style.top = my + 'px';
  });

  (function animCur() {
    rx += (mx - rx) * .1; ry += (my - ry) * .1;
    cur2.style.left = rx + 'px'; cur2.style.top = ry + 'px';
    requestAnimationFrame(animCur);
  })();

  document.querySelectorAll('a, button, .pcard, .mosaic-item, .wtag, .pill, .w-post').forEach(el => {
    el.addEventListener('mouseenter', () => { cur.style.width = '16px'; cur.style.height = '16px'; cur2.style.width = '48px'; cur2.style.height = '48px'; });
    el.addEventListener('mouseleave', () => { cur.style.width = '8px'; cur.style.height = '8px'; cur2.style.width = '32px'; cur2.style.height = '32px'; });
  });
})();

// ── PROGRESS BAR ──────────────────────────────────────────────────
window.addEventListener('scroll', () => {
  const prog = document.getElementById('prog');
  if (!prog) return;
  const s = document.documentElement.scrollTop;
  const h = document.documentElement.scrollHeight - document.documentElement.clientHeight;
  prog.style.width = (s / h * 100) + '%';
});

// ── SCROLL REVEAL ─────────────────────────────────────────────────
const observer = new IntersectionObserver(entries => {
  entries.forEach(e => {
    if (e.isIntersecting) {
      e.target.style.opacity = '1';
      e.target.style.transform = 'translateY(0)';
    }
  });
}, { threshold: 0.08 });

function observeAll(selector) {
  document.querySelectorAll(selector).forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity .5s ease, transform .5s ease';
    observer.observe(el);
  });
}

// ── COMMENTS SYSTEM ───────────────────────────────────────────────
const Comments = {
  // Salva no localStorage usando a chave do post
  key(postId) { return `mm_comments_post_${postId}`; },

  getAll(postId) {
    try {
      return JSON.parse(localStorage.getItem(this.key(postId))) || [];
    } catch { return []; }
  },

  save(postId, comments) {
    localStorage.setItem(this.key(postId), JSON.stringify(comments));
  },

  add(postId, name, text) {
    const comments = this.getAll(postId);
    const comment = {
      id: Date.now(),
      name: name.trim(),
      text: text.trim(),
      date: new Date().toLocaleDateString('pt-BR', { day:'2-digit', month:'long', year:'numeric' }),
      avatar: name.trim()[0].toUpperCase()
    };
    comments.push(comment);
    this.save(postId, comments);
    return comment;
  },

  render(postId, containerId, countId) {
    const comments = this.getAll(postId);
    const container = document.getElementById(containerId);
    const countEl = document.getElementById(countId);
    if (!container) return;

    if (countEl) {
      countEl.innerHTML = `<strong>${comments.length}</strong> comentário${comments.length !== 1 ? 's' : ''}`;
    }

    if (comments.length === 0) {
      container.innerHTML = `
        <div class="comment-empty">
          <span>💬</span>
          Ainda não há comentários. Seja o primeiro a comentar!
        </div>`;
      return;
    }

    container.innerHTML = comments.map(c => `
      <div class="comment-item">
        <div class="comment-header">
          <div class="comment-author">
            <div class="comment-avatar">${c.avatar}</div>
            <div>
              <div class="comment-name">${escapeHtml(c.name)}</div>
              <div class="comment-date">${c.date}</div>
            </div>
          </div>
        </div>
        <p class="comment-text">${escapeHtml(c.text)}</p>
      </div>
    `).join('');
  },

  initForm(postId) {
    const form = document.getElementById('commentForm');
    const success = document.getElementById('commentSuccess');
    if (!form) return;

    form.addEventListener('submit', e => {
      e.preventDefault();
      const nameEl = document.getElementById('commentName');
      const textEl = document.getElementById('commentText');
      const name = nameEl.value.trim();
      const text = textEl.value.trim();

      if (!name || !text) return;

      this.add(postId, name, text);
      this.render(postId, 'commentList', 'commentCount');

      nameEl.value = '';
      textEl.value = '';

      if (success) {
        success.style.display = 'block';
        setTimeout(() => { success.style.display = 'none'; }, 3000);
      }

      // Scroll para comentários
      document.getElementById('commentList').scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    });
  }
};

function escapeHtml(text) {
  return text.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#39;');
}

// ── HOME PAGE ─────────────────────────────────────────────────────
function initHomePage() {
  if (!document.getElementById('postsList')) return;

  renderPosts(POSTS);
  renderSidebar();
  renderFooterPosts();

  // Search
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', function () {
      const q = this.value.toLowerCase();
      const filtered = !q ? POSTS : POSTS.filter(p =>
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.tags.some(t => t.toLowerCase().includes(q))
      );
      renderPosts(filtered);
    });
  }

  setTimeout(() => {
    observeAll('.pcard');
    observeAll('.widget');
    observeAll('.student-card');
  }, 50);
}

function renderPosts(list) {
  const container = document.getElementById('postsList');
  const filterLabel = document.getElementById('filterLabel');
  if (!container) return;

  if (filterLabel) {
    filterLabel.textContent = list.length + ' postagem' + (list.length !== 1 ? 's' : '');
  }

  container.innerHTML = '';
  list.forEach((p, i) => {
    const div = document.createElement('div');
    div.className = 'pcard' + (i === 0 ? ' pcard-feat' : '');
    div.style.animationDelay = (i * 0.04) + 's';
    div.dataset.cat = p.cat;
    div.onclick = () => { window.location.href = `posts/post.html?id=${p.id}`; };

    if (i === 0) {
      div.innerHTML = `
        <div class="pcard-feat-banner"></div>
        <div class="pcard-body">
          <div class="pcard-top">
            <span class="pcard-cat" style="background:${p.catColor}22;color:${p.catColor}">${p.catLabel}</span>
            <span class="pcard-date">${p.date} · ${p.readTime} leitura</span>
          </div>
          <h2 class="pcard-title">${p.title}</h2>
          <p class="pcard-excerpt">${p.excerpt}</p>
          <div class="pcard-foot">
            <div class="pcard-tags">${p.tags.slice(0,4).map(t=>`<span class="ptag">${t}</span>`).join('')}</div>
            <span class="pcard-read">Ler postagem →</span>
          </div>
        </div>`;
    } else {
      div.innerHTML = `
        <div class="pcard-num"><span>${p.num}</span></div>
        <div class="pcard-body">
          <div class="pcard-top">
            <span class="pcard-cat" style="background:${p.catColor}20;color:${p.catColor}">${p.catLabel}</span>
            <span class="pcard-date">${p.date} · ${p.readTime}</span>
          </div>
          <h3 class="pcard-title">${p.title}</h3>
          <p class="pcard-excerpt">${p.excerpt}</p>
          <div class="pcard-foot">
            <div class="pcard-tags">${p.tags.slice(0,3).map(t=>`<span class="ptag">${t}</span>`).join('')}</div>
            <span class="pcard-read">Ler →</span>
          </div>
        </div>`;
    }
    container.appendChild(div);
  });
}

function renderSidebar() {
  const sb = document.getElementById('sidebarPosts');
  if (!sb) return;
  POSTS.slice(-5).reverse().forEach(p => {
    const a = document.createElement('a');
    a.className = 'w-post';
    a.href = `posts/post.html?id=${p.id}`;
    a.innerHTML = `<span class="w-post-n">${p.num}</span><div><div class="w-post-t">${p.title}</div><div class="w-post-c" style="color:${p.catColor}">${p.catLabel}</div></div>`;
    sb.appendChild(a);
  });
}

function renderFooterPosts() {
  const fp = document.getElementById('footerPosts');
  if (!fp) return;
  POSTS.slice(0, 8).forEach(p => {
    const li = document.createElement('li');
    li.innerHTML = `<a href="posts/post.html?id=${p.id}">${p.num}. ${p.title}</a>`;
    fp.appendChild(li);
  });
}

function filter(cat, btn) {
  document.querySelectorAll('.pill').forEach(b => b.classList.remove('on'));
  btn.classList.add('on');
  const filtered = cat === 'all' ? POSTS : POSTS.filter(p => p.cat === cat);
  renderPosts(filtered);
  setTimeout(() => observeAll('.pcard'), 50);
}

// ── POST PAGE ─────────────────────────────────────────────────────
function initPostPage() {
  const bodyEl = document.getElementById('postBody');
  if (!bodyEl) return;

  const params = new URLSearchParams(window.location.search);
  const id = parseInt(params.get('id'));
  const post = POSTS.find(p => p.id === id);

  if (!post) {
    document.title = 'Post não encontrado — MultimídiaLab';
    bodyEl.innerHTML = '<p>Postagem não encontrada. <a href="../index.html">Voltar ao início</a></p>';
    return;
  }

  // Meta
  document.title = `${post.title} — MultimídiaLab`;
  document.getElementById('postCat').textContent = post.catLabel;
  document.getElementById('postCat').style.cssText = `background:${post.catColor}22;color:${post.catColor}`;
  document.getElementById('postTitle').textContent = post.title;
  document.getElementById('postDate').textContent = post.date;
  document.getElementById('postRead').textContent = post.readTime + ' de leitura';
  bodyEl.innerHTML = post.body;

  // Tags
  const tagsEl = document.getElementById('postTags');
  if (tagsEl) {
    tagsEl.innerHTML = post.tags.map(t => `<span class="ptag">${t}</span>`).join('');
  }

  // Nav: prev / next
  const idx = POSTS.findIndex(p => p.id === id);
  const prevPost = POSTS[idx - 1];
  const nextPost = POSTS[idx + 1];
  const navEl = document.getElementById('postNav');
  if (navEl) {
    navEl.innerHTML = `
      ${prevPost ? `<a class="post-nav-item" href="post.html?id=${prevPost.id}">
        <div class="post-nav-label">← Anterior</div>
        <div class="post-nav-title">${prevPost.title}</div>
      </a>` : '<div></div>'}
      ${nextPost ? `<a class="post-nav-item next" href="post.html?id=${nextPost.id}">
        <div class="post-nav-label">Próxima →</div>
        <div class="post-nav-title">${nextPost.title}</div>
      </a>` : '<div></div>'}
    `;
  }

  // Comments
  Comments.render(id, 'commentList', 'commentCount');
  Comments.initForm(id);

  setTimeout(() => observeAll('.comment-item'), 50);
}

// ── INIT ──────────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', () => {
  initHomePage();
  initPostPage();
});
