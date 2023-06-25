var CryptoJS = require('crypto-js');

export const EncryptData = (key: string | undefined, DataToEncrypt: string) => {
  if (!key) {
    return;
  }
  const encryptedValue = CryptoJS.AES.encrypt(DataToEncrypt, key).toString();
  return encryptedValue;
};

export const DecryptData = (key: string | undefined, EncryptData: string) => {
  if (!key) {
    return;
  }
  const bytes = CryptoJS.AES.decrypt(EncryptData, key);
  const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedValue;
};
