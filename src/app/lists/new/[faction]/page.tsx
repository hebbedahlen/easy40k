import { downloadFile } from '@/app/drive'
import { factionFiles } from '../../model'

type FactionProps = {
  params: { faction: keyof typeof factionFiles }
}

export default async function Faction({ params }: FactionProps) {
  const fileId = factionFiles[params.faction]
  const { units, name } = await downloadFile(fileId)

  return (
    <div>
      <h2 className="text-2xl">{name}</h2>

      <form action="" className="flex flex-col mb-8">
        <label htmlFor="list-name">Name</label>
        <input type="text" id="list-name" className=" text-red-500" />
        <label htmlFor="points">Points</label>
        <input type="number" id="points" className=" text-red-500" />
      </form>

      {units.map((unit) => (
        <div key={unit.NAME} className="border p-4">
          {unit.NAME}
        </div>
      ))}
    </div>
  )
}
