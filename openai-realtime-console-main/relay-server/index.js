import { RealtimeRelay } from './lib/relay.js';
import dotenv from 'dotenv';

import admin from 'firebase-admin';
import { readFile } from 'fs/promises';

dotenv.config({ override: true });

const OPENAI_API_KEY = process.env.OPENAI_API_KEY;


const serviceAccount = JSON.parse(
  await readFile('./serviceAccountKey.json', 'utf8')
);
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
});

const db = admin.firestore();

if (!OPENAI_API_KEY) {
  console.error(
    `Environment variable "OPENAI_API_KEY" is required.\n` +
      `Please set it in your .env file.`
  );
  process.exit(1);
}

const PORT = parseInt(process.env.PORT) || 8081;

const relay = new RealtimeRelay(OPENAI_API_KEY);
relay.listen(PORT);
