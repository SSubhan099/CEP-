const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\subhan\\.gemini\\antigravity\\brain\\217c5234-d121-478e-8d4f-ea23f68db949';
const destDir = 'c:\\Users\\subhan\\OneDrive\\Desktop\\CEP(project)\\WEBSITE\\public\\images';

if (!fs.existsSync(destDir)) {
    fs.mkdirSync(destDir, { recursive: true });
}

const images = [
    { src: 'classroom_1776192743828.png', dest: 'classroom.png' },
    { src: 'teacher_1776192866053.png', dest: 'teacher.png' },
    { src: 'sports_1776193063587.png', dest: 'sports.png' },
    { src: 'art_1776193125829.png', dest: 'art.png' },
    { src: 'school_building_1776193427749.png', dest: 'school_building.png' }
];

images.forEach(img => {
    const srcPath = path.join(srcDir, img.src);
    const destPath = path.join(destDir, img.dest);
    try {
        if (fs.existsSync(srcPath)) {
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied ${img.src} to ${img.dest}`);
        } else {
            console.error(`Source image missing: ${srcPath}`);
        }
    } catch (err) {
        console.error(`Error copying ${img.src}:`, err.message);
    }
});

const filesToUpdate = [
    'c:\\Users\\subhan\\OneDrive\\Desktop\\CEP(project)\\WEBSITE\\src\\app\\page.tsx',
    'c:\\Users\\subhan\\OneDrive\\Desktop\\CEP(project)\\WEBSITE\\src\\app\\gallery\\page.tsx'
];

filesToUpdate.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        // Replace src URLs while keeping other attributes
        let newContent = content.replace(/src="(https:\/\/lh3\.googleusercontent\.com\/aida\/[^"]+)"/g, (match, srcUrl) => {
            // Find the closest alt/data-alt to determine which image to use
            // This is a simplified logic, but it should work for most cases
            const searchRange = content.substring(Math.max(0, content.indexOf(srcUrl) - 300), content.indexOf(srcUrl) + 300);
            const lowerRange = searchRange.toLowerCase();
            
            let img = '/images/classroom.png';
            if (lowerRange.includes('school building') || lowerRange.includes('courtyard') || lowerRange.includes('building')) img = '/images/school_building.png';
            else if (lowerRange.includes('teacher') || lowerRange.includes('portrait') || lowerRange.includes('educator') || lowerRange.includes('group') || lowerRange.includes('performance') || lowerRange.includes('assembly') || lowerRange.includes('ceremony') || lowerRange.includes('zareena') || lowerRange.includes('principal') || lowerRange.includes('rafiqua') || lowerRange.includes('shagufta')) img = '/images/teacher.png';
            else if (lowerRange.includes('sports') || lowerRange.includes('running') || lowerRange.includes('trip') || lowerRange.includes('beach') || lowerRange.includes('yoga') || lowerRange.includes('tour')) img = '/images/sports.png';
            else if (lowerRange.includes('art') || lowerRange.includes('creative') || lowerRange.includes('competition') || lowerRange.includes('display')) img = '/images/art.png';
            
            return `src="${img}"`;
        });
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Updated ${file}`);
    }
});
