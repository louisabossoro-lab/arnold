const renderSite = () => {
  const toggle = document.querySelector('.menu-toggle');
  const nav = document.querySelector('.desktop-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', () => {
      const open = nav.classList.toggle('mobile-open');
      toggle.setAttribute('aria-expanded', String(open));
    });
    document.querySelectorAll('a[href^="#"]').forEach((link) => {
      link.addEventListener('click', () => nav.classList.remove('mobile-open'));
    });
  }

const fleetVehicles = [
  ['IMG-20260822-WA0003.jpg', 'Mercedes-Benz Actros', 'Camion de transport', 'Caisse bâchée'],
  ['IMG-20260822-WA0005.jpg', 'Mercedes-Benz Actros', 'Camion de transport', 'Caisse bâchée'],
  ['IMG-20260822-WA0009.jpg', 'Mercedes-Benz Actros', 'Camion routier', 'Remorque à ridelles'],
  ['IMG-20260822-WA0010.jpg', 'VOLTIS', 'Chariot élévateur', 'Équipement de manutention'],
  ['IMG-20260822-WA0011.jpg', 'Mercedes-Benz Actros', 'Camion de transport', 'Caisse bâchée'],
  ['IMG-20260822-WA0012.jpg', 'Mercedes-Benz Actros', 'Camion plateau', 'Transport de grumes'],
  ['IMG-20260822-WA0013.jpg', 'Mercedes-Benz Actros 3342', 'Camion de transport', 'Caisse bâchée'],
  ['IMG-20260822-WA0015.jpg', 'Mercedes-Benz Actros', 'Camion de transport', 'Caisse bâchée'],
  ['IMG-20260822-WA0016.jpg', 'Mercedes-Benz Actros', 'Camion plateau', 'Transport d’équipement'],
  ['IMG-20260822-WA0021.jpg', 'Mercedes-Benz Actros', 'Camion plateau', 'Transport de grumes'],
  ['IMG-20260822-WA0033.jpg', 'Mercedes-Benz Actros 414', 'Camion-benne', 'Benne chantier'],
  ['IMG-20260822-WA0034.jpg', 'Mercedes-Benz Actros', 'Camion de transport', 'Caisse bâchée'],
  ['IMG-20260822-WA0036.jpg', 'Mercedes-Benz Actros 3342', 'Camion de transport', 'Caisse à ridelles'],
  ['IMG-20260822-WA0037.jpg', 'Mercedes-Benz Actros 3342', 'Camion de transport', 'Caisse à ridelles'],
  ['IMG-20260822-WA0038.jpg', 'Mercedes-Benz Actros', 'Camion de transport', 'Caisse à ridelles'],
  ['IMG-20260822-WA0039.jpg', 'Mercedes-Benz Actros', 'Camion de transport', 'Caisse bâchée'],
  ['IMG-20260822-WA0040.jpg', 'Mercedes-Benz Actros 3342', 'Camion de transport', 'Caisse à ridelles'],
  ['IMG-20260822-WA0041.jpg', 'Mercedes-Benz Actros', 'Camion-benne', 'Benne de transport'],
  ['IMG-20260822-WA0042.jpg', 'Mercedes-Benz Actros', 'Camion de transport', 'Caisse à ridelles'],
  ['IMG-20260822-WA0044.jpg', 'Mercedes-Benz Actros', 'Camion de transport', 'Caisse à ridelles'],
  ['IMG-20260822-WA0045.jpg', 'Mercedes-Benz Actros 3342', 'Camion de transport', 'Caisse à ridelles'],
  ['IMG-20260822-WA0046.jpg', 'Mercedes-Benz Actros', 'Camion de transport', 'Caisse bâchée'],
  ['IMG-20260822-WA0049.jpg', 'Mercedes-Benz Actros 3342', 'Camion de transport', 'Caisse à ridelles'],
];

  const fleetGrid = document.querySelector('#fleet-grid');
  if (fleetGrid) {
    const categories = [
      ['transport', 'Camions de transport', 'Caisse bâchée et caisse à ridelles'],
      ['plateau', 'Camions plateaux', 'Transport de grumes et d’équipements'],
      ['benne', 'Camions-bennes', 'Transport et travaux de chantier'],
      ['manutention', 'Équipements de manutention', 'Chariot élévateur'],
    ];
    const categoryFor = (type) => type === 'Camion plateau'
      ? 'plateau'
      : type === 'Camion-benne'
        ? 'benne'
        : type === 'Chariot élévateur'
          ? 'manutention'
          : 'transport';
    const cardFor = ([image, name, type, body]) => `
      <article class="car-card">
        <div class="car-image" style="background-image: url('images/flotte/${image}')">
          <a class="image-reserve-button" href="https://wa.me/23672424747" target="_blank" rel="noreferrer">Réserver</a>
        </div>
        <div class="car-body">
          <h3>${name}</h3>
          <p><strong>Type :</strong> ${type}<br /><strong>Configuration :</strong> ${body}<br /><span class="spec-note">Année, motorisation et tarif : à confirmer.</span></p>
          <a href="#contact" target="_blank" rel="noreferrer">Demander les détails <span>↗</span></a>
        </div>
      </article>
    `;
    fleetGrid.innerHTML = categories.map(([id, title, description]) => {
      const vehicles = fleetVehicles.filter((vehicle) => categoryFor(vehicle[2]) === id);
      return `
        <section class="fleet-category" aria-labelledby="fleet-${id}">
          <div class="fleet-category-heading">
            <div><p class="eyebrow">CATÉGORIE</p><h3 id="fleet-${id}">${title}</h3></div>
            <p>${description} · ${vehicles.length} véhicule${vehicles.length > 1 ? 's' : ''}</p>
          </div>
          <div class="category-grid">${vehicles.map(cardFor).join('')}</div>
        </section>
      `;
    }).join('');
  }

  const contactForm = document.querySelector('#contact-form');
  contactForm?.addEventListener('submit', (event) => {
    event.preventDefault();
    const data = new FormData(contactForm);
    const message = [
      'Bonjour Société Albork,',
      `Nom : ${data.get('name')}`,
      `Téléphone : ${data.get('phone')}`,
      `Email : ${data.get('email') || 'Non renseigné'}`,
      `Sujet : ${data.get('subject')}`,
      `Message : ${data.get('message')}`,
    ].join('\n');
    window.open(`https://wa.me/23672424747?text=${encodeURIComponent(message)}`, '_blank', 'noopener,noreferrer');
  });
};

if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', renderSite);
} else {
  renderSite();
}
