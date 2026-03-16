# Developer Portfolio

A modern, responsive, and recruiter-ready personal portfolio built with HTML5, CSS3, and JavaScript.

## Highlights

- Clean and professional UI with accessible color contrast
- Fully responsive layout across mobile, tablet, and desktop
- Smooth scroll-based reveal animations and interactive hover effects
- Strong Hero section with clear value proposition and CTAs
- About, Projects, Skills, Resume, Contact, and Footer sections
- SEO metadata for better discoverability
- Accessible focus states, semantic markup, and keyboard-friendly navigation

## Current Stack

- HTML5
- CSS3
- JavaScript (Vanilla)
- Google Fonts

## Suggested GitHub-Ready Folder Structure

For long-term maintainability, move to this structure:

```text
portfolio/
	assets/
		images/
			projects/
			profile/
		icons/
		resume/
			resume.pdf
	data/
		projects.json
		skills.json
	js/
		components/
			navbar.js
			projects.js
			skills.js
			contact.js
		main.js
	styles/
		base.css
		layout.css
		components.css
		animations.css
	index.html
	README.md
```

## Recommended Libraries (Optional)

Choose based on your goals:

- Tailwind CSS: rapid UI building with consistent utility classes
- Framer Motion: advanced animation orchestration (if migrating to React)
- AOS (Animate On Scroll): quick scroll reveals with minimal setup
- EmailJS: contact form delivery without backend
- Swiper: touch-friendly testimonial or project carousels
- Lenis: premium smooth scrolling feel

## Performance and SEO Improvements to Add Next

- Replace dummy OG image URL with your hosted preview image
- Use optimized WebP/AVIF project images
- Add favicon and app icons
- Add schema.org JSON-LD for Person and WebSite metadata
- Lazy-load non-critical images and defer non-essential scripts
- Host resume and downloadable assets in dedicated folders

## Accessibility Checklist

- Maintain visible focus indicators on all interactive elements
- Keep semantic heading order intact
- Ensure form labels are explicit and associated with inputs
- Verify contrast ratio for text and buttons
- Add alt text for all future images and project thumbnails

## Recruiter-Focused Upgrades to Stand Out

- Add measurable impact points in project descriptions
- Include one case-study style project with problem, approach, and outcome
- Add testimonials or mentor feedback section
- Include GitHub contribution stats or coding profile links
- Add a short "What I am looking for" section for role clarity

## Local Development

1. Clone the repository.
2. Open the folder in VS Code.
3. Run with Live Server or open index.html directly in a browser.

## Customize Quickly

- Update personal details in index.html and script.js
- Replace placeholder project links in script.js
- Add your actual resume as resume.pdf in the root (or assets/resume after restructuring)

