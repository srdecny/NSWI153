/*
  Records table.
*/

CREATE TABLE records (
  id SERIAL PRIMARY KEY,
  url TEXT NOT NULL,
  boundary TEXT NOT NULL,
  periodicity INTEGER NOT NULL,
  label TEXT NOT NULL,
  active BOOLEAN NOT NULL,
  tags TEXT
);

-- test data
INSERT INTO records (url, boundary, periodicity, label, active, tags) VALUES ('http://www.example.com/', '/example.com/', 60, 'Example', TRUE, '');

/*
  Tags table.
*/
CREATE TABLE tags (
  id SERIAL PRIMARY KEY,
  tag_name VARCHAR(64) NOT NULL
);

-- test data
INSERT INTO tags (tag_name) VALUES ('best');
INSERT INTO tags (tag_name) VALUES ('second');
INSERT INTO tags (tag_name) VALUES ('third');

/*
  Tags to records relation table.
*/

CREATE TABLE tags_records_relations(
  id SERIAL PRIMARY KEY,
  tag_id INT NOT NULL,
  record_id INT NOT NULL,
  FOREIGN KEY (tag_id)
    REFERENCES tags(id),
  FOREIGN KEY (record_id)
    REFERENCES records(id)
);

-- test data
INSERT INTO tags_records_relations (tag_id, record_id) VALUES ( (SELECT id FROM tags LIMIT 1), (SELECT id FROM records LIMIT 1) );

