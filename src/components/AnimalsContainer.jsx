import React, { useState, useEffect } from 'react';
import { AnimalDisplay } from './AnimalDisplay';
import { AnimalInput } from './AnimalInput';

export const AnimalsContainer = () => {
  const [animalsData, setAnimalsData] = useState(() => {
    const animalsFromLs = localStorage.getItem('animals');
    const storedAnimals = JSON.parse(animalsFromLs);
    return storedAnimals || [];
  });

  useEffect(() => {
    localStorage.setItem('animals', JSON.stringify(animalsData));
  }, [animalsData]);

  return (
    <div>
      <AnimalInput setAnimalsData={setAnimalsData} />
      <AnimalDisplay
        animalsData={animalsData}
        setAnimalsData={setAnimalsData}
      />
    </div>
  );
};
