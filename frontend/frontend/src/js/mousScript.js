export function runMouScript() {

  
const data = [
  {
    category: "cloud",
    icon: "bi-building",
    tag: "Cloud Partnership",
    title: "Microsoft Corporation",
    date: "March 2024",
    desc: "Strategic partnership for Azure cloud solutions and enterprise services.",
    highlights: [
      "Azure cloud migration",
      "Enterprise licensing",
      "Joint go-to-market"
    ],
    pdf: "sample-mou.pdf"
  },
  {
    category: "cloud",
    icon: "bi-cloud",
    tag: "Cloud Partnership",
    title: "Amazon Web Services",
    date: "January 2024",
    desc: "AWS Partner Network agreement for scalable cloud infrastructure.",
    highlights: [
      "AWS migration",
      "Cloud cost optimization",
      "Security compliance"
    ],
    pdf: "sample-mou.pdf"
  },
  {
    category: "education",
    icon: "bi-mortarboard",
    tag: "Education",
    title: "Tech University",
    date: "December 2023",
    desc: "Academic collaboration for research, innovation, and internships.",
    highlights: [
      "Student internships",
      "Joint research",
      "Curriculum development"
    ],
    pdf: "sample-mou.pdf"
  },
  {
    category: "security",
    icon: "bi-shield-lock",
    tag: "Security",
    title: "SecureNet Labs",
    date: "November 2023",
    desc: "Cybersecurity partnership for enterprise protection.",
    highlights: [
      "Penetration testing",
      "SOC services",
      "Threat monitoring"
    ],
    pdf: "sample-mou.pdf"
  },
  {
    category: "innovation",
    icon: "bi-lightbulb",
    tag: "Innovation",
    title: "InnovateX",
    date: "October 2023",
    desc: "Innovation partnership for emerging technologies.",
    highlights: [
      "AI & ML research",
      "Product innovation",
      "Startup incubation"
    ],
    pdf: "sample-mou.pdf"
  },
  {
    category: "education",
    icon: "bi-book",
    tag: "Education",
    title: "Global Skills Academy",
    date: "September 2023",
    desc: "Skill development partnership for professionals.",
    highlights: [
      "Certification programs",
      "Corporate training",
      "Skill assessments"
    ],
    pdf: "sample-mou.pdf"
  }
];

const totalCount = data.length;
const resultCountEl = document.getElementById("resultCount");

const cardsContainer = document.getElementById("cards");

/* RENDER CARDS */
function renderCards(list){
  cardsContainer.innerHTML = "";
  list.forEach(item=>{
    const card = document.createElement("div");
    card.className = "card";
    card.dataset.category = item.category;

    card.innerHTML = `
      <div class="icon"><i class="bi ${item.icon}"></i></div>
      <span class="tag">${item.tag}</span>
      <h3>${item.title}</h3>
      <p class="date"><i class="bi bi-calendar"></i> ${item.date}</p>
      <p>${item.desc}</p>
    `;

    card.onclick = ()=>openModal(item);
    cardsContainer.appendChild(card);

    resultCountEl.textContent =
  `Showing ${list.length} of ${totalCount} partnerships`;

  });
}

renderCards(data);

/* MODAL */
function openModal(item){
  document.getElementById("modalIcon").className = `bi ${item.icon}`;
  document.getElementById("modalTag").textContent = item.tag;
  document.getElementById("modalTitle").textContent = item.title;
  document.getElementById("modalDate").textContent = item.date;
  document.getElementById("modalDesc").textContent = item.desc;

  const list = document.getElementById("modalList");
  list.innerHTML = "";
  item.highlights.forEach(h=>{
    const li = document.createElement("li");
    li.textContent = h;
    list.appendChild(li);
  });

  document.getElementById("viewPdf").href = item.pdf;

  document.getElementById("mouModal").style.display = "flex";
}

window.closeModal = function () {
  document.getElementById("mouModal").style.display = "none";
};

/* FILTER */
document.querySelectorAll(".filter-btn").forEach(btn=>{
  btn.onclick = ()=>{
    document.querySelectorAll(".filter-btn").forEach(b=>b.classList.remove("active"));
    btn.classList.add("active");

    const f = btn.dataset.filter;
    renderCards(f==="all" ? data : data.filter(d=>d.category===f));
  };
});

/* SEARCH */
document.getElementById("searchInput").addEventListener("input", e => {
  const q = e.target.value.toLowerCase();

  const filtered = data.filter(d =>
    d.title.toLowerCase().includes(q) ||
    d.tag.toLowerCase().includes(q) ||
    d.category.toLowerCase().includes(q) ||
    d.desc.toLowerCase().includes(q)
  );

  renderCards(filtered);
});

}