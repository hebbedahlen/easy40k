import { downloadFile } from '@/app/drive'
import { factionFiles } from '../../model'

type FactionProps = {
  params: { faction: keyof typeof factionFiles }
}

export default async function Faction({ params }: FactionProps) {
  const fileId = factionFiles[params.faction]
  const faction = await downloadFile(fileId)

  return <div>Create faction: {faction.name}</div>
}
