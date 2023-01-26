import { create } from 'zustand';
import INIT_FILTERS from './INIT_FILTERS';

const useStoreFilters = create((set) => ({
    filters: INIT_FILTERS,
    addFilters: (newFilters) => {
        return set((state) => ({
            filters: { ...state.filters, ...newFilters },
        }));
    },

    clearFilters: () => {
        return set((state) => ({
            filters: { ...INIT_FILTERS },
        }));
    },
}));

export default useStoreFilters;
