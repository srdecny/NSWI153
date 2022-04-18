/*
  Records table.
*/

CREATE TABLE record (
  id SERIAL PRIMARY KEY,
  url TEXT NOT NULL,
  boundary TEXT NOT NULL,
  periodicity INTEGER NOT NULL,
  label TEXT NOT NULL,
  active BOOLEAN NOT NULL,
  tags TEXT
);

-- test data
INSERT INTO record (url, boundary, periodicity, label, active, tags) VALUES ('http://www.example.com/', '/example.com/', 60, 'Example', TRUE, '');

/*
  Tags table.
*/
CREATE TABLE Tags (
  id SERIAL PRIMARY KEY,
  tag_name VARCHAR(64) NOT NULL
);

-- test data
INSERT INTO Tags (tag_name) VALUES ('best');
INSERT INTO Tags (tag_name) VALUES ('second');
INSERT INTO Tags (tag_name) VALUES ('third');

/*
  Tags to records relation table.
*/

CREATE TABLE TagsRecordsRelations(
  id SERIAL PRIMARY KEY,
  tag_id INT NOT NULL,
  record_id INT NOT NULL,
  FOREIGN KEY (tag_id)
    REFERENCES Tags(id),
  FOREIGN KEY (record_id)
    REFERENCES record(id)
);

-- test data
  INSERT INTO TagsRecordsRelations (tag_id, record_id) VALUES ( (SELECT id FROM Tags LIMIT 1), (SELECT id FROM record LIMIT 1) );

