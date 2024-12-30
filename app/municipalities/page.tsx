'use client';

import React from 'react';
import useSWR from 'swr';
import { Municipality } from './interfaces';
import MunicipalityCard from './MunicipalityCard';

export default function Municipalities() {
    const fetcher = async () => {
        const response = await fetch('https://api.carrismetropolitana.pt/municipalities');
        return await response.json();
    };

    const { data: municipalities, error, isLoading } = useSWR<Municipality[], Error>('/api/municipalities', fetcher);

    if (error) return <div>Failed to load ...</div>;
    if (isLoading) return <div>Loading ...</div>;
    if (!municipalities) return <div>Data error</div>;

    return (
        <div>
            {municipalities.map((municipality) => (
                <MunicipalityCard
                    key={municipality.id}
                    name={municipality.name}
                    district_name={municipality.district_name}
                />
            ))}
        </div>
    );
}
