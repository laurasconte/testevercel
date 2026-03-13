/* ============================================================
   MultimídiaLab — posts.js
   Edite aqui o conteúdo de cada postagem!
   ============================================================ */

const POSTS = [
  {
    id: 1, num: '01',
    cat: 'apresentacao', catLabel: '👤 Apresentação', catColor: '#00e5ff',
    title: 'Quem Somos Nós',
    excerpt: 'Conheça os autores deste blog e a proposta da disciplina de Multimídias que motivou a sua criação.',
    tags: ['Apresentação','Blog','Disciplina'],
    date: 'Mar 2025', readTime: '3 min',
    body: `
      <p>Bem-vindo ao <strong>MultimídiaLab</strong>! Este blog é um projeto acadêmico desenvolvido no contexto da disciplina de Multimídias.</p>
      <h3>Os Autores</h3>
      <p>Somos dois estudantes apaixonados por tecnologia e criatividade.</p>
      <!-- ✏️ EDITE: Coloque os nomes reais aqui -->
      <p><strong>Aluno 1:</strong> [Seu nome aqui] — [Breve descrição]</p>
      <p><strong>Aluno 2:</strong> [Nome do colega] — [Breve descrição]</p>

      <h3>Sobre a Disciplina</h3>
      <p>A disciplina de Multimídias aborda a integração de diferentes formas de mídia — texto, imagem, áudio, vídeo e interatividade — no contexto digital.</p>

      <h3>O que você vai encontrar aqui</h3>
      <ul>
        <li>Conceitos teóricos explicados de forma acessível</li>
        <li>Exemplos práticos e aplicações reais</li>
        <li>Vídeos, áudios e imagens que ilustram os temas</li>
        <li>Referências para aprofundamento</li>
        <li>Projetos desenvolvidos durante a disciplina</li>
      </ul>

      <div class="info-box"><p>📌 Este blog é atualizado regularmente ao longo do semestre.</p></div>

      <h3>Referências</h3>
      <ul class="ref-list">
        <li>VAUGHAN, Tay. <em>Multimídia na Prática</em>. McGraw-Hill, 2011.</li>
        <li>FELDMAN, Tony. <em>An Introduction to Digital Media</em>. Routledge, 1997.</li>
      </ul>
    `
  },
  {
    id: 2, num: '02',
    cat: 'midia', catLabel: '📺 Multimídia', catColor: '#ff6230',
    title: 'Finalidade do Blog',
    excerpt: 'Por que criar um blog para a disciplina? Entenda como a produção de conteúdo digital é em si uma prática multimídia.',
    tags: ['Blog','Comunicação','Mídia Digital'],
    date: 'Mar 2025', readTime: '4 min',
    body: `
      <p>Criar um blog vai muito além de escrever textos na internet. Quando integramos texto, imagem, vídeo, áudio e links interativos, estamos praticando diretamente os conceitos de <strong>multimídia</strong>.</p>

      <h3>Por que um Blog?</h3>
      <p>O blog permite combinar múltiplas mídias de forma não-linear — um exemplo perfeito de hipermídia.</p>

      <h3>Objetivos do Projeto</h3>
      <ul>
        <li>Documentar o aprendizado ao longo da disciplina</li>
        <li>Praticar a criação e curadoria de conteúdo multimídia</li>
        <li>Desenvolver habilidades de comunicação digital</li>
        <li>Criar um portfólio acadêmico acessível online</li>
      </ul>

      <!-- ✏️ EDITE: Substitua os links pelos vídeos reais que você vai usar -->
      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 1</div><div class="media-title">O que é Comunicação Digital?</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div>
      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 2</div><div class="media-title">Blogs e a Revolução da Web 2.0</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div>
      <div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Externo</div><div class="media-title">Podcast: Criação de Conteúdo Digital</div><div class="media-src">spotify.com/SEU_PODCAST_AQUI</div></div></div>

      <h3>Referências</h3>
      <ul class="ref-list">
        <li>JENKINS, Henry. <em>Convergence Culture</em>. NYU Press, 2006.</li>
        <li>O'REILLY, Tim. <em>What is Web 2.0</em>. O'Reilly Media, 2005.</li>
      </ul>
    `
  },
  {
    id: 3, num: '03',
    cat: 'midia', catLabel: '📺 Multimídia', catColor: '#ff6230',
    title: 'Multimídia: Conceito e Aplicações',
    excerpt: 'O que é multimídia de verdade? Explore sua definição, história e como ela permeia absolutamente tudo no mundo digital.',
    tags: ['Multimídia','Mídia','Digital','História'],
    date: 'Mar 2025', readTime: '6 min',
    body: `
      <p>O termo <strong>multimídia</strong> refere-se à integração de múltiplas formas de mídia — texto, imagem, áudio, vídeo e animação — em um único suporte ou experiência.</p>

      <h3>Componentes da Multimídia</h3>
      <ul>
        <li><strong>Texto:</strong> A base informacional — títulos, parágrafos, legendas.</li>
        <li><strong>Imagem:</strong> Fotografias, ilustrações, infográficos, ícones.</li>
        <li><strong>Áudio:</strong> Música, narração, efeitos sonoros, podcasts.</li>
        <li><strong>Vídeo:</strong> Filmagens, animações, screencasts.</li>
        <li><strong>Interatividade:</strong> O elemento que transforma o receptor em participante ativo.</li>
      </ul>

      <!-- ✏️ EDITE: Coloque vídeos reais sobre multimídia -->
      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 1</div><div class="media-title">História da Multimídia</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div>
      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 2</div><div class="media-title">Multimídia: Definição e Componentes</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div>
      <div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Externo</div><div class="media-title">Podcast: A Evolução das Mídias Digitais</div><div class="media-src">anchor.fm/SEU_PODCAST</div></div></div>

      <h3>Multimídia Linear vs. Não-linear</h3>
      <p><strong>Linear:</strong> O conteúdo é consumido em sequência, como um filme.</p>
      <p><strong>Não-linear:</strong> O usuário navega conforme sua escolha, como um website ou jogo.</p>

      <div class="info-box"><p>🔗 <strong>Saiba mais:</strong> nmc.org/horizon-report</p></div>

      <h3>Referências</h3>
      <ul class="ref-list">
        <li>VAUGHAN, Tay. <em>Multimídia na Prática</em>. McGraw-Hill, 2011.</li>
        <li>MAYER, Richard E. <em>Multimedia Learning</em>. Cambridge University Press, 2001.</li>
        <li>MANOVICH, Lev. <em>The Language of New Media</em>. MIT Press, 2001.</li>
      </ul>
    `
  },
  {
    id: 4, num: '04',
    cat: 'midia', catLabel: '📺 Hipermídia', catColor: '#ff6230',
    title: 'Hipermídia: Além do Hipertexto',
    excerpt: 'Da ideia do Memex à web atual — como a hipermídia revolucionou a forma como consumimos informação.',
    tags: ['Hipermídia','Hipertexto','Web','Navegação'],
    date: 'Mar 2025', readTime: '5 min',
    body: `
      <p><strong>Hipermídia</strong> é a extensão do conceito de hipertexto para incluir múltiplas mídias interconectadas.</p>

      <h3>A Origem: O Memex de Vannevar Bush</h3>
      <p>Em 1945, Vannevar Bush descreveu o "Memex" — uma máquina que armazenaria informações por associação, antecipando a lógica da World Wide Web.</p>

      <h3>Hipermídia na Prática</h3>
      <ul>
        <li>Websites com vídeos, imagens e links interativos</li>
        <li>E-books interativos com animações e áudio</li>
        <li>Enciclopédias online como a Wikipedia</li>
        <li>Jogos com narrativa não-linear</li>
      </ul>

      <!-- ✏️ EDITE -->
      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 1</div><div class="media-title">Ted Nelson e a Invenção do Hipertexto</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div>
      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 2</div><div class="media-title">Como Funciona a World Wide Web</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div>
      <div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Criado</div><div class="media-title">Narração: Hipermídia e o Futuro da Informação [Gravação Própria]</div></div></div>

      <div class="info-box"><p>🔗 <strong>Link externo:</strong> Projeto Xanadu de Ted Nelson: xanadu.com</p></div>

      <h3>Referências</h3>
      <ul class="ref-list">
        <li>BUSH, Vannevar. <em>As We May Think</em>. The Atlantic Monthly, 1945.</li>
        <li>NELSON, Theodore. <em>Literary Machines</em>. Mindful Press, 1981.</li>
        <li>LANDOW, George P. <em>Hypertext 3.0</em>. Johns Hopkins University Press, 2006.</li>
      </ul>
    `
  },
  {
    id: 5, num: '05',
    cat: 'xr', catLabel: '🥽 Realidade Virtual', catColor: '#39d98a',
    title: 'Realidade Virtual: Hardware e Software',
    excerpt: 'Mergulhe no universo da VR — dos óculos HMD aos motores gráficos, entenda toda a infraestrutura que torna mundos virtuais possíveis.',
    tags: ['VR','Realidade Virtual','HMD','Unity','Unreal'],
    date: 'Abr 2025', readTime: '8 min',
    body: `
      <p>A <strong>Realidade Virtual (VR)</strong> cria ambientes digitais imersivos onde o usuário pode interagir como se estivesse fisicamente presente.</p>

      <h3>Hardware de VR</h3>
      <h4>Head-Mounted Displays</h4>
      <ul>
        <li><strong>Meta Quest 3:</strong> Standalone, sem necessidade de PC.</li>
        <li><strong>PlayStation VR2:</strong> Conectado ao PS5 com eye-tracking.</li>
        <li><strong>Valve Index:</strong> Alta fidelidade para PC.</li>
        <li><strong>Apple Vision Pro:</strong> Mixed Reality de alta resolução.</li>
      </ul>

      <h3>Software de VR</h3>
      <ul>
        <li><strong>Unity:</strong> O mais popular para VR. Grande comunidade.</li>
        <li><strong>Unreal Engine:</strong> Gráficos fotorrealistas.</li>
        <li><strong>WebXR:</strong> VR diretamente no navegador web.</li>
      </ul>

      <!-- ✏️ EDITE -->
      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 1</div><div class="media-title">Como Funciona a Realidade Virtual</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div>
      <div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 2</div><div class="media-title">Meta Quest 3 — Demonstração</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div>
      <div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Externo</div><div class="media-title">Podcast: O Futuro da Realidade Virtual</div><div class="media-src">spotify.com/SEU_PODCAST</div></div></div>

      <div class="info-box"><p>🔗 <strong>Saiba mais:</strong> developer.mozilla.org/WebXR | docs.unity3d.com/vr</p></div>

      <h3>Referências</h3>
      <ul class="ref-list">
        <li>SHERMAN, William R.; CRAIG, Alan B. <em>Understanding Virtual Reality</em>. Morgan Kaufmann, 2018.</li>
        <li>JERALD, Jason. <em>The VR Book</em>. ACM Books, 2015.</li>
      </ul>
    `
  },
  {
    id: 6, num: '06', cat: 'xr', catLabel: '🔮 Realidade Aumentada', catColor: '#ffd060',
    title: 'Realidade Aumentada: Hardware e Software',
    excerpt: 'Pokémon GO foi só o começo. Explore como a AR sobrepõe o digital ao físico.',
    tags: ['AR','ARKit','ARCore','WebAR'], date: 'Abr 2025', readTime: '7 min',
    body: `<p>A <strong>Realidade Aumentada (AR)</strong> sobrepõe elementos digitais ao mundo físico em tempo real.</p><h3>Hardware de AR</h3><ul><li><strong>Smartphones:</strong> ARKit (iOS) e ARCore (Android)</li><li><strong>Microsoft HoloLens 2:</strong> Para uso empresarial e industrial</li><li><strong>Magic Leap 2:</strong> Healthcare e manufatura</li></ul><h3>Software de AR</h3><ul><li><strong>ARKit (Apple):</strong> SDK nativo para iOS</li><li><strong>ARCore (Google):</strong> Para Android</li><li><strong>WebAR / A-Frame:</strong> AR no navegador sem instalar apps</li><li><strong>Spark AR:</strong> Filtros para Instagram</li></ul><!-- ✏️ EDITE --><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 1</div><div class="media-title">Realidade Aumentada: Como Funciona</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 2</div><div class="media-title">HoloLens 2 — Demonstração</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Externo</div><div class="media-title">Podcast: AR no Varejo e na Educação</div><div class="media-src">anchor.fm/SEU_PODCAST</div></div></div><h3>Exemplos Práticos</h3><p><strong>Medicina:</strong> Cirurgiões usam HoloLens durante cirurgias.</p><p><strong>Varejo:</strong> IKEA Place — experimente móveis virtualmente em casa.</p><div class="info-box"><p>🔗 aframe.io | experiments.withgoogle.com/collection/ar</p></div><h3>Referências</h3><ul class="ref-list"><li>AZUMA, Ronald. <em>A Survey of Augmented Reality</em>. Presence, 1997.</li><li>CRAIG, Alan B. <em>Understanding Augmented Reality</em>. Morgan Kaufmann, 2013.</li></ul>`
  },
  {
    id: 7, num: '07', cat: 'xr', catLabel: '🔀 Realidade Mista', catColor: '#ff4d8d',
    title: 'Realidade Mista: Hardware e Software',
    excerpt: 'Quando o virtual e o físico coexistem e interagem.',
    tags: ['MR','Realidade Mista','Metaverso','Spatial Computing'], date: 'Abr 2025', readTime: '6 min',
    body: `<p>A <strong>Realidade Mista (MR)</strong> permite que objetos virtuais interajam com o ambiente real.</p><h3>O Continuum de Milgram</h3><p>Paul Milgram definiu em 1994 o "Reality-Virtuality Continuum" — uma linha do mundo real ao completamente virtual, com MR no meio.</p><h3>Hardware de MR</h3><ul><li><strong>Microsoft HoloLens 2:</strong> Principal dispositivo MR empresarial</li><li><strong>Apple Vision Pro:</strong> Spatial Computer</li><li><strong>Magic Leap 2:</strong> Para uso industrial e médico</li></ul><!-- ✏️ EDITE --><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 1</div><div class="media-title">Apple Vision Pro: Spatial Computing</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 2</div><div class="media-title">VR vs AR vs MR — Diferenças</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Externo</div><div class="media-title">Podcast: Metaverso e Realidade Mista</div><div class="media-src">spotify.com/SEU_PODCAST</div></div></div><h3>Exemplo Prático</h3><p>Na <strong>Boeing</strong>, técnicos usam HoloLens para instruções de montagem sobrepostas na aeronave real — reduzindo tempo em 25% e erros em 50%.</p><div class="info-box"><p>🔗 learn.microsoft.com/mixed-reality | developer.apple.com/visionos</p></div><h3>Referências</h3><ul class="ref-list"><li>MILGRAM, Paul; KISHINO, Fumio. <em>A Taxonomy of Mixed Reality Visual Displays</em>. IEICE, 1994.</li></ul>`
  },
  {
    id: 8, num: '08', cat: 'xr', catLabel: '🔮 Holografia', catColor: '#39d98a',
    title: 'Holografia: Hardware e Software',
    excerpt: 'De Star Wars à realidade — como a holografia funciona e onde é aplicada.',
    tags: ['Holografia','Holograma','Display 3D'], date: 'Abr 2025', readTime: '7 min',
    body: `<p>A <strong>holografia</strong> registra e reproduz a luz criando imagens tridimensionais. Um holograma é criado pela interferência de dois feixes de laser — de referência e objeto.</p><h3>Hardware Holográfico</h3><h4>Displays Dinâmicos</h4><ul><li><strong>Pepper's Ghost:</strong> Técnica com espelhos usada em shows</li><li><strong>Looking Glass Factory:</strong> Display volumétrico sem óculos</li><li><strong>Voxon Photonics:</strong> Volume real de luz</li></ul><h3>Aplicações Reais</h3><p><strong>Medicina:</strong> Cirurgiões visualizam órgãos em 3D (RealView Imaging).</p><p><strong>Entretenimento:</strong> Concertos com artistas "ressuscitados" digitalmente.</p><!-- ✏️ EDITE --><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 1</div><div class="media-title">Como Funciona a Holografia</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 2</div><div class="media-title">Hologramas — Tecnologia Explicada</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Criado</div><div class="media-title">Narração: Holografia — Da Física às Aplicações [Gravação Própria]</div></div></div><div class="info-box"><p>🔗 lookingglassfactory.com | media.mit.edu/groups/holography</p></div><h3>Referências</h3><ul class="ref-list"><li>GABOR, Dennis. <em>A New Microscopic Principle</em>. Nature, 1948.</li><li>HARIHARAN, P. <em>Optical Holography</em>. Cambridge University Press, 1996.</li></ul>`
  },
  {
    id: 9, num: '09', cat: 'imagem', catLabel: '🖼 Imagem Digital', catColor: '#00e5ff',
    title: 'Imagens e seus Formatos',
    excerpt: 'PNG, JPEG, WebP, SVG — cada formato tem sua razão de existir.',
    tags: ['Imagem','PNG','JPEG','WebP','SVG'], date: 'Mai 2025', readTime: '6 min',
    body: `<p>Formatos de imagem representam filosofias diferentes de armazenar informação visual.</p><h3>Imagens Rasterizadas</h3><h4>JPEG</h4><ul><li>Compressão com perda (lossy)</li><li>Ideal para fotografias</li><li>Não suporta transparência</li></ul><h4>PNG</h4><ul><li>Compressão sem perda (lossless)</li><li>Suporta transparência</li><li>Ideal para logos e ícones</li></ul><h4>WebP</h4><ul><li>Formato moderno do Google</li><li>Até 30% menor que JPEG</li><li>Suporta transparência e animação</li></ul><h3>Imagens Vetoriais (SVG)</h3><ul><li>Escala infinitamente sem perda</li><li>Editável com CSS e JavaScript</li><li>Ideal para logos e ícones</li></ul><!-- ✏️ EDITE --><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 1</div><div class="media-title">Todos os Formatos de Imagem Explicados</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 2</div><div class="media-title">JPEG vs PNG vs WebP</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Externo</div><div class="media-title">Podcast: Imagens na Web</div><div class="media-src">anchor.fm/SEU_PODCAST</div></div></div><h3>Guia Rápido</h3><ul><li>📸 Foto para web → <strong>WebP ou JPEG</strong></li><li>🎨 Logo → <strong>SVG ou PNG</strong></li><li>🖨 Impressão → <strong>TIFF ou PDF</strong></li></ul><div class="info-box"><p>🔗 web.dev/choose-the-right-image-format</p></div><h3>Referências</h3><ul class="ref-list"><li>GONZALEZ, Rafael C.; WOODS, Richard E. <em>Digital Image Processing</em>. Pearson, 2018.</li></ul>`
  },
  {
    id: 10, num: '10', cat: 'imagem', catLabel: '🖼 Processamento de Imagens', catColor: '#00e5ff',
    title: 'Processamento de Imagens',
    excerpt: 'Filtros, segmentação, detecção de bordas — as técnicas que transformam imagens em informação.',
    tags: ['Processamento','OpenCV','Python','Visão Computacional'], date: 'Mai 2025', readTime: '7 min',
    body: `<p>O <strong>Processamento Digital de Imagens (PDI)</strong> desenvolve algoritmos para manipular e analisar imagens digitais — base de reconhecimento facial, diagnóstico médico e carros autônomos.</p><h3>Filtros Espaciais</h3><ul><li><strong>Blur:</strong> Gaussiano, Mediana — reduzem ruído</li><li><strong>Sharpening:</strong> Realçam bordas e detalhes</li><li><strong>Detecção de bordas:</strong> Sobel, Canny</li></ul><h3>Ferramentas</h3><ul><li><strong>OpenCV:</strong> Base de toda visão computacional</li><li><strong>Pillow (PIL):</strong> Manipulação básica em Python</li><li><strong>scikit-image:</strong> Algoritmos científicos</li></ul><!-- ✏️ EDITE --><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 1</div><div class="media-title">Processamento de Imagens com OpenCV e Python</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 2</div><div class="media-title">Filtros de Imagem: Como Funcionam</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Externo</div><div class="media-title">Podcast: Visão Computacional no Mundo Real</div><div class="media-src">spotify.com/SEU_PODCAST</div></div></div><div class="info-box"><p>🔗 docs.opencv.org</p></div><h3>Referências</h3><ul class="ref-list"><li>GONZALEZ, Rafael C.; WOODS, Richard E. <em>Digital Image Processing</em>. Pearson, 2018.</li><li>BRADSKI, Gary; KAEHLER, Adrian. <em>Learning OpenCV 4</em>. O'Reilly, 2019.</li></ul>`
  },
  {
    id: 11, num: '11', cat: 'ia', catLabel: '🤖 Inteligência Artificial', catColor: '#ff4d8d',
    title: 'Inteligência Artificial e Multimídia',
    excerpt: 'IA generativa, deepfakes, upscaling — como algoritmos estão criando e transformando mídias.',
    tags: ['IA','Machine Learning','Deep Learning','Generativa'], date: 'Mai 2025', readTime: '8 min',
    body: `<p>A <strong>Inteligência Artificial</strong> está transformando radicalmente a produção e consumo de mídia.</p><h3>IA Generativa</h3><p>Modelos que criam conteúdo: imagens (Midjourney, DALL-E), texto (GPT-4, Claude), áudio (Suno, ElevenLabs), vídeo (Sora, Runway).</p><h3>Aplicações em Multimídia</h3><h4>Imagem e Vídeo</h4><ul><li><strong>Upscaling:</strong> Aumentar resolução com IA (Topaz AI)</li><li><strong>Restauração:</strong> Colorização de fotos antigas</li><li><strong>Geração de imagens:</strong> Midjourney, DALL-E 3</li></ul><h4>Áudio e Música</h4><ul><li><strong>Síntese de voz:</strong> ElevenLabs</li><li><strong>Composição musical:</strong> Suno AI</li><li><strong>Redução de ruído:</strong> Adobe Podcast AI</li></ul><!-- ✏️ EDITE --><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 1</div><div class="media-title">IA Generativa: Revolução ou Ameaça?</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 2</div><div class="media-title">Como Funciona o Stable Diffusion</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Criado</div><div class="media-title">Música Gerada por IA [Criada com Suno AI pelos autores]</div></div></div><div class="info-box"><p>🔗 midjourney.com | suno.com | paperswithcode.com</p></div><h3>Referências</h3><ul class="ref-list"><li>GOODFELLOW, Ian et al. <em>Deep Learning</em>. MIT Press, 2016.</li><li>RUSSELL, Stuart; NORVIG, Peter. <em>Artificial Intelligence</em>. Pearson, 2020.</li></ul>`
  },
  {
    id: 12, num: '12', cat: 'game', catLabel: '🎮 Game Design', catColor: '#ffd060',
    title: 'Game Design Document (GDD)',
    excerpt: 'O blueprint de qualquer jogo — o que é um GDD e como criá-lo.',
    tags: ['Game Design','GDD','Documentação','Jogos'], date: 'Jun 2025', readTime: '7 min',
    body: `<p>O <strong>Game Design Document (GDD)</strong> é o blueprint que descreve tudo sobre um jogo: mecânicas, narrativa, arte, som e interfaces.</p><h3>Estrutura de um GDD</h3><h4>1. Visão Geral</h4><ul><li>Título, gênero, plataformas-alvo</li><li>Elevator pitch em 1-2 frases</li><li>Público-alvo e referências</li></ul><h4>2. Mecânicas</h4><ul><li>Core loop: ciclo de ação central</li><li>Controles e input</li><li>Condições de vitória e derrota</li></ul><h4>3. Arte e Áudio</h4><ul><li>Estilo visual e mood board</li><li>Trilha sonora e efeitos sonoros</li></ul><!-- ✏️ EDITE --><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 1</div><div class="media-title">Como Criar um GDD — Brackeys</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 2</div><div class="media-title">GDD de Games Famosos</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Externo</div><div class="media-title">Podcast: Game Design na Prática</div><div class="media-src">anchor.fm/SEU_PODCAST</div></div></div><div class="info-box"><p>🔗 Templates: notion.so/templates/gdd | gamedesigning.org/learn/gdd</p></div><h3>Referências</h3><ul class="ref-list"><li>SCHELL, Jesse. <em>The Art of Game Design</em>. CRC Press, 2019.</li><li>ADAMS, Ernest. <em>Fundamentals of Game Design</em>. New Riders, 2014.</li></ul>`
  },
  {
    id: 13, num: '13', cat: 'game', catLabel: '🎮 Jogo Desenvolvido', catColor: '#ffd060',
    title: 'Jogo Desenvolvido: Projeto da Disciplina',
    excerpt: 'Apresentação do jogo criado durante a disciplina — mecânicas, desenvolvimento e aprendizados.',
    tags: ['Jogo','Projeto','Unity','Game Dev'], date: 'Jun 2025', readTime: '6 min',
    body: `<!-- ✏️ EDITE TUDO AQUI com os detalhes do jogo real de vocês! --><p>Como parte do projeto da disciplina, desenvolvemos um jogo eletrônico aplicando os conceitos do GDD.</p><h3>Ficha do Jogo</h3><ul><li><strong>Título:</strong> [Coloque o título do jogo aqui]</li><li><strong>Gênero:</strong> [Ex: Plataforma 2D / Puzzle / RPG]</li><li><strong>Motor:</strong> [Ex: Unity, Unreal, Godot]</li><li><strong>Plataforma:</strong> [Ex: PC, WebGL, Mobile]</li></ul><h3>Mecânicas Principais</h3><ul><li>[Descreva as mecânicas principais do jogo]</li><li>[Ex: Movimentação, coleta, combate, puzzle]</li></ul><h3>Processo de Desenvolvimento</h3><p>[Descreva como foi o desenvolvimento — semanas, desafios, ferramentas usadas]</p><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Criado</div><div class="media-title">Gameplay do Jogo [Vídeo produzido pelos autores]</div></div></div><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo</div><div class="media-title">Tutorial de referência usado no desenvolvimento</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Criado</div><div class="media-title">Trilha Sonora do Jogo [Criada pelos autores]</div></div></div><h3>Aprendizados</h3><ul><li>[O que vocês aprenderam durante o desenvolvimento?]</li></ul><h3>Referências</h3><ul class="ref-list"><li>SCHELL, Jesse. <em>The Art of Game Design</em>. CRC Press, 2019.</li></ul>`
  },
  {
    id: 14, num: '14', cat: 'tech', catLabel: '⚙️ IoT', catColor: '#39d98a',
    title: 'Internet das Coisas (IoT)',
    excerpt: 'Casas inteligentes, cidades conectadas — entenda a infraestrutura que conecta tudo.',
    tags: ['IoT','Arduino','MQTT','Sensores'], date: 'Jun 2025', readTime: '7 min',
    body: `<p>A <strong>Internet das Coisas (IoT)</strong> é a rede de dispositivos físicos conectados à internet, coletando e trocando dados.</p><h3>Arquitetura IoT</h3><h4>Dispositivos</h4><ul><li><strong>Sensores:</strong> Temperatura, umidade, presença, GPS</li><li><strong>Microcontroladores:</strong> Arduino, ESP32</li><li><strong>Raspberry Pi:</strong> Mais poder computacional</li></ul><h4>Conectividade</h4><ul><li><strong>Wi-Fi:</strong> Alta largura de banda</li><li><strong>Bluetooth LE:</strong> Baixíssimo consumo</li><li><strong>LoRaWAN:</strong> Longo alcance para IoT industrial</li></ul><h4>Cloud</h4><ul><li>AWS IoT Core, Azure IoT Hub</li><li>Protocolo MQTT</li><li>Dashboards: Grafana, Node-RED</li></ul><h3>Aplicações</h3><ul><li><strong>Smart Home:</strong> Termostatos, iluminação inteligente</li><li><strong>Indústria 4.0:</strong> Manutenção preditiva</li><li><strong>Agricultura:</strong> Irrigação automática</li></ul><!-- ✏️ EDITE --><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 1</div><div class="media-title">Internet das Coisas: Como Funciona</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 2</div><div class="media-title">Arduino + MQTT: Primeiro Projeto IoT</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Externo</div><div class="media-title">Podcast: IoT na Indústria 4.0</div><div class="media-src">anchor.fm/SEU_PODCAST</div></div></div><div class="info-box"><p>🔗 create.arduino.cc/projecthub | nodered.org</p></div><h3>Referências</h3><ul class="ref-list"><li>ASHTON, Kevin. <em>That "Internet of Things" Thing</em>. RFID Journal, 2009.</li></ul>`
  },
  {
    id: 15, num: '15', cat: 'tech', catLabel: '⚙️ Automação', catColor: '#39d98a',
    title: 'Automação: Conceitos e Aplicações',
    excerpt: 'Da linha de montagem ao Python — como a automação está redefinindo o trabalho.',
    tags: ['Automação','RPA','Python','Indústria 4.0'], date: 'Jun 2025', readTime: '6 min',
    body: `<p><strong>Automação</strong> é o uso de tecnologia para executar tarefas com mínima intervenção humana.</p><h3>Tipos de Automação</h3><h4>Industrial</h4><ul><li>CLPs (Controladores Lógicos Programáveis)</li><li>Robôs industriais: ABB, KUKA</li><li>Cobots: robôs colaborativos</li></ul><h4>TI e Processos</h4><ul><li><strong>RPA:</strong> Bots que imitam ações humanas — UiPath</li><li><strong>Scripts Python:</strong> Automação de arquivos e relatórios</li><li><strong>CI/CD:</strong> GitHub Actions — deploy automático</li></ul><!-- ✏️ EDITE --><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 1</div><div class="media-title">Automatize Sua Vida com Python</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo 2</div><div class="media-title">Indústria 4.0: O Futuro da Automação</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Externo</div><div class="media-title">Podcast: Automação vai Roubar Empregos?</div><div class="media-src">anchor.fm/SEU_PODCAST</div></div></div><div class="info-box"><p>🔗 home-assistant.io | automatetheboringstuff.com</p></div><h3>Referências</h3><ul class="ref-list"><li>BRYNJOLFSSON, Erik; McAFEE, Andrew. <em>The Second Machine Age</em>. W.W. Norton, 2014.</li><li>SWEIGART, Al. <em>Automate the Boring Stuff with Python</em>. No Starch Press, 2019.</li></ul>`
  },
  {
    id: 16, num: '16', cat: 'tech', catLabel: '⚙️ Projeto Desenvolvido', catColor: '#39d98a',
    title: 'Projeto Desenvolvido: Sistema Multimídia',
    excerpt: 'Documentação completa do projeto prático criado durante a disciplina.',
    tags: ['Projeto','Desenvolvimento','Multimídia'], date: 'Jul 2025', readTime: '5 min',
    body: `<!-- ✏️ EDITE TUDO com os detalhes do projeto real de vocês! --><p>Como atividade integradora, desenvolvemos um projeto aplicando múltiplos conceitos da disciplina.</p><h3>Descrição do Projeto</h3><p>[Descreva o que é o projeto — o que ele faz, qual problema resolve]</p><h3>Tecnologias Utilizadas</h3><ul><li>[Liste as tecnologias que vocês usaram]</li><li>[Ex: Python, Arduino, HTML, Unity, etc.]</li></ul><h3>Funcionalidades</h3><ul><li>[Funcionalidade 1]</li><li>[Funcionalidade 2]</li></ul><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Criado</div><div class="media-title">Demonstração do Projeto [Gravado pelos autores]</div></div></div><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Externo</div><div class="media-title">Tutorial de referência do projeto</div><div class="media-src">youtube.com/watch?v=SEU_VIDEO_AQUI</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Criado</div><div class="media-title">Apresentação do Projeto [Narração pelos autores]</div></div></div><h3>Aprendizados</h3><p>[O que o projeto ensinou? Quais foram os maiores desafios?]</p><h3>Referências</h3><ul class="ref-list"><li>[Referências usadas no projeto]</li></ul>`
  },
  {
    id: 17, num: '17', cat: 'apresentacao', catLabel: '📋 Conclusão', catColor: '#00e5ff',
    title: 'Reflexões Finais: O que Aprendemos',
    excerpt: 'Uma reflexão sobre o percurso, os temas explorados e os projetos desenvolvidos.',
    tags: ['Conclusão','Aprendizado','Semestre'], date: 'Jul 2025', readTime: '4 min',
    body: `<p>Chegamos ao final do semestre. Foi uma jornada de exploração intensa, cobrindo desde multimídia e hipermídia até VR, IA e IoT.</p><h3>O que Exploramos</h3><ul><li>📺 Fundamentos de <strong>Multimídia e Hipermídia</strong></li><li>🥽 Ecossistema de <strong>Realidade Virtual, Aumentada e Mista</strong></li><li>🔮 A ciência da <strong>Holografia</strong></li><li>🖼 <strong>Imagens Digitais</strong> e processamento</li><li>🤖 <strong>Inteligência Artificial</strong> na criação de mídia</li><li>🎮 Criação de <strong>Jogos</strong> — GDD e implementação</li><li>⚙️ <strong>IoT e Automação</strong></li></ul><h3>Principal Aprendizado</h3><p>A multimídia não é um conjunto de tecnologias isoladas — é uma <strong>linguagem</strong>. Uma forma de comunicar que integra múltiplos sentidos.</p><!-- ✏️ EDITE com suas reflexões pessoais --><div class="media-block"><span class="media-icon">🎬</span><div><div class="media-label">Vídeo Criado</div><div class="media-title">Video-Resumo do Semestre [Produzido pelos autores]</div></div></div><div class="media-block"><span class="media-icon">🔊</span><div><div class="media-label">Áudio Criado</div><div class="media-title">Reflexões Finais — Podcast dos Autores</div></div></div><div class="info-box"><p>🙏 <strong>Obrigado por acompanhar o MultimídiaLab!</strong></p></div><h3>Referências Gerais</h3><ul class="ref-list"><li>VAUGHAN, Tay. <em>Multimídia na Prática</em>. McGraw-Hill, 2011.</li><li>MANOVICH, Lev. <em>The Language of New Media</em>. MIT Press, 2001.</li></ul>`
  }
];
