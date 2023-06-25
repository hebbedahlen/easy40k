// const blackTemplars: Faction

//  const rangedWeapons = BT.units.map(unit )

//  ['RANGED WEAPONS']?.map((w) => Object.entries(w))

import { Unit, WEAPON_TYPES } from '../model'
import { WeaponsTable } from './WeaponsTable'

type UnitProps = {
  unit: Unit
}
function Unit({ unit }: UnitProps) {
  const { NAME, M, T, SV, W, LD, OC, ABILITIES } = unit
  const showAbilities =
    ABILITIES != null &&
    (ABILITIES?.['CORE ABILITIES']?.length > 0 ||
      ABILITIES?.['FACTION ABILITIES'].length > 0 ||
      ABILITIES?.['OTHER ABILITIES'].length > 0)

  return (
    <div className="border mb-4 flex">
      <article className={`${showAbilities ? 'w-9/12' : 'w-full'} p-4`}>
        <h3 className="text-xl mb-4">{NAME}</h3>
        <ul className="flex justify-between">
          <li className="border p-2">M: {M}</li>
          <li className="border p-2">T: {T}</li>
          <li className="border p-2">SV: {SV}</li>
          <li className="border p-2">W: {W}</li>
          <li className="border p-2">LD: {LD}</li>
          <li className="border p-2">OC: {OC}</li>
        </ul>

        <WeaponsTable
          weaponType={WEAPON_TYPES.RANGED_WEAPONS}
          weapons={unit['RANGED WEAPONS'] || []}
        />
        <WeaponsTable
          weaponType={WEAPON_TYPES.MELEE_WEAPONS}
          weapons={unit['MELEE WEAPONS'] || []}
        />
      </article>
      {showAbilities && (
        <article className="width-3/12 border-l p-4">
          <h3 className="text-xl border-b mb-4">ABILITIES</h3>

          <div className="border-b mb-4">
            CORE: {ABILITIES?.['CORE ABILITIES']}
          </div>
          <div className="border-b mb-4">
            FACTION: {ABILITIES?.['FACTION ABILITIES']}
          </div>
          <ul>
            {ABILITIES?.['OTHER ABILITIES'].map((a) => (
              <li key={a}>- {a}</li>
            ))}
          </ul>
        </article>
      )}
    </div>
  )
}

// export default function Home() {
//   const { name, units } = blackTemplars

//   return (
//     <>
//       <h2 className="text-2xl mb-4">{name}</h2>
//       {units.map((unit) => (
//         <Unit unit={unit} key={unit.NAME} />
//       ))}
//     </>
//   )
// }
