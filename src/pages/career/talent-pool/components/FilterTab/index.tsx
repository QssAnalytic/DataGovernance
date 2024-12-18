import { ComboboxDemo } from '../CustomDropDown'

export const FilterTab = () => {
  const bootCamp = [
    {
      value: "intern",
      label: "Intern",
    },
    {
      value: "36",
      label: "36",
    },
    {
      value: "35",
      label: "35",
    },
    {
      value: "34",
      label: "34",
    },
    {
      value: "33",
      label: "33",
    },
    {
      value: "32",
      label: "32",
    },
  ]
  const status = [
    {
      value: "dataSpecialist",
      label: "Data specialist",
    },
    {
      value: "otherEmployment",
      label: "Other employment",
    },
    {
      value: "interested",
      label: "Interested",
    },
    {
      value: "notInterested",
      label: "Not interested",
    },
    {
      value: "urgent",
      label: "Urgent",
    },
    {
      value: "CVsent",
      label: "CV sent",
    },
  ]
  const level = [
    {
      value: "junior",
      label: "Junior",
    },
    {
      value: "mid",
      label: "Mid",
    },
    {
      value: "senior",
      label: "Senior",
    }
  ]
  const skills = [
    {
      value: "ml",
      label: "ML",
    },
    {
      value: "dataScience",
      label: "Data Science",
    },
    {
      value: "bi",
      label: "BI",
    }
  ]
  const sector = [
    {
      value: "telecommunication",
      label: "Telecommunication",
    },
    {
      value: "marketingOil",
      label: "Marketing oil",
    }
  ]
  const tools = [
    {
      value: "sql",
      label: "SQL",
    },
    {
      value: "python",
      label: "MPython",
    }
  ]
  return (
    <div className='flex gap-x-[16px]'>
      <ComboboxDemo frameworks={bootCamp} placeholder='Bootcamp №   ( 1-36 )' triggerWidth='294px'/>
      <ComboboxDemo frameworks={status} placeholder='Status' />
      <ComboboxDemo frameworks={level} placeholder='Level' />
      <ComboboxDemo frameworks={skills} placeholder='Skills' />
      <ComboboxDemo frameworks={sector} placeholder='Sector' />
      <ComboboxDemo frameworks={tools} placeholder='Tools' />
    </div>
  )
}
