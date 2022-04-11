export default function useBEMNaming(baseName, state = {}) {
  let blockName = !!baseName ? baseName : this.name
    .replace(/([a-z])([A-Z])/g, "$1-$2")
    .toLowerCase();
  let baseModifiers = {};

  const getBlock = () => {
    return blockName;
  }

  const getElement = (el, extra) => {
    const modifiers = baseModifiers[el];
    let classes = [`${blockName}__${el}`];

    if (typeof(modifiers) === 'object') {
      Object.keys(modifiers).map(key => {
        return {
          modifier: key,
          active: modifiers[key](state, extra)
        }
      })
        .filter(m => m.active === true)
        .map(m => classes.push(`${blockName}__${el}--${m.modifier}`));
    }

    return classes.join(' ');
  }

  return {getBlock, getElement};
}
