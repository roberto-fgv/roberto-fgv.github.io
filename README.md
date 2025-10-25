# Roberto dos Santos Rocha - Portfolio

[![Deploy Status](https://github.com/roberto-fgv/roberto-fgv.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/roberto-fgv/roberto-fgv.github.io/actions/workflows/deploy.yml)
[![React](https://img.shields.io/badge/React-19.2.0-61DAFB?style=flat&logo=react&logoColor=white)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.0.14-38B2AC?style=flat&logo=tailwind-css&logoColor=white)](https://tailwindcss.com/)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](LICENSE)

> Professional portfolio website showcasing my experience as a researcher, educator, and Information Systems specialist.

## 🌐 Live Demo

Visit the live site at: [https://roberto-rocha.tech](https://roberto-rocha.tech)

## ✨ Features

- 📱 **Responsive Design** - Optimized for all devices and screen sizes
- 🎨 **Modern UI** - Clean and professional interface built with Tailwind CSS
- ⚡ **Fast Performance** - Built with React for optimal performance
- 🔗 **Social Integration** - Direct links to LinkedIn and email
- 📊 **Comprehensive Information** - Education, skills, experience, and publications

## 🛠️ Tech Stack

- **Framework:** React 19.2.0
- **Styling:** Tailwind CSS 4.0.14
- **Icons:** Lucide React
- **Routing:** React Router DOM 7.9.4
- **Build Tool:** React Scripts
- **Hosting:** GitHub Pages with custom domain
- **Package Manager:** npm

## 🚀 Getting Started

### Prerequisites

- **Node.js** (v14.0.0 or higher)
- **npm** (v6.0.0 or higher)

### Installation

1. **Clone the repository**
   ```bash
   git clone https://github.com/roberto-fgv/roberto-fgv.github.io.git
   cd roberto-fgv.github.io
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

   The application will open automatically at [http://localhost:3000](http://localhost:3000)

## 📜 Available Scripts

### Development

```bash
npm start
```
Runs the app in development mode with hot-reload enabled.

### Testing

```bash
npm test
```
Launches the test runner in interactive watch mode.

### Production Build

```bash
npm run build
```
Creates an optimized production build in the `build` folder.

### Deployment

**Automatic Deployment (Recommended):**

The site deploys automatically to GitHub Pages when you push to the `main` branch. Just commit and push your changes:

```bash
git add .
git commit -m "Your changes"
git push origin main
```

The GitHub Actions workflow will automatically:
1. Build the application
2. Deploy to GitHub Pages
3. Update the live site at [roberto-rocha.tech](https://roberto-rocha.tech)

**Manual Deployment (Alternative):**

```bash
npm run deploy
```
Manually deploys the application to GitHub Pages (requires GitHub authentication).

## 📁 Project Structure

```
roberto-fgv.github.io/
├── public/              # Static files
│   ├── index.html       # HTML template
│   ├── favicon.ico      # Site favicon
│   └── ...
├── src/
│   ├── components/      # Reusable UI components
│   │   └── ui/          # UI component library
│   │       ├── card.jsx
│   │       └── button.jsx
│   ├── App.js           # Main application component
│   ├── HomePage.js      # Home page component
│   ├── index.js         # Application entry point
│   ├── index.css        # Global styles
│   └── ...
├── package.json         # Project dependencies
├── tailwind.config.js   # Tailwind configuration
└── README.md            # Project documentation
```

## 🎨 Customization

### Updating Personal Information

Edit `src/HomePage.js` to update:
- Professional title and description
- Education history
- Skills and competencies
- Professional experience
- Publications and research
- Contact information

### Styling

- **Global styles:** `src/index.css`
- **Component styles:** Individual component files
- **Tailwind config:** `src/tailwind.config.js`

## 📞 Contact

**Roberto dos Santos Rocha**
- 📧 Email: [rsantos.rocha@gmail.com](mailto:rsantos.rocha@gmail.com)
- 💼 LinkedIn: [linkedin.com/in/rsrocha](https://www.linkedin.com/in/rsrocha)

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🙏 Acknowledgments

- Built with [Create React App](https://create-react-app.dev/)
- Icons by [Lucide React](https://lucide.dev/)
- Styled with [Tailwind CSS](https://tailwindcss.com/)

---

<div align="center">
  <p>Made with ❤️ by Roberto dos Santos Rocha</p>
  <p>© 2025 All rights reserved</p>
</div>
