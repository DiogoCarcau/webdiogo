// components/MunicipalityCard/MunicipalityCard.tsx

import React from 'react';
import { Municipality } from './interfaces';

export default function MunicipalityCard({ id, district_name, name }: Municipality) {
    return (
        <div>
            <h3>{name}</h3>
            <p>District: {district_name}</p>
        </div>
    );
}
