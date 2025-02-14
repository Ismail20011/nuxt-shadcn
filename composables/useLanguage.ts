export const useLanguage = () => {
    const {locale} = useI18n();
  
    const switchLanguage = (newLocale: string) => {
      locale.value = newLocale
    }
  
    return {
      switchLanguage
    }
  }