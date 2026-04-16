<?php
// ZEAL by Kasana Builder – Main Entry Point
$page_title = "ZEAL  | Premium Grade A Commercial Spaces";
$meta_description = "Discover ZEAL by Kasana – ultra-modern Grade A commercial workspaces at TechZone 4. Elevate your business presence with world-class amenities, strategic location, and state-of-the-art infrastructure.";
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta name="description" content="<?= htmlspecialchars($meta_description) ?>">
    <meta name="keywords" content="commercial real estate, Grade A offices, TechZone 4, Kasana Builder, premium workspace, commercial spaces">
    <meta name="author" content="Kasana Builders">
    <title><?= htmlspecialchars($page_title) ?></title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;500;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&family=Inter:wght@300;400;500;600;700&family=Montserrat:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="style.css?v=<?= time(); ?>">
</head>
<body>

<!-- Custom Cursor -->
<div class="custom-cursor" id="customCursor">
    <div class="cursor-ring">
        <div class="cursor-dot"></div>
    </div>
</div>

<!-- ═══════════════ NAVBAR ═══════════════ -->
<header id="navbar">
    <nav class="nav-container">
        <a href="#" class="logo" aria-label="ZEAL by Kasana Home">
            <div class="logo-icon">Z</div>
            <div class="logo-text">
                <span class="logo-zeal">ZEAL</span>
            </div>
        </a>
        <button class="hamburger" id="hamburger" aria-label="Toggle navigation" aria-expanded="false">
            <span></span><span></span><span></span>
        </button>
        <ul class="nav-links" id="nav-links">
            <li><a href="#overview" class="nav-link active">Overview</a></li>
            <li><a href="#gallery"  class="nav-link">Gallery</a></li>
            <li><a href="#spaces"   class="nav-link">Spaces</a></li>
            <li><a href="#location" class="nav-link">Location</a></li>
            <li><a href="#why"      class="nav-link">Why Us</a></li>
        </ul>
        <a href="#contact" class="btn-enquire">Enquire Now</a>
    </nav>
</header>

<!-- ═══════════════ HERO CAROUSEL ═══════════════ -->
<section id="hero" class="hero">
    <div class="hero-slider" id="heroSlider">
        <div class="hero-slide active">
            <img src="assets/dawn.jpg" alt="ZEAL – Dawn View" class="hero-slide-img">
        </div>
        <div class="hero-slide">
            <img src="assets/perspective.jpg" alt="Perspective View" class="hero-slide-img">
        </div>
        <div class="hero-slide">
            <img src="assets/top.jpg" alt="Aerial Overview" class="hero-slide-img">
        </div>
        <div class="hero-slide">
            <img src="assets/closeup.jpg" alt="Close-Up Detail" class="hero-slide-img">
        </div>
    </div>
    <div class="hero-overlay"></div>

    <button class="hero-arrow hero-prev" id="heroPrev" aria-label="Previous slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg>
    </button>
    <button class="hero-arrow hero-next" id="heroNext" aria-label="Next slide">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg>
    </button>

    <div class="hero-content">
        <div class="hero-location-pill reveal-hero">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7z"/><circle cx="12" cy="9" r="2.5"/></svg>
            Plot 31 · TechZone 4 · Greater Noida West
        </div>
        <h1 class="hero-headline reveal-hero">Where Business<br><em>Thrives.</em></h1>
        <p class="hero-sub reveal-hero">Grade A commercial space engineered for distinction. Premium offices, retail &amp; F&B spaces — designed for brands that mean business.</p>
        <div class="hero-ctas reveal-hero">
            <a href="#contact" class="btn-hero-primary" id="site-visit-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>
                Book a Site Visit
            </a>
            <a href="#gallery" class="btn-hero-outline" id="explore-spaces-btn">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>
                Explore Spaces
            </a>
        </div>
    </div>

    <div class="hero-dots" id="heroDots">
        <span class="hero-dot active" data-slide="0"></span>
        <span class="hero-dot" data-slide="1"></span>
        <span class="hero-dot" data-slide="2"></span>
        <span class="hero-dot" data-slide="3"></span>
    </div>

    <div class="hero-stats-bar">
        <div class="hero-stat">
            <span class="hero-stat-num">7,500</span>
            <span class="hero-stat-label">Sqft / Floor</span>
        </div>
        <div class="hero-stat">
            <span class="hero-stat-num">B+9</span>
            <span class="hero-stat-label">RCC Structure</span>
        </div>
        <div class="hero-stat">
            <span class="hero-stat-num">80+</span>
            <span class="hero-stat-label">Car Parks</span>
        </div>
        <div class="hero-stat">
            <span class="hero-stat-num">13,350</span>
            <span class="hero-stat-label">Homes Nearby</span>
        </div>
    </div>
</section>

<!-- ═══════════════ TICKER ═══════════════ -->
<div class="gold-ticker">
    <div class="ticker-track">
        <span class="ticker-item">Grade A Commercial <span class="ticker-dot">·</span></span>
        <span class="ticker-item">DGU Glass Façade <span class="ticker-dot">·</span></span>
        <span class="ticker-item">3 OTIS High-Speed Lifts <span class="ticker-dot">·</span></span>
        <span class="ticker-item">VRF Air Conditioning <span class="ticker-dot">·</span></span>
        <span class="ticker-item">Imported Marble Lobby <span class="ticker-dot">·</span></span>
        <span class="ticker-item">80+ Car Parking <span class="ticker-dot">·</span></span>
        <span class="ticker-item">Full Fire Safety Compliance <span class="ticker-dot">·</span></span>
        <span class="ticker-item">Power Backup <span class="ticker-dot">·</span></span>
        <span class="ticker-item">Grade A Commercial <span class="ticker-dot">·</span></span>
        <span class="ticker-item">DGU Glass Façade <span class="ticker-dot">·</span></span>
        <span class="ticker-item">3 OTIS High-Speed Lifts <span class="ticker-dot">·</span></span>
        <span class="ticker-item">VRF Air Conditioning <span class="ticker-dot">·</span></span>
        <span class="ticker-item">Imported Marble Lobby <span class="ticker-dot">·</span></span>
        <span class="ticker-item">80+ Car Parking <span class="ticker-dot">·</span></span>
        <span class="ticker-item">Full Fire Safety Compliance <span class="ticker-dot">·</span></span>
        <span class="ticker-item">Power Backup <span class="ticker-dot">·</span></span>
    </div>
</div>

<!-- ═══════════════ FLOATING CTA ═══════════════ -->
<div class="floating-cta">
    <a href="tel:9990002008" class="float-btn float-phone" aria-label="Call Now" title="Call Now">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .99h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
    </a>
    <a href="https://wa.me/919990002008" target="_blank" rel="noopener noreferrer" class="float-btn float-whatsapp" aria-label="WhatsApp" title="WhatsApp">
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"/></svg>
    </a>
</div>

<!-- ═══════════════ OVERVIEW (Project Details) ═══════════════ -->
<section id="overview" class="section-overview">
    <div class="overview-grid">
        <div class="overview-image-wrap scroll-reveal">
            <img src="assets/lobby.jpg" alt="ZEAL Grand Lobby" class="overview-main-img" loading="lazy">
            <div class="overview-badge">
                <strong class="badge-num">B+9</strong>
                <span class="badge-label">Floors</span>
            </div>
        </div>
        <div class="overview-content scroll-reveal">
            <div class="section-tag-line">
                <div class="tag-line"></div> Project Overview
            </div>
            <h2 class="section-heading">Defining <em>Grade A</em> in Greater Noida West</h2>
            <div class="gold-underline"></div>
            <p class="overview-desc">ZEAL by Kasana Builder is a landmark commercial development in TechZone 4 — engineered with world-class specifications for offices, retail, and F&B spaces.</p>
            <div class="specs-grid">
                <div class="spec-card">
                    <div class="spec-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path><path d="M8 6h.01"></path><path d="M16 6h.01"></path><path d="M12 6h.01"></path><path d="M12 10h.01"></path><path d="M12 14h.01"></path><path d="M16 10h.01"></path><path d="M16 14h.01"></path><path d="M8 10h.01"></path><path d="M8 14h.01"></path></svg></div>
                    <div class="spec-text"><strong>B+9 RCC Structure</strong><span>2,000 sqm plot</span></div>
                </div>
                <div class="spec-card">
                    <div class="spec-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polygon points="12 2 2 7 12 12 22 7 12 2"></polygon><polyline points="2 12 12 17 22 12"></polyline><polyline points="2 17 12 22 22 17"></polyline></svg></div>
                    <div class="spec-text"><strong>7,500 sqft / floor</strong><span>Column-free span</span></div>
                </div>
                <div class="spec-card">
                    <div class="spec-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><circle cx="5" cy="18" r="3"/><circle cx="19" cy="18" r="3"/><path d="M5 15V5h14v10"/></svg></div>
                    <div class="spec-text"><strong>80+ Car Parking</strong><span>Dedicated basement</span></div>
                </div>
                <div class="spec-card">
                    <div class="spec-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><polyline points="16 16 12 20 8 16"></polyline><line x1="12" y1="20" x2="12" y2="10"></line><polyline points="8 8 12 4 16 8"></polyline><line x1="12" y1="4" x2="12" y2="14"></line></svg></div>
                    <div class="spec-text"><strong>3 OTIS Lifts</strong><span>High-speed elevators</span></div>
                </div>
                <div class="spec-card">
                    <div class="spec-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><line x1="12" y1="2" x2="12" y2="22"></line><line x1="17" y1="5" x2="7" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line><line x1="7" y1="5" x2="17" y2="19"></line></svg></div>
                    <div class="spec-text"><strong>VRF AC System</strong><span>Zone-specific control</span></div>
                </div>
                <div class="spec-card">
                    <div class="spec-icon"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg></div>
                    <div class="spec-text"><strong>Fire Safety</strong><span>Full compliance</span></div>
                </div>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════ GALLERY GRID ═══════════════ -->
<section id="gallery" class="section-gallery">
    <div class="gallery-header scroll-reveal">
        <div class="gallery-title-wrap">
            <div class="section-tag-line">
                <div class="tag-line"></div> Visual Tour
            </div>
            <h2 class="section-heading" style="margin-bottom:0">Explore <em>Every Corner</em></h2>
        </div>
        <div class="gallery-filters">
            <button class="filter-btn active" data-filter="all">All</button>
            <button class="filter-btn" data-filter="exterior">Exterior</button>
            <button class="filter-btn" data-filter="interior">Interior</button>
            <button class="filter-btn" data-filter="site">On-Site</button>
        </div>
    </div>

    <div class="gallery-grid scroll-reveal" id="galleryGrid">
        <div class="gallery-item gi-large" data-category="exterior">
            <img src="assets/dawn.jpg" alt="Dawn Elevation" loading="lazy">
            <div class="gi-overlay"></div>
            <div class="gi-info">
                <div class="gi-info-text">
                    <h4>Dawn Elevation</h4>
                    <span>exterior</span>
                </div>
                <div class="gi-zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div>
            </div>
            <div class="gi-corner"></div>
        </div>
        <div class="gallery-item" data-category="exterior">
            <img src="assets/perspective.jpg" alt="Full Perspective" loading="lazy">
            <div class="gi-overlay"></div>
            <div class="gi-info"><div class="gi-info-text"><h4>Full Perspective</h4><span>exterior</span></div><div class="gi-zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div></div>
            <div class="gi-corner"></div>
        </div>
        <div class="gallery-item" data-category="exterior">
            <img src="assets/top.jpg" alt="Aerial View" loading="lazy">
            <div class="gi-overlay"></div>
            <div class="gi-info"><div class="gi-info-text"><h4>Aerial View</h4><span>exterior</span></div><div class="gi-zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div></div>
            <div class="gi-corner"></div>
        </div>
        <div class="gallery-item gi-tall" data-category="exterior">
            <img src="assets/closeup.jpg" alt="Façade Detail" loading="lazy">
            <div class="gi-overlay"></div>
            <div class="gi-info"><div class="gi-info-text"><h4>Façade Detail</h4><span>exterior</span></div><div class="gi-zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div></div>
            <div class="gi-corner"></div>
        </div>
        <div class="gallery-item" data-category="interior">
            <img src="assets/lobby.jpg" alt="Grand Lobby" loading="lazy">
            <div class="gi-overlay"></div>
            <div class="gi-info"><div class="gi-info-text"><h4>Grand Lobby</h4><span>interior</span></div><div class="gi-zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div></div>
            <div class="gi-corner"></div>
        </div>
        <div class="gallery-item gi-large" data-category="interior">
            <img src="assets/retail.jpg" alt="Retail Frontage" loading="lazy">
            <div class="gi-overlay"></div>
            <div class="gi-info"><div class="gi-info-text"><h4>Retail Frontage</h4><span>interior</span></div><div class="gi-zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div></div>
            <div class="gi-corner"></div>
        </div>
        <div class="gallery-item" data-category="interior">
            <img src="assets/mez1.jpg" alt="Mezzanine Level 1" loading="lazy">
            <div class="gi-overlay"></div>
            <div class="gi-info"><div class="gi-info-text"><h4>Mezzanine Level 1</h4><span>interior</span></div><div class="gi-zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div></div>
            <div class="gi-corner"></div>
        </div>
        <div class="gallery-item" data-category="interior">
            <img src="assets/mez2.jpg" alt="Mezzanine Level 2" loading="lazy">
            <div class="gi-overlay"></div>
            <div class="gi-info"><div class="gi-info-text"><h4>Mezzanine Level 2</h4><span>interior</span></div><div class="gi-zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div></div>
            <div class="gi-corner"></div>
        </div>
        <div class="gallery-item gi-tall" data-category="interior">
            <img src="assets/floor1.jpg" alt="Typical Floor Plan" loading="lazy">
            <div class="gi-overlay"></div>
            <div class="gi-info"><div class="gi-info-text"><h4>Typical Floor Plan</h4><span>interior</span></div><div class="gi-zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div></div>
            <div class="gi-corner"></div>
        </div>
        <div class="gallery-item" data-category="interior">
            <img src="assets/office.jpg" alt="Office Space" loading="lazy">
            <div class="gi-overlay"></div>
            <div class="gi-info"><div class="gi-info-text"><h4>Office Space</h4><span>interior</span></div><div class="gi-zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div></div>
            <div class="gi-corner"></div>
        </div>
        <div class="gallery-item" data-category="interior">
            <img src="assets/conf.jpg" alt="Conference Room" loading="lazy">
            <div class="gi-overlay"></div>
            <div class="gi-info"><div class="gi-info-text"><h4>Conference Room</h4><span>interior</span></div><div class="gi-zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div></div>
            <div class="gi-corner"></div>
        </div>
        <div class="gallery-item" data-category="site">
            <img src="assets/site.jpg" alt="Construction Progress" loading="lazy">
            <div class="gi-overlay"></div>
            <div class="gi-info"><div class="gi-info-text"><h4>Construction Progress</h4><span>site</span></div><div class="gi-zoom"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/><line x1="11" y1="8" x2="11" y2="14"/><line x1="8" y1="11" x2="14" y2="11"/></svg></div></div>
            <div class="gi-corner"></div>
        </div>
    </div>
</section>

<!-- Lightbox -->
<div class="lightbox" id="lightbox">
    <button class="lb-close" id="lbClose"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg></button>
    <button class="lb-nav lb-prev" id="lbPrev"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="15 18 9 12 15 6"/></svg></button>
    <button class="lb-nav lb-next" id="lbNext"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="9 18 15 12 9 6"/></svg></button>
    <img src="" alt="" class="lb-img" id="lbImg">
    <div class="lb-caption" id="lbCaption">
        <h4></h4>
        <span></span>
    </div>
</div>

<!-- ═══════════════ SPACES ═══════════════ -->
<section id="spaces" class="section-spaces">
    <div class="spaces-header scroll-reveal">
        <div class="section-tag-center">Available Spaces</div>
        <h2 class="section-heading-dark text-center">Imagine the <em>Possibilities</em></h2>
        <p class="spaces-sub">Three distinct space typologies — each designed to maximise your business potential.</p>
    </div>

    <div class="spaces-grid">
        <div class="space-card scroll-reveal">
            <img src="assets/office.jpg" alt="Grade A Offices" class="space-img" loading="lazy">
            <div class="space-gradient"></div>
            <div class="space-content">
                <span class="space-badge">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
                    Commercial
                </span>
                <h3 class="space-title">Grade A Offices</h3>
                <p class="space-desc">Flexible, open-plan floors with natural light, column-free spans — perfectly suited to enterprise and mid-size businesses.</p>
                <div class="space-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
            </div>
        </div>
        <div class="space-card scroll-reveal">
            <img src="assets/retail.jpg" alt="Premium Retail" class="space-img" loading="lazy">
            <div class="space-gradient"></div>
            <div class="space-content">
                <span class="space-badge">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M6 2L3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z"></path><line x1="3" y1="6" x2="21" y2="6"></line><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
                    Retail
                </span>
                <h3 class="space-title">Premium Retail</h3>
                <p class="space-desc">Double-height ground floor retail with maximum street frontage — positioned to capture the 13,000+ residential catchment.</p>
                <div class="space-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
            </div>
        </div>
        <div class="space-card scroll-reveal">
            <img src="assets/mez1.jpg" alt="F&B & Dining" class="space-img" loading="lazy">
            <div class="space-gradient"></div>
            <div class="space-content">
                <span class="space-badge">
                    <svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"/><path d="M7 2v20"/><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"/></svg>
                    F&B
                </span>
                <h3 class="space-title">F&B & Dining</h3>
                <p class="space-desc">Premium dining and café spaces capturing high footfall from the dense residential base and office workers.</p>
                <div class="space-arrow"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg></div>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════ CONNECTIVITY ═══════════════ -->
<div class="section-connectivity">
    <div class="connectivity-header scroll-reveal">
        <p class="connect-tag">Strategic Connectivity</p>
        <h3 class="connect-heading">Everything Within <em>Reach</em></h3>
    </div>
    <div class="connect-grid scroll-reveal">
        <div class="connect-card">
            <div class="connect-time">5 min</div>
            <div class="connect-place">Gaur Chowk</div>
        </div>
        <div class="connect-card">
            <div class="connect-time">10 min</div>
            <div class="connect-place">Meerut Expressway</div>
        </div>
        <div class="connect-card">
            <div class="connect-time">15 min</div>
            <div class="connect-place">Sectors 62 & 63, Noida</div>
        </div>
        <div class="connect-card">
            <div class="connect-time">20 min</div>
            <div class="connect-place">Noida Golf Course</div>
        </div>
    </div>
</div>

<!-- ═══════════════ SIX REASONS ═══════════════ -->
<section class="section-reasons">
    <div class="reasons-header scroll-reveal">
        <div class="reasons-tag">Why Zeal</div>
        <h2 class="reasons-heading">Six Reasons<br><span>Your Business Belongs Here</span></h2>
    </div>
    <div class="reasons-grid scroll-reveal">
        <div class="reason-card">
            <div class="reason-top-bar"></div>
            <div class="rc-num">01</div>
            <div class="rc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div>
            <h4 class="rc-title">13,350+ Homes Nearby</h4>
            <div class="rc-bar"></div>
            <p class="rc-desc">Captive residential demand within 4.2 km — fully occupied complexes</p>
        </div>
        <div class="reason-card">
            <div class="reason-top-bar"></div>
            <div class="rc-num">02</div>
            <div class="rc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="18" rx="2"></rect><line x1="8" y1="21" x2="8" y2="23"></line><line x1="16" y1="21" x2="16" y2="23"></line><line x1="4" y1="15" x2="20" y2="15"></line><circle cx="8" cy="11" r="1"></circle><circle cx="16" cy="11" r="1"></circle></svg></div>
            <h4 class="rc-title">Metro at Doorstep</h4>
            <div class="rc-bar"></div>
            <p class="rc-desc">Upcoming Aqua Line · TechZone 4 station — walking distance</p>
        </div>
        <div class="reason-card">
            <div class="reason-top-bar"></div>
            <div class="rc-num">03</div>
            <div class="rc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="2" width="16" height="20" rx="2" ry="2"></rect><path d="M9 22v-4h6v4"></path></svg></div>
            <h4 class="rc-title">Only Grade A Here</h4>
            <div class="rc-bar"></div>
            <p class="rc-desc">B+9 RCC · DGU glass · OTIS lifts · Marble double-height lobby</p>
        </div>
        <div class="reason-card">
            <div class="reason-top-bar"></div>
            <div class="rc-num">04</div>
            <div class="rc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2v0a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg></div>
            <h4 class="rc-title">Proven Brand Belt</h4>
            <div class="rc-bar"></div>
            <p class="rc-desc">McDonald's · Starbucks · KFC already operating within 5 km</p>
        </div>
        <div class="reason-card">
            <div class="reason-top-bar"></div>
            <div class="rc-num">05</div>
            <div class="rc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 18h10"></path><path d="M18 18v-8"></path><path d="M18 6a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path><path d="M6 22a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"></path></svg></div>
            <h4 class="rc-title">Highway Connectivity</h4>
            <div class="rc-bar"></div>
            <p class="rc-desc">10 min to Meerut Expressway · 15 min to Noida Sectors 62-63</p>
        </div>
        <div class="reason-card">
            <div class="reason-top-bar"></div>
            <div class="rc-num">06</div>
            <div class="rc-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></div>
            <h4 class="rc-title">Education Hub</h4>
            <div class="rc-bar"></div>
            <p class="rc-desc">Shri Ram · Sarvottam · Pacific World · Aakash — all nearby</p>
        </div>
    </div>
</section>

<!-- ═══════════════ WHY INVESTORS ═══════════════ -->
<section id="why" class="section-investors">
    <div class="investors-header scroll-reveal">
        <div class="inv-tag">Smart Money Moves Here</div>
        <h2 class="inv-heading">Why Investors Are<br>Choosing <em>ZEAL</em></h2>
        <div class="gold-underline centered"></div>
    </div>
    <div class="investor-grid scroll-reveal">
        <div class="inv-card">
            <div class="inv-bottom-bar"></div>
            <div class="inv-num">01</div>
            <div class="inv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path><circle cx="12" cy="10" r="3"></circle></svg></div>
            <div class="inv-bar"></div>
            <h4 class="inv-title">PRIME TECHZONE 4 ADDRESS</h4>
            <p class="inv-desc">Located on 130m wide sector road with direct connectivity to FNG & Noida-Greater Noida Expressway — your business deserves this address.</p>
        </div>
        <div class="inv-card">
            <div class="inv-bottom-bar"></div>
            <div class="inv-num">02</div>
            <div class="inv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-.5-.5-2.5 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.2-1.1.7l-1 2.5L9 14l-4 4-3-1-1 1 4 4 1-1-1-3 4-4 4.6 6.3c.5.3 1 .1 1.2-.4l2.5-1.1c.5-.2.8-.6.7-1.1z"></path></svg></div>
            <div class="inv-bar"></div>
            <h4 class="inv-title">AIRPORT PROXIMITY ADVANTAGE</h4>
            <p class="inv-desc">Just 20 mins from upcoming Noida International Airport (Jewar) — the single biggest value multiplier for commercial real estate in NCR.</p>
        </div>
        <div class="inv-card">
            <div class="inv-bottom-bar"></div>
            <div class="inv-num">03</div>
            <div class="inv-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 1 0 2.829 2.828z"></path></svg></div>
            <div class="inv-bar"></div>
            <h4 class="inv-title">ARCHITECT-DESIGNED EFFICIENCY</h4>
            <p class="inv-desc">7,500 sqft column-free floor plates with 75%+ carpet efficiency — no wasted space. Every square foot works for your business.</p>
        </div>
    </div>
</section>

<!-- ═══════════════ CATCHMENT ═══════════════ -->
<section id="catchment" class="section-catchment">
    <div class="catchment-header scroll-reveal">
        <div class="catch-tag">Residential Catchment</div>
        <h2 class="catch-heading">13,350 Homes.<br><span>Your Ready Market.</span></h2>
    </div>

    <div class="catchment-big-num scroll-reveal">
        <div class="big-number">13,350</div>
        <div class="big-label">Residential Units Within 4.2 KM Radius</div>
    </div>

    <div class="catchment-categories scroll-reveal">
        <div class="cat-col">
            <div class="cat-icon"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><polyline points="9 22 9 12 15 12 15 22"></polyline></svg></div>
            <div class="cat-label">RESIDENTIAL COMPLEXES</div>
            <h3 class="cat-title">Five Large Apartment Clusters</h3>
            <ul class="cat-list">
                <li><span class="cat-bullet"></span>Nirala Estate & Aspire</li>
                <li><span class="cat-bullet"></span>Eros Sampoornam</li>
                <li><span class="cat-bullet"></span>Gaur Saundaryam</li>
                <li><span class="cat-bullet"></span>Cherry County</li>
                <li><span class="cat-bullet"></span>Saviour GreenArch</li>
                <li><span class="cat-bullet"></span>Galaxy Vega TZ-IV</li>
            </ul>
        </div>
        <div class="cat-col">
            <div class="cat-icon"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"></path><path d="M6 12v5c3 3 9 3 12 0v-5"></path></svg></div>
            <div class="cat-label">SCHOOLS & INSTITUTIONS</div>
            <h3 class="cat-title">Daily Footfall Generators</h3>
            <ul class="cat-list">
                <li><span class="cat-bullet"></span>Shri Ram Universal School</li>
                <li><span class="cat-bullet"></span>Sarvottam International School</li>
                <li><span class="cat-bullet"></span>Pacific World School</li>
                <li><span class="cat-bullet"></span>Aakash Institute, GN West</li>
                <li><span class="cat-bullet"></span>Yatharth Super Speciality Hospital</li>
            </ul>
        </div>
        <div class="cat-col">
            <div class="cat-icon"><svg viewBox="0 0 24 24" width="24" height="24" fill="none" stroke="currentColor" stroke-width="2"><rect x="4" y="3" width="16" height="18" rx="2"></rect><line x1="8" y1="21" x2="8" y2="23"></line><line x1="16" y1="21" x2="16" y2="23"></line><line x1="4" y1="15" x2="20" y2="15"></line><circle cx="8" cy="11" r="1"></circle><circle cx="16" cy="11" r="1"></circle></svg></div>
            <div class="cat-label">METRO & CONNECTIVITY</div>
            <h3 class="cat-title">Upcoming Aqua Line Access</h3>
            <ul class="cat-list">
                <li><span class="cat-bullet"></span>TechZone 4 station — walking distance</li>
                <li><span class="cat-bullet"></span>Noida & NCR corridor link</li>
                <li><span class="cat-bullet"></span>10 min — Meerut Expressway</li>
                <li><span class="cat-bullet"></span>15 min — Sectors 62 & 63, Noida</li>
                <li><span class="cat-bullet"></span>5 min — Gaur Chowk / Gaur Mall</li>
            </ul>
        </div>
    </div>
</section>

<!-- ═══════════════ LOCATION ═══════════════ -->
<section id="location" class="section-location">
    <div class="location-header scroll-reveal">
        <div class="loc-tag">Location</div>
        <h2 class="loc-heading">Plot No. 31, TechZone 4<br><span>Greater Noida West</span></h2>
    </div>
    <div class="location-grid scroll-reveal">
        <div class="nearby-list">
            <div class="nearby-item">
                <span class="nearby-time">5 min</span>
                <div class="nearby-info">
                    <strong>Gaur Chowk / Gaur Mall</strong>
                    <span>Major retail & entertainment destination</span>
                </div>
            </div>
            <div class="nearby-item">
                <span class="nearby-time">600m</span>
                <div class="nearby-info">
                    <strong>Galaxy Vega Techzone IV</strong>
                    <span>750 flats — immediate catchment</span>
                </div>
            </div>
            <div class="nearby-item">
                <span class="nearby-time">5 min</span>
                <div class="nearby-info">
                    <strong>Yatharth Super Speciality Hospital</strong>
                    <span>Leading hospital, Noida Extension</span>
                </div>
            </div>
            <div class="nearby-item">
                <span class="nearby-time">5 min</span>
                <div class="nearby-info">
                    <strong>Eco Tech-12 Industrial Area</strong>
                    <span>Significant commercial & industrial zone</span>
                </div>
            </div>
            <div class="nearby-item">
                <span class="nearby-time">10 min</span>
                <div class="nearby-info">
                    <strong>Meerut Expressway</strong>
                    <span>Direct highway connectivity heading north</span>
                </div>
            </div>
            <div class="nearby-item">
                <span class="nearby-time">15 min</span>
                <div class="nearby-info">
                    <strong>Sectors 62 & 63, Noida</strong>
                    <span>Prime IT/ITES employment hubs</span>
                </div>
            </div>
            <div class="nearby-item">
                <span class="nearby-time">⭐</span>
                <div class="nearby-info">
                    <strong>Upcoming Metro Station</strong>
                    <span>Aqua Line Extension · TechZone 4 station</span>
                </div>
            </div>
        </div>
        <div class="map-column">
            <div class="map-iframe-wrap">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3504.5!2d77.4493!3d28.5906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce5b74cccc33d%3A0x9a30eda3a22e0f44!2sTechZone%204%2C%20Greater%20Noida%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin" allowfullscreen="" loading="lazy" title="ZEAL Location"></iframe>
            </div>
            <div class="map-pin-bar">
                <span>📍</span> Plot No. 31, TechZone 4, Greater Noida West
            </div>
        </div>
    </div>
    <div class="brand-ticker scroll-reveal">
        <span>MCDONALD'S</span><span>DOMINO'S</span><span>KFC</span><span>BURGER KING</span><span>STARBUCKS</span><span>SUBWAY</span><span>HALDIRAM'S</span><span>PIZZA HUT</span><span>CHAAYOS</span><span>BIKANERVALA</span>
    </div>
</section>

<!-- ═══════════════ CTA BAND ═══════════════ -->
<section class="section-cta-band scroll-reveal">
    <div class="cta-bg-text">ZEAL</div>
    <div class="cta-band-content">
        <div class="cta-tag">Limited Spaces Available</div>
        <h2 class="cta-heading">Your Business.<br><em>Deserves This Address.</em></h2>
        <p class="cta-sub">Schedule a site visit or request lease details today.</p>
        <div class="cta-btns">
            <a href="#contact" class="btn-cta-primary">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.68A2 2 0 012 .99h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/></svg>
                Schedule a Visit
            </a>
            <a href="#contact" class="btn-cta-outline">Get Lease Details</a>
        </div>
    </div>
</section>

<!-- ═══════════════ CONTACT ═══════════════ -->
<section id="contact" class="section-contact">
    <div class="contact-layout">
        <div class="contact-info-side scroll-reveal">
            <div class="section-tag-line">
                <div class="tag-line"></div> Get in Touch
            </div>
            <h2 class="section-heading">Reserve Your<br><em>Space at Zeal</em></h2>
            <p class="contact-intro">Schedule a site visit, request a floor plan, or speak directly with our leasing team. Premium commercial spaces are limited.</p>

            <div class="contact-details">
                <div class="cd-item">
                    <div class="cd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg></div>
                    <div>
                        <strong class="cd-label">Location</strong>
                        <p class="cd-value">Plot No. 31, TechZone 4<br>Greater Noida West, U.P.</p>
                    </div>
                </div>
                <div class="cd-item">
                    <div class="cd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"/></svg></div>
                    <div>
                        <strong class="cd-label">Call Us</strong>
                        <p class="cd-value">+91 99900 02008</p>
                    </div>
                </div>
                <div class="cd-item">
                    <div class="cd-icon"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg></div>
                    <div>
                        <strong class="cd-label">Email</strong>
                        <p class="cd-value">leasing@zealcommercial.com</p>
                    </div>
                </div>
            </div>
        </div>

        <div class="contact-form-side scroll-reveal">
            <div class="contact-form-card">
                <h3 class="form-card-heading">Enquire Now</h3>
                <div id="form-message-container">
                    <div class="form-success" id="form-success-msg" style="display: none;">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 11.08V12a10 10 0 11-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>
                        <div>
                            <strong>Enquiry Sent!</strong>
                            <p>Our leasing team will respond within 24 hours.</p>
                        </div>
                    </div>
                    <div class="form-error" id="form-error-msg" style="display: none;"></div>
                </div>

                <form method="POST" action="api/contact-process.php" class="contact-form" id="contactForm" novalidate>
                    <div class="field-row">
                        <div class="form-field-v2">
                            <label>First Name</label>
                            <input type="text" name="fname" placeholder="Rahul" required>
                        </div>
                        <div class="form-field-v2">
                            <label>Last Name</label>
                            <input type="text" name="lname" placeholder="Sharma">
                        </div>
                    </div>
                    <div class="form-field-v2">
                        <label>Phone</label>
                        <input type="tel" name="phone" placeholder="+91 98765 43210" required>
                    </div>
                    <div class="form-field-v2">
                        <label>Email</label>
                        <input type="email" name="email" placeholder="rahul@company.com" required>
                    </div>
                    <div class="form-field-v2">
                        <label>Space Type</label>
                        <select name="interest">
                            <option value="">Select space type</option>
                            <option value="office">Grade A Office</option>
                            <option value="retail">Ground Floor Retail</option>
                            <option value="fb">F&B / Dining</option>
                            <option value="multiple">Multiple Units</option>
                        </select>
                    </div>
                    <div class="form-field-v2">
                        <label>Message</label>
                        <textarea name="message" rows="3" placeholder="Tell us about your requirements..." required></textarea>
                    </div>
                    <button type="submit" name="contact_submit" class="btn-submit" id="submit-btn" value="1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                        <span>Submit Enquiry</span>
                    </button>
                    <p class="form-note">Our leasing team will respond within 24 hours.</p>
                </form>
            </div>
        </div>
    </div>
</section>

<!-- ═══════════════ FOOTER ═══════════════ -->
<footer class="footer">
    <div class="footer-main">
        <div class="footer-grid">
            <div class="footer-brand">
                <div class="footer-logo">
                    <div class="logo-icon">Z</div>
                    <div class="logo-text">
                        <span class="logo-zeal">ZEAL</span>
                    </div>
                </div>
                <p class="footer-tagline">Premium Grade A commercial spaces in TechZone 4, Greater Noida West. Office · Retail · F&B</p>
            </div>
            <div class="footer-col">
                <h4 class="footer-heading">Navigate</h4>
                <ul class="footer-links">
                    <li><a href="#overview">Overview</a></li>
                    <li><a href="#gallery">Gallery</a></li>
                    <li><a href="#spaces">Spaces</a></li>
                    <li><a href="#location">Location</a></li>
                    <li><a href="#why">Why Us</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4 class="footer-heading">Contact</h4>
                <ul class="footer-links">
                    <li><a href="tel:+919990002008">+91 99900 02008</a></li>
                    <li><a href="mailto:leasing@zealcommercial.com">leasing@zealcommercial.com</a></li>
                    <li><a href="#contact">Book Site Visit</a></li>
                </ul>
            </div>
        </div>
    </div>
    <div class="footer-bottom">
        <p class="copyright">© <?= date('Y') ?> ZEAL by Kasana Builder Pvt. Ltd.</p>
        <p class="footer-address">Plot 31 · TechZone 4 · Greater Noida West</p>
    </div>
</footer>

<button class="back-to-top" id="backToTop" aria-label="Back to top">
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="18 15 12 9 6 15"/></svg>
</button>

<script src="main.js?v=<?= time(); ?>"></script>
</body>
</html>