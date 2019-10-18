const getSession = (key: string) :string => {
  return sessionStorage.getItem(key);
};

const setSession = (key: string, value: string) :void => {
  sessionStorage.setItem(key, value);
};

const removeSession = (key: string) :void => {
  sessionStorage.removeItem(key); 
}

export {
  getSession,
  setSession,
  removeSession
};
