type PropertyTypes = 'Casa' | 'Departamento' | 'PH';

export interface Filters {
    ambientes?: number;
    types?: PropertyTypes[];
    cochera?: boolean;
    minPrice?: number;
    maxPrice?: number;
    bedrooms?: number;
    bathrooms?: number;
}