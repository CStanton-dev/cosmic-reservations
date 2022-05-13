import { useState } from "react";
import Image from "next/image";
import utilStyles from "../styles/utils.module.css";

export default function RoomSearch() {

  const [hits, setHits] = useState([]);

  const search = async (e) => {
    
    const q = e.target.value;

    if (q.length > 2) {
      const params = new URLSearchParams({ q })

      const res = await fetch('/api/search?' + params);

      const result = await res.json();
      console.log(result);
      setHits(result['rooms']);
    }
  };

  return (
    <div>
      <input 
        onChange={search}
        type="text" 
        placeholder="search rooms..."
        className={utilStyles.formControl}
      />
      <ul className={utilStyles.listGroup}>
        
        {hits.map((hit) => (
          <div className={utilStyles.card} key={hit.entityId}>
            <li className={utilStyles.listGroupItem}>
              <Image 
                src={hit.image}
                alt='Room'
                 width={150}
                height={150}
              />
              <div className={utilStyles.paddedDiv}>
                <div className={utilStyles.bold}>
                  <p>Floor:&nbsp;{hit.floor} | Beds:&nbsp;{hit.beds}</p>
                </div>
                {hit.description}
              </div>
            </li>
          </div>
        ))}

      </ul>
    </div>
  )
}