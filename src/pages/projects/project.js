export default function Project(props) {
    return (


            <article class="project mt-5">
                <h3 className="text-2xl">{props.name}</h3>
                <div className="ml-1    ">
                    <p>
                        {props.desc}
                    </p>
                    <div className="links mt-1">
                        <a className="inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" href={props.demo_link} target="_blank">Live Demo</a>
                        <a className="ml-5 inline-flex items-center justify-center px-4 py-2 text-base font-medium leading-6 text-gray-600 whitespace-no-wrap bg-white border border-gray-200 rounded-md shadow-sm hover:bg-gray-50 focus:outline-none focus:shadow-none" href={props.source_link} target="_blank">View Code</a>
                    </div>
                </div>
            </article>



    )
}
