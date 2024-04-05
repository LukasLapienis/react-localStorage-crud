import React from 'react';
import { useState } from 'react';

export const AnimalEditModal = ({
  animalsData,
  setAnimalsData,
  selectedAnimalId,
  setIsModalOpen,
}) => {
  const animal = animalsData.find((el) => el.id === selectedAnimalId);

  const [groupEdit, setGroupEdit] = useState(animal.group);
  const [isInZoo, setIsInZoo] = useState(animal.isInZoo);
  const [nameEdit, setNameEdit] = useState(animal.name);
  const [weightEdit, setWeightEdit] = useState(animal.weight);

  const handleEdit = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
    setAnimalsData((prevAnimals) => {
      return prevAnimals.map((prevAnimal) => {
        if (prevAnimal.id === selectedAnimalId) {
          return {
            id: selectedAnimalId,
            name: nameEdit,
            group: groupEdit,
            weight: weightEdit,
            isInZoo: isInZoo,
          };
        }
        return prevAnimal;
      });
    });
    alert('updated');
  };

  const handleNameEdit = (e) => {
    setNameEdit(e.target.value.replace(/[^A-Za-z]/gi, ''));
  };

  const handleWeightEdit = (e) => {
    setWeightEdit(e.target.value);
  };

  const handleGroupEdit = (e) => {
    setGroupEdit(e.target.value);
  };

  const handleZooInputEdit = () => {
    setIsInZoo(isInZoo === 'Yes' ? 'No' : 'Yes');
  };

  const handleModalClose = (e) => {
    e.preventDefault();
    setIsModalOpen(false);
  };

  return (
    <div className="modal-overlay" onClick={handleModalClose}>
      <div className="modal" onClick={(e) => e.stopPropagation()}>
        <form>
          <label htmlFor="nameEdit">Animal Name:</label>
          <input
            type="text"
            value={nameEdit}
            name="nameEdit"
            onChange={handleNameEdit}
          />
          <label htmlFor="weightEdit">Animal Weight:</label>
          <input type="number" value={weightEdit} onChange={handleWeightEdit} />
          <select
            onChange={handleGroupEdit}
            value={groupEdit}
            className="groupSelectEdit"
          >
            <option value="bird"> Bird </option>
            <option value="mammal"> Mammal </option>
            <option value="reptile"> Reptile </option>
            <option value="amphibian"> Amphibian </option>
            <option value="fish"> Fish </option>
          </select>
          <label htmlFor="isInZooInput">Is In Zoo?</label>
          <input
            type="checkbox"
            name="isInZooInput"
            onChange={handleZooInputEdit}
            checked={isInZoo === 'Yes' ? true : false}
          />
          <button onClick={handleEdit}>Update</button>
          <button onClick={handleModalClose}>Close</button>
        </form>
      </div>
    </div>
  );
};
