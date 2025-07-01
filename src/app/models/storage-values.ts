export function getLocalStoreage(key: string, defaultValue: unknown) {
  const consentValue = localStorage.getItem(key);

  if (consentValue !== null && consentValue !== undefined) {
    try {
      return JSON.parse(consentValue);
    } catch (error) {
      console.error(
        `Erro ao fazer o parsing do JSON para o key"${key}":`,
        error
      );
      return defaultValue;
    }
  } else {
    return defaultValue;
  }
}

export function setLocalStorage(key: string, value: unknown) {
  localStorage.setItem(key, JSON.stringify(value));
}
