type ListCreateProps = {
  params: { id: string }
}
export default function ListCreate({ params }: ListCreateProps) {
  console.log('params', params.id)

  return <h2>Create</h2>
}
