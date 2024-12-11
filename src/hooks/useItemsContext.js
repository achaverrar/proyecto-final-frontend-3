import { useContext } from 'react';
import { ItemsContext } from '../context/ItemsContext';

export function useItemsContext () {
  return useContext(ItemsContext);
}
