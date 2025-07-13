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
  **Stock Market Weather** stands out as an ambitious, large-scale data science initiative, uniting advanced mathematical modeling with rigorous project management. The goal: deliver reliable, scalable, and actionable stock market predictions for thousands of assets every day.\n## 1. Robust Project Management Approach\n### Structured Methodology\n- **Agile and Iterative Development:** I managed the project by using Agile principles, with sprints dedicated to data engineering, model development, and infrastructure optimization.\n- **Clear Work Breakdown Structure (WBS):** Tasks are divided into modules—data acquisition, signal processing, machine learning, infrastructure, and validation—each with defined deliverables and timelines.\n- **Version Control and Continuous Integration:** All code is versioned (e.g., Git), with automated testing and deployment pipelines ensuring code quality and reproducibility.\n- **Scalability and Resource Allocation:** The architecture is designed to scale horizontally across servers and GPUs, with workload balancing and monitoring for optimal resource use.\n- **Documentation and Knowledge Sharing:** Comprehensive technical documentation and regular team reviews guarantee maintainability and knowledge transfer.\n### Risk Management\n- **Data Quality Assurance:** Automated checks and anomaly detection on incoming data streams.\n- **Model Validation:** Systematic backtesting and post-diction on rolling three-year windows to ensure predictive reliability.\n- **Performance Monitoring:** Real-time dashboards track computational loads, prediction accuracy, and infrastructure health.\n## 2. Advanced Mathematical and Analytical Foundations\n### Mathematical Rigor\n- **Fourier Analysis:** Each price series is decomposed using discrete Fourier transforms, with the optimal number of harmonics selected via information criteria (e.g., AIC/BIC) to capture underlying cycles and filter noise.\n- **Pattern Recognition:** Mathematical algorithms detect specific curve patterns (double tops, triple bottoms, triangles) by analyzing reconstructed signals, leveraging geometric and statistical criteria for pattern validation.\n- **Clustering Algorithms:** KMeans clustering segments extremums extracted from Fourier curves, identifying statistically significant price zones and targets.\n- **Divergence Detection:** Quantitative methods identify divergences between price and technical indicators (MACD, RSI, Stochastic), using correlation analysis and signal processing to anticipate major trend reversals.\n- **Candlestick Pattern Analysis:** Algorithmic detection of complex candlestick patterns (Dark Cloud Cover, Morning Star, Hammer, Engulfing, Harami, Evening Star) is based on strict mathematical definitions and multi-period context analysis.\n### Artificial Intelligence and Deep Learning\n- **News Scoring Model:** A custom deep learning model processes financial news, using natural language processing (NLP) to assign impact scores to assets. The model is trained on labeled datasets and evaluated using precision, recall, and F1-score.\n- **Model Integration:** Predictions from technical and news-based models are combined using ensemble methods to enhance robustness and accuracy.\n### Computational Excellence\n- **C++ Core, MPI & CUDA:** All algorithms are implemented in C++ for performance, with distributed computation via MPI and GPU acceleration through CUDA. This ensures daily processing of tens of thousands of assets within strict time constraints.\n- **Distributed Data Storage:** Data is partitioned and replicated across nodes, with failover and redundancy mechanisms for reliability.\n## 3. Validation and Continuous Improvement\n- **Post-Diction:** Systematic application of predictive models to historical data (rolling three-year windows) validates accuracy and identifies areas for refinement.\n- **Performance Metrics:** Key metrics (RMSE, precision, recall, latency) are tracked and reported for each prediction cycle.\n- **Feedback Loops:** User and stakeholder feedback is integrated into model updates and project planning.\n## Conclusion\n**Stock Market Weather** exemplifies a powerful synergy of advanced mathematics, machine learning, and professional project management. Its rigorous structure, mathematical sophistication, and scalable infrastructure make it a benchmark for modern financial forecasting projects—combining scientific depth with operational excellence.`,
  "author": "Laouej Soulimen",
  "date": "2024-07-08",
  "category": "Data Science",
  "tags": ["Stock Market", "Data Science", "Technical Analysis", "Project Management", "Mathematics", "Machine Learning", "AI"],
  "read_time": "8 min"
},
{
  "id": 2,
  "title": "Blockchain Infrastructure Development: Securing Financial Transactions",
  "slug": "blockchain-infrastructure",
  "image": "images/blackchainprez.png",
  "excerpt": "Discover how I implemented a robust blockchain infrastructure to ensure integrity, traceability, and security for all financial transactions. Explore the project's cryptographic architecture, consensus mechanisms, and operational impact.",
  "content": "# Blockchain Infrastructure : Securing Financial Transactions\n<div style=\"text-align: center;\">\n  <img src=\"images/block.png\" alt=\"Blockchain Infrastructure\" style=\"width:100%;max-width:500px;margin:16px 0;\">\n</div>\nThe **Blockchain Infrastructure** project was launched to develop and deploy a secure, distributed ledger system, ensuring the **integrity** and **traceability** of all financial transactions within the company. This initiative addresses the growing demand for transparency, security, and operational efficiency in the financial sector.\n## 1. Core Objectives\n- **Transaction Integrity:** Guarantee that every transaction is immutable and protected from unauthorized modifications.\n- **Enhanced Traceability:** Provide detailed, auditable tracking of each transaction from initiation to completion.\n- **Strengthened Security:** Shield sensitive financial data against tampering and cyber threats.\n- **Distributed Validation:** Enable multiple nodes to validate transactions, eliminating single points of failure and increasing system resilience.\n## 2. Technical Architecture\n### Cryptographic Foundations\n- **Hash Functions (SHA256):** Each block’s data is hashed, producing a unique fingerprint. Any change in input radically alters the output hash, ensuring data integrity. Hashing is irreversible, making it impossible to reconstruct original data from the hash.\n- **Block Structure:** Every block contains a batch of transactions, a timestamp, its own hash, the hash of the previous block, and a nonce for proof-of-work.\n- **Chaining of Blocks:** Each block is cryptographically linked to its predecessor, forming an unbreakable chain. Altering any block breaks the chain’s integrity, as subsequent hashes no longer match.\n- **Distributed Ledger:** The blockchain is replicated across multiple nodes, providing redundancy and high availability.\n### Consensus Mechanism\n- **Proof of Work (PoW):** To add a new block, nodes must solve a computational puzzle, making unauthorized changes computationally impractical. The difficulty of the puzzle is dynamically adjusted to maintain a consistent block creation rate.\n- **Nonce Calculation:** The system iteratively searches for a nonce value that produces a hash with a required number of leading zeros, ensuring the block meets the current difficulty level.\n### Security and Compliance\n- **Immutability:** Once validated, blocks cannot be altered without redoing the proof-of-work for all subsequent blocks, providing robust protection against tampering.\n- **Transparency:** Authorized users can view the blockchain, ensuring accountability and auditability.\n- **Access Control:** Only authenticated users and systems can initiate or validate transactions, preventing unauthorized access.\n- **Data Privacy:** Sensitive personal data is stored outside the blockchain, ensuring compliance with privacy regulations (e.g., GDPR).\n## 3. Implementation Highlights\n- **High-Performance Computing:** The infrastructure leverages powerful servers and GPU clusters to efficiently handle the computational demands of proof-of-work.\n- **Automated Monitoring:** Real-time dashboards track hash rates, block creation times, and system health, enabling proactive maintenance and rapid incident response.\n- **Scalability:** The architecture is designed for horizontal scalability, accommodating increased transaction volumes and additional nodes as business needs grow.\n## 4. Business Impact\n- **Regulatory Compliance:** The blockchain infrastructure provides an immutable audit trail, supporting compliance with financial regulations.\n- **Operational Efficiency:** Automated validation and distributed consensus reduce manual intervention and minimize the risk of human error.\n- **Customer Trust:** Enhanced transparency and security foster greater confidence among clients and partners.\n## Conclusion\nThe **Blockchain Infrastructure** project marks a significant leap in securing and streamlining financial operations. By combining advanced cryptographic techniques, distributed systems, and robust project management, the company now benefits from a transparent, tamper-proof, and highly resilient transaction platform—setting a new standard for financial integrity and traceability.",
  "author": "Laouej Soulimen",
  "date": "2025-05-09",
  "category": "Blockchain",
  "tags": ["Blockchain", "Security", "Financial Transactions", "Distributed Ledger", "Cryptography", "Project Management"],
  "read_time": "6 min"
},
{
  "id": 3,
  "title": "WikiBDIA: Transforming Office Productivity with AI in the company",
  "slug": "wikibedia",
  "image": "images/miniwikibedia.png",
  "excerpt": "Discover how WikiBDIA at Bourse Direct integrates conversational AI, self-reading documents, and image generation to revolutionize office productivity with hands-free, multimedia solutions—all fully internal and privacy-focused.",
  "content": "# WikiBDIA: Transforming Office Productivity \n<div style=\"text-align: center;\"><img src=\"images/wikibedia.png\" alt=\"WikiBDIA Office Productivity\" style=\"width:100%;max-width:500px;margin:16px 0;\"></div>\n**WikiBDIA** at the company is a next-generation, fully internal productivity suite, designed to revolutionize office workflows while guaranteeing maximum data privacy. All AI models, user interfaces, and embedding modules are open source, installed, and run exclusively on local infrastructure—ensuring that sensitive company data never leaves the organization.\n## 1. Project Overview\nWikiBDIA was created to streamline and automate daily office tasks through:\n- **Conversational LLM Agent:** An advanced, locally-hosted chatbot that understands and responds to natural language queries, providing secure access to internal knowledge, policies, and procedures.\n- **Self-Reading Document Module:** Automated document ingestion and comprehension, with all processing performed on-premises to prevent data leakage.\n- **Image Generation Module:** AI-powered creation of visual content, running locally to support presentations, documentation, and creative sessions without external dependencies.\n## 2. 100% Internal and Open Source Architecture\n- **Open Source Models:** All AI components—language models, vision models, and embedding frameworks—are based on open source technologies. This approach ensures transparency, flexibility, and control over the entire stack.\n- **Local Deployment:** Every module, from the backend AI engines to the user interface, is installed and executed on Bourse Direct's own servers and workstations. No cloud or third-party APIs are involved at any stage.\n- **Internal Embedding:** All vectorization and semantic search operations are handled by in-house embedding models, guaranteeing that document content and queries remain strictly confidential.\n- **UI and User Experience:** The user interface is custom-built and hosted internally, providing a seamless, secure, and responsive experience tailored to the company's needs.\n## 3. Data Privacy and Security by Design\n- **No Data Leaves the Premises:** All data processing, storage, and inference are performed locally. There is zero risk of data exfiltration to external providers or platforms.\n- **Open Source Transparency:** Relying on open source models allows for thorough auditing and customization, eliminating hidden data flows or vendor lock-in.\n- **Secure Authentication:** User access is managed internally, with robust authentication and authorization protocols.\n- **Compliance:** This architecture supports full compliance with data privacy regulations (e.g., GDPR), as all personal and business data remains under company control.\n## 4. Impact on Office Productivity\n- **Hands-Free Efficiency:** Employees interact naturally with the system, retrieving information and generating content without manual searching or editing.\n- **Enhanced Collaboration:** Real-time, AI-driven responses and multimedia outputs improve team communication and decision-making—all within a secure, internal environment.\n- **Accessibility:** Text-to-speech and conversational interfaces make knowledge and content accessible to all, including those with visual or physical impairments.\n- **Reduced Routine Work:** Automating repetitive tasks minimizes errors and reduces cognitive load on staff, while ensuring that sensitive information is never exposed.\n## 5. Business Value\nThe internal, open source, and fully local nature of WikiBDIA delivers substantial business value. Time savings are maximized by automating information retrieval and content creation, while the risk of data breaches is virtually eliminated. Decision-making is accelerated with instant, data-driven insights and visualizations, and employee satisfaction rises as routine tasks are handled securely and efficiently. Most importantly, Bourse Direct maintains full control and sovereignty over its data and digital assets, setting a new standard for privacy-focused digital transformation.\n## Conclusion\nWikiBDIA at Bourse Direct is a benchmark for secure, AI-powered office productivity. By deploying all components internally, leveraging open source models, and ensuring that no data ever leaves the company, the project empowers teams to work smarter, faster, and more securely—redefining what is possible in the modern digital workplace.",
  "author": "LjSoulimen",
  "date": "2025-01-12",
  "category": "AI & Productivity",
  "tags": ["AI", "Productivity", "LLM", "Office Automation", "Image Generation", "Conversational Agent", "Open Source", "Data Privacy"],
  "read_time": "5 min"
},
{
  "id": 4,
  "title": "High-Frequency Arbitrage Trading: Parallelized Algorithmic Project for French Markets",
  "slug": "tradingalgo",
  "image": "images/algotrader.jpeg",
  "excerpt": "Discover the design and implementation of a high-frequency arbitrage trading system for French equities, leveraging parallel computing and ultra-fast market data analysis.",
  "content": "# High-Frequency Arbitrage Trading: Parallelized Algorithmic Project for French Markets\n<div style=\"text-align: center;\"><img src=\"images/arbitrage.png\" alt=\"Arbitrage Trading\" style=\"width:100%;max-width:500px;margin:16px 0;\"></div>\n**In 2022, I participated in the rapid development of a cutting-edge algorithmic trading project focused on high-frequency arbitrage between French equity markets.** The objective was clear: from the opening (9:00) to the closing (17:30) of the French stock market, the system would continuously scan for price discrepancies on any listed French stock between two different trading venues. When an opportunity was detected, the algorithm would simultaneously buy on the cheaper market and sell on the more expensive one, instantly capturing the spread as profit.\n## 1. Principle of Arbitrage\n- **Market Monitoring:** The system monitored real-time order books from multiple French stock exchanges, comparing prices for every listed security.\n- **Opportunity Detection:** If a price gap existed (e.g., buy at 4.96€ on Market A, sell at 4.98€ on Market B), the algorithm would calculate the potential profit, factoring in transaction costs.\n- **Trade Execution:** The system would execute a buy order on the cheaper market and a sell order on the more expensive one, matching the available liquidity (e.g., buying 400 shares at 4.96€, selling 400 at 4.98€).\n- **Profit Calculation:** After accounting for order fees (e.g., 0.50€ per trade), the net profit was calculated and trades were only executed if the net gain exceeded a defined threshold (e.g., 1.0€).\n## 2. Example Calculation\nSuppose:\n- 400 shares available at 4.96€ on Market A\n- 600 shares bid at 4.98€ on Market B\n- Buy 400 shares at 4.96€ = 1,984€ (plus 0.50€ fee)\n- Sell 400 shares at 4.98€ = 1,992€ (minus 0.50€ fee)\n- **Gross profit:** 8€\n- **Net profit after fees:** 7€\n<div style=\"text-align: center;\"><img src=\"images/transac.png\" alt=\"Arbitrage Trading\" style=\"width:100%;max-width:500px;margin:16px 0;\"></div>\nBy repeating such trades across multiple securities and venues, the system could both help regularize prices and generate significant cumulative profits.\n## 3. Technical Challenges and Solutions\n\n- **Ultra-Low Latency:** The stock market is highly volatile and reactive; opportunities can vanish in milliseconds. The system had to detect and act on arbitrage opportunities in under 10 milliseconds.\n- **Real-Time Data Streaming:** Continuous comparison of live order books between venues required robust, high-speed data ingestion and processing.\n- **Distributed and Parallel Computing:** To achieve the required speed, all computations were distributed and parallelized across a cluster of machines, each equipped with 72 CPUs. This allowed simultaneous scanning and decision-making across all securities and markets.\n- **Efficient Implementation:** The entire system was developed in C++ for maximum performance, with parallelization managed via MPI (Message Passing Interface).\n## 4. Development Timeline\n- **Rapid Prototyping:** The complete solution was designed, developed, and tested in just 7 days—a testament to agile development and deep technical expertise.\n## 5. Legal and Regulatory Considerations\nDespite the system's ability to generate substantial profits and contribute to market efficiency, it could not be deployed in production due to legal restrictions. High-frequency trading and cross-market arbitrage are subject to strict regulations in France and Europe, particularly regarding market manipulation, fair access, and systemic risk. The project was therefore halted before live deployment.\n## Conclusion\nThis project demonstrates the power of algorithmic trading and high-performance computing in financial markets. By combining real-time data analysis, parallel computing, and rigorous risk controls, it is possible to design systems that can exploit fleeting market inefficiencies—provided that all legal and ethical standards are rigorously observed.",
  "author": "LjSoulimen",
  "date": "2022-06-10",
  "category": "Algorithmic Trading",
  "tags": ["Algorithmic Trading", "Arbitrage", "High-Frequency Trading", "Parallel Computing", "C++", "MPI", "French Markets"],
  "read_time": "4 min"
}

];

// Liste des catégories
const categories = [
  "All",
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
let currentCategory = 'All';
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
  return date.toLocaleDateString('en-EN', {
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
  if (currentCategory !== 'All') {
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