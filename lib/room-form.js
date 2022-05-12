export default function RoomForm() {
  const handleSubmit = async (evt) => {
    evt.preventDefault();

    const form = new FormData(evt.target);
    const formData = Object.fromEntries(form.entries());

    console.log('Form Data: ', formData);
    
    // API endpoint request
    const res = await fetch('/api/rooms/', {
      body: JSON.stringify(formData),
      headers: {
        'Content-Type': 'application/json',
      },
      method: 'POST',
    });

    const result = await res.json();
    console.log('Result: ', result);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor='floor'>Floor:&nbsp;</label>
      <input type="text" id='floor' name='floor' />
      <label htmlFor='beds'>Bed(s):&nbsp;</label>
      <input type="text" id='beds' name='beds' />
      <label htmlFor='image'>Image:&nbsp;</label>
      <input type="text" id='image' name='image'/>
      <label htmlFor='description'>Description:&nbsp;</label>
      <textarea type="text" id='description' name='description' />

      <button type='submit'>Submit</button>
    </form>
  )
}