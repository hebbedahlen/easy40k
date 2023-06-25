import { downloadFile } from '@/app/drive'
import { factionFiles } from '../../model'
import { redirect } from 'next/navigation'

type FactionProps = {
  params: { faction: keyof typeof factionFiles }
}

export default async function Faction({ params }: FactionProps) {
  const fileId = factionFiles[params.faction]
  const { name, rule, strategems, units } = await downloadFile(fileId)

  async function createList(formData: FormData) {
    'use server'

    console.log('name', formData.get('name'))
    console.log('points', formData.get('points'))

    redirect(`lists/new/${params.faction}/${fileId}`)
  }

  return (
    <div>
      <h2 className="text-2xl">{name}</h2>

      <form action={createList} className="flex flex-col mb-8">
        <label htmlFor="list-name">Name</label>
        <input
          type="text"
          required
          id="name"
          name="name"
          className="text-red-500"
        />
        <label htmlFor="points">Points</label>
        <input
          type="number"
          required
          id="points"
          name="points"
          className="text-red-500"
        />
        <input
          type="submit"
          value="Create"
          className="border p-4  w-20 h-14 text-center cursor-pointer"
        />
      </form>
      <h3 className="text-2xl underline">Army rules</h3>
      {rule}

      <h3 className="text-2xl underline mt-8">Strategems</h3>
      {strategems.map((s) => (
        <div key={s.name} className="border p-4">
          <div>{s.name}</div>
          <div>{s.cost}</div>
          <div>{s.description}</div>
        </div>
      ))}
    </div>
  )
}
