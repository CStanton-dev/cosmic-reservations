import utilStyles from '../styles/Utils.module.css'

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
    <form role='form' onSubmit={handleSubmit}>
      <label htmlFor='floor'>Floor:&nbsp;</label>
      <input 
        className={utilStyles.formControl} 
        type="text" 
        id='floor' 
        name='floor' 
        placeholder='enter floor number...'
      />
      <label htmlFor='beds'>Bed(s):&nbsp;</label>
      <input 
        className={utilStyles.formControl}
        type="text"
        id='beds'
        name='beds' 
        placeholder='enter number of beds...'
      />
      <label htmlFor='image'>Image:&nbsp;</label>
      <input 
        className={utilStyles.formControl}
        type="text"
        id='image'
        name='image'
        placeholder='enter image url...'
      />
      <label htmlFor='description'>Description:&nbsp;</label>
      <textarea 
        className={utilStyles.formControl}
        type="text"
        id='description'
        name='description'
        placeholder='enter room description...'
      />

      <button className={utilStyles.btn} type='submit'>Submit</button>
    </form>
  )
}