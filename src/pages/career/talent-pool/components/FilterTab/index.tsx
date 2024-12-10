import React from 'react'
import { ComboboxDemo } from '../CustomDropDown'

export const FilterTab = () => {
    const frameworks = [
        {
          value: "next.js",
          label: "Next.js",
        },
        {
          value: "sveltekit",
          label: "SvelteKit",
        },
        {
          value: "nuxt.js",
          label: "Nuxt.js",
        },
        {
          value: "remix",
          label: "Remix",
        },
        {
          value: "astro",
          label: "Astro",
        },
      ]
  return (
    <div className='flex gap-x-[16px]'>
        <ComboboxDemo frameworks={frameworks}/>
    </div>
  )
}
