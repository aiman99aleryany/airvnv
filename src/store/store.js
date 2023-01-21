import { create } from 'zustand';
import { INIT_PROPERITES } from './initStoreProperties';

// price convert
// const convertPrice = (priceInUSD, option)  => {
//     const CURRENCIES = {
//         TUR: 18.5,
//         RON: 4.6,
//     }

//     return CURRENCIES[option] * priceInUSD
// }

const useStoreProperties = create((set) => ({
    properties: INIT_PROPERITES,
    addProperty: (newProperty) => {
        return set((state) => ({
            properties: [...state.properties, newProperty],
        }));
    },
    deleteProperty: (propertyId) => {
        return set((state) => ({
            properties: state.properties.filter(({ id }) => id !== propertyId),
        }));
    },
    toggleIsEdited: (propertyId) => {
        return set((state) => ({
            properties: state.properties.map((property) =>
                property.id === propertyId
                    ? { ...property, isEdited: !property.isEdited }
                    : property
            ),
        }));
    },
    editProperty: (propertyId, editedProperty) => {
        return set((state) => ({
            properties: state.properties.map((property) =>
                property.id === propertyId
                    ? { ...property, ...editedProperty }
                    : property
            ),
        }));
    },
}));

export default useStoreProperties;
