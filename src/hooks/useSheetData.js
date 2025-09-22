import { useState, useEffect } from 'react';

// Asegúrate de que esta URL sea la de tu última implementación del script
const SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzjfrf3vNEQVN1elP7KT_L5nzD0e1sIGBP2ohDlgFOXKouFgpSU9ty3qgzOslJkdIsTlA/exec';

export const useSheetData = () => {
  const [data, setData] = useState({ services: [], packages: [] });
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Usamos fetch, el estándar moderno para peticiones web
        const response = await fetch(SCRIPT_URL);
        if (!response.ok) {
          throw new Error(`Error de red: ${response.status}`);
        }
        const result = await response.json();
        
        if (result.success) {
          setData({
            services: result.data.services || [],
            packages: result.data.packages || []
          });
        } else {
          throw new Error(result.message || 'Error en la respuesta del script.');
        }

      } catch (e) {
        setError(e.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return { ...data, loading, error };
};