
    (function() {
      // ---------- HERITAGE DATA (popular indian sites with details) ----------
      const heritageSites = [
        {
          name: "Sidi Saiyyed Mosque",
          location: "Ahmedabad, Gujarat",
          shortDesc: "The most famous carving is the “Tree of Life” jali, which has become a symbol of Ahmedabad.",
          longDesc: "Sidi Saiyyed during the rule of Muzaffar Shah III in 1573, the mosque is renowned for its intricate stone lattice work (jali) an exquisite example of Indo-islamic architecture.",
          image: "images/sidi saiyad ni jali.png",
          epoch: "medieval",
          unesco: true,
          built: "1572–1573",
          style: "Indo-Islamic Architecture"
        },
        

       {
        name: "Adalaj Stepwell",
        location: "Adalaj, Gujarat",
        shortDesc: "A five-storey stepwell known for its detailed carvings and unique blend of Hindu and Islamic architecture.",
        longDesc: "Adalaj Stepwell was built in 1499 by Queen Rudabai, wife of Vaghela ruler Veer Singh. The stepwell served as a water storage structure and resting place for travelers. Its walls are richly decorated with carvings of flowers, mythological scenes, and geometric patterns, reflecting a blend of Solanki and Indo-Islamic architectural styles.",
        image: "images/adalaj step well.jpg",
        epoch: "medieval",
        unesco: false,
        built: "1499",
        style: "Solanki and Indo-Islamic Architecture"
      },

      {
        name: "Rani ki Vav",
        location: "Patan, Gujarat",
        shortDesc: "A magnificent stepwell famous for its intricate sculptures and considered one of the finest examples of stepwell architecture.",
        longDesc: "Rani ki Vav was built in the 11th century by Queen Udayamati in memory of King Bhimdev I of the Solanki dynasty. This seven-level stepwell is decorated with more than 500 sculptures depicting Hindu deities, including Vishnu. It represents the peak of Maru-Gurjara architecture and was recognized as a UNESCO World Heritage Site in 2014.",
        image: "images/rani ni vaav.png",
        epoch: "medieval",
        unesco: true,
        built: "1050–1063 CE",
        style: "Maru-Gurjara (Solanki) Architecture"
      },  

    { 
        name:   "Dwarkadhish Temple",
        location: "Dwarka, Gujarat",
        shortDesc: "One of the most important temples dedicated to Lord Krishna and a key pilgrimage site of the Char Dham.",
        longDesc: "The Dwarkadhish Temple, also known as Jagat Mandir, is believed to be over 2000 years old though the current structure dates mainly to the 15th–16th century. The five-storey temple supported by 72 pillars rises about 78 meters high and is built in the Chalukya style of temple architecture. It remains one of the most sacred Hindu pilgrimage sites in India.",
        image: "images/Dwarkadhis temple.png",
        epoch: "ancient",
        unesco: false,
        built: "15th–16th century (current structure)",
        style: "Chalukya Temple Architecture"
      },

      {
        name: "uprkort fort",
        location: "Junagadh, Gujarat",
        shortDesc: "An ancient fort known for its massive walls, stepwells, and historical significance.",
        longDesc: "Uparkot Fort is believed to have been originally built around 319 BCE during the Mauryan period. The fort has witnessed numerous battles and sieges throughout history. Inside the fort complex are Buddhist caves, ancient stepwells, and large cannons, making it one of the most historically significant forts in Gujarat.",
        image: "images/uprkort fort.png",
        epoch: "ancient",
        unesco: false,
        built: "c. 319 BCE",
        style: "Ancient Indian Fort Architecture"
      },

      {
        name: "Ashoka Rock Edicts",
        location: "Junagadh, Gujarat",
        shortDesc: "Ancient inscriptions carved on a rock that describe the teachings and policies of Emperor Ashoka.",
        longDesc: "The Ashoka Rock Edicts at Junagadh were inscribed around 250 BCE during the reign of Mauryan Emperor Ashoka. Written in the Prakrit language using the Brahmi script, the inscriptions convey messages about morality, governance, and the principles of Buddhism, providing valuable historical insight into the Mauryan Empire.",
        image: "images/Ashoka_Rock_Edict_at_Junagadh.jpg",
        epoch: "ancient",
        unesco: false,
        built: "c. 250 BCE",
        style: "Mauryan Inscriptional Rock Architecture"
      },

      {
        name: "Jama Masjid (Champaner)",
        location: "Champaner, Gujarat",
        shortDesc: "A grand mosque known for its elegant domes, minarets, and beautifully carved pillars.",
        longDesc: "The Jama Masjid of Champaner was built around 1513 by Sultan Mahmud Begada of the Gujarat Sultanate. It is considered one of the most impressive mosques in western India and combines Islamic architectural design with local Hindu craftsmanship. The monument is part of the UNESCO-listed Champaner-Pavagadh Archaeological Park.",
        image: "images/sarangib-jama-masjid-4009599_1920.jpg",
        epoch: "medieval",
        unesco: true,
        built: "c. 1513",
        style: "Indo-Islamic Architecture"
      },

      {
        name: "Pavagadh Hill",
        location: "Panchmahal, Gujarat",
        shortDesc: "A sacred volcanic hill known for the famous Kali Mata Temple and historical ruins.",
        longDesc: "Pavagadh Hill is a volcanic formation that rises dramatically above the plains and has been an important religious site for centuries. The hill houses the revered Kali Mata Temple and forms part of the Champaner-Pavagadh Archaeological Park, a UNESCO World Heritage Site known for its historical monuments and natural beauty.",
        image: "images/pavagadh.jpg",
        epoch: "ancient",
        unesco: true,
        built: "Temple structures around 10th–11th century",
        style: "Traditional Hindu Temple Architecture"
      },

      {
        name: "Aina Mahal",
        location: "Bhuj, Gujarat",
        shortDesc: "A palace famous for its mirror work, European influences, and royal artifacts.",
        longDesc: "Aina Mahal, also known as the Palace of Mirrors, was built around 1752 by Rao Lakhpatji of Kutch and designed by Ram Singh Malam. The palace showcases Indo-European architecture and features ornate mirror decorations, chandeliers, and glasswork inspired by European styles.",
        image: "images/Aina_mahal.jpg_01.jpg",
        epoch: "early modern",
        unesco: false,
        built: "c. 1752",
        style: "Indo-European Architecture"
      },

      {
        name: "Prag Mahal",
        location: "Bhuj, Gujarat",
        shortDesc: "A majestic palace known for its large clock tower and impressive Gothic design.",
        longDesc: "Prag Mahal was constructed between 1865 and 1879 by Rao Pragmalji II of Kutch and designed by British architect Henry Saint Clair Wilkins. Built with Italian marble and sandstone, the palace features a grand Durbar Hall and a tall clock tower, making it one of the finest examples of Italian Gothic architecture in India.",
        image: "images/pexels-sunny-prajapati-229756129-20312821.jpg",
        epoch: "modern",
        unesco: false,
        built: "1865–1879",
              style: "Italian Gothic Architecture"
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
    