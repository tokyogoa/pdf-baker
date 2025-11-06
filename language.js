// shared/language.js

/**
 * Initializes the language switcher functionality for a page.
 * @param {function(string): void} updateCallback - The function to call to update the page's text content.
 * It receives the current language code as an argument.
 */
export function initializeLanguageSwitcher(updateCallback) {
    const supportedLangs = ['en', 'ja', 'zh', 'ko'];
    let currentLanguage = 'en';

    const setLanguage = (lang, fromStorage = false) => {
        if (supportedLangs.includes(lang)) {
            currentLanguage = lang;
            const langSelector = document.getElementById('languageSelect');
            if (langSelector) {
                langSelector.value = currentLanguage;
            }
            updateCallback(currentLanguage);
            if (!fromStorage) {
                localStorage.setItem('pdfBakerLanguage', currentLanguage);
            }
        }
    };

    // 1. Check for saved language in localStorage
    const savedLanguage = localStorage.getItem('pdfBakerLanguage');
    if (savedLanguage && supportedLangs.includes(savedLanguage)) {
        setLanguage(savedLanguage, true);
    } else {
        // 2. Detect browser language
        const browserLang = navigator.language.split('-')[0];
        setLanguage(supportedLangs.includes(browserLang) ? browserLang : 'en');
    }

    // Add event listener for the language selector
    document.getElementById('languageSelect')?.addEventListener('change', (e) => setLanguage(e.target.value));
}