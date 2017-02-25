import Icon from 'react-native-vector-icons/FontAwesome';

const replaceSuffixPattern = /--(active|big|small|very-big)/g;
const icons = {
  'home': [25],
  'cog': [25],
};

const iconsMap = {};
const iconsLoaded = new Promise((resolve, reject) => {
  new Promise.all(
    Object.keys(icons).map(iconName =>
      // IconName--suffix--other-suffix is just the mapping name in iconsMap
      Icon.getImageSource(
        iconName.replace(replaceSuffixPattern, ''),
        icons[iconName][0],
        icons[iconName][1]
      ))
    ).then(sources => {
      Object.keys(icons)
      .forEach((iconName, idx) => (iconsMap[iconName] = sources[idx]));

      // Call resolve (and we are done)
      resolve(true);
    }).catch(error => console.error(`Error occurred while loading icons. Error is: ${error}`));
});

export {
  iconsMap,
  iconsLoaded,
};
