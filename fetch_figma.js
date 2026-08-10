const token = process.env.NEXT_PUBLIC_FIGMA_TOKEN;
const fileKey = process.env.NEXT_PUBLIC_FIGMA_FILE_ID;

async function main() {
  const { writeFileSync } = await import('node:fs');
  const headers = { 'X-Figma-Token': token };

  console.log('Rendering full homepage frame 1:2...');
  const imgRes = await fetch(`https://api.figma.com/v1/images/${fileKey}?ids=1:2&format=png&scale=2`, { headers });
  const imgData = await imgRes.json();
  console.log('Image API response:', imgData);

  if (imgData.images && imgData.images['1:2']) {
    const imageUrl = imgData.images['1:2'];
    console.log('Downloading full homepage image from:', imageUrl);
    const pngRes = await fetch(imageUrl);
    const buffer = await pngRes.arrayBuffer();
    writeFileSync('public/figma_swiftly_homepage.png', Buffer.from(buffer));
    console.log('Successfully saved public/figma_swiftly_homepage.png!');
  }

  // Also render individual key section frames
  const sectionIds = ['1:3', '1:6', '1:20', '1:71', '1:78', '1:102', '1:128', '1:167', '1:197', '1:217', '1:224'];
  const secRes = await fetch(`https://api.figma.com/v1/images/${fileKey}?ids=${sectionIds.join(',')}&format=png&scale=2`, { headers });
  const secData = await secRes.json();
  for (const [id, url] of Object.entries(secData.images || {})) {
    if (url) {
      const res = await fetch(url);
      const buf = await res.arrayBuffer();
      const safeId = id.replace(':', '_');
      writeFileSync(`public/figma_frame_${safeId}.png`, Buffer.from(buf));
      console.log(`Saved public/figma_frame_${safeId}.png`);
    }
  }
}

main().catch(err => console.error(err));
