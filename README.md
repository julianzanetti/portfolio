<h1 align="center">💻 Personal Portfolio</h1>
<p align="center">
  A clean, minimal, and fully responsive portfolio built with <strong>Astro</strong> and <strong>TailwindCSS</strong>, where I showcase my projects, courses, and experience as a <strong>DevOps Engineer.</strong>
</p>
<p align="center">
  <a href="https://julianzanetti.dev" target="_blank"><strong>🌐 Live Demo</strong></a>
</p>

---

## ✨ Portfolio Features

- ⚡ Built with **Astro**
- 💅 Styled using **TailwindCSS**
- 🌓 Dark-themed, clean UI design
- 📱 Fully responsive layout
- 🔁 Reusable and modular components
- 📚 Dynamic content system using Markdown
- 🐳 Docker-ready for local deployment
- ⚙️ Integrated with **GitHub Actions** for CI/CD

---

## 🛠️ Technologies Used

- 🚀 **Astro**  
- 🎨 **TailwindCSS**  
- 🧠 **TypeScript**  
- ⚙️ **Vite**  
- 🗂️ **Markdown** (for dynamic content)  
- 🐳 **Docker**  
- 🛠️ **GitHub Actions**  
- 🔄 **CI/CD workflow**  
- ☁️ **Vercel** (deployment)

---

## 📂 Project Structure

Projects and courses are defined in Markdown files within the `content/` folder. This allows easy creation and maintenance of portfolio entries.
```
portfolio/
├── content/
│ ├── projects/
│ └── courses/
├── components/
├── layouts/
└── pages/
```

---

## 🧪 Local Installation
### ▶️ Using Node.js
```bash
# Clone the repo
git clone https://github.com/julianzanetti/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

### ▶️ Using Docker (pull prebuilt image)
```bash
# Pull the latest image from GitHub Container Registry
docker pull julianzanetti/portfolio:latest

# Run the container
docker run -p 80:80 julianzanetti/portfolio:latest
```

### 🛠️ Using Docker (build manually)
```bash
# Build Docker image locally
docker build -t julianzanetti/portfolio .

# Run the container
docker run -p 80:80 julianzanetti/portfolio
```

Then open your browser and visit `http://localhost:80`.

---

## 🔄 GitHub Actions
This project uses GitHub Actions to automatically build and validate the site on every push. You’ll find the workflow file under .github/workflows/.

---

## 📄 License
This project is licensed under the MIT License - see the LICENSE file for details.
