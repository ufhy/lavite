import CryptoES from 'crypto-es';

export const decrypt = function (payload: string) {
    const parser = CryptoES.enc.Base64.parse(payload);
    const parserToString = parser.toString(CryptoES.enc.Utf8);
    const parserToJson = JSON.parse(parserToString);
    const iv = CryptoES.enc.Base64.parse(parserToJson.iv);

    const tobungkale = CryptoES.AES.decrypt(parserToJson.value,  CryptoES.enc.Base64.parse(import.meta.env.VITE_APP_KEY), {
        iv : iv,
        mode: CryptoES.mode.CBC,
        padding: CryptoES.pad.Pkcs7
    });
    return CryptoES.enc.Utf8.stringify(tobungkale);
};

export const encrypt = function (payload: any) {
    const encrypt = CryptoES.AES.encrypt(payload.toString(), import.meta.env.VITE_APP_KEY);
    return encrypt.toString();
};
