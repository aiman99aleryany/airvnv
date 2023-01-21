import { create } from 'zustand';
const INIT_FILTERS = {
    isFiltersApplied: false,
    location: {
        country: '',
        city: '',
    },
    startDate: '',
    endDate: '',
    details: {
        guests: 0,
        beds: 0,
        baths: 0,
        bedrooms: 0,
    },
};
const useStorePropertiesFilters = create((set) => ({
    filterProps: {
        isFiltersApplied: false,
        location: {
            country: '',
            city: '',
        },
        startDate: '',
        endDate: '',
        details: {
            guests: 0,
            beds: 0,
            baths: 0,
            bedrooms: 0,
        },
    },
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
