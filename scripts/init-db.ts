import initSqlJs from "sql.js";
import fs from "fs";
import path from "path";

const dbPath = path.join(process.cwd(), "fleetflow.db");

async function initializeDatabase() {
  const SQL = await initSqlJs();
  let db;

  // If DB already exists → load it
  if (fs.existsSync(dbPath)) {
    const fileBuffer = fs.readFileSync(dbPath);
    db = new SQL.Database(fileBuffer);
  } else {
    // Otherwise create new DB
    db = new SQL.Database();

    db.run(`
      CREATE TABLE users (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        email TEXT UNIQUE,
        password TEXT,
        role TEXT
      );
    `);

    console.log("Database & tables created.");
  }

  // Save database file
  const data = db.export();
  fs.writeFileSync(dbPath, Buffer.from(data));

  console.log("Database initialized at:", dbPath);
}

initializeDatabase();