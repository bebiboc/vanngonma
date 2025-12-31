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

// Update an existing phone number (replace old with new)
app.post("/api/update-contact", async (req, res) => {
  console.log("POST /api/update-contact body:", req.body);

  const { oldPhone, newPhone } = req.body || {};
  if (!oldPhone || !newPhone) {
    return res.status(400).json({ ok: false, message: "oldPhone and newPhone required" });
  }

  try {
    ensureDataFile();
    const raw = await fsPromises.readFile(DATA_FILE, "utf8");
    let list = JSON.parse(raw || "[]");
    
    // Find the old phone entry
    const oldIndex = list.findIndex(entry => entry.phone === oldPhone);
    
    // Check if new phone already exists (and it's not the same entry)
    const newIndex = list.findIndex(entry => entry.phone === newPhone);
    if (newIndex !== -1 && newIndex !== oldIndex) {
      // New phone already exists as a different entry, just remove the old one
      if (oldIndex !== -1) {
        list.splice(oldIndex, 1);
      }
      await fsPromises.writeFile(DATA_FILE, JSON.stringify(list, null, 2));
      return res.json({ ok: true, message: "updated (new phone already existed)" });
    }
    
    if (oldIndex !== -1) {
      // Update only the phone number, preserve source and ts
      list[oldIndex].phone = newPhone;
    } else {
      // Old phone not found, add as new entry
      const entry = { phone: newPhone, source: "updated", ts: new Date().toISOString() };
      list.push(entry);
    }
    
    await fsPromises.writeFile(DATA_FILE, JSON.stringify(list, null, 2));
    return res.json({ ok: true });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ ok: false, message: "failed to update" });
  }
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Contacts server listening on http://localhost:${PORT}`);
});

// Endpoint to view all contacts
app.get("/api/contacts", async (req, res) => {
  try {
    ensureDataFile();
    const raw = await fsPromises.readFile(DATA_FILE, "utf8");
    const list = JSON.parse(raw || "[]");
    res.json(list);
  } catch (err) {
    console.error(err);
    res.status(500).json({ ok: false, message: "failed to read contacts" });
  }
});
