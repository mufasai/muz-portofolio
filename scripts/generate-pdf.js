import puppeteer from 'puppeteer';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

async function generatePDF() {
  console.log('🚀 Starting PDF generation...');

  const browser = await puppeteer.launch({
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox']
  });

  try {
    const page = await browser.newPage();
    
    // Set viewport untuk desktop
    await page.setViewport({
      width: 1920,
      height: 1080,
      deviceScaleFactor: 2, // Untuk quality lebih tinggi
    });

    console.log('📱 Loading portfolio...');
    
    // Ganti dengan URL local dev server atau production URL
    const url = process.env.PORTFOLIO_URL || 'http://localhost:5173';
    await page.goto(url, {
      waitUntil: 'networkidle0',
      timeout: 60000
    });

    // Wait untuk animasi selesai
    await new Promise(resolve => setTimeout(resolve, 3000));

    // Scroll ke bawah untuk trigger lazy load images
    await autoScroll(page);

    console.log('📄 Generating PDF...');

    const pdfPath = join(__dirname, '..', 'portfolio-musyafa.pdf');

    await page.pdf({
      path: pdfPath,
      format: 'A4',
      printBackground: true,
      margin: {
        top: '0px',
        right: '0px',
        bottom: '0px',
        left: '0px',
      },
      preferCSSPageSize: false,
    });

    console.log(`✅ PDF generated successfully: ${pdfPath}`);
    console.log('📦 You can now upload this PDF to Google Drive/OneDrive/Dropbox');

  } catch (error) {
    console.error('❌ Error generating PDF:', error);
    throw error;
  } finally {
    await browser.close();
  }
}

// Helper function untuk scroll otomatis
async function autoScroll(page) {
  await page.evaluate(async () => {
    await new Promise((resolve) => {
      let totalHeight = 0;
      const distance = 100;
      const timer = setInterval(() => {
        const scrollHeight = document.body.scrollHeight;
        window.scrollBy(0, distance);
        totalHeight += distance;

        if (totalHeight >= scrollHeight) {
          clearInterval(timer);
          // Scroll back to top
          window.scrollTo(0, 0);
          resolve();
        }
      }, 100);
    });
  });
}

// Run the script
generatePDF().catch(console.error);
