import { map } from '@/data/en/map'

function Map({ fullpageApi }) {
  return (
    <div class=" flex-col fixed  right-4 gap-4 top-[50%]  translate-y-[-30%]  hero-map" >
      {map.map((e, i) => (
        <div key={i} class={e.containerClass}>
          <input class={e.class} id={e.id} type={e.type} name={e.name} value={e.value} />
          <label className={e.labelClass}>{e.labelText}</label>
        </div>
      ))}
    </div>
  )
}

export default Map