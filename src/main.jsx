import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { FavoriteFood } from './FavoriteFood';
import { Greeting } from './Greeting';
import { Animals } from './Rendering';
import './index.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Greeting />
    <FavoriteFood />
    <Animals />
  </StrictMode>
);
