import React from 'react'

const courseCards = [
  {
    icon: '◌',
    label: 'FIELD OF STUDY',
    title: 'Languages',
    description:
      'Master modern spoken and written languages for career, travel, and academic success.',
    tags: ['English Communication', 'Business English', 'French'],
    extra: 'Arabic',
    showMore: '+2 more',
  },
  {
    icon: '▣',
    label: 'FIELD OF STUDY',
    title: 'Basic Computer Skills',
    description:
      'Build essential computer literacy and master productivity software like Microsoft Office.',
    tags: ['Computer Fundamentals', 'Windows', 'File Management'],
    extra: 'Microsoft Word',
    showMore: '+3 more',
  },
  {
    icon: '</>',
    label: 'FIELD OF STUDY',
    title: 'Full-Stack Website Development',
    description:
      'Develop responsive modern websites and web applications from frontend to backend.',
    tags: ['HTML & CSS', 'JavaScript', 'TypeScript', 'React'],
    extra: null,
    showMore: '+6 more',
  },
  {
    icon: '>_',
    label: 'FIELD OF STUDY',
    title: 'Programming Languages',
    description:
      'Learn high-demand programming languages for software engineering, data, and automation.',
    tags: ['Python', 'JavaScript', 'Java', 'C#'],
    extra: null,
    showMore: '+4 more',
  },
  {
    icon: '◌',
    label: 'FIELD OF STUDY',
    title: 'Graphics Design',
    description:
      'Create stunning brand identities, vector graphics, print layouts, and digital visuals.',
    tags: ['Design Fundamentals', 'Adobe Photoshop'],
    extra: null,
    showMore: null,
  },
  {
    icon: '▣',
    label: 'FIELD OF STUDY',
    title: 'Video Editing',
    description:
      'Edit professional videos, craft visual effects, color grade, and master post-production.',
    tags: ['Adobe Premiere Pro', 'DaVinci Resolve', 'After Effects'],
    extra: null,
    showMore: null,
  },
  {
    icon: '↗',
    label: 'FIELD OF STUDY',
    title: 'Digital Marketing',
    description:
      'Grow brands and reach audiences through search engines, social media, and digital advertising.',
    tags: ['Social Media Marketing', 'Content Marketing', 'SEO'],
    extra: null,
    showMore: 'Online Advertising +2 more',
  },
  {
    icon: '◉',
    label: 'FIELD OF STUDY',
    title: 'Photography & Videography',
    description:
      'Master camera controls, lighting setups, cinematic composition, and production workflows.',
    tags: ['Camera Operation', 'Lighting & Composition', 'Cinematography', 'Audio Capture'],
    extra: null,
    showMore: '+2 more',
  },
  {
    icon: '▣',
    label: 'FIELD OF STUDY',
    title: 'Accounting Software',
    description:
      'Streamline bookkeeping, financial reporting, payroll, and tax preparation with industry tools.',
    tags: ['QuickBooks', 'Peachtree / Sage', 'Tally'],
    extra: null,
    showMore: 'Advanced Excel for Accounting +2 more',
  },
  {
    icon: '▣',
    label: 'FIELD OF STUDY',
    title: 'Engineering Software',
    description:
      'Master computer-aided design, 3D modeling, structural analysis, and project planning.',
    tags: ['AutoCAD', 'Revit', 'Civil 3D'],
    extra: null,
    showMore: '+2 more',
  },
]

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="hero__content">
          <div className="hero__badge">
            <span className="hero__badge-icon">✦</span>
            Learn Skills. Build Your Career. Create Your Future.
          </div>

          <h1>
            Build Skills for the <span>Future</span>
          </h1>

          <p>
            Join Top Training Institute to boost your career with practical, expert-led
            training in languages, computers, software development, creative media,
            business, and engineering software.
          </p>

          <div className="hero__actions">
            <button type="button" className="primary-btn">
              Explore Courses <span>→</span>
            </button>
            <button type="button" className="secondary-btn">
              Contact &amp; Enroll <span>✉</span>
            </button>
          </div>
        </div>

        <div className="hero__stats" aria-label="Training institute highlights">
          <div className="stat">
            <div className="stat-value">10+</div>
            <div className="stat-label">Core Disciplines</div>
          </div>
          <div className="stat">
            <div className="stat-value">100%</div>
            <div className="stat-label">Practical &amp; Hands-on</div>
          </div>
          <div className="stat">
            <div className="stat-value">All Levels</div>
            <div className="stat-label">Beginner to Advanced</div>
          </div>
          <div className="stat">
            <div className="stat-value">Flexible</div>
            <div className="stat-label">Study Options</div>
          </div>
        </div>
      </section>

      <section className="catalog">
        <div className="catalog__pill">COURSE CATALOG</div>

        <h2>Explore Our Course Categories</h2>

        <p>
          From language fluency and software engineering to creative media and engineering CAD,
          discover practical training tailored to your ambitions.
        </p>

        <div className="catalog__grid catalog__grid--extended">
          {courseCards.map((course) => (
            <article className="course-card course-card--large" key={course.title}>
              <div className="course-card__top">
                <div className="course-card__icon" aria-hidden="true">
                  {course.icon}
                </div>
                <div className="course-card__label">{course.label}</div>
              </div>

              <h3>{course.title}</h3>
              <p>{course.description}</p>

              <div className="course-card__topics">
                <div className="course-card__topics-title">KEY TOPICS &amp; TOOLS:</div>
                <div className="course-card__tags">
                  {course.tags.map((tag) => (
                    <span key={tag} className="tag">{tag}</span>
                  ))}
                  {course.extra && <span className="tag">{course.extra}</span>}
                  {course.showMore && <span className="tag tag--muted">{course.showMore}</span>}
                </div>
              </div>

              <button type="button" className="course-card__link">
                Explore Courses <span>→</span>
              </button>
            </article>
          ))}
        </div>
      </section>

      <section className="why-choose-us">
        <div className="why-choose-us__pill">● MULTIDISCIPLINARY SCOPE</div>

        <h2>Major Learning Areas</h2>

        <p>
          Explore our six core disciplines, each designed to develop marketable, practical
          capabilities for today&apos;s dynamic economy.
        </p>
      </section>

      <section className="learning-grid" aria-label="Major learning areas">
        <article className="learning-card learning-card--languages">
          <div className="learning-card__icon" aria-hidden="true">
            <span>◌</span>
          </div>

          <h3>Languages</h3>

          <p>
            Spoken and written communication training across modern languages to advance
            international careers and workplace confidence.
          </p>

          <ul className="learning-card__list">
            <li>English Communication</li>
            <li>Business Fluency</li>
            <li>Multilingual Paths</li>
          </ul>

          <button type="button" className="learning-card__link">
            Browse Languages Programs <span>→</span>
          </button>
        </article>

        <article className="learning-card learning-card--technology">
          <div className="learning-card__icon" aria-hidden="true">
            <span>◫</span>
          </div>

          <h3>Technology</h3>

          <p>
            Foundational computer skills, productivity software, internet systems, and digital
            workplace essentials.
          </p>

          <ul className="learning-card__list">
            <li>Computer Basics</li>
            <li>MS Office Suite</li>
            <li>Cloud Productivity</li>
          </ul>

          <button type="button" className="learning-card__link">
            Browse Technology Programs <span>→</span>
          </button>
        </article>

        <article className="learning-card learning-card--programming">
          <div className="learning-card__icon" aria-hidden="true">
            <span>&lt;/&gt;</span>
          </div>

          <h3>Programming</h3>

          <p>
            Software development from core algorithms to full-stack web platforms and backend
            application architectures.
          </p>

          <ul className="learning-card__list">
            <li>Full-Stack Web Dev</li>
            <li>Python &amp; Scripts</li>
            <li>Modern TypeScript</li>
          </ul>

          <button type="button" className="learning-card__link">
            Browse Programming Programs <span>→</span>
          </button>
        </article>

        <article className="learning-card learning-card--creative">
          <div className="learning-card__icon" aria-hidden="true">
            <span>✦</span>
          </div>

          <h3>Creative Media</h3>

          <p>
            Visual arts, brand identity creation, motion graphics, video post-production, and
            studio cinematography.
          </p>

          <ul className="learning-card__list">
            <li>Graphic Design</li>
            <li>Video Editing</li>
            <li>Studio Photography</li>
          </ul>

          <button type="button" className="learning-card__link">
            Browse Creative Media Programs <span>→</span>
          </button>
        </article>

        <article className="learning-card learning-card--business">
          <div className="learning-card__icon" aria-hidden="true">
            <span>▤</span>
          </div>

          <h3>Business</h3>

          <p>
            Modern digital marketing campaigns, performance analytics, computerized accounting, and
            financial management tools.
          </p>

          <ul className="learning-card__list">
            <li>Digital Marketing</li>
            <li>QuickBooks</li>
            <li>Advanced Financial Excel</li>
          </ul>

          <button type="button" className="learning-card__link">
            Browse Business Programs <span>→</span>
          </button>
        </article>

        <article className="learning-card learning-card--engineering">
          <div className="learning-card__icon" aria-hidden="true">
            <span>◫</span>
          </div>

          <h3>Engineering Software</h3>

          <p>
            Computer-aided drafting, 3D Building Information Modeling (BIM), civil infrastructure,
            and structural design systems.
          </p>

          <ul className="learning-card__list">
            <li>AutoCAD 2D/3D</li>
            <li>Revit BIM</li>
            <li>ETABS &amp; Civil 3D</li>
          </ul>

          <button type="button" className="learning-card__link">
            Browse Engineering Software Programs <span>→</span>
          </button>
        </article>
      </section>

      <section className="benefits-grid" aria-label="Key benefits">
        <article className="benefit-card">
          <div className="benefit-card__icon">🛠</div>
          <h3>Practical Learning</h3>
          <p>
            We prioritize direct, actionable knowledge that you can immediately apply to real-world
            tasks and workplace challenges.
          </p>
        </article>

        <article className="benefit-card">
          <div className="benefit-card__icon">📁</div>
          <h3>Hands-on Projects</h3>
          <p>
            Every module integrates realistic assignments and capstone projects so you graduate with
            a tangible portfolio of work.
          </p>
        </article>

        <article className="benefit-card">
          <div className="benefit-card__icon">⏱</div>
          <h3>Beginner-Friendly Programs</h3>
          <p>
            Structured learning progression guide you step-by-step from core fundamentals to
            confident mastery without assumptions.
          </p>
        </article>

        <article className="benefit-card">
          <div className="benefit-card__icon">🎒</div>
          <h3>Career-Focused Skills</h3>
          <p>
            Our curricula reflect contemporary industry demands across engineering, creative
            production, software, and administration.
          </p>
        </article>

        <article className="benefit-card">
          <div className="benefit-card__icon">🎓</div>
          <h3>Experienced Instructors</h3>
          <p>
            Learn under the guidance of active practitioners who bring practical industry context,
            mentorship, and feedback to the classroom.
          </p>
        </article>

        <article className="benefit-card">
          <div className="benefit-card__icon">✅</div>
          <h3>Flexible Learning Options</h3>
          <p>
            Choose from in-person, online, or hybrid schedules tailored to accommodate students,
            busy professionals, and career switchers.
          </p>
        </article>

        <article className="benefit-card benefit-card--single">
          <div className="benefit-card__icon">⚡</div>
          <h3>Modern Training Approach</h3>
          <p>
            Up-to-date tools, software suites, and collaborative environments designed to prepare
            you for current technological workflows.
          </p>
        </article>
      </section>

      <section className="featured-programs">
        <div className="featured-programs__pill">● FEATURED PROGRAMS</div>

        <div className="featured-programs__header">
          <h2>Popular Career Pathways</h2>
          <button type="button" className="view-all-btn">
            View All Courses <span>→</span>
          </button>
        </div>

        <p>
          Explore in-demand courses curated for high practical impact across software development,
          creative media, engineering, and professional skills.
        </p>

        <div className="pathway-grid">
          <article className="pathway-card pathway-card--engineering">
            <div className="pathway-card__badge">Engineering Software</div>
            <div className="pathway-card__level">All Level</div>
          </article>

          <article className="pathway-card pathway-card--marketing">
            <div className="pathway-card__badge">Digital Marketing</div>
            <div className="pathway-card__level">All Level</div>
          </article>

          <article className="pathway-card pathway-card--webdev">
            <div className="pathway-card__badge">Full-Stack Website Development</div>
            <div className="pathway-card__level">All Level</div>
          </article>
        </div>

        <div className="feature-list">
          <article className="feature-list__card">
            <div className="feature-list__meta">
              <span>◔ 10 Weeks</span>
              <span>◌ In Person, Online, Hybrid</span>
            </div>
            <button type="button" className="feature-list__btn">
              Inquire &amp; Enroll <span>→</span>
            </button>
          </article>

          <article className="feature-list__card feature-list__card--primary">
            <div className="feature-list__meta">
              <span>◔ 12 Weeks</span>
              <span>◌ In Person, Hybrid</span>
            </div>
            <button type="button" className="feature-list__btn feature-list__btn--primary">
              Inquire &amp; Enroll <span>→</span>
            </button>
          </article>

          <article className="feature-list__card">
            <div className="feature-list__meta">
              <span>◔ 10 Weeks</span>
              <span>◌ In Person, Online</span>
            </div>
            <button type="button" className="feature-list__btn">
              Inquire &amp; Enroll <span>→</span>
            </button>
          </article>
        </div>

        <div className="mini-pathway-grid">
          <article className="mini-pathway-card mini-pathway-card--languages">
            <div className="mini-pathway-card__badge">Languages</div>
            <div className="mini-pathway-card__level">All Level</div>
            <div className="mini-pathway-card__content">
              <h3>Professional English Communication &amp; Workplace Fluency</h3>
              <p>
                Elevate your spoken and written English fluency for professional settings,
                interviews, presentations, and more.
              </p>
            </div>
          </article>

          <article className="mini-pathway-card mini-pathway-card--design">
            <div className="mini-pathway-card__badge">Graphics Design</div>
            <div className="mini-pathway-card__level">All Level</div>
            <div className="mini-pathway-card__content">
              <h3>Professional Graphic Design &amp; Brand Identity</h3>
              <p>
                Master industry-standard design tools including Adobe Photoshop, Illustrator, and
                InDesign to produce impactful visuals.
              </p>
            </div>
          </article>

          <article className="mini-pathway-card mini-pathway-card--coding">
            <div className="mini-pathway-card__badge">Programming Languages</div>
            <div className="mini-pathway-card__level">All Level</div>
            <div className="mini-pathway-card__content">
              <h3>Python Programming &amp; Software Fundamentals</h3>
              <p>
                Learn core programming logic, data structures, object-oriented principles, and
                automation scripts using Python.
              </p>
            </div>
          </article>
        </div>
      </section>

      <section className="gallery-header">
        <div className="gallery-header__label">LIFE AT TOP TRAINING INSTITUTE</div>

        <h2>Explore Our Gallery</h2>

        <p>
          Take a glimpse into our real graduation ceremonies, vibrant classrooms, and hands-on
          practical training sessions.
        </p>

        <div className="gallery-header__tabs" aria-label="Gallery filters">
          <button type="button" className="gallery-tab gallery-tab--active">
            <span className="gallery-tab__icon">◌</span>
            <span>All Moments</span>
            <span className="gallery-tab__count">11</span>
          </button>

          <button type="button" className="gallery-tab">
            <span className="gallery-tab__icon">◫</span>
            <span>Graduations &amp; Awards</span>
            <span className="gallery-tab__count">6</span>
          </button>

          <button type="button" className="gallery-tab">
            <span className="gallery-tab__icon">▣</span>
            <span>Classrooms &amp; Learning</span>
            <span className="gallery-tab__count">3</span>
          </button>

          <button type="button" className="gallery-tab">
            <span className="gallery-tab__icon">◍</span>
            <span>Practical &amp; Fieldwork</span>
            <span className="gallery-tab__count">2</span>
          </button>
        </div>
      </section>

      <section className="gallery-grid" aria-label="Institute gallery">
        <article className="gallery-card gallery-card--featured">
          <div className="gallery-card__overlay">
            <div className="gallery-card__label">GRADUATION</div>
            <div className="gallery-card__title-wrap">
              <span className="gallery-card__title">TOP</span>
              <span className="gallery-card__title">Training</span>
              <span className="gallery-card__title">Institute</span>
            </div>
          </div>
        </article>

        <div className="gallery-stack">
          <article className="gallery-card gallery-card--classroom">
            <div className="gallery-card__tag">CLASSROOM</div>
          </article>

          <div className="gallery-mini-grid">
            <article className="gallery-mini-card gallery-mini-card--design">
              <div className="gallery-card__tag">GRAPHICS DESIGN</div>
              <div className="gallery-mini-card__meta">
                <span>1,284,750</span>
              </div>
            </article>

            <article className="gallery-mini-card gallery-mini-card--design-2">
              <div className="gallery-card__tag">GRAPHICS DESIGN</div>
              <div className="gallery-mini-card__meta">
                <span>2,757</span>
              </div>
            </article>

            <article className="gallery-mini-card gallery-mini-card--design-3">
              <div className="gallery-card__tag">53.2K</div>
            </article>
          </div>

          <div className="gallery-mini-feed">
            <article className="gallery-feed-card gallery-feed-card--one">
              <div className="gallery-feed-card__tag">FRONT-END DEVELOPMENT</div>
              <div className="gallery-feed-card__meta">
                <span>628</span>
                <span>Part 3</span>
              </div>
            </article>

            <article className="gallery-feed-card gallery-feed-card--two">
              <div className="gallery-feed-card__tag">Front-end Vs Back-end</div>
              <div className="gallery-feed-card__meta">
                <span>994</span>
                <span>Part 2</span>
              </div>
            </article>

            <article className="gallery-feed-card gallery-feed-card--three">
              <div className="gallery-feed-card__tag">Front-end Dev&apos;t</div>
              <div className="gallery-feed-card__meta">
                <span>8,135</span>
                <span>Dev&apos;t</span>
              </div>
            </article>
          </div>
        </div>
      </section>

      <section className="cta-banner" aria-label="Career CTA">
        <div className="cta-banner__badge">
          <span className="cta-banner__icon">✦</span>
          <span>Take the Next Step in Your Career</span>
        </div>

        <h2>Ready to Build Your Skills?</h2>

        <p>
          Choose the course that matches your goals and start developing practical skills for your
          future with industry-experienced mentors.
        </p>

        <div className="cta-banner__actions">
          <button type="button" className="cta-banner__primary">
            Browse Courses <span>→</span>
          </button>
          <button type="button" className="cta-banner__secondary">
            Contact Us
          </button>
        </div>
      </section>

      <footer className="site-footer">
        <div className="site-footer__top">
          <div className="site-footer__brand-block">
            <div className="site-footer__logo-wrap">
              <div className="site-footer__logo">TOP</div>
            </div>
            <div className="site-footer__brand-copy">
              <span>TOP TRAINING</span>
              <small>INSTITUTE</small>
            </div>
          </div>

          <div className="site-footer__copy">
            Top Training Institute provides practical, hands-on, career-focused education in
            languages, technology, software engineering, creative media, business applications, and
            engineering software.
          </div>

          <div className="site-footer__quick-links">
            <h3>Quick Links</h3>
            <ul>
              <li>Home</li>
              <li>About Us</li>
              <li>All Courses</li>
              <li>Contact &amp; Inquiries</li>
            </ul>
          </div>

          <div className="site-footer__categories">
            <h3>Featured Categories</h3>
            <ul>
              <li>Languages</li>
              <li>Basic Computer Skills</li>
              <li>Full-Stack Website Development</li>
              <li>Programming Languages</li>
              <li>Graphics Design</li>
            </ul>
            <button type="button" className="site-footer__view-all">
              View All Categories <span>→</span>
            </button>
          </div>

          <div className="site-footer__branches">
            <h3>Branches</h3>
            <div className="site-footer__branch-item">
              <span className="site-footer__branch-rank">#1</span>
              <div>
                <p>Menagagna</p>
                <small>Metebeer Bldg, 2nd Fl, #14</small>
                <div className="site-footer__phone">☎ 0991929303</div>
              </div>
            </div>
            <div className="site-footer__branch-item">
              <span className="site-footer__branch-rank">#2</span>
              <div>
                <p>Mexico</p>
                <small>KKare Bldg, 3rd Fl, #319</small>
                <div className="site-footer__phone">☎ 0991929304</div>
              </div>
            </div>
            <div className="site-footer__branch-item">
              <span className="site-footer__branch-rank">#3</span>
              <div>
                <p>Jemo 1</p>
                <small>Kaku Center, 1st Gate, 3rd Fl</small>
                <div className="site-footer__phone">☎ 0991926707</div>
              </div>
            </div>
          </div>
        </div>

        <div className="site-footer__bottom">
          <div className="site-footer__connect">
            <h3>Connect With Us</h3>
            <div className="site-footer__socials">
              <span>f</span>
              <span>x</span>
              <span>◎</span>
              <span>◉</span>
              <span>in</span>
            </div>
          </div>

          <div className="site-footer__info-row">
            <span className="site-footer__mail-icon">✉</span>
            <span>toptrainings2020@gmail.com</span>
          </div>
        </div>

        <div className="site-footer__legal-row">
          <span>© 2026 Top Training Institute. All rights reserved.</span>
          <span>Learn Skills. Build Your Career. Create Your Future.</span>
        </div>
      </footer>
    </>
  )
}
