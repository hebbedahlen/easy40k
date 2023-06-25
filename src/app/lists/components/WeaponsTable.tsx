import { WEAPON_TYPES, Weapon } from '../model'

type WeaponsTableProps = {
  weapons: Weapon[]
  weaponType: WEAPON_TYPES
}

export function WeaponsTable({ weaponType, weapons }: WeaponsTableProps) {
  return (
    <table className="mt-4 table-fixed w-full">
      <thead>
        <tr className="border-b">
          <td className="w-1/4">{weaponType}</td>
          <td className="w">Range</td>
          <td className="w">A</td>
          <td className="w">
            {weaponType === WEAPON_TYPES.MELEE_WEAPONS ? 'WS' : 'BS'}
          </td>
          <td className="w">S</td>
          <td className="w">AP</td>
          <td className="w">D</td>
        </tr>
      </thead>
      <tbody>
        {weapons.map(({ WeaponName, Range, A, WeaponSkill, S, AP, D }) => (
          <tr className="" key={WeaponName}>
            <td>{WeaponName}</td>
            <td>{Range}</td>
            <td>{A}</td>
            <td>{WeaponSkill}</td>
            <td>{S}</td>
            <td>{AP}</td>
            <td>{D}</td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
