
import { useState, useEffect, useCallback } from 'react';
import { RatesResponse } from '../types/rates';

export const useRates = () => {
  const [rates, setRates] = useState<Record<string, number>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchRates = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(
        'https://open.er-api.com/v6/latest/KZT'
      );

      if (!response.ok) {
        throw new Error('API қатесі');
      }

      const data: RatesResponse = await response.json();

      if (data.result !== 'success') {
        throw new Error('Валюта бағамын алу мүмкін болмады');
      }

      setRates(data.rates);
    } catch (err) {
      setError(
        err instanceof Error
          ? err.message
          : 'Қате пайда болды'
      );
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchRates();
  }, [fetchRates]);

  return {
    rates,
    loading,
    error,
    refresh: fetchRates,
  };
};
