const mainlocalStorage = {
  getItem: (key: string) => {
    const result = window.localStorage.getItem(`@insany-${key}`);

    if(!result) {
      return null;
    }

    return JSON.parse(result);
  },
  setItem: (key: string, value: any) => {
    const result = window.localStorage.setItem(`@insany-${key}`, JSON.stringify(value));
    return result;
  },
  removeItem: (key: string) => {
    const result = window.localStorage.removeItem(`@insany-${key}`);
    return result;
  },
  clear: () => {
    const result = window.localStorage.clear();
    return result;
  },
};

export default mainlocalStorage;