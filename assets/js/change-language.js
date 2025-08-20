export function changeLanguage(newLanguage, languages = {}) {
    if (!newLanguage || languages.length <= 0) {
        return null;
    }

    const texts = languages[newLanguage];
    const elements = document.querySelectorAll("[data-i18n]");
    if (!elements || elements.length <= 0) {
        return null;
    }
    elements.forEach(el => {
        const key = el.getAttribute("data-i18n");
        if (!texts[key]) {
            console.error(`Não foi encontrado a chave '${key} nos idiomas cadastrados.'`);
        }
        el.innerHTML = texts[key];
    });

    return true;
}