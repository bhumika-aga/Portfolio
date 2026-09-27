export const SITE = {
  name: "Bhumika Agarwal",
  email: "bhumika.aga@gmail.com",
  github: "https://github.com/bhumika-aga",
  linkedin: "https://linkedin.com/in/bhumika-aga",
  resumeFile: "Bhumika_Agarwal_Resume.pdf",
};

// Public assets must be prefixed with Vite's base so they resolve when the
// site is served from a GitHub Pages project path (e.g. /Portfolio/).
export const RESUME_URL = `${import.meta.env.BASE_URL}${SITE.resumeFile}`;
