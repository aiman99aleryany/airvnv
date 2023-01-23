import { create } from 'zustand';
import { INIT_PROPERITES } from './initStoreProperties';

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
