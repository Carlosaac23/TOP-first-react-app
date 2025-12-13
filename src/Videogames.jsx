const videojuegos = [
  {
    id: 1,
    titulo: 'The Legend of Zelda: Breath of the Wild',
    plataforma: 'Nintendo Switch',
    genero: 'Aventura',
    precio: 59.99,
    disponible: true,
    lanzamiento: 2017,
    desarrollador: 'Nintendo',
  },
  {
    id: 2,
    titulo: 'God of War Ragnarök',
    plataforma: 'PlayStation 5',
    genero: 'Acción',
    precio: 69.99,
    disponible: true,
    lanzamiento: 2022,
    desarrollador: 'Santa Monica Studio',
  },
  {
    id: 3,
    titulo: 'Elden Ring',
    plataforma: 'PC',
    genero: 'RPG',
    precio: 59.99,
    disponible: false,
    lanzamiento: 2022,
    desarrollador: 'FromSoftware',
  },
  {
    id: 4,
    titulo: 'Red Dead Redemption 2',
    plataforma: 'PC',
    genero: 'Mundo Abierto',
    precio: 49.99,
    disponible: true,
    lanzamiento: 2018,
    desarrollador: 'Rockstar Games',
  },
  {
    id: 5,
    titulo: 'Cyberpunk 2077',
    plataforma: 'PC',
    genero: 'RPG',
    precio: 39.99,
    disponible: true,
    lanzamiento: 2020,
    desarrollador: 'CD Projekt Red',
  },
  {
    id: 6,
    titulo: 'Horizon Forbidden West',
    plataforma: 'PlayStation 5',
    genero: 'Aventura',
    precio: 69.99,
    disponible: false,
    lanzamiento: 2022,
    desarrollador: 'Guerrilla Games',
  },
  {
    id: 7,
    titulo: 'Minecraft',
    plataforma: 'Multiplataforma',
    genero: 'Sandbox',
    precio: 26.95,
    disponible: true,
    lanzamiento: 2011,
    desarrollador: 'Mojang',
  },
  {
    id: 8,
    titulo: 'The Witcher 3: Wild Hunt',
    plataforma: 'PC',
    genero: 'RPG',
    precio: 29.99,
    disponible: true,
    lanzamiento: 2015,
    desarrollador: 'CD Projekt Red',
  },
];

function Juego({ titulo, lanzamiento, precio, disponible }) {
  return (
    <div>
      <h3>{titulo}</h3>
      <p>Lanzamiento: {lanzamiento}</p>
      <p>Precio: ${precio}</p>
      <p>
        {disponible ? (
          <strong style={{ color: 'green' }}>Hay unidades disponibles</strong>
        ) : (
          <strong style={{ color: 'red' }}>No hay unidades disponibles</strong>
        )}
      </p>
    </div>
  );
}

export function Videogames() {
  return (
    <>
      <h2>Juegos:</h2>
      <ul>
        {videojuegos.map(({ id, titulo, lanzamiento, precio, disponible }) => {
          return (
            <Juego
              key={id}
              titulo={titulo}
              lanzamiento={lanzamiento}
              precio={precio}
              disponible={disponible}
            />
          );
        })}
      </ul>
    </>
  );
}
