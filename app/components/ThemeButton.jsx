import { useEffect, useState } from "react";


const ThemeButton = () => {
  const [darkTheme, setDarkTheme] = useState(true);

  const handleChangeTheme = (e)=>{
        e.stopPropagation(); 
        if(darkTheme){
            window.localStorage.theme = 'light'
        }else{
            window.localStorage.theme = 'dark'
        }
      setDarkTheme((theme)=> !theme);
  }
  useEffect(() => {
      if(!window.localStorage.getItem("theme")){
         window.localStorage.setItem("theme","dark");
      }
    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
        document.documentElement.classList.add('dark')
      } else {
        document.documentElement.classList.remove('dark')
        setDarkTheme(false);
      }
  }, [darkTheme])
  
  return (
    <div 
      className='flex justify-center items-center w-8 h-8 '
      onClick={handleChangeTheme}
    >
          {darkTheme
          ?<Sun />
          : <Moon />}
        </div>
  )
}


const Moon = ()=>(
    <div className='w-5 h-5'>
      <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-moon-stars-fill" viewBox="0 0 16 16"> <path d="M6 .278a.768.768 0 0 1 .08.858 7.208 7.208 0 0 0-.878 3.46c0 4.021 3.278 7.277 7.318 7.277.527 0 1.04-.055 1.533-.16a.787.787 0 0 1 .81.316.733.733 0 0 1-.031.893A8.349 8.349 0 0 1 8.344 16C3.734 16 0 12.286 0 7.71 0 4.266 2.114 1.312 5.124.06A.752.752 0 0 1 6 .278z"/> <path d="M10.794 3.148a.217.217 0 0 1 .412 0l.387 1.162c.173.518.579.924 1.097 1.097l1.162.387a.217.217 0 0 1 0 .412l-1.162.387a1.734 1.734 0 0 0-1.097 1.097l-.387 1.162a.217.217 0 0 1-.412 0l-.387-1.162A1.734 1.734 0 0 0 9.31 6.593l-1.162-.387a.217.217 0 0 1 0-.412l1.162-.387a1.734 1.734 0 0 0 1.097-1.097l.387-1.162zM13.863.099a.145.145 0 0 1 .274 0l.258.774c.115.346.386.617.732.732l.774.258a.145.145 0 0 1 0 .274l-.774.258a1.156 1.156 0 0 0-.732.732l-.258.774a.145.145 0 0 1-.274 0l-.258-.774a1.156 1.156 0 0 0-.732-.732l-.774-.258a.145.145 0 0 1 0-.274l.774-.258c.346-.115.617-.386.732-.732L13.863.1z"/> </svg>
      </div>
);

const Sun = ()=> (
   <div className='w-8 h-8 fill-white'>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256"><rect width="256" height="256" fill="none"/><circle cx="128" cy="128" r="68"/><path d="M128,44a8,8,0,0,0,8-8V28a8,8,0,0,0-16,0v8A8,8,0,0,0,128,44Z"/><path d="M57.3,68.6a8.1,8.1,0,0,0,11.3,0,8,8,0,0,0,0-11.3l-5.7-5.7A8,8,0,0,0,51.6,62.9Z"/><path d="M36,120H28a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"/><path d="M57.3,187.4l-5.7,5.7a8,8,0,0,0,0,11.3,8.3,8.3,0,0,0,5.7,2.3,8,8,0,0,0,5.6-2.3l5.7-5.7a8,8,0,0,0-11.3-11.3Z"/><path d="M128,212a8,8,0,0,0-8,8v8a8,8,0,0,0,16,0v-8A8,8,0,0,0,128,212Z"/><path d="M198.7,187.4a8,8,0,0,0-11.3,11.3l5.7,5.7a8,8,0,0,0,5.6,2.3,8.3,8.3,0,0,0,5.7-2.3,8,8,0,0,0,0-11.3Z"/><path d="M228,120h-8a8,8,0,0,0,0,16h8a8,8,0,0,0,0-16Z"/><path d="M193.1,70.9a7.8,7.8,0,0,0,5.6-2.3l5.7-5.7a8,8,0,1,0-11.3-11.3l-5.7,5.7a8,8,0,0,0,0,11.3A7.8,7.8,0,0,0,193.1,70.9Z"/></svg>
       </div>
)

export default ThemeButton