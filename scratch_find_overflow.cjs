const { chromium } = require('d:/Aster Projects/SKPD/my-react-app/node_modules/playwright');

(async () => {
  const browser = await chromium.launch();
  const page = await browser.newPage();
  
  for (const width of [320, 375, 430, 768]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('http://localhost:5173', { waitUntil: 'networkidle' });
    
    const overflowingElements = await page.evaluate((vw) => {
      const docWidth = document.documentElement.clientWidth;
      const elements = Array.from(document.querySelectorAll('*'));
      const overflowing = [];
      
      for (const el of elements) {
        const rect = el.getBoundingClientRect();
        if (rect.right > docWidth + 2) {
          overflowing.push({
            tag: el.tagName,
            className: typeof el.className === 'string' ? el.className : 'svg/other',
            id: el.id,
            rectRight: Math.round(rect.right),
            rectWidth: Math.round(rect.width),
            docWidth
          });
        }
      }
      return overflowing;
    }, width);
    
    console.log('--- Viewport ' + width + 'px overflowing count: ' + overflowingElements.length + ' ---');
    if (overflowingElements.length > 0) {
      console.log(JSON.stringify(overflowingElements.slice(0, 10), null, 2));
    }
  }
  
  await browser.close();
})();

