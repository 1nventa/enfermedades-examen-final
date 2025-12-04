/* ------------------------------
   1. Eliminación previa
   ------------------------------ */
DROP TABLE IF EXISTS enfermedades;


/* ------------------------------
   2. Creación de tabla principal
   ------------------------------ */
CREATE TABLE enfermedades (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  descripcion TEXT,
  gravedad TEXT CHECK(gravedad IN ('Leve', 'Moderada', 'Alta')),
  fecha_registro TEXT DEFAULT CURRENT_TIMESTAMP
);


/* ------------------------------
   3. Inserción de datos iniciales
   ------------------------------ */

INSERT INTO enfermedades (nombre, descripcion, gravedad) VALUES
('Gripe común', 'Infección viral que afecta nariz y garganta.', 'Leve'),
('COVID-19', 'Enfermedad respiratoria causada por SARS-CoV-2.', 'Alta'),
('Dengue', 'Enfermedad viral transmitida por mosquitos.', 'Moderada'),
('Varicela', 'Infección viral que produce erupciones cutáneas.', 'Leve'),
('Malaria', 'Enfermedad parasitaria transmitida por mosquito Anopheles.', 'Alta');


/* ------------------------------
   4. Consultas de prueba
   ------------------------------ */

-- Obtener todas las enfermedades
SELECT * FROM enfermedades;

-- Obtener solo enfermedades de gravedad alta
SELECT * FROM enfermedades WHERE gravedad = 'Alta';

-- Buscar por nombre (ejemplo)
SELECT * FROM enfermedades WHERE nombre LIKE '%COVID%';

-- Actualizar ejemplo
UPDATE enfermedades
SET gravedad = 'Moderada'
WHERE nombre = 'Gripe común';

-- Eliminar ejemplo
DELETE FROM enfermedades WHERE nombre = 'Varicela';