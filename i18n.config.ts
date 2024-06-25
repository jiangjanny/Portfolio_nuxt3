import en from "./locales/en.json";
import tw from "./locales/zh.json";

export default defineI18nConfig(() => ({
    legacy: false,
    locale: "tw",
    messages: {
        en: en,
        tw: tw,
    },
}));
// export default defineI18nConfig(() => ({
//   legacy: false,
//   locale: "en",
//   messages: {
//     en: {
//       welcome: "Welcome004",
//     },
//     fr: {
//       welcome: "Bienvenue",
//     },
//   },
// }));
