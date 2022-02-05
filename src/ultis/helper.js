const isMobileByWatchMedia = () =>
  window.matchMedia("(max-width: 577px)").matches;

export { isMobileByWatchMedia };
