import { CurrencyCode } from "Models/CurrencyCodes";
import { getCurrencySymbol } from "Utils/CurrencyUtils";

export const useCurrencySymbol = (currency?: CurrencyCode) => {
  return getCurrencySymbol(currency);
};
