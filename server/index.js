import express from "express";
import path from "path";
import fs from "fs";
import fsPromises from "fs/promises";
import cors from "cors";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

const DATA_DIR = path.join(__dirname, "data");
const DATA_FILE = path.join(DATA_DIR, "contacts.json");

function ensureDataFile() {
  if (!fs.existsSync(DATA_DIR)) fs.mkdirSync(DATA_DIR, { recursive: true });
  if (!fs.existsSync(DATA_FILE)) fs.writeFileSync(DATA_FILE, JSON.stringify([]));
}

app.post("/api/save-contact", async (req, res) => {
  console.log("POST /api/save-contact body:", req.body);

  const { phone, source } = req.body || {};
  if (!phone) return res.status(400).json({ ok: false, message: "phone required" });

  try {
    ensureDataFile();
    const raw = await fsPromises.readFile(DATA_FILE, "utf8");
    const list = JSON.parse(raw || "[]");
    // Only add if phone does not already exist
    if (list.some(entry => entry.phone === phone)) {
      return res.json({ ok: true, duplicate: true });
    }
    const entry = { phone: phone || null, source: source || "unknown", ts: new Date().toISOString() };
    list.push(entry);
    await fsPromises.writeFile(DATA_FILE, JSON.stringify(list, null, 2));
    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, message: "failed to save" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Contacts server listening on http://localhost:${PORT}`);
});
