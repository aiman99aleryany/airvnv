import { create } from 'zustand';
import INIT_FILTERS from './initFilters';

const useStorePropertiesFilters = create((set) => ({
    filterProps: INIT_FILTERS,
    addFilterProps: (newFilterProps) => {
        return set((state) => ({
            filterProps: { ...state.filterProps, ...newFilterProps },
        }));
    },

    clearFilterProps: () => {
        return set((state) => ({
            filterProps: { ...INIT_FILTERS },
        }));
    },
}));

export default useStorePropertiesFilters;
