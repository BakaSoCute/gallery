import BlokSection from "../BlokSection/BlokSection"

export default function Backend () {
    const gallery = [
        {
            name: "1",
            title:"Тбилиси, апрель — 83.000",
            teg:"НА АВТОБУСЕ",
            count:"10 ч.",
            bull: true
        },
        {
            name: "2",
            title:"Стамбул, март — 110.000",
            teg:"НА САМОЛЁТЕ",
            bull: false
        },
        {
            name: "3",
            title:"Дубай, июнь — 220.000",
            teg:"НА САМОЛЁТЕ",
            count:"15 ч.",
            bull: true
        },
        {
            name: "4",
            title:"Пхукет, сентябрь — 135.000",
            teg:"САМОЛЁТ + ПАРОМ",
            count:"11 ч.",
            bull: true
        }
    ]
    return (
        <div>
            {gallery.map(id => (
                    <BlokSection 
                    name={id.name}
                    title={id.title}
                    teg={id.teg}
                    count={id.count}
                    bull={id.bull}
                />
            ))}
        </div>
    )

}


