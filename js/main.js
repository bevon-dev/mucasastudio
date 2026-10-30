const ARTWORKS = [
  {
    id: 1,
    title: 'Echoes Within',
    year: 2023,
    medium: 'mixed media on ivory paper',
    dimensions: '60 × 40 cm',
    category: 'mixed media',
    src: 'images/image1.png',
    ratio: '4/5',
    description: 'A contemplative exploration of emotion and memory, where music serves as the voice of the inner self. Through light, shadow and monochromatic contrast, the work invites quiet reflection on the feelings that linger long after the final note.'
  },
  {
    id: 2,
    title: 'Embrace in Silence',
    year: 2025,
    medium: 'Mixed media on canvas',
    dimensions: '60 × 40 cm',
    category: 'Mixed Media',
    src: 'images/image2.jpg',
    ratio: '3/4',
    description: 'A quiet exploration of intimacy and emotion, where music becomes the language of connection, The work reflects the moments words cannot express.'
  },
  {
    id: 3,
    title: 'Kahawa Sketchbook No. 3',
    year: 2023,
    medium: 'Charcoal and pastel',
    dimensions: '30 × 40 cm',
    category: 'Drawing',
    src: 'images/image3.jpg',
    ratio: '1/1',
    description: 'One page from an ongoing sketchbook project documenting daily life in Kahawa West — quick studies made in a single sitting, left unedited.'
  },
  {
    id: 4,
    title: 'Blooming in Harmony',
    year: 2026,
    availability: 'Available',
    medium: 'Acrylic on canvas',
    dimensions: '45 × 40 cm',
    category: 'Painting',
    src: 'images/image4.jpg',
    ratio: '4/5',
    description: 'A celebration of transformation and self expression, this artwork explores the harmony between music, nature and human spirit. The butterfly symbolizes change, while the flowers represent growth and renewal, creating a visual reminder that creativity flourishes when we pause to listen to both ourselves and the world around us.'
  },
  {
    id: 5,
    title: 'The Flow of Tradition',
    year: 2025,
    medium: 'Acrylics on canvas',
    dimensions: '60 × 40 cm',
    category: 'Painting',
    src: 'images/image5.jpg',
    ratio: '3/4',
    description: 'A celebration of cultural heritage and continuity, where interconnected clay vessel symbolize the flow of life, shared wisdom and the enduring strength of community acrass generations.'
  },
  {
    id: 6,
    title: 'Field Notes',
    year: 2022,
    medium: 'Ink on paper',
    dimensions: '21 × 29 cm',
    category: 'Drawing',
    src: 'images/image6.jpg',
    ratio: '1/1',
    description: 'A single continuous ink line, drawn without lifting the pen — an exercise in observation carried through to the edge of the page.'
  },
  {
    id: 7,
    title: 'Rising Hope',
    year: 2024,
    medium: 'Acrylics on canvas',
    dimensions: '60 × 50 cm',
    category: 'painting',
    src: 'images/image7.jpg',
    ratio: '1/1',
    description: 'A symbolic composition where love, hope and nature unite. A rose emerges from the sea beneath two dolphins, reminding us that even in life deepest, beauty and new beginnings can rise.'
  },
  {
    id: 8,
    title: 'Whispers in the Forest',
    year: 2024,
    medium: 'Acrylics on canvas',
    dimensions: '84 × 59 cm',
    category: 'painting',
    src: 'images/hero.jpg',
    ratio: '1/1',
    description: 'A tranquil potrayal of strength and grace, where a solitary white horse stands in harmony with the surrounding forest. The work reflects the timeless beauty of nature and the quiet resilience found within it.'
  },
  {
    id: 9,
    title: 'After the Applause',
    year: 2022,
    medium: 'Mixed media on canvas',
    dimensions: '85 × 90 cm',
    category: 'painting',
    src: 'images/studio.jpg',
    ratio: '1/1',
    description: 'A quiet reflection on the moments that remain after the music fades. The empty chair and resting instrument speak of memory, presence and the silence that follows expression.'
  },
  {
    id: 10,
    title: 'Moonlight Reflection',
    year: 2022,
    medium: 'Acrylics on canvas',
    dimensions: '40 × 60 cm',
    category: 'painting',
    src: 'images/image9.png',
    ratio: '1/1',
    description: 'A minimalist exploration of stillness and self discovery. Set against the radiant glow of the moon, the figure pauses in the quiet contemplation, inviting viewers to embrace moments of peace, clarity and inner balance.'
  },
  {
    id: 11,
    title: 'Grace in Tradition',
    year: 2024,
    medium: 'mixed media on ivory paper',
    dimensions: '75 × 65 cm',
    category: 'mixed media',
    src: 'images/image20.jpg',
    ratio: '1/1',
    description:'A celebration of cultural identity and timeless beauty, this portrait honors the elegance resilience, pride carried through generations. Rich in expression and detail, it reflects the enduring power of heritage to shape and inspire.'
  },
  {
    id: 12,
    title: 'Noble Spirit',
    year: 2026,
    medium: 'Acrylics on canvas',
    dimensions: '75 × 70 cm',
    category: 'painting',
    src: 'images/image21.jpg',
    ratio: '1/1',
    description: 'A monochromatic portrait that embodies grace, strength and quiet confidence. Through delicate tonal contrasts, the work celebrates the timeless beauty and no spirit of the horse.'
  }
];

const CRAFT_ITEMS = [
  {
    id: 101,
    title: 'From waste to wonder',
    year: 2024,
    medium: 'Upcycled glass bottle Art',
    dimensions: 'Variable',
    category: 'Recycled Art',
    src: 'images/craft1.jpg',
    ratio: '1/1',
    description: 'Unique upcycled glass bottle art that combines creativity, sustainability and craftsmanship to give discarded bottles a new life.'
  },
  {
    id: 102,
    title: 'Craft Piece 2',
    year: 2024,
    medium: 'Handmade',
    dimensions: 'Variable',
    category: 'Craft',
    src: 'images/craft2.jpg',
    ratio: '1/1',
    description: 'Small object experiments in the studio.'
  },
  {
    id: 103,
    title: 'Welcome Home',
    year: 2023,
    medium: 'handmade',
    dimensions: 'Variable',
    category: 'Craft',
    src: 'images/craft3.jpg',
    ratio: '1/1',
    description: 'Handcrafted decor collection celebrating the comfort of home. These bottles create a warm and inviting atmosphere for any interior.'
  }
  ,{
    id: 104,
    title: 'Craft Piece 4',
    year: 2024,
    medium: 'Handmade',
    dimensions: 'Variable',
    category: 'Craft',
    src: 'images/craft4.jpg',
    ratio: '1/1',
    description: 'Small object experiments in the studio.'
  },
  {
    id: 105,
    title: 'Echoes of nature',
    year: 2023,
    medium: 'Acrylics paint on upcycled glass bottles',
    dimensions: 'wine bottles',
    category: 'Craft',
    src: 'images/craft5.jpg',
    ratio: '1/1',
    description: 'A collection of hand painted upcycled glass bottles celebrating the beauty of nature. Featuring African inspired silhouettes, a butterfly and panda, each piece transforms discarded glass into unique decorative art that blends creativity, sustainablity and storytelling.'
  },
  {
    id: 106,
    title: 'Love in Every Detail',
    year: 2024,
    medium: 'Handmade',
    dimensions: 'Variable',
    category: 'Craft',
    src: 'images/craft6.jpg',
    ratio: '1/1',
    description: 'A handcrafted bottle set celebrating love and togetherness for homes and thoughtful gifts.'
  },
  {
    id: 107,
    title: 'Craft Piece 7',
    year: 2023,
    medium: 'Paper & Object',
    dimensions: 'Variable',
    category: 'Craft',
    src: 'images/craft7.jpg',
    ratio: '1/1',
    description: 'Works on paper made by hand in limited quantities.'
  },
  {
    id: 108,
    title: 'Personalized Bottle Collection',
    year: 2023,
    medium: 'Handmade',
    dimensions: 'Variable',
    category: 'Craft',
    src: 'images/craft8.jpg',
    ratio: '1/1',
    description: 'Handcrafted decorative bottles wrapped in natural jute and finished with personalized lettering.'
  },
  {
    id: 109,
    title: 'Rustic Expression',
    year: 2023,
    medium: 'mixed media',
    dimensions: 'Variable',
    category: 'Craft',
    src: 'images/dashboard.jpg',
    ratio: '1/1',
    description: 'Inspired by natural materials and handcrafted artistry. Each piece is thoughtfully created to compliment contemporary and traditional spaces alike.'
  }
];

const SERIES_ITEMS = [
  {
    id: 201,
    title: 'WITO SERIES',
    seriesName: 'WITO SERIES',
    year: 2024,
    medium: 'Acrylic on canvas',
    dimensions: 'Variable',
    category: 'Painting Series',
    src: 'images/image1.png',
    images: ['images/image10.jpg', 'images/image11.jpg', 'images/image12.jpg','images/image13.jpg','images/image14.jpg','images/image15.jpg','images/image16.jpg','images/image17.jpg','images/image18.jpg','images/image19.jpg'],
    ratio: '4/5',
    description: 'A painting series depicting the life of a military personnel right from childhood to retirement.',
    pieces: 9
  },
  {
    id: 202,
    title: 'Series Title 2',
    seriesName: 'Urban Sketches',
    year: 2024,
    medium: 'Mixed media',
    dimensions: 'Variable',
    category: 'Mixed Media Series',
    src: 'images/image4.jpg',
    images: ['images/image4.png', 'images/image5.png', 'images/image6.png', 'images/image7.png', 'images/image9.jpg'],
    ratio: '3/4',
    description: 'Quick studies and sketches from daily urban life, compiled into a cohesive narrative.',
    pieces: 5
  }
];

const EVENTS = [
  {
    id: 1,
    title: 'Group Exhibition: Home & Memory',
    date: '2025-02-15',
    time: '18:00',
    location: 'Nairobi Contemporary, Kahawa West',
    description: 'A curated exhibition featuring works by MUCASA ART and collaborating artists exploring themes of home, belonging, and memory.',
    type: 'Exhibition'
  },
  {
    id: 2,
    title: 'Artist Talk & Studio Visit',
    date: '2025-03-08',
    time: '15:00',
    location: 'MUCASA ART Studio, Kahawa West',
    description: 'Join us for an intimate studio visit and conversation about the creative process, inspiration, and upcoming projects.',
    type: 'Workshop'
  },
  {
    id: 3,
    title: 'Painting Workshop: Color & Emotion',
    date: '2025-04-12',
    time: '10:00',
    location: 'MUCASA ART Studio, Kahawa West',
    description: 'A hands-on workshop exploring how color choices convey emotion and mood. Limited to 12 participants.',
    type: 'Workshop'
  },
  {
    id: 4,
    title: 'Collaborative Showcase',
    date: '2025-05-20',
    time: '17:00',
    location: 'Nairobi Arts Hub',
    description: 'MUCASA ART presents a joint showcase with the poet and co-artist — paintings, poetry, and mixed media in conversation.',
    type: 'Exhibition'
  }
];

/* ---------- Nav: active link + mobile toggle ---------- */
function initNav() {
  const path = location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(a => {
    if (a.getAttribute('href') === path) a.classList.add('active');
  });

  const toggle = document.querySelector('.nav-toggle');
  const links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', () => links.classList.toggle('open'));
  }
}

/* ---------- Scroll reveal ---------- */
function initReveal() {
  const items = document.querySelectorAll('.reveal');
  if (!items.length) return;
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('in'); });
  }, { threshold: 0.12 });
  items.forEach(el => io.observe(el));
}

/* ---------- Build a single gallery piece node ---------- */
function pieceNode(art, index) {
  const el = document.createElement('article');
  el.className = 'piece reveal';
  el.dataset.id = art.id;
  el.style.setProperty('--ar', art.ratio || '3/4');
  el.dataset.category = art.category;
  el.innerHTML = `
    <a href="artwork.html?id=${art.id}" class="piece-frame" aria-label="View ${art.title}">
      <img src="${art.src}" alt="${art.title}" loading="lazy"
           onerror="this.parentElement.querySelector('.no-image').style.display='flex'; this.style.display='none';">
      <div class="no-image" style="display:none;">Add ${art.src.split('/').pop()}</div>
    </a>
    <div class="plaque">
      <span class="plaque-title">${art.title}</span>
      ${art.year} · ${art.medium}<br>${art.dimensions}
    </div>
  `;
  return el;
}

function getImageSources(item) {
  if (Array.isArray(item.images) && item.images.length) return item.images;
  return item.src ? [item.src] : [];
}

function getPrimaryImage(item) {
  return getImageSources(item)[0] || '';
}

/* ---------- Gallery page: render + filter ---------- */
function initGalleryPage() {
  const grid = document.getElementById('galleryGrid');
  if (!grid) return;

  const categories = ['All', ...new Set(ARTWORKS.map(a => a.category))];
  const filterBar = document.getElementById('filterBar');
  if (filterBar) {
    categories.forEach(cat => {
      const btn = document.createElement('button');
      btn.className = 'filter-btn' + (cat === 'All' ? ' active' : '');
      btn.textContent = cat;
      btn.addEventListener('click', () => {
        filterBar.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        render(cat);
      });
      filterBar.appendChild(btn);
    });
  }

  function render(cat) {
    grid.innerHTML = '';
    const list = cat && cat !== 'All' ? ARTWORKS.filter(a => a.category === cat) : ARTWORKS;
    list.forEach((art, i) => grid.appendChild(pieceNode(art, i)));
    initReveal();
  }

  render('All');
}

/* ---------- Craft section: render craft items ---------- */
function initCraftGallery() {
  const grid = document.getElementById('craftGrid');
  if (!grid) return;
  
  CRAFT_ITEMS.forEach((item, i) => {
    const node = pieceNode(item, i);
    if (item.id === 101) node.classList.add('craft-feature');
    grid.appendChild(node);
  });
  initReveal();
}

/* ---------- Series section: render series items ---------- */
function initSeriesGallery() {
  const grid = document.getElementById('seriesGrid');
  if (!grid) return;
  
  SERIES_ITEMS.forEach((item, i) => {
    const thumbSrc = getPrimaryImage(item);
    const node = document.createElement('article');
    node.className = 'piece reveal series-piece';
    node.dataset.id = item.id;
    node.style.setProperty('--ar', item.ratio || '4/5');
    node.dataset.category = item.category;
    node.innerHTML = `
      <a href="artwork.html?id=${item.id}" class="piece-frame" aria-label="View ${item.title}">
        <img src="${thumbSrc}" alt="${item.title}" loading="lazy"
             onerror="this.parentElement.querySelector('.no-image').style.display='flex'; this.style.display='none';">
        <div class="no-image" style="display:none;">Add ${thumbSrc.split('/').pop()}</div>
        <div class="series-badge">${item.pieces} pieces</div>
      </a>
      <div class="plaque">
        <span class="plaque-title">${item.seriesName}</span>
        ${item.year} · ${item.medium}<br>${item.description}
      </div>
    `;
    grid.appendChild(node);
  });
  initReveal();
}

/* ---------- Events page: render events list (tap to expand) ---------- */
function initEventsPage() {
  const container = document.getElementById('eventsList');
  if (!container) return;

  container.innerHTML = '';
  EVENTS.forEach(event => {
    const eventEl = document.createElement('div');
    eventEl.className = 'event-card reveal';
    const eventDate = new Date(event.date);
    const formatted = eventDate.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
    eventEl.innerHTML = `
      <button type="button" class="event-toggle" aria-expanded="false" aria-controls="event-more-${event.id}">
        <span class="event-header">
          <span class="event-date">${formatted}</span>
          <span class="event-type" data-type="${event.type.toLowerCase()}">${event.type}</span>
        </span>
        <span class="event-title-row">
          <h3 class="event-title">${event.title}</h3>
          <span class="event-icon" aria-hidden="true">+</span>
        </span>
      </button>
      <div class="event-more" id="event-more-${event.id}" hidden>
        <div class="event-details">
          <div class="event-time"><b>Time:</b> ${event.time}</div>
          <div class="event-location"><b>Location:</b> ${event.location}</div>
        </div>
        <p class="event-description">${event.description}</p>
        <a href="contact.html" class="event-cta">Enquire about this event →</a>
      </div>
    `;

    const btn = eventEl.querySelector('.event-toggle');
    const more = eventEl.querySelector('.event-more');
    const icon = eventEl.querySelector('.event-icon');
    btn.addEventListener('click', () => {
      const open = btn.getAttribute('aria-expanded') === 'true';
      btn.setAttribute('aria-expanded', String(!open));
      more.hidden = open;
      icon.textContent = open ? '+' : '–';
      eventEl.classList.toggle('open', !open);
    });

    container.appendChild(eventEl);
  });
  initReveal();
}

/* ---------- Home page: featured strip ---------- */
function initHomeFeatured() {
  const grid = document.getElementById('featuredGrid');
  if (!grid) return;
  ARTWORKS.slice(0, 3).forEach((art, i) => grid.appendChild(pieceNode(art, i)));
  initReveal();
}

/* ---------- Artwork detail page ---------- */
function initDetailPage() {
  const root = document.getElementById('detailRoot');
  if (!root) return;

  const params = new URLSearchParams(location.search);
  const id = parseInt(params.get('id'), 10) || ARTWORKS[0].id;
  // Search across ARTWORKS, CRAFT_ITEMS, and SERIES_ITEMS so all pieces show their own detail
  const ALL_ITEMS = [...ARTWORKS, ...CRAFT_ITEMS, ...SERIES_ITEMS];
  const idx = ALL_ITEMS.findIndex(a => a.id === id);
  const art = ALL_ITEMS[idx] || ARTWORKS[0];

  const images = getImageSources(art);
  const mainImage = images[0] || art.src || '';

  document.title = `${art.title} — MUCASA STUDIO`;

  root.innerHTML = `
    <a href="gallery.html" class="back-link">&larr; Back to gallery</a>
      <div class="detail-grid">
      <div class="detail-frame">
        <img src="${mainImage}" alt="${art.title}"
             onerror="this.replaceWith(Object.assign(document.createElement('div'),{className:'no-image',style:'display:flex;position:absolute;inset:0;',textContent:'Add ${mainImage.split('/').pop()}'}))">
      </div>
      <div>
        <div class="eyebrow">Accession No. ${String(art.id).padStart(3, '0')}</div>
        <div class="detail-plaque" style="margin-top:14px;">
          <span class="plaque-title">${art.title}</span>
          ${art.year}<br>${art.medium}<br>${art.dimensions}<br>${art.category}
        </div>
        <p class="detail-desc">${art.description}</p>
        <a href="contact.html" class="btn btn-solid" style="margin-top:30px;">Inquire about this piece</a>
      </div>
    </div>
    <div class="detail-nav">
      <a href="artwork.html?id=${ARTWORKS[(idx - 1 + ARTWORKS.length) % ARTWORKS.length].id}" class="back-link">&larr; Previous</a>
      <a href="artwork.html?id=${ARTWORKS[(idx + 1) % ARTWORKS.length].id}" class="back-link">Next &rarr;</a>
    </div>
  `;

  if (images.length > 1) {
    const frame = root.querySelector('.detail-frame');
    const gallery = document.createElement('div');
    gallery.className = 'detail-gallery';

    images.forEach((src, i) => {
      const thumb = document.createElement('button');
      thumb.type = 'button';
      thumb.className = 'detail-thumb';
      thumb.innerHTML = `<img src="${src}" alt="${art.title} thumbnail ${i + 1}" loading="lazy">`;
      thumb.addEventListener('click', () => {
        const mainImg = root.querySelector('.detail-frame img');
        if (mainImg) {
          mainImg.src = src;
          mainImg.alt = `${art.title} (${i + 1})`;
        }
      });
      gallery.appendChild(thumb);
    });

    frame.appendChild(gallery);
  }
}

document.addEventListener('DOMContentLoaded', () => {
  initNav();
  initGalleryPage();
  initCraftGallery();
  initSeriesGallery();
  initEventsPage();
  initHomeFeatured();
  initDetailPage();
  initReveal();
});
