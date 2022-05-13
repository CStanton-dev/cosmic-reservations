import { Client, Entity, Schema } from 'redis-om';

const client = new Client();

/** Opens a Redis connection unless the connection is already open */
async function connect() {
  if (!client.isOpen()) {
    await client.open(process.env.REDIS_URL);
  }
}

class Room extends Entity {}
let schema = new Schema(
  Room,
  {
    floor: { type: 'string' },
    beds: { type: 'string' },
    image: { type: 'string' },
    description: { type: 'text', textSearch: true },
  },
  {
    dataStructure: 'JSON',
  }  
);

/** Save a room to the database */
export async function addRoom(data) {
  await connect();

  const repository = client.fetchRepository(schema);

  const room = repository.createEntity(data);

  const id = await repository.save(room);
  return id;
}

/** Creating an index to search the database */
export async function createIndex() {
  await connect();

  const repository = client.fetchRepository(schema);
  await repository.createIndex();
}

/** Searching the database */
export async function searchRooms(q) {
  await connect();

  const repository = client.fetchRepository(schema);
  
  const rooms = await repository.search()
    .where('floor').eq(q)
    .or('beds').eq(q)
    .or('description').matches(q)
    .return.all();

  return rooms;  
}