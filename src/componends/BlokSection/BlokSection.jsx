import "./BlokSection.css"

export default function BlokSection (props) {

    if (props.name === "1" && props.bull === true) {
        return (
            <section className="blok1">
                <div className="tegBlok">
                    <p className="teg">{props.teg}</p>
                    <p className="teg">{props.count}</p>
                </div>
                <h2 className="blok_h2">{props.title}</h2>
            </section>
        )
    }
    if (props.name === "1" && props.bull === false) {
        return (
            <section className="blok1">
                <div className="tegBlok">
                    <p className="teg">{props.teg}</p>
                </div>
                <h2 className="blok_h2">{props.title}</h2>
            </section>
        )
    }


    if (props.name === "2" && props.bull === true) {
        return (
            <section className="blok2">
                <div className="tegBlok">
                    <p className="teg">{props.teg}</p>
                    <p className="teg">{props.count}</p>
                </div>
                <h2 className="blok_h2">{props.title}</h2>
            </section>
        )
    }
    if (props.name === "2" && props.bull === false) {
        return (
            <section className="blok2">
                <div className="tegBlok">
                    <p className="teg">{props.teg}</p>
                </div>
                <h2 className="blok_h2">{props.title}</h2>
            </section>
        )
    }


    if (props.name === "3" && props.bull === true) {
        return (
            <section className="blok3">
                <div className="tegBlok">
                    <p className="teg">{props.teg}</p>
                    <p className="teg">{props.count}</p>
                </div>
                <h2 className="blok_h2">{props.title}</h2>
            </section>
        )
    }
    if (props.name === "3" && props.bull === false) {
        return (
            <section className="blok3">
                <div className="tegBlok">
                    <p className="teg">{props.teg}</p>
                </div>
                <h2 className="blok_h2">{props.title}</h2>
            </section>
        )
    }

    
    if (props.name === "4" && props.bull === true) {
        return (
            <section className="blok4">
                <div className="tegBlok">
                    <p className="teg">{props.teg}</p>
                    <p className="teg">{props.count}</p>
                </div>
                <h2 className="blok_h2">{props.title}</h2>
            </section>
        )
    }
    if (props.name === "4" && props.bull === false) {
        return (
            <section className="blok4">
                <div className="tegBlok">
                    <p className="teg">{props.teg}</p>
                </div>
                <h2 className="blok_h2">{props.title}</h2>
            </section>
        )
    }

}