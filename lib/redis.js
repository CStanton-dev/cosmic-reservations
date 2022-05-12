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
    description: { type: 'string', textSearch: true },
  },
  {
    dataStructure: 'JSON',
  }  
);

/**
 * Save a room to the database
 *
 * @export
 * @param {*} data
 * @return {*} 
 */
export async function addRoom(data) {
  await connect();

  const repository = client.fetchRepository(schema)

  const room = repository.createEntity(data);

  const id = await repository.save(room);
  return id;
}