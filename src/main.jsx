import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Buttons from './Button';
import ButtonClick from './Button2';
import { FavoriteFood } from './FavoriteFood';
import { Greeting } from './Greeting';
import './index.css';
import { TodoList } from './Keys';
import Person from './Person';
import { Animals } from './Rendering';
import { CarBrands } from './Rendering2';
import { Videogames } from './Videogames';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <FavoriteFood />
    <Animals />
    <CarBrands />
    <TodoList />
    <Videogames />

    <Buttons />
    <ButtonClick />

    <Person />
  </StrictMode>
);
