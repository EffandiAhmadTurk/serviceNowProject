const fs = require('fs');

const generateRobotTxtFile = async () => {
  const environment = process.env.NEXT_PUBLIC_ENVIRONMENT;

  console.log('🤖: Generating robots.txt file');

  let robotContent = `User-agent: *
Sitemap: https://www.felixhomes.com/sitemap.xml`;

  if (environment === 'staging')
    robotContent = `User-agent: * 
Disallow: /`;

  fs.writeFileSync('public/robots.txt', robotContent);
};

generateRobotTxtFile();
