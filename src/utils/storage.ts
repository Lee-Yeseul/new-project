type Data = {
  [key: string]: string;
};

type StoreType = "sessionStorage" | "localStorage";

export const storage = (type: StoreType) => {
  const store = type === "sessionStorage" ? sessionStorage : localStorage;
  return {
    get: (key: string) => {
      store.getItem(key);
    },
    set: (data: Data) => {
      for (const key in data) {
        store.setItem(key, data[key]);
      }
    },
    delete: (val: string | Data) => {
      if (typeof val === "string") {
        return store.removeItem(val);
      }
      for (const key in val) {
        store.removeItem(key);
      }
    },
    clear: () => {
      store.clear();
    },
  };
};
