DROP TABLE IF EXISTS enfermedades;

CREATE TABLE enfermedades (
  id INTEGER PRIMARY KEY AUTOINCREMENT,
  nombre TEXT NOT NULL,
  descripcion TEXT,
  gravedad TEXT DEFAULT 'Leve'
);

INSERT INTO enfermedades (nombre, descripcion, gravedad) VALUES
('Gripe', 'Infección respiratoria viral', 'Moderada');
