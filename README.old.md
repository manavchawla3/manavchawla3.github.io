# Resume Builder

A professional, compact HTML resume template with clean typography and consistent styling throughout. Optimized to fit within 2 pages while maintaining excellent readability.

## Features

- **Compact & Efficient**: Fits comfortably in 2 pages with proper spacing
- **Consistent Design**: All sections (experience, education, projects) use the same clean list style
- **Modern Typography**: Uses Inter font family for excellent readability
- **Conservative Color Palette**: Black/navy (#2c3e50, #1a1a1a) minimalist scheme
- **Direct PDF Download**: One-click PDF generation without browser headers/footers
- **html2pdf.js Integration**: Client-side PDF generation with perfect styling preservation
- **Single-File Solution**: All styles and functionality in one HTML file
- **ATS-Compliant**: Clean structure that passes automated applicant tracking systems

## Usage

### Viewing the Resume

Simply open [index.html](index.html) in any modern web browser:

```bash
open index.html
```

### Generating PDF

You now have two options:

#### Option 1: Direct PDF Download (Recommended)
1. Open the resume in your browser
2. Click the green "📄 Download PDF" button
3. The PDF will be generated and downloaded automatically
4. **No browser headers/footers** - clean, professional output

#### Option 2: Browser Print
1. Open the resume in your browser
2. Click the "🖨️ Print" button (or use Ctrl/Cmd + P)
3. In the print dialog, select "Save as PDF" as the destination

**Note**: The direct download option is recommended as it produces cleaner PDFs without browser-added headers and footers.

### Customization

Edit the [index.html](index.html) file to customize:

- **Personal Information**: Update name, title, contact details in the header section
- **Summary**: Modify the professional summary text
- **Skills**: Add or remove skills in the skills list
- **Experience**: Update job titles, companies, dates, and responsibilities
- **Education**: Modify degrees and educational background
- **Projects**: Add or update project descriptions

### Styling

All styles are contained in the `<style>` section of the HTML file. Key customization points:

- **Color Scheme** (Minimalist/Conservative):
  - Primary text: #1a1a1a (near black)
  - Secondary text: #2c3e50 (dark navy)
  - Muted text: #5a6c7d (gray-blue)
  - Accent: #2c3e50 (used for borders and underlines)
  - Background: #ffffff (white) with subtle #fafafa boxes
- **Typography**:
  - Font: Inter (loaded from Google Fonts)
  - Name: 36px, weight 700
  - Section titles: 14px, uppercase, letter-spacing 1.5px
  - Body text: 12-13px
  - Line height: 1.5-1.65 for readability
- **Spacing**: Generous margins optimized for professional appearance
  - Section spacing: 32px between major sections
  - Item spacing: 24-28px between experience items
  - Padding: 35-45px content padding
- **Visual Elements**:
  - Clean 50px underlines beneath section titles
  - Subtle borders (#e8e8e8) for separators
  - Left-accent bars (#2c3e50) on education/project items
  - Bullet points instead of icons/graphics
- **Print Layout**:
  - All colors preserved with `-webkit-print-color-adjust: exact`
  - Page margins: 0.5in/0.6in for balanced layout
  - Smart page breaks to avoid splitting sections

## Browser Compatibility

Works with all modern browsers:
- Chrome/Edge (recommended for best PDF output)
- Firefox
- Safari

## Project Structure

```
resume-builder/
├── index.html      # Main resume file (HTML + CSS + JS)
└── README.md       # This file
```

## Tips

- Use Chrome or Edge for the best PDF export quality
- **PDF output now matches HTML view exactly** - all colors, gradients, and styles are preserved
- Test your changes by printing to PDF to ensure proper formatting
- The design is optimized for US Letter size paper (8.5" x 11")
- Fits comfortably in 2 pages with current content density
- If you need more space, reduce font sizes in the CSS (look for font-size properties)
- All print colors are preserved using `print-color-adjust: exact`

## Design Philosophy

This template follows minimalist resume principles:

- **Content over decoration**: Focus on achievements, not fancy graphics
- **Professional restraint**: Conservative palette suitable for traditional industries (law, finance, medicine, tech)
- **Abundant white space**: Easier to scan and read, appears more confident
- **Single font family**: Clean, consistent typography throughout
- **Bullet points only**: No icons, charts, or skill bars that clutter ATS systems
- **Clean visual hierarchy**: Bold headers and subtle separators guide the eye
- **Above-the-fold priority**: Most important information in the first third

### Differences from Typical Resumes

- **No colored backgrounds or gradients**: Clean white background is more professional
- **No emoji or icons**: Text-only contact info for ATS compatibility
- **Generous spacing**: 32px+ between sections vs typical 10-15px
- **Larger fonts**: 12-13px body text vs cramped 10px
- **Quality over quantity**: Better to have 2 pages of readable content than 1 page of tiny text
- **Minimal decoration**: 50px section underlines are the only graphical element

## Technical Details

### PDF Generation

The resume uses [html2pdf.js](https://github.com/eKoopmans/html2pdf.js) for client-side PDF generation:

- **No server required**: Everything runs in the browser
- **High quality**: 2x scale rendering for crisp text and graphics
- **Smart page breaks**: Automatically avoids breaking content mid-section
- **Perfect styling**: Preserves all colors, gradients, fonts, and layout
- **Fast**: Generates PDF in 2-3 seconds
- **Clean output**: No browser headers, footers, or URLs

### How It Works

```javascript
// The PDF generation function:
1. Captures the resume HTML element
2. Converts it to a high-resolution canvas using html2canvas
3. Renders the canvas as a PDF using jsPDF
4. Automatically handles pagination
5. Downloads with filename "Manav_Chawla_Resume.pdf"
```

### Dependencies

- **html2pdf.js** (loaded from CDN): HTML to PDF conversion library
- **html2canvas**: Used internally by html2pdf.js for rendering
- **jsPDF**: Used internally by html2pdf.js for PDF generation
