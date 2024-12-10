// MunicipalityCard.tsx
import React from 'react';

interface MunicipalityCardProps {
    name: string;
    district_name: string;
}

const MunicipalityCard: React.FC<MunicipalityCardProps> = ({ name, district_name }) => {
    return (
        <div>
            <h3>{name}</h3>
            <p>{district_name}</p>
        </div>
    );
};

export default MunicipalityCard;
