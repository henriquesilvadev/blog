import React from 'react'

const Search = () => {

  return (
    <section css={{ width: '40%' }}>
      <form css={{ backgroundColor: '#fff', padding: '10px' }}>
        <div>
          <input css={{ border: '1px solid' }}
            placeholder="Encontre o que procura"
            name="SEARCH"
            type="text"            
          />
          <button style={{ backgroundColor: '#000', color: '#fff', padding: '1rem' }} type="submit">Encontrar</button>
        </div>
      </form>
    </section>
  );
};

export default Search;