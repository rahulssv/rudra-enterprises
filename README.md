# Rudra Enterprises - Landing Page

A beautiful, modern, and responsive landing page for Rudra Enterprises, built with Next.js, React, and Tailwind CSS. The site serves as a digital portfolio and contact hub for the business.

## 🚀 Features

- **Modern Design**: Beautiful, professional UI with smooth animations and transitions
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **SEO Optimized**: Proper meta tags and static site generation for maximum SEO benefits
- **Dynamic Content**: All content is loaded from a single JSON file (local or Google Drive)
- **Portfolio Gallery**: Interactive image gallery with lightbox modal
- **Contact Integration**: Direct phone, email, and WhatsApp links
- **Social Media Links**: Easy access to Instagram, Facebook, and Justdial profiles

## 🛠️ Tech Stack

- **Next.js 14** - React framework with Static Site Generation (SSG)
- **React 18** - UI library
- **Tailwind CSS** - Utility-first CSS framework
- **React Icons** - Icon library for social media and UI elements

## 📋 Prerequisites

Before you begin, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **npm** or **yarn** package manager
- **Git** (for version control)

## 🏃 Getting Started

### 1. Install Dependencies

```bash
npm install
```

### 2. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### 3. Build for Production

```bash
npm run build
```

This creates an optimized production build in the `out` folder.

## 📝 Updating Content

All page content is dynamically loaded from a JSON file. You have two options:

### Option 1: Using Google Drive (Recommended for Easy Updates)

1. **Update the local `data.json` file** at `/public/data.json` with your new content.

2. **Upload to Google Drive:**
   - Go to [Google Drive](https://drive.google.com)
   - Upload your `data.json` file
   - Right-click on the file → **Share** → **General access** → Set to **"Anyone with the link"**
   - Click **Copy link**

3. **Get the File ID:**
   - The link will look like: `https://drive.google.com/file/d/FILE_ID_HERE/view?usp=sharing`
   - Copy the `FILE_ID_HERE` part

4. **Update the code:**
   - Open `pages/index.js`
   - Find the line: `const GOOGLE_DRIVE_URL = 'https://drive.google.com/uc?export=download&id=YOUR_FILE_ID_HERE';`
   - Replace `YOUR_FILE_ID_HERE` with your actual file ID
   - The URL should look like: `https://drive.google.com/uc?export=download&id=YOUR_ACTUAL_FILE_ID`

5. **Rebuild and redeploy:**
   ```bash
   npm run build
   ```

### Option 2: Using Local File Only

If you prefer not to use Google Drive, the site will automatically fall back to the local `/public/data.json` file if the Google Drive fetch fails.

## 📁 Project Structure

```
rudra-enterprises/
├── components/          # React components
│   ├── Navbar.js
│   ├── HeroSection.js
│   ├── AboutUs.js
│   ├── Services.js
│   ├── PortfolioGallery.js
│   ├── Contact.js
│   └── Footer.js
├── pages/              # Next.js pages
│   ├── _app.js         # App wrapper with global styles
│   └── index.js        # Main landing page
├── public/             # Static assets
│   ├── data.json       # Content data file
│   └── images/         # Portfolio images (add your images here)
├── styles/             # Global styles
│   └── globals.css     # Tailwind CSS imports
├── next.config.js      # Next.js configuration
├── tailwind.config.js  # Tailwind CSS configuration
└── package.json        # Dependencies
```

## 🎨 Customization

### Colors

Edit `tailwind.config.js` to customize the color scheme. The primary color is defined in the `colors.primary` section.

### Components

Each component is in the `components/` directory and can be customized independently:
- **Navbar**: Navigation bar with smooth scroll
- **HeroSection**: Hero banner with CTA button
- **AboutUs**: About section
- **Services**: Services grid display
- **PortfolioGallery**: Image gallery with lightbox
- **Contact**: Contact information and social links
- **Footer**: Footer with company info and links

### Portfolio Images

1. Add your portfolio images to `/public/images/` directory
2. Update the `portfolio` array in `data.json` with your image paths
3. Image paths should be relative to `/public`, e.g., `/images/kitchen-1.jpg`

## 🚀 Deployment to GitHub Pages

### Step 1: Build the Project

```bash
npm run build
```

This will create an `out` folder with all static files.

### Step 2: Configure GitHub Repository

1. Ensure your repository is named `rudra-enterprises`
2. The `basePath` in `next.config.js` is already set to `/rudra-enterprises`

### Step 3: Deploy to GitHub Pages

#### Option A: Using GitHub Actions (Recommended)

1. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches:
      - main

jobs:
  build-and-deploy:
    runs-on: ubuntu-latest
    steps:
      - name: Checkout
        uses: actions/checkout@v3

      - name: Setup Node.js
        uses: actions/setup-node@v3
        with:
          node-version: '18'

      - name: Install dependencies
        run: npm install

      - name: Build
        run: npm run build

      - name: Deploy
        uses: peaceiris/actions-gh-pages@v3
        with:
          github_token: ${{ secrets.GITHUB_TOKEN }}
          publish_dir: ./out
```

2. Push to the `main` branch - GitHub Actions will automatically build and deploy.

#### Option B: Manual Deployment

1. **Build the project:**
   ```bash
   npm run build
   ```

2. **Initialize gh-pages branch (first time only):**
   ```bash
   git checkout --orphan gh-pages
   git rm -rf .
   ```

3. **Copy build files:**
   ```bash
   cp -r out/* .
   ```

4. **Commit and push:**
   ```bash
   git add .
   git commit -m "Deploy to GitHub Pages"
   git push origin gh-pages
   ```

5. **Enable GitHub Pages:**
   - Go to your repository settings on GitHub
   - Navigate to **Pages** section
   - Select **gh-pages** branch as source
   - Save

6. **Access your site:**
   Your site will be available at: `https://YOUR_USERNAME.github.io/rudra-enterprises`

### Step 4: Update Google Drive URL (if using)

After deployment, make sure the Google Drive URL in `pages/index.js` is correctly configured so the production build fetches the latest data.

## 📱 Features Breakdown

### Navigation
- Smooth scroll to sections
- Responsive mobile menu
- Sticky navbar with scroll effect

### Hero Section
- Eye-catching gradient background
- Clear call-to-action button
- Scroll indicator

### Services
- Grid layout of service cards
- Hover effects and animations
- Responsive design

### Portfolio Gallery
- Responsive image grid
- Click to open full-screen lightbox
- Image captions

### Contact Section
- Multiple contact persons
- Clickable phone numbers (tel: links)
- Clickable email (mailto: link)
- WhatsApp CTA button
- Social media links with icons

### Footer
- Company information
- Quick navigation links
- Contact details
- Back to top button

## 🔧 Troubleshooting

### Build Errors

If you encounter build errors:

1. **Check Node.js version:**
   ```bash
   node --version
   ```
   Should be 18 or higher.

2. **Clear cache and reinstall:**
   ```bash
   rm -rf node_modules .next out
   npm install
   npm run build
   ```

### Google Drive Fetch Issues

If the Google Drive fetch fails:
- Verify the file is set to "Anyone with the link"
- Check that the file ID in the URL is correct
- The site will automatically fall back to local `data.json`

### Images Not Loading

- Ensure images are in `/public/images/` directory
- Check image paths in `data.json` match actual file names
- Use relative paths starting with `/images/`

## 📄 License

This project is licensed under the terms specified in the LICENSE.md file.

## 🤝 Support

For issues or questions, please contact:
- **Email**: harinath8646@gmail.com
- **Phone**: +919026886697
- **WhatsApp**: [Chat on WhatsApp](https://wa.me/919026886697)

---

**Built with ❤️ for Rudra Enterprises**

