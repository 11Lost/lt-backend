window.onload = () => {
  const API_BASE = 'http://localhost:1337/api';
  const HOME_PAGE_API = `${API_BASE}/home-page?populate=all`;

  const currentPath = window.location.pathname;

  if (currentPath.includes('about')) {
    fetch('http://localhost:1337/api/home-page?populate=AboutSection')
      .then(res => res.json())
      .then(data => renderAboutSection(data.data.AboutSection))
      .catch(err => console.error("Error loading speakers:", err));
  }
  else if (currentPath.includes('speakers')) {
    fetch('http://localhost:1337/api/speakers?populate=all')
      .then(res => res.json())
      .then(data => renderSpeakers(data.data))
      .catch(err => console.error("Error loading speakers:", err));
  }
  else if (currentPath.includes('news')) {
    fetch('http://localhost:1337/api/news?populate=all')
      .then(res => res.json())
      .then(data => renderNews(data.data))
      .catch(err => console.error("Error loading speakers:", err));
  } else {
    fetch(HOME_PAGE_API)
      .then(res => res.json())
      .then(data => {
        const content = data.data;
        renderBannerSlider(content.TopBanner);
        renderAboutSection(content.AboutSection);
        renderCounters(content.Counters);
        renderGearImage(content.GearImage);
        renderKeynoteSpeakers(content.KeynoteSpeakers);
        // renderSpeakers(content.Speakers);
        // renderNews(content.News);
        renderPartners(content.Partners);
        renderFooter(content.Footer);
      })
      .catch(err => console.error("Error loading homepage content:", err));

    fetch('http://localhost:1337/api/speakers?populate=all&pagination[limit]=5')
      .then(res => res.json())
      .then(data => renderSpeakers(data.data))
      .catch(err => console.error("Error loading speakers:", err));

    // Fetch news separately
    fetch('http://localhost:1337/api/news?populate=all&pagination[limit]=4')
      .then(res => res.json())
      .then(data => renderNews(data.data))
      .catch(err => console.error("Error loading news:", err));

  }
  function renderBannerSlider(banners = []) {
    const container = document.getElementById('banner-slider');
    banners.forEach((b, i) => {
      const div = document.createElement('div');
      div.className = 'slide';
      if (i === 0) div.style.display = 'block';
      div.innerHTML = `
        <img src="${b.image}" />
        <div class="caption">${b.Title || ''} ${b.Desc || ''}</div>
      `;
      container.appendChild(div);
    });

    startSlider();
  }

  function startSlider() {
    const slides = document.querySelectorAll('.slide');
    let current = 0;
    setInterval(() => {
      slides[current].style.display = 'none';
      current = (current + 1) % slides.length;
      slides[current].style.display = 'block';
    }, 4000);
  }

  function renderAboutSection(about) {
    const container = document.getElementById('about-section');
    if (!about) return;
    container.innerHTML = `
     <div class="about-flex">
      <div class="about-text">
        <h2>${about.Title}</h2>
        <p>${about.Desc}</p>
      </div>
      <div class="about-image">
        <img src="${about.Image}" alt="About Image" />
      </div>
    </div>
    `;
  }

  function renderCounters(counters = []) {
    const container = document.getElementById('counters-section');
    counters.forEach(item => {
      const div = document.createElement('div');
      div.innerHTML = `<h3>${item.number}+ ${item.label}</h3>`;
      container.appendChild(div);
    });
  }

  function renderKeynoteSpeakers(speakers = []) {
    const container = document.getElementById('keynote-speakers');
    speakers.forEach(speaker => {
      const div = document.createElement('div');
      div.innerHTML = `
        <div class="speaker"><img src="${speaker.image || ''}" />
          <div class='detail'><h4>${speaker.name}</h4>
        <p>${speaker.designation}</p></div>
        </div>
      `;
      container.appendChild(div);
    });
  }

  function renderSpeakers(speakers = []) {
    const container = document.getElementById('speakers');
    speakers.forEach(speaker => {
      const div = document.createElement('div');
      div.innerHTML = `
        <img src="${speaker.image || ''}" />
        <h4>${speaker.name}</h4>
        <p>${speaker.designation}</p>
      `;
      container.appendChild(div);
    });
  }

  function renderNews(newsItems = []) {
    const container = document.getElementById('news');
    newsItems.forEach(news => {
      const div = document.createElement('div');
      div.innerHTML = `
        <div class="newCard">
  <img src="${news.image || ''}" alt="News Image" />
  <div class="detail">
    <h4>${news.title}</h4>
    <p>${news.description}</p>
    <a href="${news.link}" target="_blank">Read more</a>
  </div>
</div>

        
      `;
      container.appendChild(div);
    });
  }
  function renderPartners(partners = []) {
    const container = document.getElementById('partners');
    const div = document.createElement('div');
    div.className = ('partner-img')
    partners.forEach(partner => {
      const img = document.createElement('img');
      img.src = partner.logo || '';
      img.alt = partner.name || '';
      div.appendChild(img);
    });

    container.appendChild(div);
  }


  function renderGearImage(gearImage = []) {
    const container = document.getElementById('gearImage');
    gearImage.forEach(partner => {
      const img = document.createElement('img');
      img.src = partner.image || '';
      img.alt = partner.id || '';
      container.appendChild(img);
    });
  }

  function renderFooter(footer) {
    document.getElementById('footer').innerHTML = `
      <p>${footer?.text || '&copy; 2024 L&T Finance - RAISE\'24'}</p>
    `;
  }
};
