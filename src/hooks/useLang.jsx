import React, { useEffect, useState } from 'react'

function useLang() {
    const [lang, setLang] = useState("");
    var storage

    if (typeof window !== 'undefined') {
      var storage = localStorage.getItem("lang");
    }

    useEffect(() => {
  
      if (storage == null || undefined) {
        setLang("");
      } else {
        setLang(storage);
        
      }
    }, [storage]);


    return {lang}
}

export default useLang