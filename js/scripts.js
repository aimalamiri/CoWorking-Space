const teamMembers = document.querySelector('#team-members');
const navbarBtn = document.querySelector('#navbar-btn');
const topNavbar = document.querySelector('#top-navbar');

const membersList = [
  {
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
    name: 'SoYeong Noh',
    job: 'Director of Art Center Nabi and a board member of the space',
    description:
      "As the author of <Digital Art Art of Our Time>, he opened 'Art Center Nabi', Korea's first digital art institution in 2000, and is currently serving CoWorking Space.",
  },
  {
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
    name: 'Yocha Benkler',
    job: 'Chairman and CEO at CoWorking Space',
    description:
      'Focusing on a collaborative approach in a networked environment, he created the concept of co-production based on sharing.',
  },
  {
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
    name: 'Jeon Gil-nam',
    job: 'Emeritus Professor, Korea Advanced Institute of Science and Technology (KAIST)',
    description:
      "By developing Asia's first Internet protocol network SDN and leading Korea's first private line Internet connection in 1990, it ushered in the era of the Internet in earnest.",
  },
  {
    image: 'https://randomuser.me/api/portraits/women/20.jpg',
    name: 'Layla Tretikov',
    job: 'Secretary General of the Wikimedia Foundation',
    description:
      "Layla Tretikov is the general secretary of the Wikimedia Foundation, a non-profit organization that runs Wikipedia. Wikipedia is provided free of charge in 290 languages ​​every month to over 100 million people, nearly half of the world's population.",
  },
  {
    image: 'https://randomuser.me/api/portraits/women/18.jpg',
    name: 'Julia Leda',
    job: 'Head of the Young Pirates of Europe',
    description:
      "European integration and online youth participation in politics and democracy are major concerns, and a report has been published that will potentially affect the revision of the EU's copyright law in July.",
  },
  {
    image: 'https://randomuser.me/api/portraits/men/18.jpg',
    name: 'Ryan Merkley',
    job: 'Creative Commons CEO, Former Mozilla Foundation COO',
    description:
      'He led open source projects at the Mozilla Foundation, and joined CC as CEO in 2014. He has been active in open movements such as open government and open source.',
  },
];

navbarBtn.addEventListener('click', () => {
  if (!navbarBtn.classList.contains('collapsed')) {
    navbarBtn.innerHTML = '<span class="bi bi-x fs-large"></span>';
    navbarBtn.classList.toggle('ps-0');
    topNavbar.classList.toggle('make-navbar-big');
  } else {
    navbarBtn.innerHTML = '<span class="navbar-toggler-icon"></span>';
    navbarBtn.classList.toggle('ps-0');
    topNavbar.classList.toggle('make-navbar-big');
  }
});

for (let i = 0; i < membersList.length; i += 1) {
  const member = `
            <div class="col-md-6 team-member text-left d-flex gap-3 my-3">
              <img src="${membersList[i].image}" alt="" class="col-3" />
              <div class="col-9 pe-3">
                <h4 class="fw-bold">${membersList[i].name}</h4>
                <span class="text-orange fs-8 fw-bold">${membersList[i].job}</span>
                <p class="lh-sm fs-6 fw-normal mt-2">
                  ${membersList[i].description} 
                </p>
              </div>
            </div>
  `;

  teamMembers.innerHTML += member;
}
