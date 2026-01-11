import { useEffect } from "react";
import "../css/gallery.css";
import { rungallery } from "../js/gallery";
import { NavLink } from "react-router-dom";

function Gallery() {

  useEffect(() => {
    rungallery();
  }, []);

  return (
    <div className="gallery-page">
      {/* HERO */}
      <section className="hero-gallery">
        <div className="gallery-hero-c">
          <h1>Our Gallery</h1>
          <p>
            Explore our journey through images — from events and activities to
            <br />
            achievements and our vibrant workspace.
          </p>
        </div>
      </section>

      {/* GALLERY SECTION */}
      <section className="gallery-section">
        <div className="filters">
          <button className="filter-btn active" data-category="All">All</button>
          <button className="filter-btn" data-category="Events">Events</button>
          <button className="filter-btn" data-category="Activities">Activities</button>
          <button className="filter-btn" data-category="Achievements">Achievements</button>
          <button className="filter-btn" data-category="Office">Office</button>
        </div>

        <div className="gallery-grid" id="galleryGrid"></div>
      </section>

      {/* IMAGE MODAL */}
      <div className="modal" id="imageModal">
        <span
        className="close-btn"
        onClick={() => window.closeGalleryModal()}
        >
        &times;
        </span>
        <img id="modalImage" alt="" />
        <h3 id="modalTitle"></h3>
        <p id="modalCategory"></p>
      </div>
    </div>
  );
}

export default Gallery;
