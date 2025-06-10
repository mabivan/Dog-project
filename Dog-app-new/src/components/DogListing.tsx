import React from 'react';
import DogCard from './DogCard';
import { useSearch } from './SearchContext';

type Dog = {
  id: string;
  name: string;
  breed: string;
  age: number;
  image: string;
  price: number;
};

interface DogListingProps {
  dogs: Dog[];
}

const DogListing: React.FC<DogListingProps> = ({ dogs }) => {
  const { searchTerm } = useSearch();

  const filteredDogs = dogs.filter((dog) =>
    dog.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    dog.breed.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <div className="row">
        {filteredDogs.map((dog) => (
          <div key={dog.id} className="col-12 col-sm-6 col-md-4 col-lg-3 mb-4">
            <DogCard dog={dog} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default DogListing;


