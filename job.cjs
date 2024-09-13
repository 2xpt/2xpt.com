const fs = require('fs');
const path = require('path');
const matter = require('gray-matter');


const contentDir = path.join(__dirname, 'content');

fs.readdir(contentDir, (err, files) => {
  if (err) {
    console.error('Error reading directory:', err);
    return;
  }

  files.forEach(file => {
    const filePath = path.join(contentDir, file);
    
    // Skip directories
    if (fs.statSync(filePath).isDirectory()) {
      return;
    }

    // Read the content of the file
    const fileContent = fs.readFileSync(filePath, 'utf8');
    const { data } = matter(fileContent);

    // Extract the title from metadata
    const title = data.title;
    
    if (!title) {
      console.log(`No title found in ${file}, skipping...`);
      return;
    }

    // Generate slug from title and add '2xpt-' prefix
    const slug = '2xpt-' + title.toLowerCase().replace(/[^a-z0-9]+/g, '-') + '.md';
    const newFilePath = path.join(contentDir, slug);

    // Rename the file
    fs.rename(filePath, newFilePath, err => {
      if (err) {
        console.error(`Error renaming ${file} to ${slug}:`, err);
      } else {
        console.log(`Renamed ${file} to ${slug}`);
      }
    });
  });
});
