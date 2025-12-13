import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FavoriteFood } from './FavoriteFood';
import { Greeting } from './Greeting';
import { TodoList } from './Keys';
import { Animals } from './Rendering';
import { CarBrands } from './Rendering2';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <FavoriteFood />
    <Animals />
    <CarBrands />
    <TodoList />
  </StrictMode>
);
