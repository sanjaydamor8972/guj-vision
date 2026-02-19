
    (function() {
      // ---------- HERITAGE DATA (popular indian sites with details) ----------
      const heritageSites = [
        {
          name: "Taj Mahal",
          location: "Agra, Uttar Pradesh",
          shortDesc: "Symbol of eternal love, white marble mausoleum.",
          longDesc: "Built by Shah Jahan in 1653, it's a UNESCO masterpiece of Mughal architecture. The marble changes hue with sunlight.",
          image: "https://images.unsplash.com/photo-1564507592333-c60657eea523?q=80&w=2071&auto=format&fit=crop",
          epoch: "medieval",
          unesco: true,
          built: "1632–1653",
          style: "Mughal"
        },
        {
          name: "Ajanta Caves",
          location: "Aurangabad, Maharashtra",
          shortDesc: "Ancient Buddhist rock-cut caves with paintings.",
          longDesc: "Dating from 2nd century BCE, these 30 caves feature exquisite murals and sculptures depicting Jataka tales.",
          image: "https://images.unsplash.com/photo-1623459916800-9616fecf5b81?q=80&w=2070&auto=format&fit=crop",
          epoch: "ancient",
          unesco: true,
          built: "2nd century BCE – 6th century CE",
          style: "Buddhist rock-cut"
        },
        {
          name: "Khajuraho Group",
          location: "Chhatarpur, Madhya Pradesh",
          shortDesc: "Famous for nagara-style temples & intricate sculptures.",
          longDesc: "Built by Chandela dynasty (950–1050 CE), these temples celebrate life, love, and spirituality through art.",
          image: "https://images.unsplash.com/photo-160011 erm... (using fallback high-res unsplash) ",
          // Using a reliable unsplash image: Khajuraho
          image: "https://images.unsplash.com/photo-1582131504853-9c1d12c8a1b0?q=80&w=2070&auto=format&fit=crop",
          epoch: "medieval",
          unesco: true,
          built: "950–1050 CE",
          style: "Nagara"
        },
        {
          name: "Qutub Minar",
          location: "Delhi",
          shortDesc: "Victory tower & UNESCO complex, Delhi's skyline.",
          longDesc: "73m high minaret built by Qutb al-Din Aibak in 1193. Intricate carvings and iron pillar never rusts.",
          image: "https://images.unsplash.com/photo-1548013146-72479768bada?q=80&w=2076&auto=format&fit=crop",
          epoch: "medieval",
          unesco: true,
          built: "1193–1368",
          style: "Indo-Islamic"
        },
        {
          name: "Mysore Palace",
          location: "Mysuru, Karnataka",
          shortDesc: "Official residence of Wadiyar dynasty, Indo-Saracenic.",
          longDesc: "Originally built in 14th century, rebuilt 1912. Illuminated with 97,000 bulbs on Sundays.",
          image: "https://images.unsplash.com/photo-1624292260236-8ea5d2c2b9b3?q=80&w=2071&auto=format&fit=crop",
          epoch: "modern",
          unesco: false,
          built: "1912 (reconstruction)",
          style: "Indo-Saracenic"
        },
        {
          name: "Hampi Ruins",
          location: "Ballari, Karnataka",
          shortDesc: "Vijayanagara empire's ghost city, boulder landscape.",
          longDesc: "UNESCO site with 1600+ remains: temples, markets, royal pavilions. Virupaksha temple still active.",
          image: "https://images.unsplash.com/photo-1600118283389-9f2e8c8d9f1d?q=80&w=2070&auto=format&fit=crop",
          epoch: "medieval",
          unesco: true,
          built: "14th–16th century",
          style: "Vijayanagara"
        },
        {
          name: "Sanchi Stupa",
          location: "Raisen, Madhya Pradesh",
          shortDesc: "Buddhist complex, great stupa commissioned by Ashoka.",
          longDesc: "Preserves relics of Buddha. Toranas depict Jataka stories, one of India's oldest stone structures.",
          image: "https://images.unsplash.com/photo-1613290930658-5f0a3b8b8b0d?q=80&w=2070&auto=format&fit=crop",
          epoch: "ancient",
          unesco: true,
          built: "3rd century BCE",
          style: "Buddhist"
        },
        {
          name: "Gateway of India",
          location: "Mumbai, Maharashtra",
          shortDesc: "Triumphal arch built to commemorate King George V.",
          longDesc: "Overlooking Arabian sea, completed in 1924. Basalt structure with Indo-Saracenic details.",
          image: "https://images.unsplash.com/photo-1570168007204-dfb528c6958f?q=80&w=2074&auto=format&fit=crop",
          epoch: "modern",
          unesco: false,
          built: "1924",
          style: "Indo-Saracenic"
        }
      ];

      const grid = document.getElementById('heritageGrid');
      const filterPills = document.querySelectorAll('.pill');
      const searchInput = document.getElementById('searchInput');
      const searchBtn = document.getElementById('searchBtn');

      let currentFilter = 'all';
      let searchTerm = '';

      // Render cards based on filter & search
      function renderCards() {
        const filtered = heritageSites.filter(site => {
          // filter by epoch (data-filter) 
          if (currentFilter !== 'all') {
            if (currentFilter === 'unesco' && !site.unesco) return false;
            if (currentFilter !== 'unesco' && site.epoch !== currentFilter) return false;
          }
          // search by name, location, style
          if (searchTerm.trim() !== '') {
            const term = searchTerm.toLowerCase();
            return site.name.toLowerCase().includes(term) ||
                   site.location.toLowerCase().includes(term) ||
                   site.style.toLowerCase().includes(term) ||
                   site.shortDesc.toLowerCase().includes(term);
          }
          return true;
        });

        if (filtered.length === 0) {
          grid.innerHTML = `<div style="grid-column:1/-1; text-align:center; padding:3rem; background:#f0e7d8; border-radius:40px;">
            <i class="fas fa-mountain" style="font-size:3rem; color:#7e6b53;"></i>
            <h3 style="margin:1rem 0;">No matching heritage sites</h3>
            <p>try adjusting filter or search</p>
          </div>`;
          return;
        }

        let htmlStr = '';
        filtered.forEach(s => {
          htmlStr += `
          <div class="card" data-epoch="${s.epoch}" data-unesco="${s.unesco}">
            <div class="card-img" style="background-image: linear-gradient(0deg, rgba(20,20,20,0.5), transparent 40%), url('${s.image}');">
              <span class="epoch-tag"><i class="fas fa-clock"></i> ${s.epoch} · ${s.unesco ? 'UNESCO' : 'heritage'}</span>
            </div>
            <div class="card-content">
              <h3>${s.name}</h3>
              <div class="location"><i class="fas fa-map-pin"></i> ${s.location}</div>
              <p class="description">${s.shortDesc}</p>
              <div class="heritage-detail">
                <p><i class="fas fa-calendar-alt"></i> <strong>Built:</strong> ${s.built}</p>
                <p><i class="fas fa-archway"></i> <strong>Style:</strong> ${s.style}</p>
                <p><i class="fas fa fa-globe"></i> ${s.longDesc.substring(0,80)}…</p>
              </div>
              <div class="card-footer">
                <span class="cultural"><i class="fas fa-om"></i> ${s.style.split(' ')[0]}</span>
                <a href="#" class="read-more">Explore <i class="fas fa-arrow-right"></i></a>
              </div>
            </div>
          </div>`;
        });
        grid.innerHTML = htmlStr;
      }

      // pill event listeners
      filterPills.forEach(pill => {
        pill.addEventListener('click', function(e) {
          filterPills.forEach(p => p.classList.remove('active'));
          this.classList.add('active');
          currentFilter = this.getAttribute('data-filter');
          renderCards();
        });
      });

      // search function
      function performSearch() {
        searchTerm = searchInput.value;
        renderCards();
      }

      searchBtn.addEventListener('click', performSearch);
      searchInput.addEventListener('keyup', (e) => {
        if (e.key === 'Enter') performSearch();
      });

      // initial render
      renderCards();

      // optional: make read-more links work smoothly (prevent page reload)
      document.addEventListener('click', (e) => {
        if (e.target.classList.contains('read-more') || e.target.closest('.read-more')) {
          e.preventDefault();
          alert('✨ Detailed page would open – more stories, 360 tours and archival images.');
        }
      });
    })();
 