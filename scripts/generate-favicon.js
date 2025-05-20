const sharp = require('sharp');
const fs = require('fs');
const path = require('path');

const sourceImage = path.join(__dirname, '../public/logo.jpeg');
const outputDir = path.join(__dirname, '../public');

// icon.png oluştur
sharp(sourceImage)
  .resize(32, 32)
  .toFile(path.join(outputDir, 'icon.png'))
  .then(() => console.log('icon.png oluşturuldu'))
  .catch(err => console.error('icon.png oluşturma hatası:', err));

// apple-icon.png oluştur
sharp(sourceImage)
  .resize(180, 180)
  .toFile(path.join(outputDir, 'apple-icon.png'))
  .then(() => console.log('apple-icon.png oluşturuldu'))
  .catch(err => console.error('apple-icon.png oluşturma hatası:', err)); 