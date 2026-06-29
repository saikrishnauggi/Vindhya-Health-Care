# Vindhya Health Care

Vindhya Health Care is a Vite + React single-page application for a healthcare brand presentation site. It includes a routed public website, doctor and department content, appointment and contact forms, a reusable layout shell, and a visual system built with Tailwind CSS and Framer Motion.

This repository is currently front-end only. Form submissions are handled through mocked services and EmailJS hooks, which makes the site easy to demo now and straightforward to connect to a real backend later.

## What This Project Does

The site is organized around the following experiences:

- Public marketing pages for the hospital and specialties.
- A multi-page router with shared header, footer, and floating action panel.
- Appointment booking with validation, mock persistence, email notification, and WhatsApp fallback link generation.
- Contact inquiry submission with EmailJS.
- Structured department, doctor, and treatment content stored in local data files.
- Responsive layouts for desktop and mobile.

## Tech Stack

- React 19
- Vite
- React Router DOM
- Tailwind CSS 4 via the Vite plugin
- Framer Motion for route transitions and page motion
- React Icons for UI icons
- Swiper for sliders
- Axios for service calls and EmailJS REST requests
- EmailJS browser SDK for form notifications

## Project Structure

```text
src/
	App.jsx                Route definitions
	main.jsx               React entry point
	index.css              Global styles, theme tokens, and utilities
	assets/                Images, logos, and media
	components/            Shared UI building blocks
	data/mockData.js       Department, doctor, and content data
	layouts/RootLayout.jsx Shared shell for all routes
	pages/                 Routed pages
	services/              API and notification helpers
```

Key shared pieces:

- [src/App.jsx](src/App.jsx) defines the route map.
- [src/layouts/RootLayout.jsx](src/layouts/RootLayout.jsx) provides the shared shell and scroll reset.
- [src/components/Header.jsx](src/components/Header.jsx) contains desktop and mobile navigation.
- [src/components/Footer.jsx](src/components/Footer.jsx) contains the footer, social links, and quick links.
- [src/services/api.js](src/services/api.js) simulates appointment, contact, and career submission flows.
- [src/services/notificationService.js](src/services/notificationService.js) handles EmailJS payloads and WhatsApp link generation.
- [src/data/mockData.js](src/data/mockData.js) stores the content used by departments, doctors, and marketing sections.

## Pages And Routes

The app currently exposes these routes:

- `/` Home
- `/about` About
- `/doctors` Doctors
- `/departments` Departments
- `/services` Services
- `/facilities` Facilities
- `/treatments` Treatments
- `/appointment` Appointment booking
- `/gallery` Gallery
- `/blog` Blog
- `/testimonials` Testimonials
- `/careers` Careers
- `/contact` Contact

Any unknown route falls back to the home page inside the main layout.

## Shared Layout Behavior

The app shell in [src/layouts/RootLayout.jsx](src/layouts/RootLayout.jsx) does three important things:

- Keeps the header and footer visible on all pages.
- Resets scroll position to the top when the route changes.
- Wraps route content in Framer Motion transitions for a smoother page change.

The header in [src/components/Header.jsx](src/components/Header.jsx) includes:

- A sticky information bar with emergency contact, hours, email, and booking links.
- Desktop navigation with grouped links.
- A mobile drawer that contains the full site navigation.
- Active-link styling based on the current route.

The footer in [src/components/Footer.jsx](src/components/Footer.jsx) includes:

- A prominent emergency callout.
- Quick links, specialties, services, and treatment package links.
- Contact details and social links.
- Copyright and legal links.

## Forms And Integrations

### Appointment booking

The appointment page uses a layered submission flow:

1. Validate patient input on the client.
2. Submit the booking through the local mock API in [src/services/api.js](src/services/api.js).
3. Send an EmailJS appointment notification.
4. Generate a WhatsApp click-to-chat fallback link.
5. Show a booking receipt view on success.

This means the UI can still show a complete success flow even when the email step fails, which is useful during development and demonstrations.

### Contact form

The contact page uses the EmailJS browser SDK directly. It submits name, email, subject, and message fields using template variables from environment variables.

### Mock services

[src/services/api.js](src/services/api.js) currently simulates server-side behavior for:

- Appointment booking
- Contact inquiry submission
- Career application submission

These helpers return success payloads after a short artificial delay. Replace them with real API calls when a backend is introduced.

### Notification service

[src/services/notificationService.js](src/services/notificationService.js) provides:

- EmailJS configuration with environment-variable overrides.
- Hospital and patient email payload generation.
- WhatsApp click-to-chat URL creation.

If the EmailJS public key is left as the default placeholder, the service simulates success instead of failing the UI.

## Environment Variables

Create a local `.env` file in the project root when connecting real EmailJS accounts:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_contact_template_id
VITE_EMAILJS_APPOINTMENT_TEMPLATE_ID=your_appointment_template_id
VITE_EMAILJS_HOSPITAL_TEMPLATE=your_hospital_template_id
VITE_EMAILJS_PATIENT_TEMPLATE=your_patient_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key
```

Current code paths that read these values:

- [src/pages/Contact.jsx](src/pages/Contact.jsx)
- [src/pages/Appointment.jsx](src/pages/Appointment.jsx)
- [src/services/notificationService.js](src/services/notificationService.js)

If a variable is missing, the code may fall back to placeholder values in development, but production should always use real values.

## Local Development

Install dependencies and start the dev server:

```bash
npm install
npm run dev
```

Useful scripts:

```bash
npm run dev
npm run build
npm run preview
npm run lint
```

Build output is written to the Vite default dist folder.

## Deployment

The repository includes a [vercel.json](vercel.json) SPA rewrite so route refreshes work correctly on Vercel. Any deployment platform must serve the app as a single-page application and rewrite unknown paths to `index.html`.

For example, if you deploy somewhere else, make sure:

- Client-side routing is enabled.
- Deep links such as `/appointment` resolve to the SPA entry.
- Static assets are served from the Vite build output.

## Styling And UI System

Global styling is defined in [src/index.css](src/index.css). The site uses:

- A custom font stack with Plus Jakarta Sans.
- Tailwind theme tokens for medical brand colors.
- Glassmorphism helper classes.
- Custom scrollbar styles.
- Page transition utility classes.
- Swiper overrides for theme consistency.

Most page sections are built with Tailwind utility classes directly in the component files. When extending the UI, keep the same visual tone so the site stays consistent across new pages.

## Content Maintenance

Most business content lives in [src/data/mockData.js](src/data/mockData.js). That file contains departments, doctors, and supporting marketing content. Update it when:

- A doctor joins or leaves.
- A department name or service list changes.
- A new treatment package or feature block needs to appear on the site.

This is the safest place to keep repeated content because several pages can read from the same data source.

## How To Extend The Site

When adding a new page or feature, use this workflow:

1. Create the page in [src/pages/](src/pages/).
2. Add the route in [src/App.jsx](src/App.jsx).
3. Add the page to the header and footer navigation if it should be discoverable.
4. Reuse the shared layout rather than creating a separate shell.
5. Put repeated content in [src/data/mockData.js](src/data/mockData.js) instead of hardcoding it in multiple pages.

If you add a new form:

- Validate on the client before calling any service.
- Decide whether the form should use the mock API, EmailJS, or a real backend endpoint.
- Keep a graceful failure state so users still get clear feedback.

If you add a new external integration:

- Put configuration in environment variables.
- Centralize request logic in [src/services/](src/services/).
- Document the new variables in this README.

## Developer Notes

- The current codebase is JavaScript, not TypeScript.
- The app relies on React Router, so navigation should use Link or navigate rather than full page reloads.
- Several components use animation and scroll-sensitive behavior, so test both mobile and desktop layouts after changes.
- If you replace the mock services with real APIs, keep the response shape stable so the UI does not need a large rewrite.

## Production Checklist

Before shipping changes, verify the following:

- `npm run build` completes successfully.
- `npm run lint` is clean.
- Contact and appointment flows still submit and show confirmation states.
- SPA rewrites work on the hosting platform.
- Environment variables are set in production.

## Support And Ownership

This repository is structured so a future developer can own it without needing to understand every visual detail first. The main areas of responsibility are:

- Route structure in [src/App.jsx](src/App.jsx).
- Layout and navigation in [src/layouts/RootLayout.jsx](src/layouts/RootLayout.jsx) and [src/components/Header.jsx](src/components/Header.jsx).
- Business content in [src/data/mockData.js](src/data/mockData.js).
- Form and notification behavior in [src/services/api.js](src/services/api.js) and [src/services/notificationService.js](src/services/notificationService.js).

If you keep those boundaries intact, the site will remain easy to scale and maintain.

                                                 Developed by ---DigitalLiftHUb Team