# richw.xyz

Simple splash page used for https://richw.xyz

## Build & Deploy

`npm i --legacy-peer-deps` to install  
`npm run build` then `npm run start`

## Modify/Update

Files to modify when updating:  
`data/BioData.js` General info  
`data/LinkData.js` Socials & links  
`components/WebLinks.js` User interface  
`components/icons/index.js` Socials SVG  
`public` contains all images
`public/newproduct.png` Featured banner  

All images stored inside `public` folder of the project.

## Add or Update Sections

In `WebLinks.js` rename all `featured` or `other` text to desired section title and use the title for `type` within `LinkData.js`

To add new section, copy `LinkSection` block in `WebLinks.js`, and use section title for `type` within `LinkData.js`

## SEO
`next.seo.config.js` contains SEO related data.

## Google Analytics
Depends on which service used. This example is for Vercel.

Settings > Environment Variables > Set Key to `NEXT_PUBLIC_GOOGLE_ANALYTICS` > Set Value to GA ID.

## Notes
Setting `img: invert` to `0` for dark-mode in `styles/GlobalStyle.js` will not invert the SVGs from white to black.

Alternatively, can remove the filter in `components/WebLinks.js`. There's a line for <LinkTitle> for each section of links. It has a style that filters SCGs used 
for that section, which makes them  white for a dark theme and black for a light theme. The `style={{ filter: 'var(--img' }}` part can be removed from social icons 
and featured sections.

#

Founder & CEO at [NVSTly](https://nvstly.com)  
X/Twitter: https://x.com/saidbyrich  
LinkedIn: https://www.linkedin.com/in/rich-watson  
Discord: `itsrich.` (User ID: `877345663900340254`) - [Find me here](https://discord.com/invite/rhAvzyzk9J) & beware of impersonaters!
    