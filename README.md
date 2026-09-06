# Ningaraj Ukkali - Developer Portfolio

A stunning futuristic 3D personal portfolio website built with HTML, CSS, and JavaScript.

## 🚀 Features

- **Futuristic Design**: Dark space-themed background with glassmorphism effects
- **3D Effects**: Floating profile cards, hologram frames, and animated elements
- **Neon Accents**: Cyan and violet color scheme with glowing effects
- **Fully Responsive**: Works seamlessly on desktop, tablet, and mobile devices
- **Smooth Animations**: Intersection Observer API for scroll-triggered animations
- **Interactive Elements**: Hover effects, parallax scrolling, and particle animations
- **Terminal-Style Contact Form**: Unique coding-themed contact interface
- **Timeline**: Futuristic education and experience timeline

## 📁 File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # All CSS styling and animations
├── script.js           # JavaScript functionality
├── profile.jpg         # Profile image (replace with your photo)
└── README.md          # This file
```

## 🛠️ Setup Instructions

1. **Download/Clone the files**
   - Save `index.html`, `styles.css`, and `script.js` in the same folder

2. **Add Your Profile Image**
   - Replace `profile.jpg` with your actual photo
   - Make sure the filename is `profile.jpg` or update the `src` attribute in the HTML

3. **Customize Content**
   - Open `index.html` in a text editor
   - Update personal information:
     - Name, age, education details
     - Email, phone, location
     - Social media links
     - Projects information
     - Skills and proficiency levels

4. **Open in Browser**
   - Simply double-click `index.html` or
   - Right-click → Open with → Your preferred browser

## 🎨 Customization Guide

### Colors
Edit CSS variables in `styles.css` (lines 12-22):
```css
:root {
    --cyan-400: #22d3ee;
    --violet-500: #8b5cf6;
    /* Modify these to change the color scheme */
}
```

### Content Sections
All content is in `index.html`:
- **Hero Section**: Lines 40-120 (Introduction and CTA buttons)
- **About Section**: Lines 123-195 (Bio and feature cards)
- **Skills Section**: Lines 198-320 (Technical skills with progress bars)
- **Projects Section**: Lines 323-480 (Portfolio projects)
- **Education Section**: Lines 483-615 (Timeline and stats)
- **Contact Section**: Lines 618-750 (Contact form and social links)

### Profile Photo
Replace these image references in `index.html`:
```html
<img src="profile.jpg" alt="Ningaraj Ukkali">
```
Change `profile.jpg` to your image filename.

### Social Media Links
Update links in the Contact section (around line 685):
```html
<a href="#" class="social-link social-github">
```
Replace `#` with your actual social media URLs.

## 🌟 Key Features to Customize

### 1. Personal Information
- Line 57: Name and title
- Line 68-73: Stats (Age, BCA year, Semester)
- Line 147: About bio text
- Line 672-682: Contact information

### 2. Skills
- Line 211-310: Skill cards with proficiency percentages
- Add or remove skills by duplicating/deleting skill card blocks

### 3. Projects
- Line 335-470: Project cards
- Update title, description, tech stack, and links

### 4. Education Timeline
- Line 495-590: Timeline items
- Modify years, titles, institutions, and achievements

## 💻 Browser Compatibility

- ✅ Chrome (recommended)
- ✅ Firefox
- ✅ Safari
- ✅ Edge
- ✅ Opera

## 📱 Responsive Breakpoints

- Desktop: 1200px and above
- Tablet: 768px - 1199px
- Mobile: Below 768px

## 🎯 Performance Tips

1. **Optimize Images**
   - Compress your profile photo
   - Recommended size: 500x500px
   - Format: JPG or WebP

2. **Hosting**
   - Upload to GitHub Pages (free)
   - Use Netlify or Vercel
   - Traditional web hosting

## 🚀 Deployment

### GitHub Pages
1. Create a new repository on GitHub
2. Upload all files
3. Go to Settings → Pages
4. Select main branch → Save
5. Your site will be live at `username.github.io/repository-name`

### Netlify (Drag & Drop)
1. Go to netlify.com
2. Drag your project folder
3. Site is live instantly with free HTTPS

## 🐛 Troubleshooting

**Images not showing:**
- Check that `profile.jpg` is in the same folder
- Verify the filename matches exactly (case-sensitive)

**Icons not appearing:**
- Ensure you have internet connection (icons load from CDN)
- Check browser console for errors

**Animations not working:**
- Clear browser cache
- Ensure JavaScript is enabled
- Try a different browser

## 📧 Contact

For questions or support regarding this portfolio:
- Email: ningaraj.ukkali@example.com
- Update this with your actual contact information

## 📄 License

Free to use and modify for personal or commercial projects.

## 🙏 Credits

- Icons: Lucide Icons (https://lucide.dev)
- Design: Custom futuristic theme
- Built with: HTML5, CSS3, Vanilla JavaScript

---

**Made with ❤️ and code by Ningaraj Ukkali**

Last Updated: February 2025
