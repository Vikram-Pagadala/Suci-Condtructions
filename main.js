/* main.js — Vanilla JS for Header, Hero Reveal Lens, Filters, and Pricing Calculator */
(function () {
  'use strict';

  // 1. HEADER SCROLL & MOBILE MENU
  var header = document.getElementById('site-header');
  var hamburger = document.getElementById('hamburger-btn');
  var mobileMenu = document.getElementById('mobile-menu');
  var isHome = window.location.pathname === '/' ||
               window.location.pathname.endsWith('/index.html') ||
               window.location.pathname.endsWith('/index.htm') ||
               window.location.pathname === '';

  var isScrolled = false;

  function updateHeader() {
    if (!header) return;
    if (isScrolled || !isHome) {
      header.classList.add('scrolled');
      header.classList.remove('light-hero');
    } else {
      header.classList.remove('scrolled');
      if (mobileMenu && !mobileMenu.classList.contains('open')) {
        header.classList.add('light-hero');
      }
    }
  }

  function onScroll() {
    updateHeader();
  }

  if (header) {
    if (!isHome) {
      header.classList.remove('light-hero');
      header.classList.add('scrolled');
    } else if ('IntersectionObserver' in window) {
      var scrollSentinel = document.createElement('div');
      scrollSentinel.style.cssText = 'position:absolute;top:0;left:0;width:1px;height:80px;pointer-events:none;opacity:0;';
      document.body.prepend(scrollSentinel);
      var headerObserver = new IntersectionObserver(function (entries) {
        isScrolled = !entries[0].isIntersecting;
        updateHeader();
      }, { threshold: 0 });
      headerObserver.observe(scrollSentinel);
    } else {
      window.addEventListener('scroll', function () {
        isScrolled = window.scrollY > 80;
        updateHeader();
      }, { passive: true });
    }
  }

  if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', function () {
      var isOpen = mobileMenu.classList.toggle('open');
      hamburger.setAttribute('aria-expanded', isOpen);
      hamburger.setAttribute('aria-label', isOpen ? 'Close menu' : 'Open menu');

      var bars = hamburger.querySelectorAll('.hamburger-bar');
      if (isOpen) {
        if (bars.length >= 3) {
          bars[0].style.transform = 'translateY(7px) rotate(45deg)';
          bars[1].style.opacity = '0';
          bars[2].style.transform = 'translateY(-7px) rotate(-45deg)';
        }
        if (header) header.classList.remove('light-hero');
      } else {
        bars.forEach(function (bar) {
          bar.style.transform = '';
          bar.style.opacity = '';
        });
        onScroll();
      }
    });

    var mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(function (link) {
      link.addEventListener('click', function () {
        mobileMenu.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open menu');
        var bars = hamburger.querySelectorAll('.hamburger-bar');
        bars.forEach(function (bar) {
          bar.style.transform = '';
          bar.style.opacity = '';
        });
        onScroll();
      });
    });
  }

  // 2. HERO REVEAL INTERACTIVE CIRCLE LENS (index.html)
  var heroSection = document.getElementById('hero-reveal-section');
  var heroStage = document.getElementById('hero-stage');
  var heroRing = document.getElementById('hero-lens-ring');
  var heroRingLabel = document.getElementById('hero-ring-label');
  var toggleHeroBtn = document.getElementById('toggle-hero-btn');

  if (heroSection && heroStage && heroRing) {
    var LENS_RADIUS = 80;
    var FEATHER = 28;
    var LERP = 0.14;

    var currX = 50;
    var currY = 50;
    var currR = 0;

    var targetX = 50;
    var targetY = 50;
    var targetR = 0;

    var isInside = false;
    var isVisible = true;
    var raf = null;
    var isShowingFinished = false;

    var prefersReducedMotion = window.matchMedia &&
      window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    function lerp(a, b, t) {
      return a + (b - a) * t;
    }

    var stageWidth = 0;
    var stageHeight = 0;

    function updateStageRect() {
      var rect = heroStage.getBoundingClientRect();
      stageWidth = rect.width;
      stageHeight = rect.height;
    }

    if (window.ResizeObserver) {
      var heroRo = new ResizeObserver(function (entries) {
        if (entries[0] && entries[0].contentRect) {
          stageWidth = entries[0].contentRect.width;
          stageHeight = entries[0].contentRect.height;
        }
      });
      heroRo.observe(heroStage);
    }
    updateStageRect();

    function applyHeroStyles() {
      var r = currR > 0.1 ? currR : 0;
      var x = currX;
      var y = currY;

      heroSection.style.setProperty('--x', x + '%');
      heroSection.style.setProperty('--y', y + '%');
      heroSection.style.setProperty('--r', r + 'px');
      heroSection.style.setProperty('--feather', r > 0 ? (FEATHER + 'px') : '0px');

      var w = stageWidth || heroStage.offsetWidth;
      var h = stageHeight || heroStage.offsetHeight;
      var pxX = (x / 100) * w;
      var pxY = (y / 100) * h;
      var diameter = (r + FEATHER * 0.5) * 2;

      heroRing.style.transform = 'translate(' + (pxX - diameter / 2) + 'px, ' + (pxY - diameter / 2) + 'px)';
      heroRing.style.width = diameter + 'px';
      heroRing.style.height = diameter + 'px';
      heroRing.style.opacity = r > 2 ? '1' : '0';
    }

    function animateHero() {
      raf = null;
      if (!isVisible) return;
      var factor = prefersReducedMotion ? 1 : LERP;
      currX = lerp(currX, targetX, factor);
      currY = lerp(currY, targetY, factor);
      currR = lerp(currR, targetR, factor);
      applyHeroStyles();

      var settled = Math.abs(currX - targetX) < 0.05 &&
                    Math.abs(currY - targetY) < 0.05 &&
                    Math.abs(currR - targetR) < 0.1;
      if (!settled) {
        raf = requestAnimationFrame(animateHero);
      }
    }

    function startHeroLoop() {
      if (raf === null) {
        raf = requestAnimationFrame(animateHero);
      }
    }

    if ('IntersectionObserver' in window) {
      var heroObserver = new IntersectionObserver(function (entries) {
        isVisible = entries[0].isIntersecting;
        if (isVisible && (isInside || currR > 0)) startHeroLoop();
      }, { threshold: 0 });
      heroObserver.observe(heroStage);
    }

    function setHeroPointerPos(clientX, clientY) {
      var rect = heroStage.getBoundingClientRect();
      targetX = Math.max(0, Math.min(100, ((clientX - rect.left) / rect.width) * 100));
      targetY = Math.max(0, Math.min(100, ((clientY - rect.top) / rect.height) * 100));
    }

    heroStage.addEventListener('pointermove', function (e) {
      setHeroPointerPos(e.clientX, e.clientY);
      startHeroLoop();
    });

    heroStage.addEventListener('pointerenter', function () {
      isInside = true;
      targetR = LENS_RADIUS;
      startHeroLoop();
    });

    heroStage.addEventListener('pointerleave', function () {
      isInside = false;
      targetR = 0;
      startHeroLoop();
    });

    heroStage.addEventListener('touchmove', function (e) {
      if (e.touches && e.touches[0]) {
        setHeroPointerPos(e.touches[0].clientX, e.touches[0].clientY);
        targetR = 70;
        startHeroLoop();
      }
    }, { passive: true });

    heroStage.addEventListener('touchend', function () {
      targetR = 0;
      startHeroLoop();
    });

    heroStage.addEventListener('touchcancel', function () {
      targetR = 0;
      startHeroLoop();
    });

    if (toggleHeroBtn) {
      toggleHeroBtn.addEventListener('click', function () {
        isShowingFinished = !isShowingFinished;
        toggleHeroBtn.setAttribute('aria-pressed', isShowingFinished);
        toggleHeroBtn.textContent = isShowingFinished ? 'Show Structure Drawing' : 'Show Finished Building';
        heroSection.style.setProperty('--mask-center', isShowingFinished ? 'black' : 'transparent');
        heroSection.style.setProperty('--mask-edge', isShowingFinished ? 'transparent' : 'black');
        if (heroRingLabel) {
          heroRingLabel.textContent = isShowingFinished ? 'STRUCTURE' : 'FINISHED';
        }
      });
    }
  }

  // 3. PROJECTS FILTER (projects.html)
  var filterBtns = document.querySelectorAll('.filter-link');
  var projectCards = document.querySelectorAll('.project-card');

  if (filterBtns.length > 0) {
    function applyFilter(filter) {
      filterBtns.forEach(function (b) {
        if (b.getAttribute('data-filter') === filter) {
          b.classList.add('active');
          b.setAttribute('aria-selected', 'true');
        } else {
          b.classList.remove('active');
          b.setAttribute('aria-selected', 'false');
        }
      });
      projectCards.forEach(function (card) {
        if (filter === 'All' || card.getAttribute('data-category') === filter) {
          card.style.display = '';
        } else {
          card.style.display = 'none';
        }
      });
    }

    filterBtns.forEach(function (btn) {
      btn.addEventListener('click', function () {
        applyFilter(this.getAttribute('data-filter'));
      });
    });

    var urlParams = new URLSearchParams(window.location.search);
    var typeParam = urlParams.get('type');
    if (typeParam) {
      var matchingBtn = Array.from(filterBtns).find(function (b) {
        return b.getAttribute('data-filter').toLowerCase() === typeParam.toLowerCase();
      });
      if (matchingBtn) {
        applyFilter(matchingBtn.getAttribute('data-filter'));
      }
    }
  }

  // 4. INTERACTIVE PRICING CALCULATOR & TABLE (pricing.html)
  var pricingSlider = document.getElementById('pricing-area-slider');
  var pricingInput = document.getElementById('pricing-area-input');
  var buildingSelect = document.getElementById('building-type-select');
  var chipButtons = document.querySelectorAll('.plan-chip');
  var recPlanNameEl = document.getElementById('rec-plan-name');
  var recNudgeEl = document.getElementById('rec-nudge');
  var planTotalEls = document.querySelectorAll('[data-plan-total]');
  var expandAllBtn = document.getElementById('expand-all-btn');
  var collapseAllBtn = document.getElementById('collapse-all-btn');
  var categoryBlocks = document.querySelectorAll('.category-block');
  var planColHeads = document.querySelectorAll('.col-plan-head[data-plan-col]');
  var bottomCta = document.getElementById('pricing-bottom-cta');

  if (pricingSlider || pricingInput || planTotalEls.length > 0) {
    var plans = [
      { id: 'basic', name: 'Basic', price: 2090, bestFor: 'rental homes and essential finishes' },
      { id: 'value-added', name: 'Value Added', price: 2290, bestFor: 'your first family home' },
      { id: 'premium', name: 'Premium', price: 2700, bestFor: 'a long-term family home' },
      { id: 'elite', name: 'Elite', price: 2950, bestFor: 'villas and luxury homes' }
    ];

    var planRank = { 'basic': 0, 'value-added': 1, 'premium': 2, 'elite': 3 };

    var upgradeData = [
      { diff: 200, items: ['UPVC windows', 'Pooja room door', 'Bathroom accessories'] },
      { diff: 410, items: ['Solar provision', 'UPS wiring', 'SS railing'] },
      { diff: 250, items: ['EV charger', 'Glass railing', 'Copper gas line'] }
    ];

    var selectedChips = [];

    function formatINR(amount) {
      return '₹' + Number(amount).toLocaleString('en-IN');
    }

    function updatePricing() {
      var area = 1000;
      if (pricingInput) {
        area = parseInt(pricingInput.value, 10);
      } else if (pricingSlider) {
        area = parseInt(pricingSlider.value, 10);
      }
      if (isNaN(area) || area < 100) area = 1000;

      // Update sticky header total prices
      planTotalEls.forEach(function (el) {
        var rate = parseInt(el.getAttribute('data-plan-total'), 10);
        if (!isNaN(rate)) {
          el.textContent = formatINR(rate * area);
        }
      });

      // Calculate recommended plan rank
      var baseRank = 1; // default: Value Added
      if (buildingSelect) {
        baseRank = planRank[buildingSelect.value] !== undefined ? planRank[buildingSelect.value] : 1;
      }

      var maxRank = baseRank;
      selectedChips.forEach(function (chipEl) {
        var minPlan = chipEl.getAttribute('data-min-plan');
        if (minPlan && planRank[minPlan] !== undefined && planRank[minPlan] > maxRank) {
          maxRank = planRank[minPlan];
        }
      });

      var recPlan = plans[maxRank];

      // Update Recommendation Box
      if (recPlanNameEl) {
        recPlanNameEl.textContent = recPlan.name;
      }

      if (recNudgeEl) {
        if (maxRank < 3) {
          var nextPlan = plans[maxRank + 1];
          var diffSqft = nextPlan.price - recPlan.price;
          var diffTotal = diffSqft * area;
          var upInfo = upgradeData[maxRank];
          recNudgeEl.innerHTML = 'For ' + formatINR(diffSqft) + ' more per sq ft (' + formatINR(diffTotal) + ' total), <strong>' + nextPlan.name + '</strong> also adds ' + upInfo.items.join(', ') + '.';
          recNudgeEl.style.display = '';
        } else {
          recNudgeEl.innerHTML = '<strong>' + recPlan.name + '</strong> is our highest specification package designed for luxury villas and custom residences.';
          recNudgeEl.style.display = '';
        }
      }

      // Update bottom CTA button link
      if (bottomCta) {
        bottomCta.href = '/contact?plan=' + encodeURIComponent(recPlan.name);
      }

      // Update Recommended ribbon & column highlighting
      planColHeads.forEach(function (head) {
        var pId = head.getAttribute('data-plan-col');
        var slot = head.querySelector('.badge-slot');
        if (pId === recPlan.id) {
          head.classList.add('col-recommended-head');
          if (slot) slot.innerHTML = '<span class="plan-ribbon">Recommended</span>';
        } else {
          head.classList.remove('col-recommended-head');
          if (slot) slot.innerHTML = '';
        }
      });

      // Also update table row cells recommended highlight
      var tableBody = document.getElementById('table-accordion-body');
      if (tableBody) {
        var rows = tableBody.querySelectorAll('.table-row, .row-content');
        rows.forEach(function (row) {
          var planCells = row.querySelectorAll('.col-plan-cell');
          planCells.forEach(function (cell, idx) {
            if (idx === maxRank) {
              cell.classList.add('col-recommended-cell');
            } else {
              cell.classList.remove('col-recommended-cell');
            }
          });
        });
      }
    }

    if (pricingSlider && pricingInput) {
      pricingSlider.addEventListener('input', function () {
        pricingInput.value = this.value;
        updatePricing();
      });

      pricingInput.addEventListener('input', function () {
        pricingSlider.value = this.value;
        updatePricing();
      });
    }

    if (buildingSelect) {
      buildingSelect.addEventListener('change', function () {
        updatePricing();
      });
    }

    chipButtons.forEach(function (chip) {
      chip.addEventListener('click', function () {
        var idx = selectedChips.indexOf(chip);
        if (idx > -1) {
          selectedChips.splice(idx, 1);
          chip.classList.remove('chip-active');
          chip.setAttribute('aria-pressed', 'false');
        } else {
          selectedChips.push(chip);
          chip.classList.add('chip-active');
          chip.setAttribute('aria-pressed', 'true');
        }
        updatePricing();
      });
    });

    // Accordions
    function setCategoryOpen(block, open) {
      var btn = block.querySelector('.category-header-btn');
      var arrow = block.querySelector('.cat-arrow');
      if (open) {
        block.classList.add('is-open');
        if (btn) btn.setAttribute('aria-expanded', 'true');
        if (arrow) arrow.textContent = '▼';
      } else {
        block.classList.remove('is-open');
        if (btn) btn.setAttribute('aria-expanded', 'false');
        if (arrow) arrow.textContent = '▶';
      }
    }

    categoryBlocks.forEach(function (block) {
      var btn = block.querySelector('.category-header-btn');
      if (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          var isOpen = block.classList.contains('is-open');
          setCategoryOpen(block, !isOpen);
        });
      }
    });

    if (expandAllBtn) {
      expandAllBtn.addEventListener('click', function () {
        categoryBlocks.forEach(function (block) {
          setCategoryOpen(block, true);
        });
      });
    }

    if (collapseAllBtn) {
      collapseAllBtn.addEventListener('click', function () {
        categoryBlocks.forEach(function (block) {
          setCategoryOpen(block, false);
        });
      });
    }

    // Explicitly enforce default 1000 sq ft on load (overriding browser form memory)
    if (pricingSlider) pricingSlider.value = 1000;
    if (pricingInput) pricingInput.value = 1000;

    // Run initial pricing setup
    updatePricing();
  }

  // Fallback for any standalone area slider (e.g. on other pages)
  var fallbackSlider = document.getElementById('area-slider');
  var fallbackInput = document.getElementById('area-input');
  var packageDisplays = document.querySelectorAll('[data-package-price]');

  if (fallbackSlider && fallbackInput && packageDisplays.length > 0) {
    function updateFallback(val) {
      var a = parseInt(val, 10);
      if (isNaN(a) || a < 100) a = 1000;
      packageDisplays.forEach(function (disp) {
        var r = parseInt(disp.getAttribute('data-package-price'), 10);
        if (!isNaN(r)) {
          disp.textContent = '₹' + (r * a).toLocaleString('en-IN');
        }
      });
    }

    fallbackSlider.addEventListener('input', function () {
      fallbackInput.value = this.value;
      updateFallback(this.value);
    });

    fallbackInput.addEventListener('input', function () {
      fallbackSlider.value = this.value;
      updateFallback(this.value);
    });

    updateFallback(fallbackInput.value || 1000);
  }

  // 5. YOUTUBE EMBED LOCAL PROTOCOL HANDLING (contact.html)
  var videoFallback = document.getElementById('video-local-fallback');
  var ytIframe = document.getElementById('youtube-iframe');
  if (videoFallback && ytIframe && window.location.protocol === 'file:') {
    ytIframe.style.display = 'none';
    videoFallback.style.display = 'flex';
  }
})();
