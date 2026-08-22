import fs from 'fs';
import path from 'path';
import sharp from 'sharp';

const teamDir = path.resolve('src/assets/team');
const files = fs.readdirSync(teamDir);

async function convert() {
  console.log('Converting team images to optimized WebP...');
  for (const file of files) {
    if (file.endsWith('.jpg') || file.endsWith('.jpeg') || file.endsWith('.png')) {
      const inputPath = path.join(teamDir, file);
      const name = path.parse(file).name;
      const outputPath = path.join(teamDir, `${name}.webp`);

      const buffer = fs.readFileSync(inputPath);
      await sharp(buffer)
        .resize({ width: 600, height: 600, fit: 'inside', withoutEnlargement: true })
        .webp({ quality: 85, effort: 6 })
        .toFile(outputPath);

      const beforeSize = (fs.statSync(inputPath).size / 1024).toFixed(1);
      const afterSize = (fs.statSync(outputPath).size / 1024).toFixed(1);
      console.log(`Converted ${file}: ${beforeSize} KB -> ${afterSize} KB`);
    }
  }
  console.log('Finished converting team images!');
}

convert();
