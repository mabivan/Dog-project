import React, { useEffect, useState } from 'react';
import './Breeds.css';
import { useSearch } from '../components/SearchContext';

type Breed = {
  id: number;
  name: string;
  temperament?: string;
  life_span?: string;
  image?: {
    url: string;
  };
  reference_image_id?: string;
};

type BreedWithPrice = Breed & { price: number };

const Breeds: React.FC = () => {
  const [breeds, setBreeds] = useState<BreedWithPrice[]>([]);
  const { searchTerm } = useSearch();
  const apiKey = import.meta.env.VITE_DOG_API_KEY;

  useEffect(() => {
    fetch('https://api.thedogapi.com/v1/breeds', {
      headers: {
        'x-api-key': apiKey,
      },
    })
      .then((res) => res.json())
      .then((data: Breed[]) => {
        const withPrices: BreedWithPrice[] = data
          .filter((breed) => breed.image?.url || breed.reference_image_id)  
          .map((breed) => ({
            ...breed,
            price: Math.floor(Math.random() * 2000 + 500), 
          }));
        setBreeds(withPrices);
      })
      .catch((err) => console.error('Error fetching breeds:', err));
  }, [apiKey]);

  

// filtering by  name, breeds and temparament in the searchTerm
  
const filteredBreeds = breeds.filter(breed => {
  const search = searchTerm.toLowerCase();

  const nameMatch = breed.name.toLowerCase().includes(search);
  const temperamentMatch = breed.temperament
    ? breed.temperament.toLowerCase().includes(search)
    : false;
  const lifeSpanMatch = breed.life_span
    ? breed.life_span.toLowerCase().includes(search)
    : false;
  
  return nameMatch || temperamentMatch || lifeSpanMatch ;
});
  return (
    <div className="breeds-page">
      <h2>All Dog Breeds</h2>
      <div className="breeds-container">
        {filteredBreeds.map((breed) => {
          const imageUrl =
            breed.image?.url ||
            (breed.reference_image_id
               ? `https://cdn2.thedogapi.com/images/${breed.reference_image_id}.jpg`
              : null);

          return (
            <div key={breed.id} className="breed-card">
              <img src={imageUrl!} alt={breed.name} />
              <div className="breed-info">
                <h3>{breed.name}</h3>
                {breed.temperament && (
                  <p><strong>Temperament:</strong> {breed.temperament}</p>
                )}
                {breed.life_span && (
                  <p><strong>Life Span:</strong> {breed.life_span}</p>
                )}
                <p><strong>Price:</strong> ${breed.price}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Breeds;









