// Données des articles
const articlesData = [
{
  "id": 1,
  "title": "Stock Market Weather: Advanced Data Science and Project Management for Financial Forecasting",
  "slug": "stock-market-weather-advanced-data-science",
  "image": "images/stockmarket.png",
  "excerpt": "Dive into the Stock Market Weather project: a robust blend of advanced mathematics, technical analysis, and rigorous project management, designed for large-scale, high-performance financial forecasting.",
  content: `# Stock Market Weather: Advanced Data Science and Project Management for Financial Forecasting
  <div style="text-align: center;">
  <img src="images/weathstock.png" alt="Explication 1" style="width:100%;max-width:500px;margin:16px 0;">
</div>
  **Stock Market Weather** stands out as an ambitious, large-scale data science initiative, uniting advanced mathematical modeling with rigorous project management. The goal: deliver reliable, scalable, and actionable stock market predictions for thousands of assets every day.\n## 1. Robust Project Management Approach\n### Structured Methodology\n- **Agile and Iterative Development:** The project is managed using Agile principles, with sprints dedicated to data engineering, model development, and infrastructure optimization.\n- **Clear Work Breakdown Structure (WBS):** Tasks are divided into modules—data acquisition, signal processing, machine learning, infrastructure, and validation—each with defined deliverables and timelines.\n- **Version Control and Continuous Integration:** All code is versioned (e.g., Git), with automated testing and deployment pipelines ensuring code quality and reproducibility.\n- **Scalability and Resource Allocation:** The architecture is designed to scale horizontally across servers and GPUs, with workload balancing and monitoring for optimal resource use.\n- **Documentation and Knowledge Sharing:** Comprehensive technical documentation and regular team reviews guarantee maintainability and knowledge transfer.\n### Risk Management\n- **Data Quality Assurance:** Automated checks and anomaly detection on incoming data streams.\n- **Model Validation:** Systematic backtesting and post-diction on rolling three-year windows to ensure predictive reliability.\n- **Performance Monitoring:** Real-time dashboards track computational loads, prediction accuracy, and infrastructure health.\n## 2. Advanced Mathematical and Analytical Foundations\n### Mathematical Rigor\n- **Fourier Analysis:** Each price series is decomposed using discrete Fourier transforms, with the optimal number of harmonics selected via information criteria (e.g., AIC/BIC) to capture underlying cycles and filter noise.\n- **Pattern Recognition:** Mathematical algorithms detect specific curve patterns (double tops, triple bottoms, triangles) by analyzing reconstructed signals, leveraging geometric and statistical criteria for pattern validation.\n- **Clustering Algorithms:** KMeans clustering segments extremums extracted from Fourier curves, identifying statistically significant price zones and targets.\n- **Divergence Detection:** Quantitative methods identify divergences between price and technical indicators (MACD, RSI, Stochastic), using correlation analysis and signal processing to anticipate major trend reversals.\n- **Candlestick Pattern Analysis:** Algorithmic detection of complex candlestick patterns (Dark Cloud Cover, Morning Star, Hammer, Engulfing, Harami, Evening Star) is based on strict mathematical definitions and multi-period context analysis.\n### Artificial Intelligence and Deep Learning\n- **News Scoring Model:** A custom deep learning model processes financial news, using natural language processing (NLP) to assign impact scores to assets. The model is trained on labeled datasets and evaluated using precision, recall, and F1-score.\n- **Model Integration:** Predictions from technical and news-based models are combined using ensemble methods to enhance robustness and accuracy.\n### Computational Excellence\n- **C++ Core, MPI & CUDA:** All algorithms are implemented in C++ for performance, with distributed computation via MPI and GPU acceleration through CUDA. This ensures daily processing of tens of thousands of assets within strict time constraints.\n- **Distributed Data Storage:** Data is partitioned and replicated across nodes, with failover and redundancy mechanisms for reliability.\n## 3. Validation and Continuous Improvement\n- **Post-Diction:** Systematic application of predictive models to historical data (rolling three-year windows) validates accuracy and identifies areas for refinement.\n- **Performance Metrics:** Key metrics (RMSE, precision, recall, latency) are tracked and reported for each prediction cycle.\n- **Feedback Loops:** User and stakeholder feedback is integrated into model updates and project planning.\n## Conclusion\n**Stock Market Weather** exemplifies a powerful synergy of advanced mathematics, machine learning, and professional project management. Its rigorous structure, mathematical sophistication, and scalable infrastructure make it a benchmark for modern financial forecasting projects—combining scientific depth with operational excellence.`,
  "author": "Laouej Soulimen",
  "date": "2024-07-08",
  "category": "Data Science",
  "tags": ["Stock Market", "Data Science", "Technical Analysis", "Project Management", "Mathematics", "Machine Learning", "AI"],
  "read_time": "14 min"
},

  {
    "id": 2,
    "title": "Data Science et Python : Guide Complet pour Débutants",
    "slug": "data-science-python-guide",
    image:"images/data-viz.jpg",
    "excerpt": "Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas.",
    content: `
  <h1>HARMONIE RÉSEAUX DE NEURONES</h1>
  
  <p>Les réseaux de neurones utilisent la fonction d'activation sigmoïde définie par :</p>
  $$\\sigma(x) = \\frac{1}{1 + e^{-x}}$$
  
  <p>Pour un neurone simple, la sortie est calculée comme :</p>
  
  
  <p>où \\(w_i\\) représente les poids et \\(b\\) le biais.</p>
`,

    "author": "LjSoulimen",
    "date": "2025-06-19",
    "category": "Data Science",
    "tags": ["Python", "Data Science", "Pandas", "NumPy"],
    "read_time": "8 min"
  },
  {
    "id": 3,
    "title": "Machine Learning : Algorithmes Supervisés vs Non-Supervisés",
    "slug": "ml-supervise-non-supervise",
    image:"images/data-viz.jpg",
    "excerpt": "Fusce consequat. Nulla nisl. Nunc nisl. Duis bibendum, felis sed interdum venenatis, turpis enim blandit mi.",
    "content": "# Machine Learning : Algorithmes Supervisés vs Non-Supervisés\n\n## Qu'est-ce que le Machine Learning ?\n\nLe Machine Learning est une branche de l'Intelligence Artificielle qui permet aux machines d'apprendre et de prendre des décisions sans être explicitement programmées pour chaque tâche.\n\n## Apprentissage Supervisé\n\n### Définition\nL'apprentissage supervisé utilise des données étiquetées pour entraîner le modèle. Le modèle apprend la relation entre les variables d'entrée et la variable cible.\n\n### Types d'algorithmes supervisés\n\n#### Classification\n- **Objectif** : Prédire une catégorie ou classe\n- **Exemples** : Détection de spam, diagnostic médical\n- **Algorithmes** : Random Forest, SVM, Naive Bayes\n\n#### Régression\n- **Objectif** : Prédire une valeur numérique continue\n- **Exemples** : Prix immobilier, température\n- **Algorithmes** : Régression linéaire, Random Forest Regressor\n\n### Exemple pratique\n\n```python\nfrom sklearn.ensemble import RandomForestClassifier\nfrom sklearn.model_selection import train_test_split\nfrom sklearn.metrics import accuracy_score\n\n# Séparation des données\nX_train, X_test, y_train, y_test = train_test_split(X, y, test_size=0.2)\n\n# Entraînement\nmodel = RandomForestClassifier()\nmodel.fit(X_train, y_train)\n\n# Prédiction\ny_pred = model.predict(X_test)\naccuracy = accuracy_score(y_test, y_pred)\nprint(f'Précision: {accuracy}')\n```\n\n## Apprentissage Non-Supervisé\n\n### Définition\nL'apprentissage non-supervisé travaille avec des données non étiquetées pour découvrir des patterns cachés ou des structures dans les données.\n\n### Types d'algorithmes non-supervisés\n\n#### Clustering\n- **Objectif** : Grouper des données similaires\n- **Exemples** : Segmentation client, regroupement de documents\n- **Algorithmes** : K-Means, DBSCAN, Hierarchical Clustering\n\n#### Réduction de dimensionnalité\n- **Objectif** : Simplifier les données en conservant l'information importante\n- **Exemples** : Visualisation, compression\n- **Algorithmes** : PCA, t-SNE, UMAP\n\n### Exemple de clustering\n\n```python\nfrom sklearn.cluster import KMeans\nimport matplotlib.pyplot as plt\n\n# Application de K-Means\nkmeans = KMeans(n_clusters=3)\ncluster_labels = kmeans.fit_predict(X)\n\n# Visualisation\nplt.scatter(X[:, 0], X[:, 1], c=cluster_labels)\nplt.title('Résultats du clustering K-Means')\nplt.show()\n```\n\n## Comparaison\n\n| Aspect | Supervisé | Non-Supervisé |\n|--------|-----------|---------------|\n| Données | Étiquetées | Non étiquetées |\n| Objectif | Prédiction | Découverte de patterns |\n| Validation | Métriques classiques | Plus complexe |\n| Applications | Classification, Régression | Clustering, Réduction dimensionnalité |\n\n## Quand utiliser quoi ?\n\n### Apprentissage Supervisé\n- Quand vous avez des données étiquetées\n- Pour des tâches de prédiction précises\n- Quand l'objectif est clairement défini\n\n### Apprentissage Non-Supervisé\n- Pour explorer des données inconnues\n- Découvrir des patterns cachés\n- Préprocessing avant l'apprentissage supervisé\n\n## Conclusion\n\nLe choix entre apprentissage supervisé et non-supervisé dépend de vos données et objectifs. Souvent, une approche hybride combinant les deux peut être la plus efficace.",
    "author": "LjSoulimen",
    "date": "2025-06-18",
    "category": "Machine Learning",
    "tags": ["ML", "Supervised Learning", "Unsupervised Learning"],
    "read_time": "12 min"
  },
  {
    id:4,
    title:"Les harmonies de Fourier en Bourse",
    image:"images/fourier.jpg",
    slug:"Fourier-for-trading",
    excerpt:"prédire la bourse au travers des harmonies de fourier, un pas gigantesque",
    content: `
# Titre de l'article

Voici une introduction.
Un paragraphe explicatif.

<img src="images/fourier.jpg" alt="Explication 1" style="width:100%;max-width:500px;margin:16px 0;">
<img src="images/fourier.jpg" alt="Explication 1" style="width:100%;max-width:500px;margin:16px 0;">
<img src="images/fourier.jpg" alt="Explication 1" style="width:100%;max-width:500px;margin:16px 0;">
Encore du texte.

![Graphique](images/fourier.jpg)

Conclusion.
`,
"author": "LjSoulimen",
    "date": "2025-06-18",
    "category": "Machine Learning",
    "tags": ["ML", "Supervised Learning", "Unsupervised Learning"],
    "read_time": "12 min"
  }
];

// Liste des catégories
const categories = [
  "Tous",
  "IA Fondamentaux",
  "Data Science", 
  "Machine Learning",
  "Deep Learning",
  "Computer Vision",
  "NLP",
  "MLOps",
  "Éthique IA",
  "Time Series",
  "Unsupervised Learning",
  "Feature Engineering",
  "Recommender Systems",
  "Reinforcement Learning",
  "Image Processing",
  "Big Data",
  "AutoML",
  "Graph Neural Networks",
  "Explainable AI",
  "Transformers",
  "Edge AI",
  "Quantum ML",
  "Data Visualization"
];

// État global
let currentPage = 1;
let currentCategory = 'Tous';
let searchQuery = '';
let currentRoute = '';
let currentArticleSlug = '';
const articlesPerPage = 8;

// Éléments DOM
const homePage = document.getElementById('home-page');
const articlePage = document.getElementById('article-page');
const articlesGrid = document.getElementById('articlesGrid');
const pagination = document.getElementById('pagination');
const categoryFilter = document.getElementById('categoryFilter');
const searchInput = document.getElementById('searchInput');
const searchToggle = document.getElementById('searchToggle');
const searchContainer = document.getElementById('searchContainer');
const articleTitle = document.getElementById('article-title');
const articleContent = document.getElementById('article-content');
const articleCategory = document.getElementById('article-category');
const articleDate = document.getElementById('article-date');
const articleReadTime = document.getElementById('article-read-time');
const articleAuthor = document.getElementById('article-author');
const articleTags = document.getElementById('article-tags');
const breadcrumbTitle = document.getElementById('breadcrumb-title');
const relatedArticles = document.getElementById('related-articles');

// Fonctions utilitaires
function getIconForCategory(category) {
  const iconMap = {
    'IA Fondamentaux': '🧠',
    'Data Science': '📊',
    'Machine Learning': '🤖',
    'Deep Learning': '🔥',
    'Computer Vision': '👁️',
    'NLP': '💬',
    'MLOps': '⚙️',
    'Éthique IA': '⚖️',
    'Time Series': '📈',
    'Unsupervised Learning': '🔍',
    'Feature Engineering': '🔧',
    'Recommender Systems': '⭐',
    'Reinforcement Learning': '🎮',
    'Image Processing': '🖼️',
    'Big Data': '💾',
    'AutoML': '🚀',
    'Graph Neural Networks': '🕸️',
    'Explainable AI': '💡',
    'Transformers': '🔄',
    'Edge AI': '📱',
    'Quantum ML': '⚛️',
    'Data Visualization': '📊'
  };
  return iconMap[category] || '📄';
}

function formatDate(dateString) {
  const date = new Date(dateString);
  return date.toLocaleDateString('fr-FR', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  });
}

// Fonction pour convertir Markdown en HTML (version simplifiée)
function markdownToHtml(markdown) {
  // Titres
  markdown = markdown.replace(/^# (.*$)/gm, '<h1>$1</h1>');
  markdown = markdown.replace(/^## (.*$)/gm, '<h2>$1</h2>');
  markdown = markdown.replace(/^### (.*$)/gm, '<h3>$1</h3>');
  markdown = markdown.replace(/^#### (.*$)/gm, '<h4>$1</h4>');
  markdown = markdown.replace(/^##### (.*$)/gm, '<h5>$1</h5>');
  markdown = markdown.replace(/^###### (.*$)/gm, '<h6>$1</h6>');
  
  // Emphasis (italique et gras)
  markdown = markdown.replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>');
  markdown = markdown.replace(/\*([^*]+)\*/g, '<em>$1</em>');
  markdown = markdown.replace(/_([^_]+)_/g, '<em>$1</em>');
  
  // Listes
  markdown = markdown.replace(/^\s*-\s+(.*$)/gm, '<li>$1</li>');
  markdown = markdown.replace(/^\s*\d+\.\s+(.*$)/gm, '<li>$1</li>');
  
  // Convertir les blocs de liste en éléments de liste
  let inList = false;
  const lines = markdown.split('\n');
  for (let i = 0; i < lines.length; i++) {
    if (lines[i].includes('<li>')) {
      if (!inList) {
        lines[i] = '<ul>' + lines[i];
        inList = true;
      }
    } else if (inList) {
      lines[i-1] = lines[i-1] + '</ul>';
      inList = false;
    }
  }
  if (inList) {
    lines[lines.length-1] = lines[lines.length-1] + '</ul>';
  }
  markdown = lines.join('\n');
  
  // Paragraphes - remplacement des lignes vides par des balises de paragraphe
  markdown = markdown.replace(/^(?!<[h|u|l|p|b])(.*$)/gm, function(match) {
    if (match.trim() === '') return match;
    return '<p>' + match + '</p>';
  });
  
  // Liens
  markdown = markdown.replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2">$1</a>');
  
  // Blockquotes
  markdown = markdown.replace(/^>\s(.*$)/gm, '<blockquote>$1</blockquote>');
  
  // Code blocks
  let codeBlocks = markdown.match(/```[\s\S]*?```/g);
  if (codeBlocks) {
    codeBlocks.forEach(block => {
      const content = block.replace(/```(?:(\w+))?\n([\s\S]*?)```/g, function(match, lang, code) {
        return '<pre><code>' + code + '</code></pre>';
      });
      markdown = markdown.replace(block, content);
    });
  }
  
  // Inline code
  markdown = markdown.replace(/`([^`]+)`/g, '<code>$1</code>');
  
  // Line breaks
  markdown = markdown.replace(/\n\n/g, '<br><br>');
  
  // Tables (simplifiées)
  const tableRegex = /\|(.+)\|\n\|(?:[-:]+\|)+\n((?:\|.+\|\n)+)/g;
  markdown = markdown.replace(tableRegex, function(match, headers, rows) {
    const headerCells = headers.split('|').map(cell => cell.trim()).filter(Boolean);
    const headerRow = '<tr>' + headerCells.map(cell => `<th>${cell}</th>`).join('') + '</tr>';
    
    const tableRows = rows.trim().split('\n').map(row => {
      const cells = row.split('|').map(cell => cell.trim()).filter(Boolean);
      return '<tr>' + cells.map(cell => `<td>${cell}</td>`).join('') + '</tr>';
    }).join('');
    
    return `<table><thead>${headerRow}</thead><tbody>${tableRows}</tbody></table>`;
  });
  
  // Horizontal rule
  markdown = markdown.replace(/^---$/gm, '<hr>');
  
  return markdown;
}

// Fonctions de routage
function handleRouteChange() {
  const hash = window.location.hash || '#/';
  const route = hash.slice(1); // Enlever le # au début
  
  currentRoute = route;
  
  if (route.startsWith('/article/')) {
    // Page d'article individuel
    const slug = route.replace('/article/', '');
    currentArticleSlug = slug;
    showArticlePage(slug);
  } else {
    // Page d'accueil ou autre section de la page d'accueil
    showHomePage();
    
    // Gérer le défilement vers les sections spécifiques
    if (route !== '/') {
      const sectionId = route.slice(1); // Enlever le / au début
      const section = document.getElementById(sectionId);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 100);
      }
    }
  }
}
function renderArticleContent(articleId) {
  const article = articles.find(a => a.id === articleId);
  const contentDiv = document.getElementById('article-content');
  
  // Injecter le contenu
  contentDiv.innerHTML = article.content;
  
  // Déclencher le rendu MathJax
  if (window.MathJax) {
    MathJax.typesetPromise([contentDiv]).then(() => {
      console.log('Équations rendues avec succès');
    }).catch((err) => console.log('Erreur de rendu:', err));
  }
}
function loadMathJax() {
  if (!document.getElementById('MathJax-script')) {
    const script = document.createElement('script');
    script.id = 'MathJax-script';
    script.src = 'https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js';
    script.async = true;
    document.head.appendChild(script);
  }
}
window.MathJax = {
  loader: {
    load: ['[tex]/ams', '[tex]/physics', '[tex]/color']
  },
  tex: {
    packages: {'[+]': ['ams', 'physics', 'color']},
    inlineMath: [['\\(', '\\)'], ['$', '$']],
    displayMath: [['\\[', '\\]'], ['$$', '$$']],
    macros: {
      RR: '{\\mathbb{R}}',
      NN: '{\\mathbb{N}}',
      gradient: '{\\nabla}',
      loss: '{\\mathcal{L}}'
    }
  }
};

function showHomePage() {
  homePage.classList.remove('hidden');
  articlePage.classList.add('hidden');
  displayArticles();
}

function showArticlePage(slug) {
  homePage.classList.add('hidden');
  articlePage.classList.remove('hidden');
  
  const article = articlesData.find(article => article.slug === slug);
  
  if (!article) {
    // Article non trouvé, rediriger vers la page d'accueil
    window.location.hash = '#/';
    return;
  }
  function forceFullMathJaxRender(element) {
  if (!window.MathJax) return;
  
  MathJax.startup.promise.then(() => {
    // Premier rendu
    return MathJax.typesetPromise([element]);
  }).then(() => {
    // Délai court puis second rendu pour s'assurer que tout est traité
    return new Promise(resolve => {
      setTimeout(() => {
        MathJax.typesetPromise([element]).then(resolve);
      }, 100);
    });
  }).then(() => {
    console.log('Double rendu MathJax terminé');
  });
}

  // Mettre à jour les informations de l'article
  articleTitle.textContent = article.title;
  articleContent.innerHTML = markdownToHtml(article.content);
  articleCategory.textContent = article.category;
  articleDate.textContent = formatDate(article.date);
  articleReadTime.textContent = article.read_time;
  articleAuthor.textContent = article.author;
  breadcrumbTitle.textContent = article.title;
  
  // Afficher les tags
  articleTags.innerHTML = article.tags.map(tag => 
    `<span class="article-tag">#${tag}</span>`
  ).join('');
  
  // Afficher les articles connexes (3 articles aléatoires différents de l'article actuel)
  const otherArticles = articlesData.filter(a => a.id !== article.id);
  const shuffled = [...otherArticles].sort(() => 0.5 - Math.random());
  const relatedArticlesList = shuffled.slice(0, 3);
  
  relatedArticles.innerHTML = relatedArticlesList.map(relatedArticle => `
    <div class="related-article-card" onclick="navigateToArticle('${relatedArticle.slug}')">
      <h4>${relatedArticle.title}</h4>
      <p>${relatedArticle.category} · ${relatedArticle.read_time}</p>
    </div>
  `).join('');
  
  // Scroll en haut de la page
  window.scrollTo(0, 0);
}

function navigateToArticle(slug) {
  window.location.hash = `#/article/${slug}`;
}

// Fonctions de filtrage et de recherche
function filterArticles() {
  let filtered = articlesData;

  // Filtrer par catégorie
  if (currentCategory !== 'Tous') {
    filtered = filtered.filter(article => article.category === currentCategory);
  }

  // Filtrer par recherche
  if (searchQuery) {
    const query = searchQuery.toLowerCase();
    filtered = filtered.filter(article => 
      article.title.toLowerCase().includes(query) ||
      article.excerpt.toLowerCase().includes(query) ||
      article.category.toLowerCase().includes(query) ||
      article.tags.some(tag => tag.toLowerCase().includes(query))
    );
  }

  return filtered;
}

function displayArticles() {
  const filteredArticles = filterArticles();
  const startIndex = (currentPage - 1) * articlesPerPage;
  const endIndex = startIndex + articlesPerPage;
  const articlesToShow = filteredArticles.slice(startIndex, endIndex);

  if (articlesToShow.length === 0) {
    articlesGrid.innerHTML = `
      <div class="no-articles">
        <p>Aucun article trouvé pour votre recherche.</p>
      </div>
    `;
    return;
  }

articlesGrid.innerHTML = articlesToShow.map(article => `
  <article class="article-card" onclick="navigateToArticle('${article.slug}')">
    <div class="article-card__image">
      <img src="${article.image ? article.image : 'images/default.jpg'}" alt="${article.title}" class="blog-cover" loading="lazy">
    </div>
    <div class="article-card__content">
      <div class="article-card__meta">
        <span class="article-card__category">${article.category}</span>
        <span class="article-card__date">${formatDate(article.date)}</span>
      </div>
      <h3 class="article-card__title">${article.title}</h3>
      <p class="article-card__excerpt">${article.excerpt}</p>
      <div class="article-card__footer">
        <span class="article-card__author">Par ${article.author}</span>
        <span class="article-card__read-time">${article.read_time}</span>
      </div>
    </div>
  </article>
`).join('');


  displayPagination(filteredArticles.length);
}

function displayPagination(totalArticles) {
  const totalPages = Math.ceil(totalArticles / articlesPerPage);
  
  if (totalPages <= 1) {
    pagination.innerHTML = '';
    return;
  }

  let paginationHTML = '';

  // Bouton précédent
  paginationHTML += `
    <button class="pagination-btn" ${currentPage === 1 ? 'disabled' : ''} onclick="changePage(${currentPage - 1})">
      ←
    </button>
  `;

  // Numéros de page
  const startPage = Math.max(1, currentPage - 2);
  const endPage = Math.min(totalPages, currentPage + 2);

  if (startPage > 1) {
    paginationHTML += `<button class="pagination-btn" onclick="changePage(1)">1</button>`;
    if (startPage > 2) {
      paginationHTML += `<span class="pagination-ellipsis">...</span>`;
    }
  }

  for (let i = startPage; i <= endPage; i++) {
    paginationHTML += `
      <button class="pagination-btn ${i === currentPage ? 'active' : ''}" onclick="changePage(${i})">
        ${i}
      </button>
    `;
  }

  if (endPage < totalPages) {
    if (endPage < totalPages - 1) {
      paginationHTML += `<span class="pagination-ellipsis">...</span>`;
    }
    paginationHTML += `<button class="pagination-btn" onclick="changePage(${totalPages})">${totalPages}</button>`;
  }

  // Bouton suivant
  paginationHTML += `
    <button class="pagination-btn" ${currentPage === totalPages ? 'disabled' : ''} onclick="changePage(${currentPage + 1})">
      →
    </button>
  `;

  pagination.innerHTML = paginationHTML;
}

function changePage(page) {
  const filteredArticles = filterArticles();
  const totalPages = Math.ceil(filteredArticles.length / articlesPerPage);
  
  if (page >= 1 && page <= totalPages) {
    currentPage = page;
    displayArticles();
    
    // Scroll vers la section blog
    document.getElementById('blog').scrollIntoView({ 
      behavior: 'smooth',
      block: 'start'
    });
  }
}

function goBackToBlog() {
  window.location.hash = '#/blog';
}

// Initialiser les catégories dans le dropdown
function initializeCategories() {
  categoryFilter.innerHTML = categories.map(category => 
    `<option value="${category}">${category}</option>`
  ).join('');
}

// Configuration des écouteurs d'événements
function setupEventListeners() {
  // Filtre par catégorie
  categoryFilter.addEventListener('change', (e) => {
    currentCategory = e.target.value;
    currentPage = 1;
    displayArticles();
  });

  // Recherche
  searchInput.addEventListener('input', (e) => {
    searchQuery = e.target.value;
    currentPage = 1;
    displayArticles();
  });

  // Bouton de recherche
  searchToggle.addEventListener('click', () => {
    searchContainer.classList.toggle('visible');
    if (searchContainer.classList.contains('visible')) {
      searchInput.focus();
    }
  });



  // Formulaire de newsletter
  const newsletterForm = document.getElementById('newsletterForm');
  newsletterForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = e.target.querySelector('input[type="email"]').value;
    const button = e.target.querySelector('button');
    const originalText = button.textContent;
    
    button.textContent = 'Inscription...';
    button.disabled = true;
    
    setTimeout(() => {
      alert(`Merci ! Vous êtes maintenant abonné(e) avec l'email: ${email}`);
      e.target.reset();
      button.textContent = originalText;
      button.disabled = false;
    }, 2000);
  });

  // Effet de défilement pour l'en-tête
  let lastScrollY = window.scrollY;
  window.addEventListener('scroll', () => {
    const header = document.querySelector('.header');
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > 100) {
      header.style.background = 'rgba(255, 255, 255, 0.98)';
      header.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
    } else {
      header.style.background = 'rgba(255, 255, 255, 0.95)';
      header.style.boxShadow = 'none';
    }
    
    lastScrollY = currentScrollY;
  });

  // Observer pour les animations au scroll
  const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  }, observerOptions);

  // Observer les éléments pour l'animation
  function observeElements() {
    document.querySelectorAll('.article-card, .service-card').forEach(el => {
      el.style.opacity = '0';
      el.style.transform = 'translateY(20px)';
      el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
      observer.observe(el);
    });
  }

  // Observer les éléments après le rendu initial
  setTimeout(observeElements, 100);

  // Écouter les changements de route
  window.addEventListener('hashchange', handleRouteChange);
}

// Raccourcis clavier
document.addEventListener('keydown', (e) => {
  // Ctrl/Cmd + K pour activer la recherche
  if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
    e.preventDefault();
    searchContainer.classList.toggle('visible');
    if (searchContainer.classList.contains('visible')) {
      searchInput.focus();
    }
  }
  
  // Échap pour fermer la recherche
  if (e.key === 'Escape' && searchContainer.classList.contains('visible')) {
    searchContainer.classList.remove('visible');
    searchInput.blur();
  }
});

// Initialiser l'application
function init() {
  // Exposer les fonctions nécessaires globalement
  window.navigateToArticle = navigateToArticle;
  window.changePage = changePage;
  window.goBackToBlog = goBackToBlog;
  
  initializeCategories();
  setupEventListeners();
  
  // Traiter la route initiale
  handleRouteChange();
  
  console.log('Portfolio initialisé avec succès !');
}
window.MathJax = {
  tex: {
    inlineMath: [['\\(', '\\)'], ['$', '$']],
    displayMath: [['\\[', '\\]'], ['$$', '$$']]
  },
  startup: {
    ready: () => {
      MathJax.startup.defaultReady();
    }
  }
};



// Ouvrir le formulaire modal au clic sur "Réserver un service"
document.addEventListener('DOMContentLoaded', function() {
  // Si plusieurs boutons, adapte la classe ou l'id ci-dessous
  document.querySelectorAll('.service-card__cta, .btn--primary-reservation').forEach(btn => {
    btn.addEventListener('click', function(e) {
      e.preventDefault();
      document.getElementById('reservationModal').classList.remove('hidden');
    });
  });

  // Fermer le modal
  document.getElementById('closeReservationModal').onclick = function() {
    document.getElementById('reservationModal').classList.add('hidden');
    document.getElementById('reservationForm').reset();
    document.getElementById('reservationSuccess').classList.add('hidden');
    document.getElementById('reservationForm').classList.remove('hidden');
  };

  // Fermer en cliquant sur le fond
  document.getElementById('reservationModal').addEventListener('click', function(e) {
    if (e.target === this) {
      this.classList.add('hidden');
      document.getElementById('reservationForm').reset();
      document.getElementById('reservationSuccess').classList.add('hidden');
      document.getElementById('reservationForm').classList.remove('hidden');
    }
  });
});

document.getElementById('reservationForm').addEventListener('submit', function(e) {
  e.preventDefault();
  const form = this;
  fetch(form.action, {
    method: 'POST',
    body: new FormData(form),
    headers: { 'Accept': 'application/json' }
  }).then(response => {
    if (response.ok) {
      form.classList.add('hidden');
      document.getElementById('reservationSuccess').classList.remove('hidden');
    } else {
      alert("Erreur lors de l'envoi. Essayez plus tard.");
    }
  }).catch(error => {
    alert("Erreur lors de l'envoi. Essayez plus tard.");
  });
});

// Démarrer l'application quand le DOM est chargé
document.addEventListener('DOMContentLoaded', init);