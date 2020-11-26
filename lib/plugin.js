((w) => {
  const moduleOptions = JSON.parse('<%= JSON.stringify(options) %>');
  const KEY = moduleOptions.key || '__nuxtScrollCoords';
  
  class SessionScrollSavior {
    constructor() {
      this._window = w;
      this._sStorage = this._window.sessionStorage;
    }

    getCoordsFromStorage() {
      let scrollCoords = null;
      try {
        scrollCoords = JSON.parse(this._sStorage.getItem(KEY));
      } catch (error) {
        console.error(error);
      }
      return scrollCoords;
    }

    saveCoordsToStorage({ pageXOffset, pageYOffset }) {
      try {
        this._sStorage.setItem(KEY, JSON.stringify({ pageXOffset, pageYOffset }));
      } catch (error) {
        console.error(error);
      }
    }

    setWindowScrollCoords({ pageXOffset, pageYOffset }) {
      this._window.scrollTo(pageXOffset, pageYOffset);
    }

    handleBeforeunload() {
      this._window.addEventListener('beforeunload', () => {
        this.saveCoordsToStorage({
          pageXOffset: this._window.pageXOffset || 0,
          pageYOffset: this._window.pageYOffset || 0,
        });
      });
    }

    handleLoad() {
      this._window.addEventListener('load', () => {
        const scrollCoords = this.getCoordsFromStorage();
        if (scrollCoords) this.setWindowScrollCoords(scrollCoords);
      });
    }

    init() {
      if ('pageXOffset' in this._window && 'pageYOffset' in this._window) {
        this.handleLoad();
        this.handleBeforeunload();
      }
    }
  }

  const sessionScrollSavior = new SessionScrollSavior();
  sessionScrollSavior.init();
})(window);