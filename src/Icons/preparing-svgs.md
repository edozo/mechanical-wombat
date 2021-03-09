# Preparing SVG's

## Exporting from Figma

- Select the icon layer as named by the designer ("Icons / zoom in" for example).
- At the bottom right, in the export panel, set the type to "SVG" and click the export button.

## Preparing to use in react

- Once exported, place the new icon in the `src/Icons/icons` folder.
- Make sure the icon is named using kebab case (zoom-in.svg), and matches the design system.
- Open the SVG in you code editor and remove the width and height properties from the <svg> tag.
- Set fill on the SVG element to `#4C4C4C`
- Remove all fills from the children of the SVG (path...etc...)
- Run the icon through https://jakearchibald.github.io/svgomg/ - it doesn't make a huge different in size but if we end up with lots of icons it could help.

## Adding to the UI library

- Open `src/Icon/Icons.tsx`
- Import the new icon like this: `import zoomInUrl, { ReactComponent as ZoomIn } from './icons/zoom-in.svg';`
- Duplicate one of the existing code chunks for an existing icon, name and export appropriately.
- Your new icon will be available in the `mechanical-wombat` npm package.
- You will also need to add your new component to the list inside `Icons.stories.tsx` for now until work is done to read these automatically
