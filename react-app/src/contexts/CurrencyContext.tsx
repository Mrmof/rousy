import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';

export interface Currency {
  code: string;
  symbol: string;
  name: string;
  exchangeRate: number; // Rate compared to KSh (base currency)
}

interface CurrencyContextType {
  currency: Currency;
  currencies: Currency[];
  convertPrice: (kshPrice: string | number) => string;
  convertToKsh: (price: string | number) => number;
  convertFromKsh: (kshAmount: number) => number;
  setCurrency: (currency: Currency) => void;
  isLoading: boolean;
}

const currencies: Currency[] = [
  { code: 'KSh', symbol: 'KSh', name: 'Kenyan Shilling', exchangeRate: 1 },
  { code: 'USD', symbol: '$', name: 'US Dollar', exchangeRate: 0.0075 }, // 1 USD = ~137 KSh
  { code: 'NGN', symbol: '₦', name: 'Nigerian Naira', exchangeRate: 1.12 }, // 1 NGN = ~0.16 KSh
  { code: 'GHS', symbol: '₵', name: 'Ghanaian Cedi', exchangeRate: 0.062 }, // 1 GHS = ~16 KSh
  { code: 'EUR', symbol: '€', name: 'Euro', exchangeRate: 0.006 }, // 1 EUR = ~167 KSh
  { code: 'GBP', symbol: '£', name: 'British Pound', exchangeRate: 0.0052 }, // 1 GBP = ~192 KSh
];

const CurrencyContext = createContext<CurrencyContextType | undefined>(undefined);

// Country to currency mapping
const countryToCurrency: Record<string, string> = {
  'US': 'USD',
  'NG': 'NGN', 
  'GH': 'GHS',
  'KE': 'KSh',
  'GB': 'GBP',
  'IE': 'EUR',
  'DE': 'EUR',
  'FR': 'EUR',
  'IT': 'EUR',
  'ES': 'EUR',
  'NL': 'EUR',
  'ZA': 'USD', // South Africa - use USD as fallback
  'TZ': 'KSh', // Tanzania - use KSh
  'UG': 'KSh', // Uganda - use KSh
};

export const CurrencyProvider = ({ children }: { children: ReactNode }) => {
  const [currency, setCurrencyState] = useState<Currency>(currencies[0]); // Default to KSh
  const [isLoading, setIsLoading] = useState(true);

  // Detect user location and set currency
  useEffect(() => {
    const detectCurrency = async () => {
      try {
        // First check localStorage for saved currency
        const savedCurrency = localStorage.getItem('lucy-herbal-currency');
        if (savedCurrency) {
          const found = currencies.find(c => c.code === savedCurrency);
          if (found) {
            setCurrencyState(found);
            setIsLoading(false);
            return;
          }
        }

        // Try to get location using IP geolocation
        const response = await fetch('https://ipapi.co/json/');
        const data = await response.json();
        
        if (data.country_code) {
          const currencyCode = countryToCurrency[data.country_code];
          if (currencyCode) {
            const foundCurrency = currencies.find(c => c.code === currencyCode);
            if (foundCurrency) {
              setCurrencyState(foundCurrency);
              localStorage.setItem('lucy-herbal-currency', foundCurrency.code);
            }
          }
        }
      } catch (error) {
        console.log('Could not detect location, using default currency');
      } finally {
        setIsLoading(false);
      }
    };

    detectCurrency();
  }, []);

  const setCurrency = (newCurrency: Currency) => {
    setCurrencyState(newCurrency);
    localStorage.setItem('lucy-herbal-currency', newCurrency.code);
  };

  // Helper function to extract numeric value from price string
  const extractNumericValue = (price: string | number): number => {
    if (typeof price === 'number') return price;
    
    // Remove all currency symbols and formatting
    const cleaned = price.replace(/[KSh$₦₵€£,\s]/g, '');
    const numericValue = parseFloat(cleaned);
    return isNaN(numericValue) ? 0 : numericValue;
  };

  // Convert any price to KSh (base currency)
  const convertToKsh = (price: string | number): number => {
    const numericValue = extractNumericValue(price);
    
    if (typeof price === 'string') {
      // Detect source currency from string
      if (price.includes('$')) 
      { 
        return numericValue / 0.07; // USD to KSh
      } else if (price.includes('₦')) {
        return numericValue / 6.1; // NGN to KSh
      } else if (price.includes('₵')) {
        return numericValue / 0.062; // GHS to KSh
      } else if (price.includes('€')) {
        return numericValue / 0.006; // EUR to KSh
      } else if (price.includes('£')) {
        return numericValue / 0.0052; // GBP to KSh
      }
    }
    
    // Default assume it's already in KSh
    return numericValue;
  };

  // Convert KSh amount to current currency
  const convertFromKsh = (kshAmount: number): number => {
    return kshAmount * currency.exchangeRate;
  };

  const convertPrice = (kshPrice: string | number): string => {
    let kshAmount: number;
    
    if (typeof kshPrice === 'number') {
      kshAmount = kshPrice;
    } else {
      // If it's already in the target currency format, extract and return as is
      if (currency.code !== 'KSh' && kshPrice.includes(currency.symbol)) {
        return kshPrice;
      }
      
      // Convert to KSh first if it's in a different currency
      kshAmount = convertToKsh(kshPrice);
    }
    
    // Convert to target currency
    const convertedAmount = convertFromKsh(kshAmount);
    
    // Format based on currency
    if (currency.code === 'KSh') {
      return `KSh ${Math.round(convertedAmount).toLocaleString()}`;
    } else if (currency.code === 'USD') {
      return `$${convertedAmount.toFixed(2)}`;
    } else if (currency.code === 'NGN') {
      return `₦${Math.round(convertedAmount).toLocaleString()}`;
    } else if (currency.code === 'GHS') {
      return `₵${convertedAmount.toFixed(2)}`;
    } else if (currency.code === 'EUR') {
      return `€${convertedAmount.toFixed(2)}`;
    } else if (currency.code === 'GBP') {
      return `£${convertedAmount.toFixed(2)}`;
    }
    
    return `${currency.symbol}${convertedAmount.toFixed(2)}`;
  };

  return (
    <CurrencyContext.Provider
      value={{
        currency,
        currencies,
        convertPrice,
        convertToKsh,
        convertFromKsh,
        setCurrency,
        isLoading,
      }}
    >
      {children}
    </CurrencyContext.Provider>
  );
};

export const useCurrency = () => {
  const context = useContext(CurrencyContext);
  if (context === undefined) {
    throw new Error('useCurrency must be used within a CurrencyProvider');
  }
  return context;
};