import fs from 'fs/promises';
import path from 'path';
import sharp from 'sharp';

const dir = 'src/assets/images';

async function optimizeImages() {
  try {
    const files = await fs.readdir(dir);
    for (const file of files) {
      if (file.toLowerCase().endsWith('.png') || file.toLowerCase().endsWith('.jpg') || file.toLowerCase().endsWith('.jpeg')) {
        const filePath = path.join(dir, file);
        const ext = path.extname(file);
        const basename = path.basename(file, ext);
        const outPath = path.join(dir, basename + '.webp');
        
        console.log(`Optimizing ${file}...`);
        await sharp(filePath)
          .webp({ quality: 80 })
          .toFile(outPath);
        
        console.log(`Created ${outPath}`);
        
        // Remove the old file
        await fs.unlink(filePath);
        console.log(`Deleted original ${file}`);
      }
    }
    console.log('All images optimized to WEBP!');
  } catch (err) {
    console.error('Error optimizing images:', err);
  }
}

optimizeImages();
