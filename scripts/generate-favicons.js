const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const input = path.join(__dirname, '../public/assets/logos/suci-logo.png');
const outputDir = path.join(__dirname, '../public');

async function generate() {
  if (!fs.existsSync(outputDir)) {
    fs.mkdirSync(outputDir, { recursive: true });
  }

  await sharp(input)
    .resize(512, 512, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toFile(path.join(outputDir, 'icon.png'));

  await sharp(input)
    .resize(192, 192, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toFile(path.join(outputDir, 'icon-192.png'));

  await sharp(input)
    .resize(180, 180, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 1 } })
    .toFile(path.join(outputDir, 'apple-touch-icon.png'));

  await sharp(input)
    .resize(32, 32, { fit: 'contain', background: { r: 255, g: 255, b: 255, alpha: 0 } })
    .toFile(path.join(outputDir, 'favicon.ico'));

  console.log('Favicons generated successfully.');
}

generate().catch(console.error);
