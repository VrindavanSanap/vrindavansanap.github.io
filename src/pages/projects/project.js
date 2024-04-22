export default function Project(props) {
    return (
        <div >

            <article class="project">
                <h3 className="text-2xl">{ props.name}</h3>
                <div className="ml-5">
                    <p>
                        { props.desc}
                    </p>
                    <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 cursor-pointer" href={props.demo_link} target="_blank">Live Demo</a>
                    <span>  </span>
                    <span>  </span>
                    <a className="underline text-blue-600 hover:text-blue-800 visited:text-purple-600 cursor-pointer" href={ props.source_link} target="_blank">View Code</a>
                </div>
            </article>

        </div>

    )
}
