// // const blackTemplars: Faction

// //  const rangedWeapons = BT.units.map(unit )

// //  ['RANGED WEAPONS']?.map((w) => Object.entries(w))

// type UnitProps = {
//   unit: Unit
// }
// function Unit({ unit }: UnitProps) {
//   const { NAME, M, T, SV, W, LD, OC, ABILITIES } = unit
//   const showAbilities =
//     ABILITIES != null &&
//     (ABILITIES?.['CORE ABILITIES']?.length > 0 ||
//       ABILITIES?.['FACTION ABILITIES'].length > 0 ||
//       ABILITIES?.['OTHER ABILITIES'].length > 0)

//   return (
//     <div className="border mb-4 flex">
//       <article className={`${showAbilities ? 'w-9/12' : 'w-full'} p-4`}>
//         <h3 className="text-xl mb-4">{NAME}</h3>
//         <ul className="flex justify-between">
//           <li className="border p-2">M: {M}</li>
//           <li className="border p-2">T: {T}</li>
//           <li className="border p-2">SV: {SV}</li>
//           <li className="border p-2">W: {W}</li>
//           <li className="border p-2">LD: {LD}</li>
//           <li className="border p-2">OC: {OC}</li>
//         </ul>

//         <WeaponsTable
//           weaponType={WEAPON_TYPES.RANGED_WEAPONS}
//           weapons={unit['RANGED WEAPONS'] || []}
//         />
//         <WeaponsTable
//           weaponType={WEAPON_TYPES.MELEE_WEAPONS}
//           weapons={unit['MELEE WEAPONS'] || []}
//         />
//       </article>
//       {showAbilities && (
//         <article className="width-3/12 border-l p-4">
//           <h3 className="text-xl border-b mb-4">ABILITIES</h3>

//           <div className="border-b mb-4">
//             CORE: {ABILITIES?.['CORE ABILITIES']}
//           </div>
//           <div className="border-b mb-4">
//             FACTION: {ABILITIES?.['FACTION ABILITIES']}
//           </div>
//           <ul>
//             {ABILITIES?.['OTHER ABILITIES'].map((a) => (
//               <li key={a}>- {a}</li>
//             ))}
//           </ul>
//         </article>
//       )}
//     </div>
//   )
// }

// type WeaponsTableProps = {
//   weapons: Weapon[]
//   weaponType: WEAPON_TYPES
// }

// function WeaponsTable({ weaponType, weapons }: WeaponsTableProps) {
//   return (
//     <table className="mt-4 table-fixed w-full">
//       <thead>
//         <tr className="border-b">
//           <td className="w-1/4">{weaponType}</td>
//           <td className="w">Range</td>
//           <td className="w">A</td>
//           <td className="w">
//             {weaponType === WEAPON_TYPES.MELEE_WEAPONS ? 'WS' : 'BS'}
//           </td>
//           <td className="w">S</td>
//           <td className="w">AP</td>
//           <td className="w">D</td>
//         </tr>
//       </thead>
//       <tbody>
//         {weapons.map(({ WeaponName, Range, A, WeaponSkill, S, AP, D }) => (
//           <tr className="" key={WeaponName}>
//             <td>{WeaponName}</td>
//             <td>{Range}</td>
//             <td>{A}</td>
//             <td>{WeaponSkill}</td>
//             <td>{S}</td>
//             <td>{AP}</td>
//             <td>{D}</td>
//           </tr>
//         ))}
//       </tbody>
//     </table>
//   )
// }

// // export default function Home() {
// //   const { name, units } = blackTemplars

// //   return (
// //     <>
// //       <h2 className="text-2xl mb-4">{name}</h2>
// //       {units.map((unit) => (
// //         <Unit unit={unit} key={unit.NAME} />
// //       ))}
// //     </>
// //   )
// // }
