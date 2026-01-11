export function rungallery() {

  const galleryItems = [
    {
      title: "Annual Tech Summit 2024",
      category: "Events",
      image: "https://picsum.photos/id/1011/600/400"
    },
    {
      title: "Team Building Activity",
      category: "Activities",
      image: "https://picsum.photos/id/1025/600/400"
    },
    {
      title: "Award Ceremony",
      category: "Achievements",
      image: "https://picsum.photos/id/1035/600/400"
    },
    {
      title: "Office Workspace",
      category: "Office",
      image: "https://picsum.photos/id/1043/600/400"
    },
    {
      title: "Client Appreciation Day",
      category: "Events",
      image: "https://picsum.photos/id/1050/600/400"
    },
    {
      title: "Innovation Workshop",
      category: "Activities",
      image: "https://picsum.photos/id/1060/600/400"
    }
  ];

  const grid = document.getElementById("galleryGrid");
  const filterBtns = document.querySelectorAll(".filter-btn");

  const modal = document.getElementById("imageModal");
  const modalImage = document.getElementById("modalImage");
  const modalTitle = document.getElementById("modalTitle");
  const modalCategory = document.getElementById("modalCategory");

  if (!grid || !modal) return; // 🔑 safety for React

  function renderGallery(category) {
    grid.innerHTML = "";

    galleryItems
      .filter(item => category === "All" || item.category === category)
      .forEach(item => {
        const card = document.createElement("div");
        card.className = "gallery-card";

        card.innerHTML = `
          <img src="${item.image}" alt="${item.title}">
          <div class="gallery-info">
            <h4>${item.title}</h4>
            <span>${item.category}</span>
          </div>
        `;

        card.addEventListener("click", () => openModal(item));
        grid.appendChild(card);
      });
  }

  function openModal(item) {
    modalImage.src = item.image;
    modalTitle.textContent = item.title;
    modalCategory.textContent = item.category;
    modal.style.display = "flex";
  }

  // expose close for React button
  window.closeGalleryModal = function () {
    modal.style.display = "none";
  };

  modal.addEventListener("click", e => {
    if (e.target === modal) {
      modal.style.display = "none";
    }
  });

  filterBtns.forEach(btn => {
    btn.addEventListener("click", () => {
      document.querySelector(".filter-btn.active")?.classList.remove("active");
      btn.classList.add("active");
      renderGallery(btn.dataset.category);
    });
  });

  renderGallery("All");
}
