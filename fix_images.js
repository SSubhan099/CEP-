const fs = require('fs');
const path = require('path');

const srcDir = 'C:\\Users\\subhan\\.gemini\\antigravity\\brain\\217c5234-d121-478e-8d4f-ea23f68db949';
const destDir = 'c:\\Users\\subhan\\OneDrive\\Desktop\\CEP(project)\\WEBSITE [Netify]\\public\\images';

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
        fs.copyFileSync(srcPath, destPath);
        console.log(`Copied ${img.src} to ${img.dest}`);
    } catch (err) {
        console.error(`Error copying ${img.src}:`, err.message);
    }
});

const filesToUpdate = [
    'c:\\Users\\subhan\\OneDrive\\Desktop\\CEP(project)\\WEBSITE [Netify]\\src\\app\\page.tsx',
    'c:\\Users\\subhan\\OneDrive\\Desktop\\CEP(project)\\WEBSITE [Netify]\\src\\app\\gallery\\page.tsx'
];

filesToUpdate.forEach(file => {
    if (fs.existsSync(file)) {
        let content = fs.readFileSync(file, 'utf8');
        let newContent = content.replace(/(?:data-)?alt="([^"]+)".*?src="(https:\/\/lh3\.googleusercontent\.com\/aida\/[^"]+)"/gs, (match, alt, srcUrl) => {
            let img = '/images/classroom.png';
            let lowerAlt = alt.toLowerCase();
            
            if (lowerAlt.includes('school building') || lowerAlt.includes('courtyard') || lowerAlt.includes('building')) img = '/images/school_building.png';
            else if (lowerAlt.includes('teacher') || lowerAlt.includes('portrait') || lowerAlt.includes('educator') || lowerAlt.includes('group') || lowerAlt.includes('performance') || lowerAlt.includes('assembly') || lowerAlt.includes('ceremony') || lowerAlt.includes('zareena') || lowerAlt.includes('principal') || lowerAlt.includes('rafiqua') || lowerAlt.includes('shagufta')) img = '/images/teacher.png';
            else if (lowerAlt.includes('sports') || lowerAlt.includes('running') || lowerAlt.includes('trip') || lowerAlt.includes('beach') || lowerAlt.includes('yoga') || lowerAlt.includes('tour')) img = '/images/sports.png';
            else if (lowerAlt.includes('art') || lowerAlt.includes('creative') || lowerAlt.includes('competition') || lowerAlt.includes('display')) img = '/images/art.png';
            
            return match.replace(srcUrl, img);
        });
        fs.writeFileSync(file, newContent, 'utf8');
        console.log(`Updated ${file}`);
    }
});
