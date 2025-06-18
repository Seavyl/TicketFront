import { useState, useEffect, useCallback } from 'react';
import apiClient from '../api/axiosInstance';

export function useAuth() {
  const [user, setUser]     = useState(() => {
    try { return JSON.parse(localStorage.getItem('user')); }
    catch { return null; }
  });
  const [loading, setLoading] = useState(false);
  const [error, setError]     = useState(null);

  // 1) Récupère l’utilisateur courant
  const fetchUser = useCallback(async () => {
    setLoading(true);
    try {
      const { data } = await apiClient.get('profile');
      setUser(data);
    } catch {
      setUser(null);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchUser();
  }, [fetchUser]);

  // 2) Login
  const login = useCallback(async (email, password) => {
    setError(null); setLoading(true);
    try {
      await apiClient.post('login', { email, password });
      const { data } = await apiClient.get('profile');
      localStorage.setItem('user', JSON.stringify(data));
      setUser(data);
      return data;
    } catch (err) {
      const msg = err.response?.data?.error || err.message;
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  }, []);

  // 3) Signup (POST /api/users via DataPersister)
  const signup = useCallback(async (name, address, email, password) => {
    setError(null); setLoading(true);
    try {
      await apiClient.post('users', {
        name,
        address,
        email,
        plainPassword: password
      });
      return login(email, password);
    } catch (err) {
      const msg =
        err.response?.data?.error ||
        JSON.stringify(err.response?.data?.errors) ||
        err.message;
      setError(msg);
      throw err;
    } finally {
      setLoading(false);
    }
  }, [login]);

  // 4) Logout
  const logout = useCallback(async () => {
    setLoading(true); setError(null);
    try {
      await apiClient.post('logout');
      localStorage.removeItem('user');
      setUser(null);
    } catch {
      setError('Erreur lors de la déconnexion');
    } finally {
      setLoading(false);
    }
  }, []);

  return { user, loading, error, login, signup, logout, fetchUser };
}