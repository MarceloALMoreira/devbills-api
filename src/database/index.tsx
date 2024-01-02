import mongosse from 'mongoose';

export async function setupMongo(): Promise<void> {
  try {
    if (mongosse.connection.readyState == 1) {
      return;
    }
    console.log(process.env.MONGO_URL)
    console.log('🎲 Connecting to DB...');
    await mongosse.connect(process.env.MONGO_URL as string);
    console.log('✔ DB Connecting');
  } catch (error) {
    throw new Error('❌ DB not connected.');
  }
}
