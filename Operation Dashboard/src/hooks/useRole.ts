import { useLocalStorage } from './useLocalStorage';
import type { Role } from '../types/content';

export function useRole() {
  const [role, setRole] = useLocalStorage<Role | 'all'>('mcc-role', 'all');
  return { role, setRole };
}
