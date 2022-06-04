var CryptoJS = require('crypto-js');

export const EncryptData = (ValueToEncrypt: string, key: string) => {
  const encryptedValue = CryptoJS.AES.encrypt(ValueToEncrypt, key).toString();
  return encryptedValue;
};

export const DecryptData = (EncryptValue: string, key: string) => {
  const bytes = CryptoJS.AES.decrypt(EncryptValue, key);
  const decryptedValue = bytes.toString(CryptoJS.enc.Utf8);
  return decryptedValue;
};
