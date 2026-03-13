# MultimídiaLab — Guia do Projeto

## 📁 Estrutura de Arquivos

```
multimidia-vercel/
│
├── index.html          ← Página inicial (home)
│
├── css/
│   └── style.css       ← Todo o estilo visual do blog
│
├── js/
│   ├── posts.js        ← ✏️ EDITE AQUI: conteúdo de cada postagem
│   └── main.js         ← Lógica do site (não precisa editar)
│
└── posts/
    └── post.html       ← Template de postagem individual
```

---

## ✏️ Como Editar o Conteúdo

### Editando postagens → `js/posts.js`

Cada postagem é um objeto com esta estrutura:

```js
{
  id: 1,
  num: '01',
  cat: 'apresentacao',          // categoria para filtro
  catLabel: '👤 Apresentação',  // rótulo exibido
  catColor: '#00e5ff',          // cor do rótulo
  title: 'Título da Postagem',
  excerpt: 'Resumo curto exibido na listagem.',
  tags: ['Tag1', 'Tag2'],
  date: 'Mar 2025',
  readTime: '3 min',
  body: `
    <!-- Conteúdo HTML completo da postagem -->
    <p>Texto aqui...</p>
    <h3>Subtítulo</h3>
    ...
  `
}
```

### Elementos especiais no `body`:

**Bloco de mídia (vídeo/áudio/imagem):**
```html
<div class="media-block">
  <span class="media-icon">🎬</span>
  <div>
    <div class="media-label">Vídeo Externo 1</div>
    <div class="media-title">Título do vídeo</div>
    <div class="media-src">youtube.com/watch?v=SEU_ID</div>
  </div>
</div>
```

**Caixa de informação / "Saiba mais":**
```html
<div class="info-box">
  <p>🔗 <strong>Saiba mais:</strong> link.com</p>
</div>
```

**Lista de referências:**
```html
<ul class="ref-list">
  <li>AUTOR. <em>Título</em>. Editora, Ano.</li>
</ul>
```

---

## 💬 Sistema de Comentários

Os comentários são salvos automaticamente no **localStorage** do navegador de cada visitante. Isso significa:
- Cada pessoa vê os comentários que ela mesma fez
- **Para comentários persistentes entre usuários**, você precisaria de um backend

### Para comentários reais entre usuários, recomendamos integrar:
- **Disqus** (gratuito, fácil de integrar)
- **Giscus** (baseado em GitHub Discussions, gratuito)
- **Utterances** (baseado em GitHub Issues)

Para usar Disqus, por exemplo, substitua a seção `.comments-section` em `post.html` por:
```html
<div id="disqus_thread"></div>
<script>
  var disqus_config = function () {
    this.page.url = window.location.href;
    this.page.identifier = new URLSearchParams(location.search).get('id');
  };
  (function() {
    var d = document, s = d.createElement('script');
    s.src = 'https://SEU-SITE.disqus.com/embed.js';
    s.setAttribute('data-timestamp', +new Date());
    (d.head || d.body).appendChild(s);
  })();
</script>
```

---

## 🚀 Deploy no Vercel

1. Faça upload da pasta `multimidia-vercel` para um repositório no **GitHub**
2. Acesse [vercel.com](https://vercel.com) e clique em **"New Project"**
3. Importe o repositório do GitHub
4. Clique em **Deploy** — pronto! ✅

O Vercel detecta automaticamente que é um site estático (HTML/CSS/JS).

---

## 🎨 Alterando o Visual

Todas as cores estão em variáveis CSS no topo de `css/style.css`:

```css
:root {
  --bg:     #07090f;   /* fundo principal */
  --cyan:   #00e5ff;   /* cor de destaque */
  --orange: #ff6230;   /* cor secundária */
  --text:   #dde4ee;   /* cor do texto */
}
```

---

## 📝 Adicionando Novas Postagens

1. Abra `js/posts.js`
2. Copie um objeto existente e cole no final do array
3. Altere `id` e `num` para o próximo número
4. Preencha o conteúdo
5. Salvo — aparece automaticamente no site!
