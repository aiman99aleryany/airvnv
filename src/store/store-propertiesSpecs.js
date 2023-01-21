import { create } from 'zustand';

const useStorePropertySpecs = create((set) => ({
    propertySpecs: {},
    addPropertySpecs: (newSpecs) => {
        return set((state) => ({
            propertySpecs: {
                ...state.propertySpecs,
                ...newSpecs,
            },
        }));
    },
}));

export default useStorePropertySpecs;
